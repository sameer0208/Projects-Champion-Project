const textElement = document.getElementById('typing-text');
const text = textElement.textContent.trim();
let index = 0;

textElement.textContent = ''; // Clear the initial text content

function typeWriter() {
  if (index < text.length) {
    textElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 10); // Adjust the typing speed (in milliseconds) here
  }
}

typeWriter();

var pTag = document.getElementById("typing-text");

pTag.onselectstart = function() {
  return false;
};

pTag.oncontextmenu = function() {
  return false;
};

var videos = document.getElementsByTagName('video');
for (var i = 0; i < videos.length; i++) {
  videos[i].removeAttribute('controls');
  videos[i].addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Prevent right-click menu
  });
}

var video = document.getElementById('myVideo');
    
    // Remove default controls
    video.removeAttribute('controls');
    
    // Create custom controls
    var muteButton = document.createElement('button');
    muteButton.innerHTML = 'Mute/Unmute';
    
    // Set initial state
    video.muted = true;
    muteButton.classList.add('muted');
    
    // Toggle mute on button click
    muteButton.addEventListener('click', function() {
      video.muted = !video.muted;
      if (video.muted) {
        muteButton.classList.add('muted');
      } else {
        muteButton.classList.remove('muted');
      }
    });
  
    