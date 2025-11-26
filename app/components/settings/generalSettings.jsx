import { Footer } from "../shared/footer";

export function GeneralSettings({ selectedTab }) {
  return selectedTab !== "General" ? null : (
    <s-page>
      <s-stack gap="large-500" >
        <s-section>
          <s-stack gap="base">
            <s-heading level="1" variant="headingLg">
              General Settings
            </s-heading>
            <s-text-field label="App Name" name="appName" />
            <s-text-field label="App version" name="appVersion" />
          </s-stack>
        </s-section>

        <Footer/>
      </s-stack>
    </s-page>
  );
}
