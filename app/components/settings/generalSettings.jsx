


export function GeneralSettings() {
 
  return (
    <s-section>
      <s-form >
        <s-stack gap="200">
          <s-heading level="1" variant="headingLg">
            General Settings
          </s-heading>
              <s-text-field
                label="App Name"
                name="appName"
              />
              <s-text-field
                label="App version"
                name="appVersion"
              />
        </s-stack>
      </s-form>
    </s-section>
  );
}
