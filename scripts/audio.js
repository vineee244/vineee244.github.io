document.addEventListener('DOMContentLoaded', () => {
  const bgMusic = document.getElementById('bgMusic');
  const toggleAudioButton = document.getElementById('toggleAudio');
  const soundOnIcon = document.querySelector('.icon-sound-on');
  const soundOffIcon = document.querySelector('.icon-sound-off');
  
  let isPlaying = false;
  
  // Function to toggle audio
  function toggleAudio() {
    if (isPlaying) {
      bgMusic.pause();
      soundOnIcon.classList.add('hidden');
      soundOffIcon.classList.remove('hidden');
    } else {
      // Set volume to be soft background music
      bgMusic.volume = 0.3;
      
      // Start playing
      bgMusic.play().then(() => {
        soundOnIcon.classList.remove('hidden');
        soundOffIcon.classList.add('hidden');
      }).catch(error => {
        console.error('Error playing audio:', error);
      });
    }
    
    isPlaying = !isPlaying;
  }
  
  // Add click event to toggle button
  if (toggleAudioButton) {
    toggleAudioButton.addEventListener('click', toggleAudio);
  }
  
  // Play audio automatically when a user interacts with the page
  function playAudioOnInteraction() {
    // Check if not already playing
    if (!isPlaying) {
      toggleAudio();
    }
    
    // Remove event listeners after first interaction
    document.removeEventListener('click', playAudioOnInteraction);
    document.removeEventListener('touchstart', playAudioOnInteraction);
  }
  
  // Listen for user interaction
  document.addEventListener('click', playAudioOnInteraction);
  document.addEventListener('touchstart', playAudioOnInteraction);
});