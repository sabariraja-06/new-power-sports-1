/* ==========================================================================
   NEW POWER SPORTS - STANDALONE ADMIN PORTAL JAVASCRIPT
   Features:
   - Synchronized localStorage enquiries store
   - Real-time search & status filtering
   - Live KPI summary stats
   - Inline status updates
   - Full enquiry detail inspector modal
   - CSV export with complete procurement data
   - Refresh & demo data reset
   ========================================================================== */

// Shared storage key with public quote form
const STORAGE_KEY = 'nps_enquiries';

// Initial default demo dataset if localStorage is empty
const DEFAULT_ENQUIRIES = [
    {
        id: "NPS-ENQ-1001",
        date: "2026-10-18",
        institution: "Madras Medical College",
        contactPerson: "Dr. K. Sundaram (Purchase Convener)",
        phone: "+91 94433 11223",
        email: "purchase@mmc.edu.in",
        institutionType: "Medical and Nursing Colleges",
        category: "Medical Lab Coats",
        product: "Standard Student Poly-Cotton Lab Coat",
        quantity: 500,
        sizes: "S, M, L, XL",
        colours: "Classic Lab White",
        embroidery: "Yes - College Crest & Student Name",
        city: "Chennai",
        deliveryDate: "2026-11-15",
        status: "New",
        notes: "MBBS new batch requirements. Need physical fabric sample coat sent for Dean evaluation."
    },
    {
        id: "NPS-ENQ-1002",
        date: "2026-10-16",
        institution: "Regional Research Laboratory",
        contactPerson: "Prof. S. Geetha (Director)",
        phone: "+91 98402 33445",
        email: "labs@researchcentre.res.in",
        institutionType: "Diagnostic and Research Laboratories",
        category: "Laboratory Attendant Uniforms",
        product: "Laboratory Attendant Protective Coat",
        quantity: 150,
        sizes: "M, L, XL",
        colours: "White with Navy Trim",
        embroidery: "Yes - Lab Identifier",
        city: "Coimbatore",
        deliveryDate: "2026-11-01",
        status: "Quoted",
        notes: "Anti-splash finish coats for biochemistry division."
    },
    {
        id: "NPS-ENQ-1003",
        date: "2026-10-14",
        institution: "PSG College of Pharmacy",
        contactPerson: "Prof. S. Meenakshi",
        phone: "+91 94432 10987",
        email: "pharmacy@psg.ac.in",
        institutionType: "Pharmacy and Paramedical Institutions",
        category: "Medical Lab Coats",
        product: "Standard Student Poly-Cotton Lab Coat",
        quantity: 350,
        sizes: "S, M, L",
        colours: "White",
        embroidery: "Yes - College Crest & Department Name",
        city: "Coimbatore",
        deliveryDate: "2026-10-30",
        status: "Confirmed",
        notes: "B.Pharm 2026 batch order. Stitching in progress."
    }
];

// Current State
let enquiries = [];
let currentFilter = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
    loadEnquiriesFromStorage();
    renderStats();
    renderTable();
    initSearch();

    if (window.lucide) {
        lucide.createIcons();
    }
});

function loadEnquiriesFromStorage() {
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            enquiries = JSON.parse(stored);
        } else {
            enquiries = DEFAULT_ENQUIRIES;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
        }
    } catch (e) {
        console.warn('Storage read failed:', e);
        enquiries = DEFAULT_ENQUIRIES;
    }
}

function saveEnquiriesToStorage() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(enquiries));
    } catch (e) {
        console.error('Storage write error:', e);
    }
}

