// DOM Elements
const loginForm = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const emailError = document.getElementById('email-error');
const authSection = document.getElementById('auth-section');
const dashboardSection = document.getElementById('dashboard-section');
const navActions = document.getElementById('nav-actions');

// Login Event Listener
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    
    // Validate Indian College Email Domains (.ac.in or .edu.in)
    // Also accepting generic .edu for broader compatibility
    if (email.endsWith('.ac.in') || email.endsWith('.edu.in') || email.endsWith('.edu')) {
        // Hide Error
        emailError.classList.add('hidden');
        
        // Hide Auth, Show Dashboard
        authSection.classList.add('hidden');
        dashboardSection.classList.remove('hidden');
        
        // Update Navbar to show user is logged in
        navActions.innerHTML = `
            <span style="color: #94a3b8; font-size: 0.9rem; margin-right: 15px;">Logged in: ${email}</span>
            <button class="btn-secondary" onclick="location.reload()">Log Out</button>
        `;
    } else {
        // Show Error
        emailError.classList.remove('hidden');
    }
});

// Tab Switching Logic
function switchTab(tabName) {
    // Get Elements
    const tabMarket = document.getElementById('tab-market');
    const tabSkills = document.getElementById('tab-skills');
    const viewMarket = document.getElementById('marketplace-view');
    const viewSkills = document.getElementById('skills-view');

    // Reset Tabs and Views
    tabMarket.classList.remove('active');
    tabSkills.classList.remove('active');
    viewMarket.classList.add('hidden');
    viewSkills.classList.add('hidden');

    // Activate the Selected Tab
    if (tabName === 'marketplace') {
        tabMarket.classList.add('active');
        viewMarket.classList.remove('hidden');
    } else if (tabName === 'skills') {
        tabSkills.classList.add('active');
        viewSkills.classList.remove('hidden');
    }
}