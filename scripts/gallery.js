document.addEventListener('DOMContentLoaded', () => {
  const galleryItems = document.querySelectorAll('.gallery-item');
  
  // Initialize gallery items with random rotations
  function initializeGallery() {
    galleryItems.forEach((item, index) => {
      // Set initial state for animation
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // Add random rotation to photo frames
      const photoFrame = item.querySelector('.photo-frame');
      if (photoFrame) {
        const rotation = index % 2 === 0 ? -2 : 2;
        photoFrame.style.transform = `rotate(${rotation}deg)`;
      }
      
      // Add delay based on index
      const delay = 0.2 + (index * 0.15);
      item.style.transitionDelay = `${delay}s`;
    });
  }
  
  // Animate gallery items when section becomes visible
  function animateGalleryItems() {
    const gallerySection = document.getElementById('gallery');
    
    // Watch for gallery section to become active
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active')) {
          // Animate gallery items with delay
          galleryItems.forEach(item => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 300);
          });
        }
      });
    });
    
    // Start observing gallery section
    if (gallerySection) {
      observer.observe(gallerySection, { attributes: true });
      
      // Initialize first if already active
      if (gallerySection.classList.contains('active')) {
        galleryItems.forEach(item => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 300);
        });
      }
    }
  }
  
  // Add hover effects
  function addHoverEffects() {
    galleryItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const photoFrame = item.querySelector('.photo-frame');
        if (photoFrame) {
          photoFrame.style.transform = 'rotate(0deg) scale(1.02)';
          photoFrame.style.boxShadow = 'var(--shadow-medium)';
        }
      });
      
      item.addEventListener('mouseleave', () => {
        const photoFrame = item.querySelector('.photo-frame');
        if (photoFrame) {
          const rotation = item.querySelector('.gallery-item:nth-child(odd)') ? -2 : 2;
          photoFrame.style.transform = `rotate(${rotation}deg) scale(1)`;
          photoFrame.style.boxShadow = 'var(--shadow-soft)';
        }
      });
    });
  }
  
  // Call initialization functions
  initializeGallery();
  animateGalleryItems();
  addHoverEffects();
});