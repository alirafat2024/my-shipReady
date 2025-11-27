import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavTabs from "./navTab";
const TabNavigation = () => {
  const location=useLocation();
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    const saveTab = localStorage.getItem("activeTab");
    if (saveTab) setActiveTab(saveTab);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#fff",
         paddingBlock:"5px",
        display: "inline-block",
        justifyContent: "start",
        marginBottom:"20px",
       width:"100%"
        
      }}
    >
     <s-page>
       <div style={{
        display:"inline-block",
       
       }}>
         <s-stack  direction="inline" gap="base">
              {NavTabs.map((navTab) => (
        <s-box key={navTab.label} direction="inline">
          <s-clickable
            borderRadius="base"
            padding="small-300"
            href={navTab.href}
            background={location.pathname === navTab.href ? "strong" : "transprent"}
            onClick={() => {
              setActiveTab(navTab.label);
              localStorage.setItem("activeTab", navTab.label);
            }}
          >
            <s-stack direction="inline" gap="small-300" alignItems="center">
              <s-icon type={navTab.icon} />
              {navTab.label}
            </s-stack>
          </s-clickable>
        </s-box>
      ))}
         </s-stack>
      
      </div>
     </s-page>
      
    </div>
    
  );
};

export default TabNavigation;
