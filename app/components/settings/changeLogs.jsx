
import { useState } from "react";

export function ChangeLogs() {
  const [changeLogs, setChangeLogs] = useState([
    {
      title: "Change log",
      content: "View the change log for this app",
      link: "#",
    },
    {
      title: "New feature",
      content: "Check out the new feature we just launched",
      link: "#",
    },
    {
      title: "Bug fix",
      content: "We just fixed a bug that was affecting the app",
      link: "#",
    },
    {
      title: "New feature",
      content: "Check out the new feature we just launched",
      link: "#",
    },
    {
      title: "Bug fix",
      content: "We just fixed a bug that was affecting the app",
      link: "#",
    },
    {
      title: "Change log",
      content: "View the change log for this app",
      link: "#",
    },
    {
      title: "New feature",
      content: "Check out the new feature we just launched",
      link: "#",
    },
    {
      title: "Bug fix",
      content: "We just fixed a bug that was affecting the app",
      link: "#",
    },
    {
      title: "Change log",
      content: "View the change log for this app",
      link: "#",
    },
    {
      title: "New feature",
      content: "Check out the new feature we just launched",
      link: "#",
    },
    {
      title: "Bug fix",
      content: "We just fixed a bug that was affecting the app",
      link: "#",
    },
  ]);

  const handleDeleteChangeLog = (index) => {};

  return  (
    <s-section>
     <s-paragraph></s-paragraph>
      <s-stack gap="200">
        <s-heading level="1" variant="headingLg">
          Change logs
        </s-heading>
        <s-unordered-list>
          {changeLogs.length > 0 ? (
            changeLogs.map((changeLog, index) => (
              <s-list-item key={index}>
                <s-stack direction="inline"
                  gap="200"
                
                >
                  <s-stack gap="200">
                    <s-paragraph>
                      {changeLog.content}
                    </s-paragraph>
                    <s-link url={changeLog.link}>{changeLog.title}</s-link>
                  </s-stack>
                  <s-button
                    icon={EyeCheckMarkIcon}
                    onClick={() => handleDeleteChangeLog(index)}
                  >
                    View
                  </s-button>
                </s-stack >
              </s-list-item>
            ))
          ) : (
            <s-section>
              <s-stack gap="400" inlineAlign="center">
                <s-heading level="1" variant="headingLg">
                  No change logs
                </s-heading>
                <s-paragraph>
                  You have no change logs at the moment!
                </s-paragraph>
              </s-stack>
            </s-section>
          )}
        </s-unordered-list>
      </s-stack>
    </s-section>
  );
}
