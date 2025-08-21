import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import EventModal from "./components/EventModal";
import eventsData from "./data/events.json";

function App() {
  const [selectedEvent, setSelectedEvent] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleEventClick = (event: any) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

 const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const themeLink = document.getElementById("theme-link") as HTMLLinkElement;
    if (themeLink) {
      themeLink.setAttribute("href", isDark ? "css/dark.css" : "css/light.css");
    }
  }, [isDark]);

  

  return (
    <>
      <Header isDark={isDark} onToggle={handleToggleTheme} />
      <Timeline events={eventsData} onEventClick={handleEventClick} />
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
