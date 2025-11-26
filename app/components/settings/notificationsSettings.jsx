import { useState } from "react";
import { Footer } from "../shared/footer";
export function NotificationsSettings({ selectedTab }) {
  const [notifications, setNotifications] = useState([
    {
      title: "New order",
      content: "You have a new order from John Doe",
      icon: "order",
      actions: <s-button>View order</s-button>,
    },
    {
      title: "Low inventory",
      content: "You have 2 items with low inventory",
      icon: "product",
      actions: <s-button>View products</s-button>,
    },
    {
      title: "New review",
      content: "You have a new review from Jane Doe",
      icon: "reward",

      actions: <s-button>View review</s-button>,
    },
  ]);

  const handleDelete = (index) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((_, i) => i !== index),
    );
  };
  return selectedTab !== "Notification" ? null : (
    <s-page>
      <s-stack gap="base">
        <s-heading>Notifications</s-heading>
        {notifications.map((notification, index) => (
          <s-section key={index}>
            <s-stack gap="base">
              <s-stack direction="inline" justifyContent="space-between">
                <s-stack direction="inline" gap="small-300">
                  <s-icon type={notification.icon} />
                  <s-heading>{notification.title}</s-heading>
                </s-stack>
                <s-box>
                  <s-icon type="delete" onClick={() => handleDelete(index)} />
                </s-box>
              </s-stack>
              <s-paragraph>{notification.content}</s-paragraph>
              {notification.actions}
            </s-stack>
          </s-section>
        ))}

        <Footer />
      </s-stack>
    </s-page>
  );
}
