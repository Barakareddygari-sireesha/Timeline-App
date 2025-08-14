document.addEventListener("DOMContentLoaded", function () {

  const themeToggle = document.getElementById("theme-toggle");
  const themeLink = document.getElementById("theme-link");
  const timeline = document.getElementById("timeline");
  const modal = document.getElementById("modal");
  const modalContent = document.querySelector(".modal-content");

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      themeLink.setAttribute("href", "css/dark.css");
    } else {
      themeLink.setAttribute("href", "css/light.css");
    }
  });

  // Load timeline events from JSON
  fetch("data/events.json")
    .then(res => res.json())
    .then(data => {
      data.forEach(event => {
        
        let eventDiv = document.createElement("div");
        eventDiv.classList.add("event");
        eventDiv.innerHTML = `<h2 class="year" id="${event.year}" >${event.year}</h2>`;
        console.log( eventDiv.innerHTML )
        eventDiv.addEventListener("click", function () {
          openModal(event);
        });

        timeline.appendChild(eventDiv);
      });
    })
    .catch(err => console.error("Error loading events:", err));

  function openModal(event) {
    modal.style.display = "flex";
    modalContent.innerHTML = `
      <span id="close-modal">&times;</span>
      <h2>${event.year} - ${event.title}</h2>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}">
        <figcaption>${event.description}</figcaption>
      </figure>
    `;

    document.getElementById("close-modal").addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

});
