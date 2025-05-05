// Social Media Sharing Functionality

// DOM Elements - Get all social media links
const socialLinks = document.querySelectorAll('.social-icons a, .footer-social a');

// Portfolio information for sharing
const portfolioInfo = {
    title: "John Watson - Web Developer Portfolio",
    description: "Check out my portfolio showcasing web development, app development, and design projects.",
    url: window.location.href,
    hashtags: "webdeveloper,portfolio,design,freelance"
};

// Initialize social media sharing
function initSocialSharing() {
    socialLinks.forEach(link => {
        link.addEventListener('click', handleSocialShare);
    });
    
    console.log('Social sharing initialized');
}

// Handle social media share clicks
function handleSocialShare(e) {
    e.preventDefault();
    
    // Determine which social platform was clicked by checking icon classes
    const linkElement = e.currentTarget;
    const classes = linkElement.querySelector('i').className;
    
    if (classes.includes('fa-facebook')) {
        shareToFacebook();
    } else if (classes.includes('fa-twitter')) {
        shareToTwitter();
    } else if (classes.includes('fa-linkedin')) {
        shareToLinkedIn();
    } else if (classes.includes('fa-behance')) {
        openBehance();
    } else if (classes.includes('fa-pinterest')) {
        shareToPinterest();
    } else if (classes.includes('fa-google-plus')) {
        shareToGooglePlus();
    } else if (classes.includes('fa-vk')) {
        shareToVK();
    }
}

// Facebook sharing
function shareToFacebook() {
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(portfolioInfo.url)}`;
    openShareWindow(shareUrl, 'Facebook');
}

// Twitter sharing
function shareToTwitter() {
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(portfolioInfo.title)}&url=${encodeURIComponent(portfolioInfo.url)}&hashtags=${portfolioInfo.hashtags}`;
    openShareWindow(shareUrl, 'Twitter');
}

// LinkedIn sharing
function shareToLinkedIn() {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(portfolioInfo.url)}`;
    openShareWindow(shareUrl, 'LinkedIn');
}

// Pinterest sharing
function shareToPinterest() {
    // For Pinterest, we'd ideally have an image to share
    const imageUrl = 'https://via.placeholder.com/800x600?text=Portfolio'; // Replace with actual portfolio image
    const shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(portfolioInfo.url)}&media=${encodeURIComponent(imageUrl)}&description=${encodeURIComponent(portfolioInfo.description)}`;
    openShareWindow(shareUrl, 'Pinterest');
}

// VK sharing (Russian social network)
function shareToVK() {
    const shareUrl = `https://vk.com/share.php?url=${encodeURIComponent(portfolioInfo.url)}&title=${encodeURIComponent(portfolioInfo.title)}&description=${encodeURIComponent(portfolioInfo.description)}`;
    openShareWindow(shareUrl, 'VK');
}

// Google Plus (for legacy support, as Google+ is discontinued)
function shareToGooglePlus() {
    alert('Google Plus has been discontinued. Please share to another platform.');
}

// Open Behance profile
function openBehance() {
    // Replace with your actual Behance profile URL
    window.open('https://www.behance.net/johnwatson', '_blank');
}

// Helper function to open share dialogs
function openShareWindow(url, platform) {
    // Open a popup window for sharing
    const width = 600;
    const height = 400;
    const left = (window.innerWidth / 2) - (width / 2);
    const top = (window.innerHeight / 2) - (height / 2);
    
    window.open(
        url,
        `Share on ${platform}`,
        `width=${width},height=${height},top=${top},left=${left},toolbar=0,location=0,menubar=0,scrollbars=0,status=0`
    );
    
    // Log sharing activity (could be replaced with analytics)
    console.log(`Shared to ${platform}`);
}

// Contact form sharing
function shareContactInfo() {
    // This function could be used to share contact info via email or messaging
    const subject = encodeURIComponent("Inquiry from Portfolio Website");
    const body = encodeURIComponent("Hi John,\n\nI saw your portfolio and would like to discuss a potential project.\n\nBest regards,");
    const mailtoLink = `mailto:info@example.com?subject=${subject}&body=${body}`;
    
    window.location.href = mailtoLink;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initSocialSharing);

// Export functions for potential use in other scripts
window.shareUtils = {
    shareToFacebook,
    shareToTwitter,
    shareToLinkedIn,
    shareToPinterest,
    shareContactInfo
};