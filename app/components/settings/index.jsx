
import { GeneralSettings } from "./generalSettings";
import { FeaturesSettings } from "./featuresSettings";
import { NotificationsSettings } from "./notificationsSettings";
import { ChangeLogs } from "./changeLogs";
import { useState } from "react";
import { SideTabs } from "./sideTabs";
import { useLoaderData } from "react-router";


export default function Settings() {
  const [selected, setSelected] = useState("General");
  const features = useLoaderData()

  return (
    <s-page title="Settings page">
      <s-stack gap="base">
       
        <s-box>
          <s-query-container>
            <s-grid
              gridTemplateColumns="@container (inline-size > 500px) 1fr 1fr 1fr, 1fr"
              gap="base"
              alignItems="start"
            >
             <s-grid-item gridColumn="span 1">
               <s-section>
                <SideTabs setSelectedTab={setSelected} selectedTab={selected} />
                
              </s-section>
             </s-grid-item>

              <s-grid-item gridColumn="span 2">
                 <s-box>
                <GeneralSettings selectedTab={selected} />
                <FeaturesSettings selectedTab={selected} features={features}/>
                <NotificationsSettings selectedTab={selected} />
                <ChangeLogs selectedTab={selected} />
                 
              </s-box>
              </s-grid-item>
             
            </s-grid>
            
          </s-query-container>
        </s-box>
        
      </s-stack>
    </s-page>
  );
}
