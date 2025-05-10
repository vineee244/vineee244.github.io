document.addEventListener('DOMContentLoaded', () => {
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  // Initialize timeline items with staggered animations
  function initializeTimeline() {
    timelineItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // Add delay based on index
      const delay = 0.2 + (index * 0.2);
      item.style.transitionDelay = `${delay}s`;
    });
  }
  
  // Animate timeline items when section becomes visible
  function animateTimelineItems() {
    const timelineSection = document.getElementById('timeline');
    
    // Watch for timeline section to become active
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.target.classList.contains('active')) {
          // Animate timeline items with delay
          timelineItems.forEach(item => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 300);
          });
        }
      });
    });
    
    // Start observing timeline section
    if (timelineSection) {
      observer.observe(timelineSection, { attributes: true });
      // Initialize first if already active
      if (timelineSection.classList.contains('active')) {
        timelineItems.forEach(item => {
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 300);
        });
      }
    }
  }
  
  // Call initialization functions
  initializeTimeline();
  animateTimelineItems();
});