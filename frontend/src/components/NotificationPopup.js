import React from "react";

function NotificationPopup({ text }) {
  return (
    <div className="notification-wrapper">
      <div className="info-button">
        <i className="fas fa-info"></i>
      </div>
      <div className="notification-text">{text}</div>
    </div>
  );
}

export default NotificationPopup;
