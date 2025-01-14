import React from "react";
import "../../../Styles/App.css";
import {
  Body1Strong,
  Button,
  Toolbar,
  ToolbarButton,
  Avatar,
  Caption1,
} from "@fluentui/react-components";
import {
Flow20Regular
} from "@fluentui/react-icons";
import {
  Flow,
  Link,
} from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render right toggle
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });
  const sampleClone = `
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
`;
  const sampleDependencies = `
npm install
yarn install
`;
  const sampleRun = `
npm start
yarn start
`;

  return (
    <div className="contentContainer">
      {/*📌 Below is the setup for the content toolbar.
       ***You may remove this if your app doesn't need a toolbar. */}

      <ContentToolbar
        panelConfig="left" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar></Toolbar>

        <Toolbar>
          <ToolbarButton icon={<Link />}></ToolbarButton>
        </Toolbar>
      </ContentToolbar>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Dependencies for .md files and react-markdown are preinstalled.
       ***Don't forget call your import above!
       ***/}

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: " 0 auto" }}>
          <h1>Support</h1>

          <p>
            
          
          
            <div
              className="infoTile"
              style={{
                flexDirection: "column",
                alignItems: "baseline",
                gap: "24px",
              }}
            >
              {/* <div className="ghIssuesSvg">
                <img
                  width="24"
                  height="24"
                  src={require("../../../Imports/ghsvg.svg").default}
                  alt="mySvgImage"
                  style={{stroke:'red'}}
                />
              </div> */}

              {/* <img
                src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Folded%20Hands.png"
                alt="Folded Hands"
                width="32"
                height="32"
              /> */}
<Flow20Regular/>
              <p>
                {" "}
                <h4 style={{ margin: "0 0 2px 0" }}>Submit Issues on GitHub</h4>Issues are
                used to track todos, bugs, feature requests, and more.
              </p>
              <a href="" target="_blank">
                <a href="https://github.com/mochimilk/cto_coral/issues">
                  <Button>Submit an Issue</Button>
                </a>
              </a>
            </div>

            If you have any further
            questions, let us know.
          </p>

       

          <h3>Designers</h3>

          <div className="personaField">
            <div className="personaContainer">
              <div className="personaButton">
                <Avatar color="colorful" name="Nancy Nazarian" />
                <div>
                  <Body1Strong>Nancy Nazarian</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Principal Design Mgr
                    </span>{" "}
                    <br />
                    nnazarian@microsoft.com
                  </Caption1>
                </div>
              </div>

              <div className="personaButton">
                <Avatar color="colorful" name="Eunsoo Lee" />
                <div>
                  <Body1Strong>Eunsoo Lee</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Designer 2
                    </span>{" "}
                    <br />
                    eunsoolee@microsoft.com
                  </Caption1>
                </div>
              </div>

              <div className="personaButton">
                <Avatar color="colorful" name="Jessie Chen" />
                <div>
                  <Body1Strong>Jessie Chen</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Designer 2
                    </span>{" "}
                    <br />
                    jessiechen@microsoft.com
                  </Caption1>
                </div>
              </div>
            </div>
          </div>

          <h3>Developers</h3>

          <div className="personaField">
            <div className="personaContainer">
              <div className="personaButton">
                <Avatar color="colorful" name="Nalini Chandhi" />
                <div>
                  <Body1Strong>Nalini Chandhi</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Principal Software Eng Mgr
                    </span>{" "}
                    <br />
                    nalini.chandhi@microsoft.com
                  </Caption1>
                </div>
              </div>

              <div className="personaButton">
                <Avatar color="colorful" name="Todd Herman" />
                <div>
                  <Body1Strong>Todd Herman</Body1Strong>
                  <br />
                  <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
                    <span style={{ textTransform: "uppercase" }}>
                      Principal Software Engineer
                    </span>{" "}
                    <br />
                    todd.herman@microsoft.com
                  </Caption1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
