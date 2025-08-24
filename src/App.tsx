import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
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
    if (isDark) {
      document.body.classList.add("dark-mode");
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
      document.body.classList.remove("dark-mode");
    }
  }, [isDark]);

  return (
    <>
      <Header/>
       <ThemeToggle isDark={isDark} onToggle={handleToggleTheme} />
      <Timeline events={eventsData} onEventClick={handleEventClick} />
      {isModalOpen && selectedEvent && (
        <EventModal event={selectedEvent} onClose={handleCloseModal} />
      )}
    </>
  );
}

export default App;
