import { EventData } from "./types.js";

export function openModal(event: EventData): void {
  const modal = document.getElementById("modal")!;
  const modalContent = document.querySelector(".modal-content")!;

  modalContent.innerHTML = `
    <span id="close-modal">&times;</span>
    <h2>${event.year} - ${event.title}</h2>
    <figure>
        <img src="${event.imageURL}" alt="${event.title}">
        <figcaption>${event.description}</figcaption>
      </figure>
  `;

  modal.style.display = "flex";

  (document.getElementById("close-modal") as HTMLElement).onclick = () => {
    modal.style.display = "none";
  };

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}
