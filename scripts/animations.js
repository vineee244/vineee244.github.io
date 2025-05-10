document.addEventListener('DOMContentLoaded', () => {
  // Create heart animations
  function createHeartAnimation() {
    const heartsContainer = document.querySelector('.hearts-container');
    
    // Create heart at random position
    function createHeart() {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      
      // Random position on x-axis
      const xPos = Math.random() * window.innerWidth;
      heart.style.left = `${xPos}px`;
      
      // Random size
      const size = 15 + Math.random() * 20;
      heart.style.width = `${size}px`;
      heart.style.height = `${size}px`;
      
      // Set random heart color
      const colors = ['#ff9fb6', '#FFC8DD', '#ff7bac'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      heart.style.backgroundColor = randomColor;
      heart.style.setProperty('--color-pink', randomColor);
      
      // Random speed/duration
      const duration = 6 + Math.random() * 8;
      heart.style.setProperty('--duration', `${duration}s`);
      
      // Random rotation
      const rotation = -45 + (Math.random() * 10 - 5);
      heart.style.setProperty('--rotation', `${rotation}deg`);
      
      // Append to container
      heartsContainer.appendChild(heart);
      
      // Remove heart after animation completes
      setTimeout(() => {
        heart.remove();
      }, duration * 1000);
    }
    
    // Create hearts at intervals
    setInterval(createHeart, 800);
    
    // Create initial hearts
    for (let i = 0; i < 5; i++) {
      setTimeout(createHeart, i * 300);
    }
  }
  
  // Create fade-in animations for section content
  function createFadeInAnimations() {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
      // Add observer for when section enters viewport
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const content = section.querySelector('.content');
            if (content) {
              content.classList.add('fade-in');
            }
            // Stop observing after animation
            observer.unobserve(section);
          }
        });
      }, { threshold: 0.1 });
      
      observer.observe(section);
    });
  }
  
  // Call animation functions
  createHeartAnimation();
  createFadeInAnimations();
  
  // Special animation for love button
  const loveButton = document.getElementById('love-button');
  if (loveButton) {
    // Start gentle pulsing after a delay
    setTimeout(() => {
      loveButton.classList.add('pulsing');
    }, 2000);
  }
});