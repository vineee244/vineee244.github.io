document.addEventListener('DOMContentLoaded', () => {
  // Initialize the first section
  document.getElementById('intro').classList.add('active');
  
  // Next button functionality
  const nextButtons = document.querySelectorAll('.btn-next');
  nextButtons.forEach(button => {
    button.addEventListener('click', () => {
      const currentSection = button.closest('.section');
      const nextSectionId = button.getAttribute('data-next');
      const nextSection = document.getElementById(nextSectionId);
      
      // Hide current section
      currentSection.classList.add('hidden');
      currentSection.classList.remove('active');
      
      // Show next section
      nextSection.classList.remove('hidden');
      nextSection.classList.add('active');
      
      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  
  // Love button functionality
  const loveButton = document.getElementById('love-button');
  const surpriseMessage = document.getElementById('surprise-message');
  
  if (loveButton) {
    loveButton.addEventListener('click', () => {
      // Add pulsing animation to button
      loveButton.classList.add('pulsing');
      
      // Show surprise message
      surpriseMessage.classList.remove('hidden');
      setTimeout(() => {
        surpriseMessage.classList.add('visible');
      }, 100);
      
      // Create bloom effect
      createBloomEffect();
    });
  }
  
  // Create bloom effect
  function createBloomEffect() {
    const bloomContainer = document.createElement('div');
    bloomContainer.classList.add('bloom-animation');
    document.body.appendChild(bloomContainer);
    
    const flowerTypes = [
      createFlowerEmoji('🌸'),
      createFlowerEmoji('🌹'),
      createFlowerEmoji('🌺'),
      createFlowerEmoji('💮'),
      createFlowerEmoji('🌷')
    ];
    
    // Create multiple flowers in circle pattern
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const distance = 150;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      
      const bloom = document.createElement('div');
      bloom.classList.add('bloom');
      bloom.style.left = `calc(50% + ${x}px)`;
      bloom.style.top = `calc(50% + ${y}px)`;
      bloom.style.setProperty('--duration', `${0.8 + Math.random() * 0.6}s`);
      bloom.style.setProperty('--rotation', `${-15 + Math.random() * 30}deg`);
      bloom.appendChild(flowerTypes[Math.floor(Math.random() * flowerTypes.length)].cloneNode(true));
      
      bloomContainer.appendChild(bloom);
    }
    
    // Remove bloom animation after it completes
    setTimeout(() => {
      bloomContainer.remove();
    }, 3000);
  }
  
  function createFlowerEmoji(emoji) {
    const flowerElement = document.createElement('span');
    flowerElement.textContent = emoji;
    flowerElement.style.fontSize = '40px';
    return flowerElement;
  }
});