/* ==================== KPI STATS ==================== */
function renderStats() {
    const totalEl = document.getElementById('statTotalCount');
    const actionEl = document.getElementById('statActionCount');
    const confirmedEl = document.getElementById('statConfirmedCount');
    const quotedEl = document.getElementById('statQuotedCount');

    const total = enquiries.length;
    const action = enquiries.filter(e => e.status === 'New' || e.status === 'Contacted').length;
    const confirmed = enquiries.filter(e => e.status === 'Confirmed').length;
    const quoted = enquiries.filter(e => e.status === 'Quoted' || e.status === 'In Discussion').length;

    if (totalEl) totalEl.textContent = total;
    if (actionEl) actionEl.textContent = action;
    if (confirmedEl) confirmedEl.textContent = confirmed;
    if (quotedEl) quotedEl.textContent = quoted;
}

/* ==================== TABLE RENDERING ==================== */
function renderTable() {
    const tbody = document.getElementById('adminEnquiriesBody');
    if (!tbody) return;

    let filtered = enquiries;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(e => e.status === currentFilter);
    }

    if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        filtered = filtered.filter(e => 
            (e.id && e.id.toLowerCase().includes(q)) ||
            (e.institution && e.institution.toLowerCase().includes(q)) ||
            (e.contactPerson && e.contactPerson.toLowerCase().includes(q)) ||
            (e.city && e.city.toLowerCase().includes(q)) ||
            (e.product && e.product.toLowerCase().includes(q))
        );
    }

    if (filtered.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" class="table-empty-row">
                    <i data-lucide="inbox"></i>
                    <div><strong>No procurement enquiries found</strong></div>
                    <div class="small">Try clearing search terms or status filters.</div>
                </td>
            </tr>
        `;
        if (window.lucide) lucide.createIcons();
        return;
    }

    tbody.innerHTML = filtered.map(e => `
        <tr>
            <td>
                <strong>${escapeHtml(e.id)}</strong>
                <div class="small text-muted">${escapeHtml(e.date || '')}</div>
            </td>
            <td>
                <strong style="color:var(--admin-navy);">${escapeHtml(e.institution || 'Unknown Institution')}</strong>
                <div class="small text-muted">${escapeHtml(e.institutionType || '')} • ${escapeHtml(e.city || 'Tamil Nadu')}</div>
            </td>
            <td>
                <div>${escapeHtml(e.contactPerson || '')}</div>
                <div class="small"><a href="tel:${escapeHtml(e.phone || '')}" style="color:var(--admin-blue);">${escapeHtml(e.phone || '')}</a></div>
            </td>
            <td>
                <strong style="color:var(--admin-navy);">${e.quantity || 0} Units</strong>
                <div class="small text-muted">${escapeHtml(e.product || 'Standard Uniform')}</div>
            </td>
            <td>
                <span class="status-badge ${getStatusBadgeClass(e.status)}">
                    ${escapeHtml(e.status || 'New')}
                </span>
            </td>
            <td>
                <select class="admin-status-select" onchange="handleStatusChange('${e.id}', this.value)" aria-label="Update status for ${e.id}">
                    <option value="New" ${e.status === 'New' ? 'selected' : ''}>New</option>
                    <option value="Contacted" ${e.status === 'Contacted' ? 'selected' : ''}>Contacted</option>
                    <option value="Quoted" ${e.status === 'Quoted' ? 'selected' : ''}>Quoted</option>
                    <option value="In Discussion" ${e.status === 'In Discussion' ? 'selected' : ''}>In Discussion</option>
                    <option value="Sample Sent" ${e.status === 'Sample Sent' ? 'selected' : ''}>Sample Sent</option>
                    <option value="Confirmed" ${e.status === 'Confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="Closed" ${e.status === 'Closed' ? 'selected' : ''}>Closed</option>
                </select>
            </td>
            <td>
                <div style="display:flex; gap:6px;">
                    <button type="button" class="action-icon-btn" onclick="viewEnquiryDetails('${e.id}')" title="View Full Details">
                        <i data-lucide="eye"></i>
                    </button>
                    <button type="button" class="action-icon-btn btn-delete" onclick="deleteEnquiry('${e.id}')" title="Archive / Delete">
                        <i data-lucide="trash-2"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');

    if (window.lucide) lucide.createIcons();
}

function getStatusBadgeClass(status) {
    switch (status) {
        case 'New': return 'status-new';
        case 'Contacted': return 'status-contacted';
        case 'Quoted': return 'status-quoted';
        case 'In Discussion': return 'status-discussion';
        case 'Sample Sent': return 'status-sample';
        case 'Confirmed': return 'status-confirmed';
        case 'Closed': return 'status-closed';
        default: return 'status-new';
    }
}

/* ==================== STATUS UPDATES ==================== */
function handleStatusChange(enquiryId, newStatus) {
    const item = enquiries.find(e => e.id === enquiryId);
    if (!item) return;

    item.status = newStatus;
    saveEnquiriesToStorage();
    renderStats();
    renderTable();
    showAdminAlert(`Enquiry ${enquiryId} status updated to "${newStatus}"`, 'success');
}

/* ==================== FILTERS & SEARCH ==================== */
function filterStatus(status, btnElement) {
    currentFilter = status;
    document.querySelectorAll('.admin-filter-pill').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderTable();
}

function initSearch() {
    const input = document.getElementById('adminSearchInput');
    if (!input) return;
    input.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderTable();
    });
}

