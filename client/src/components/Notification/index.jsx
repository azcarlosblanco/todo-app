import React, { createRef, useEffect, useRef } from "react";
import NotificationSystem from "react-notification-system";
import { useSelector } from "react-redux";

const NotificationContainer = () => {
  const notificationSystem = useRef();
  const { message, level, id } = useSelector(state => state.notificationReducer);

  useEffect(() => {
    const notification = notificationSystem.current;
    notification.addNotification({
      message,
      level,
      key: id,
    });
  },[id]);

  return (
    <div>
      <NotificationSystem ref={notificationSystem} />
    </div>
  );
};

export default NotificationContainer;
