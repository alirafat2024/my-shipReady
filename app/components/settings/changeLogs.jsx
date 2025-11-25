import { useState } from "react";
import {Footer} from "../shared/footer"
export function ChangeLogs({ selectedTab }) {
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

  return selectedTab !== "Change-log" ? null :(
    <s-page>
    <s-stack gap="base">
        <s-section>
      <s-heading level="1" variant="headingLg">
        Change logs
      </s-heading>
      <s-stack gap="base">
        <s-unordered-list>
          {changeLogs.length > 0 ? (
            changeLogs.map((changeLog, index) => (
              <s-list-item key={index}>
                <s-stack direction="inline" gap="base" justifyContent="space-between">
                  <s-stack gap="base">
                    <s-paragraph>{changeLog.content}</s-paragraph>
                    <s-link url={changeLog.link}>{changeLog.title}</s-link>
                  </s-stack>
                  <s-box>
                    <s-button>View</s-button>
                  </s-box>
                </s-stack>
              </s-list-item>
            ))
          ) : (
            <s-section>
              <s-stack gap="base" justifyContent="center">
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
   
      <Footer/>
    </s-stack>
    
   </s-page>
  );
}