function refreshAdminData() {
    loadEnquiriesFromStorage();
    renderStats();
    renderTable();
    showAdminAlert('Enquiries refreshed from local store.', 'info');
}

/* ==================== VIEW DETAIL MODAL ==================== */
function viewEnquiryDetails(enquiryId) {
    const item = enquiries.find(e => e.id === enquiryId);
    if (!item) return;

    const modal = document.getElementById('enquiryDetailModal');
    if (!modal) return;

    document.getElementById('modalRefId').textContent = item.id;
    document.getElementById('modalDetailBody').innerHTML = `
        <div class="detail-section-title">Institutional Client Information</div>
        <div class="detail-grid">
            <div class="detail-item"><strong>Institution / College:</strong> ${escapeHtml(item.institution || '-')}</div>
            <div class="detail-item"><strong>Sector Type:</strong> ${escapeHtml(item.institutionType || '-')}</div>
            <div class="detail-item"><strong>Contact Person:</strong> ${escapeHtml(item.contactPerson || '-')}</div>
            <div class="detail-item"><strong>Phone Number:</strong> <a href="tel:${escapeHtml(item.phone || '')}">${escapeHtml(item.phone || '-')}</a></div>
            <div class="detail-item"><strong>Official Email:</strong> <a href="mailto:${escapeHtml(item.email || '')}">${escapeHtml(item.email || '-')}</a></div>
            <div class="detail-item"><strong>Delivery City / Campus:</strong> ${escapeHtml(item.city || '-')}</div>
        </div>

        <div class="detail-section-title">Uniform Order Requirements</div>
        <div class="detail-grid">
            <div class="detail-item"><strong>Selected Uniform:</strong> ${escapeHtml(item.product || '-')}</div>
            <div class="detail-item"><strong>Category:</strong> ${escapeHtml(item.category || '-')}</div>
            <div class="detail-item"><strong>Estimated Quantity:</strong> <span style="font-weight:700; color:var(--admin-navy);">${item.quantity || 0} Units</span></div>
            <div class="detail-item"><strong>Required Sizes:</strong> ${escapeHtml(item.sizes || '-')}</div>
            <div class="detail-item"><strong>Preferred Colours:</strong> ${escapeHtml(item.colours || '-')}</div>
            <div class="detail-item"><strong>Target Delivery Date:</strong> ${escapeHtml(item.deliveryDate || 'Flexible')}</div>
        </div>

        <div class="detail-section-title">Embroidery & Customization</div>
        <p class="small mb-sm"><strong>Embroidery Option:</strong> ${escapeHtml(item.embroidery || 'Standard')}</p>
        <p class="small mb-md"><strong>Additional Notes / Sizing Specs:</strong><br>${escapeHtml(item.notes || 'No additional requirements noted.')}</p>

        <div style="background:#F8FAFC; border:1px solid var(--admin-border); padding:12px; border-radius:8px; display:flex; justify-content:space-between; align-items:center;">
            <div><strong>Current Status:</strong> <span class="status-badge ${getStatusBadgeClass(item.status)}">${escapeHtml(item.status)}</span></div>
            <a href="mailto:${escapeHtml(item.email || '')}?subject=Quotation%20for%20${encodeURIComponent(item.institution || '')}%20[Ref:%20${item.id}]" class="btn-admin btn-admin-primary">
                <i data-lucide="mail"></i> Email Customer Directly
            </a>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lucide) lucide.createIcons();
}

function closeEnquiryModal() {
    const modal = document.getElementById('enquiryDetailModal');
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

/* ==================== DELETE / ARCHIVE ==================== */
function deleteEnquiry(enquiryId) {
    if (!confirm(`Are you sure you want to archive / delete enquiry ${enquiryId}?`)) return;

    enquiries = enquiries.filter(e => e.id !== enquiryId);
    saveEnquiriesToStorage();
    renderStats();
    renderTable();
    showAdminAlert(`Enquiry ${enquiryId} deleted from local store.`, 'info');
}

/* ==================== CSV EXPORT ==================== */
function exportAdminCSV() {
    if (!enquiries.length) {
        showAdminAlert('No enquiries to export.', 'warning');
        return;
    }

    const headers = [
        'Reference ID', 'Date', 'Institution', 'Sector Type', 'Contact Person',
        'Phone', 'Email', 'Product Category', 'Uniform Model', 'Quantity',
        'Sizes', 'Colours', 'Embroidery', 'City', 'Expected Delivery', 'Status', 'Notes'
    ];

    const rows = enquiries.map(e => [
        `"${e.id}"`,
        `"${e.date || ''}"`,
        `"${(e.institution || '').replace(/"/g, '""')}"`,
        `"${(e.institutionType || '').replace(/"/g, '""')}"`,
        `"${(e.contactPerson || '').replace(/"/g, '""')}"`,
        `"${e.phone || ''}"`,
        `"${e.email || ''}"`,
        `"${(e.category || '').replace(/"/g, '""')}"`,
        `"${(e.product || '').replace(/"/g, '""')}"`,
        `"${e.quantity || ''}"`,
        `"${(e.sizes || '').replace(/"/g, '""')}"`,
        `"${(e.colours || '').replace(/"/g, '""')}"`,
        `"${(e.embroidery || '').replace(/"/g, '""')}"`,
        `"${(e.city || '').replace(/"/g, '""')}"`,
        `"${(e.deliveryDate || '').replace(/"/g, '""')}"`,
        `"${e.status || ''}"`,
        `"${(e.notes || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NewPowerSports_Procurement_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showAdminAlert('CSV file downloaded successfully.', 'success');
}

/* ==================== LOGOUT SIMULATION ==================== */
function handleAdminLogout() {
    if (confirm('Sign out of the procurement administration dashboard?')) {
        window.location.href = 'index.html';
    }
}

/* ==================== UTILITIES ==================== */
function showAdminAlert(message, type = 'info') {
    let container = document.getElementById('adminToastContainer');
    if (!container) {
        container = document.createElement('div');
        container.id = 'adminToastContainer';
        container.style.cssText = 'position:fixed; bottom:20px; right:20px; z-index:9999; display:flex; flex-direction:column; gap:8px;';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.style.cssText = `
        background-color: var(--admin-deep-navy);
        color: var(--admin-white);
        padding: 12px 18px;
        border-radius: 8px;
        box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        font-size: 0.86rem;
        border-left: 4px solid ${type === 'success' ? '#16A765' : (type === 'warning' ? '#D97706' : '#0756D9')};
        display: flex;
        align-items: center;
        gap: 10px;
    `;
    toast.textContent = message;

    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
}

function escapeHtml(str) {
    if (!str) return '';
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}
