import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const events = await fetchEvents();
  renderTimeline(events);
});

const themeToggle = document.getElementById("theme-toggle") as HTMLInputElement;
const themeLink = document.getElementById("theme-link") as HTMLLinkElement;

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    themeLink.setAttribute("href", "css/dark.css");
  } else {
    themeLink.setAttribute("href", "css/light.css");
  }
});