
import { FeedbackCard } from "./feedbackCard";
import { useState } from "react";

export function NotificationsSettings() {
  const [notifications, setNotifications] = useState([
    {
      title: "New order",
      content: "You have a new order from John Doe",
      actions: (
        <s-button-group>
          <s-button>View order</s-button>
        </s-button-group>
      ),
    },
    {
      title: "Low inventory",
      content: "You have 2 items with low inventory",
     
      actions: (
        <s-button-group>
          <s-button>View products</s-button>
        </s-button-group>
      ),
    },
    {
      title: "New review",
      content: "You have a new review from Jane Doe",
      

      actions: (
        <s-button-group>
          <s-button>View review</s-button>
        </s-button-group>
      ),
    },
  ]);

  const handleDeleteNotification = (indexToDelete) => {
    setNotifications((currentNotifications) =>
      currentNotifications.filter((_, index) => index !== indexToDelete),
    );
  };

  return  (
    <s-stack gap="400">
      <s-heading >
        Notifications
      </s-heading>

      {notifications.length > 0 ? (
        notifications.map((notification, index) => (
          <FeedbackCard
            key={index}
            {...notification}
            onDelete={() => handleDeleteNotification(index)}
          />
        ))
      ) : (
        <s-section>
          <s-stack gap="400" inlineAlign="center">
            <s-heading as="h2" variant="headingMd">
              No notifications
            </s-heading>
            <s-paragraph as="p" variant="bodyMd" tone="subdued">
              You have no notifications at the moment!
            </s-paragraph>
            <s-button variant="primary">Refresh</s-button>
          </s-stack>
        </s-section>
      )}
    </s-stack>
  );
}
