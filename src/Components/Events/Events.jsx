import React from "react";
import "./Events.css";

function Events() {
  return (
    <div className="event-container">
      <h2>Event Details</h2>
      <div className="event-card">
        <p><strong>Last date for paper submission:</strong> 30th May 2025</p>
        <p><strong>Acceptance notification:</strong> 05th June 2025</p>
        <p><strong>Last date for camera-ready copy submission:</strong> 15th May 2025</p>
      </div>
    </div>
  );
}

export default Events;
