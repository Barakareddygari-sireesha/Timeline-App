import EventMarker from "./EventMarker";
import { EventData } from "../data/types";

interface TimelineProps {
  events: EventData[];
  onEventClick: (event: EventData) => void;
}

function Timeline({ events, onEventClick }: TimelineProps) {
  return (
    <section id="timeline">
      {events.map((ev) => (
        <EventMarker
          key={ev.year}
          event={ev}
          onClick={() => onEventClick(ev)} />
      ))}
    </section>
  );
}

export default Timeline;
