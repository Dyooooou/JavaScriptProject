// Main Application JavaScript

// Current language
let currentLanguage = 'en';

// Language Switching Function
function switchLanguage(lang) {
    currentLanguage = lang;
    
    // Update button states
    document.querySelectorAll('.language-switcher button').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (CONFIG.translations[lang] && CONFIG.translations[lang][key]) {
            element.textContent = CONFIG.translations[lang][key];
        }
    });
    
    // Reload products with new language
    loadProducts();
}

// Load Products Function
function loadProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    CONFIG.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card fade-in';
        
        // Check if product has real image, otherwise use placeholder
        const imageStyle = product.image && product.image !== "" ? 
            `background-image: url('${product.image}'); background-size: cover; background-position: center;` :
            `background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));`;
        
        productCard.innerHTML = `
            <div class="product-image" style="${imageStyle}">
                ${!product.image || product.image === "" ? 
                    '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 60%; height: 60%; background: repeating-linear-gradient(45deg, var(--accent-color) 0px, var(--accent-color) 10px, transparent 10px, transparent 20px); opacity: 0.3;"></div>' 
                    : ''}
            </div>
            <div class="product-info">
                <h3>${product.name[currentLanguage]}</h3>
                <p>${product.description[currentLanguage]}</p>
                <div class="product-price">${product.price}</div>
            </div>
        `;
        
        // Add click event for product details (you can extend this)
        productCard.addEventListener('click', () => {
            showProductDetail(product);
        });
        
        productsGrid.appendChild(productCard);
    });
    
    // Re-trigger fade-in animation
    observeElements();
}

// Show Product Detail Function (expandable)
function showProductDetail(product) {
    const message = `Hi! I'm interested in ${product.name[currentLanguage]} (${product.price}). Could you tell me more about it?`;
    const whatsappUrl = `https://wa.me/${CONFIG.company.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

// Scroll Animation Observer
function observeElements() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Form Submission Handler
function handleFormSubmission() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Create WhatsApp message
        const whatsappMessage = `Hello! I'm ${name}. Email: ${email}. Message: ${message}`;
        const whatsappUrl = `https://wa.me/${CONFIG.company.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
        
        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
        
        // Reset form
        form.reset();
        
        // Show success message
        showNotification(
            currentLanguage === 'en' ? 
            'Thank you for your message! Redirecting to WhatsApp...' : 
            'Terima kasih atas pesan Anda! Mengarahkan ke WhatsApp...'
        );
    });
}

// Show Notification Function
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--accent-color);
        color: var(--text-dark);
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        z-index: 10000;
        font-weight: bold;
        transform: translateX(400px);
        transition: all 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Smooth Scrolling for Navigation Links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Header Scroll Effect
function setupHeaderScrollEffect() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(139, 69, 19, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(135deg, var(--primary-color), var(--secondary-color))';
            header.style.backdropFilter = 'none';
        }
    });
}

// Update Contact Information
function updateContactInfo() {
    const contactEmail = document.getElementById('contactEmail');
    const contactPhone = document.getElementById('contactPhone');
    
    if (contactEmail) contactEmail.textContent = CONFIG.company.email;
    if (contactPhone) contactPhone.textContent = CONFIG.company.phone;
}

// Mobile Menu Toggle (for future mobile menu implementation)
function setupMobileMenu() {
    // This function can be expanded to add mobile hamburger menu
    // For now, it's a placeholder for future enhancement
}

// Image Loading with Error Handling
function setupImageLoading() {
    // Update hero background if specified
    if (CONFIG.images.hero) {
        const hero = document.querySelector('.hero');
        if (hero) {
            const img = new Image();
            img.onload = function() {
                hero.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('${CONFIG.images.hero}')`;
            };
            img.src = CONFIG.images.hero;
        }
    }
    
    // Update about image if specified
    if (CONFIG.images.about) {
        const aboutImage = document.querySelector('.about-image');
        if (aboutImage) {
            const img = new Image();
            img.onload = function() {
                aboutImage.style.backgroundImage = `url('${CONFIG.images.about}')`;
                aboutImage.style.backgroundSize = 'cover';
                aboutImage.style.backgroundPosition = 'center';
            };
            img.src = CONFIG.images.about;
        }
    }
}

// Search Functionality (for future enhancement)
function setupSearch() {
    // Placeholder for search functionality
    // Can be implemented to search through products
}

// Cart Functionality (for future e-commerce features)
function setupCart() {
    // Placeholder for shopping cart functionality
    // Can be implemented for full e-commerce experience
}

// Analytics and Tracking (for future implementation)
function setupAnalytics() {
    // Placeholder for Google Analytics or other tracking
    console.log('Heritage Batik Website - Analytics Ready');
}

// Performance Optimization
function optimizePerformance() {
    // Lazy loading for images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// Initialize Website
function init() {
    console.log('🎨 Heritage Batik Website Initializing...');
    
    try {
        // Core functionality
        loadProducts();
        updateContactInfo();
        observeElements();
        handleFormSubmission();
        setupSmoothScrolling();
        setupHeaderScrollEffect();
        setupImageLoading();
        
        // Enhancement features
        setupMobileMenu();
        optimizePerformance();
        setupAnalytics();
        
        console.log('✅ Heritage Batik Website Initialized Successfully!');
        console.log('📊 Configuration loaded:', {
            products: CONFIG.products.length,
            languages: Object.keys(CONFIG.translations).length,
            company: CONFIG.company.name
        });
        
    } catch (error) {
        console.error('❌ Error initializing website:', error);
    }
}

// Start when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Export functions for external use (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        loadProducts,
        showProductDetail,
        showNotification
    };
}