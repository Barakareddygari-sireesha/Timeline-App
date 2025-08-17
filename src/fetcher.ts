import { EventData } from "./types.js";

export async function fetchEvents(): Promise<EventData[]> {
  const res = await fetch("data/events.json");
  return res.json();
}
