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

