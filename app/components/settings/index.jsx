
import { GeneralSettings } from "./generalSettings";
import { FeaturesSettings } from "./featuresSettings";
import { NotificationsSettings } from "./notificationsSettings";
import { ChangeLogs } from "./changeLogs";
import { useState } from "react";
import { SideTabs } from "./sideTabs";


export default function Settings() {
  const [selected, setSelected] = useState("General");

  return (
    <s-page title="Settings page">
      <s-stack gap="base">
        <s-box>
         
        </s-box>
        <s-box>
          <s-query-container>
            <s-grid
              gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr, 1fr"
              gap="base"
              alignItems="start"
            >
              <s-section>
                <SideTabs setSelectedTab={setSelected} selectedTab={selected} />
                
              </s-section>

              <s-box>
                <GeneralSettings selectedTab={selected} />
                <FeaturesSettings selectedTab={selected} />
                <NotificationsSettings selectedTab={selected} />
                <ChangeLogs selectedTab={selected} />
                 
              </s-box>
             
            </s-grid>
            
          </s-query-container>
        </s-box>
        
      </s-stack>
    </s-page>
  );
}
