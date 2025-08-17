import { EventData } from "./types.js";
import { openModal } from "./modal.js";

export function renderTimeline(events: EventData[]): void {
  const timeline = document.getElementById("timeline")!;
  timeline.innerHTML = "";

  events.forEach(event => {
    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `<h2 class="year" id="${event.year}" >${event.year}</h2>`;
    div.onclick = () => openModal(event);
    timeline.appendChild(div);
  });
}
