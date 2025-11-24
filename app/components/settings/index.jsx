
import { GeneralSettings } from "./generalSettings";
import { FeaturesSettings } from "./featuresSettings";
import { NotificationsSettings } from "./notificationsSettings";
import { ChangeLogs } from "./changeLogs";


export default function Settings() {
  
  

  return (
    <s-page showBackButton title="Settings page">
      
      <s-section>
   

        <s-box>
          <GeneralSettings
            
          />
          <FeaturesSettings />
          <NotificationsSettings  />
          <ChangeLogs  />
        </s-box>
      </s-section>
    </s-page>
  );
}
