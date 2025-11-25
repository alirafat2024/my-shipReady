import { useState, useEffect } from "react";
import NavTabs from "./navTab";
const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const saveTab = localStorage.getItem("activeTab");
    if (saveTab) setActiveTab(saveTab);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "5px",
        display: "flex",
        justifyContent: "start",
      }}
    >
    
        {NavTabs.map((navTab) => (
          <s-box key={navTab.label} direction="inline">
            <s-clickable
              borderRadius="base"
              padding="small-300"
              href={navTab.href}
              variant="secondary"
              background={
                activeTab === navTab.label ? "subdued" : "transparent"
              }
              hoverBackground="subdued"
              onClick={() => {
                setActiveTab(navTab.label);
                localStorage.setItem("activeTab", navTab.label);
              }}
            >
              <s-stack direction="inline" gap="base" alignItems="center">
                <s-icon type={navTab.icon} />
                {navTab.label}
              </s-stack>
            </s-clickable>
          </s-box>
        ))}
     
    </div>
  );
};

export default TabNavigation;
