# Timeline App

- Rebuilt the UI as a React application.
- Bootstrapped with Vite (React + TypeScript template).
- Components created:
  - <Header> (logo + theme switch).
  - <Timeline> maps over event data and renders <EventMarker>.
  - <EventMarker> for each year/title dot.
  - <EventModal> for detailed view (can use React Portal).
  - Optional <FilterPanel> for filters/bookmarks.
- Used React hooks (useState, useEffect) for state and modal handling.
- Styling maintained with CSS (can move to CSS Modules / styled-components).
