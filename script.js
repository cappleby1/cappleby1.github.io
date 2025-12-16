// Function to upate time
function updateDateTime() {
  const now = new Date();

  const time = now.toLocaleTimeString();
  const date = now.toLocaleDateString();   

  const datetimeDiv = document.getElementById('datetime');
  if (datetimeDiv) {
    datetimeDiv.innerHTML = `
      <span class="time">${time}</span><br>
      <span class="date">${date}</span>
    `;
  }
}

// Actually updates time continually & includes menu stuff
document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);

  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
  } else {
    console.warn("Menu toggle or menu not found in DOM.");
  }
});

// Used to set confetti default
let isFalling = false;
let interval;

// Random colour function for confetti
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Creates the random circle sizes for confetti
function createCircle() {
    const circle = document.createElement('div');
    circle.classList.add('circle');


    const size = Math.random() * 3 + 3; 
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.backgroundColor = getRandomColor();
    circle.style.left = `${Math.random() * 100}%`; 

    document.querySelector('.falling-circles').appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000); 
}


// Used to make the confetti start falling
function startFallingCircles() {
    interval = setInterval(createCircle, 200); 
    isFalling = true;
}

// Used to stop confetti falling
function stopFallingCircles() {
    clearInterval(interval); 
    isFalling = false;
}

// Used for the toggle confetti button
document.getElementById('toggle-button').addEventListener('click', function() {
    if (isFalling) {
        stopFallingCircles();
    } else {
        startFallingCircles();
    }
});


