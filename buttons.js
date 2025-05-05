// Add this at the beginning of your file, replace existing DOM Elements section
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const hireMeButtons = document.querySelectorAll('#hire-me-btn, #hero-hire-btn, #about-hire-btn');
    const portfolioBtn = document.querySelector('#portfolio-btn');
    const cvDownloadBtn = document.querySelector('#cv-download-btn');

    // Add event listeners
    hireMeButtons.forEach(button => {
        button.addEventListener('click', () => {
            openHireMeModal();
        });
    });

    if (portfolioBtn) {
        portfolioBtn.addEventListener('click', () => {
            scrollToSection('portfolio');
        });
    }

    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', () => {
            downloadCV();
        });
    }
});

// Buttons Functionality

// DOM Elements
const hireMeButtons = document.querySelectorAll('#hire-me-btn, #mobile-hire-btn, #hero-hire-btn, #about-hire-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const cvDownloadBtn = document.getElementById('cv-download-btn');
const nextBtn = document.getElementById('next-btn');
const backBtn = document.getElementById('back-btn');
const downloadBtn = document.getElementById('download-btn');
const buyBtn = document.getElementById('buy-btn');
const moreServicesLink = document.getElementById('more-services-link');
const contactForm = document.getElementById('contact-form');
const submitFormBtn = document.getElementById('submit-form');

// Create modal elements
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="modal-close">&times;</span>
        <h3 class="modal-title">Contact Me</h3>
        <div class="modal-body">
            <p>Thank you for your interest in working with me. Please fill out the contact form below or email me directly at <a href="mailto:info@example.com">info@example.com</a>.</p>
        </div>
        <div class="modal-footer">
            <button id="modal-close-btn" class="btn btn-outline">Close</button>
            <button id="modal-contact-btn" class="btn btn-primary">Go to Contact</button>
        </div>
    </div>
`;
document.body.appendChild(modal);

// Modal elements
const modalCloseBtn = document.querySelector('.modal-close');
const modalCloseButton = document.getElementById('modal-close-btn');
const modalContactBtn = document.getElementById('modal-contact-btn');

// Initialize button functionality
function initButtons() {
    // Hire Me buttons
    hireMeButtons.forEach(button => {
        button.addEventListener('click', openHireMeModal);
    });

    // Portfolio button
    portfolioBtn.addEventListener('click', () => {
        scrollToSection('portfolio');
    });

    // CV Download button
    cvDownloadBtn.addEventListener('click', downloadCV);

    // Side navigation buttons
    nextBtn.addEventListener('click', navigateToNextSection);
    backBtn.addEventListener('click', navigateToPreviousSection);
    downloadBtn.addEventListener('click', downloadCV);
    buyBtn.addEventListener('click', openBuyModal);

    // More Services link
    moreServicesLink.addEventListener('click', (e) => {
        e.preventDefault();
        showAllServices();
    });

    // Modal close buttons
    modalCloseBtn.addEventListener('click', closeModal);
    modalCloseButton.addEventListener('click', closeModal);
    modalContactBtn.addEventListener('click', () => {
        closeModal();
        scrollToSection('contact');
    });

    // Contact form submission
    contactForm.addEventListener('submit', handleFormSubmit);

    console.log('Button functionality initialized');
}

// Open Hire Me modal
function openHireMeModal() {
    modal.querySelector('.modal-title').textContent = 'Hire Me';
    modal.querySelector('.modal-body').innerHTML = `
        <p>Thank you for your interest in working with me. Please fill out the contact form below or email me directly at <a href="mailto:info@example.com">info@example.com</a>.</p>
    `;
    modal.style.display = 'flex';
}

// Open Buy modal
function openBuyModal() {
    modal.querySelector('.modal-title').textContent = 'Purchase Services';
    modal.querySelector('.modal-body').innerHTML = `
        <p>Thank you for your interest in my services. Please select a service package below:</p>
        <div style="margin-top: 15px;">
            <div style="margin-bottom: 10px;">
                <strong>Basic Package</strong> - $499
                <p>Includes website design and development with 5 pages.</p>
            </div>
            <div style="margin-bottom: 10px;">
                <strong>Standard Package</strong> - $999
                <p>Includes website design and development with 10 pages, SEO optimization, and 1 month of support.</p>
            </div>
            <div>
                <strong>Premium Package</strong> - $1,999
                <p>Includes website design and development with unlimited pages, SEO optimization, 3 months of support, and content creation.</p>
            </div>
        </div>
    `;
    modal.style.display = 'flex';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
}

// Update the downloadCV function to use a more realistic example
function downloadCV() {
    // In a real application, this should point to an actual CV file
    const cvUrl = 'path-to-your-cv.pdf';
    
    // Create a temporary link
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'John-Watson-CV.pdf';
    
    // Show notification
    showNotification('Initiating CV download...');
    
    // Simulate download (in real app, remove this and use actual file)
    setTimeout(() => {
        showNotification('CV downloaded successfully!');
    }, 1000);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'var(--primary-color)';
    notification.style.color = 'white';
    notification.style.padding = '10px 20px';
    notification.style.borderRadius = 'var(--border-radius)';
    notification.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
    notification.style.zIndex = '1000';
    notification.style.opacity = '0';
    notification.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(notification);
    
    // Fade in
    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Navigate to next section
function navigateToNextSection() {
    const sections = ['hero-section', 'about', 'services', 'skills', 'portfolio', 'contact'];
    navigateToSection(sections, 1);
}

// Navigate to previous section
function navigateToPreviousSection() {
    const sections = ['hero-section', 'about', 'services', 'skills', 'portfolio', 'contact'];
    navigateToSection(sections, -1);
}

// Navigate to section helper
function navigateToSection(sections, direction) {
    // Get current section
    let currentSectionIndex = 0;
    const scrollPosition = window.scrollY + 100;
    
    for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]) || document.querySelector(`.${sections[i]}`);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentSectionIndex = i;
                break;
            }
        }
    }
    
    // Calculate next section
    const nextIndex = (currentSectionIndex + direction + sections.length) % sections.length;
    const nextSectionId = sections[nextIndex];
    
    // Scroll to next section
    scrollToSection(nextSectionId);
}

// Add this utility function if not already present
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Show all services
function showAllServices() {
    // In a real scenario, this would load more services or redirect to a services page
    // For this demo, we'll show a notification
    showNotification('More services coming soon!');
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // In a real scenario, you would send this data to a server
    // For this demo, we'll show a success message
    console.log('Form submitted:', { name, email, subject, message });
    
    // Show success message
    showNotification('Message sent successfully! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initButtons);

// Close modal when clicking outside of it
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Export functions for potential use in other scripts
window.buttonUtils = {
    openHireMeModal,
    downloadCV,
    scrollToSection
};