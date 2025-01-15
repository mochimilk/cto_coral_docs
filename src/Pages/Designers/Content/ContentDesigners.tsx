import React from "react";
import "../../../Styles/App.css";
import {
  Avatar,
  Body1Strong,
  Button,
  Caption1,
  Caption1Strong,
  Caption2Strong,
  Divider,
  Toolbar,
  ToolbarButton,
  Tooltip,
} from "@fluentui/react-components";
import { Link20Regular } from "@fluentui/react-icons";
import { Link } from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import CodeBlock from "../../../Components/CodeBlock/CodeBlock.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";
import Figma40Icon from "../../../Imports/Figma40Icon.tsx";
import LinkButton from "../../../Components/LinkButton.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render left toggle
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

  // Sample Code
  const sampleClone = `
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
`;
  const sampleDependencies = `
npm install
# or
yarn install
`;
  const sampleRun = `
npm start
# or
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
          <h1>Getting Started</h1>
          <p style={{ fontSize: "24px", marginBottom: "32px" }}>
            {" "}
            A quick and easy guide on how to enable libraries and which ones to
            use when designing with Coral.
          </p>

          <ol style={{ paddingLeft: "0px" }}>
            <Divider />
            <li>
              <h3>Start a new project</h3>
              <p>In Figma, create a new design file.</p>
              <br />

              {/* The super extra component */}
              <div
                style={{
                  width: "192px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "var(--colorNeutralBackground1)",
                  padding: "24px",
                  borderRadius: "8px",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#3E8AE2",
                    width: "32px",
                    height: "32px",
                    borderRadius: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#fff"
                      d="M6.89394 11.4535C6.70926 11.974 6.98147 12.5456 7.50196 12.7303C8.02245 12.915 8.59411 12.6428 8.7788 12.1223L6.89394 11.4535ZM9.86983 6.05725L8.9274 5.72284L8.9274 5.72284L9.86983 6.05725ZM11.2413 4.86984L11.0451 3.88926L11.0451 3.88926L11.2413 4.86984ZM23.2125 2.47559L24.1966 2.65305C24.2554 2.32731 24.1491 1.99361 23.9129 1.7618C23.6766 1.52998 23.341 1.43009 23.0164 1.49501L23.2125 2.47559ZM21.0279 14.5903L20.0438 14.4129L20.0438 14.4129L21.0279 14.5903ZM19.7676 16.0182L19.4693 15.0637L19.4693 15.0637L19.7676 16.0182ZM13.6019 16.8972C13.0748 17.062 12.781 17.6229 12.9457 18.15C13.1105 18.6771 13.6713 18.9709 14.1985 18.8062L13.6019 16.8972ZM23.703 3.39926C24.0936 3.00874 24.0936 2.37557 23.703 1.98505C23.3125 1.59452 22.6794 1.59452 22.2888 1.98505L23.703 3.39926ZM17.0913 7.18261C16.7007 7.57314 16.7007 8.2063 17.0913 8.59683C17.4818 8.98735 18.115 8.98735 18.5055 8.59683L17.0913 7.18261ZM4.37133 16.1192L3.66422 16.8263L3.66422 16.8263L4.37133 16.1192ZM4.37133 14.3867L5.07844 15.0938L5.07844 15.0938L4.37133 14.3867ZM11.3014 21.3168L12.0085 22.0239L12.0085 22.0239L11.3014 21.3168ZM9.5689 21.3168L10.276 20.6097L10.276 20.6097L9.5689 21.3168ZM13.4671 17.4186L12.76 18.1257L12.76 18.1257L13.4671 17.4186ZM13.4671 19.1511L12.76 18.444L12.76 18.444L13.4671 19.1511ZM8.2695 12.221L8.97661 11.5139L8.97661 11.5139L8.2695 12.221ZM6.53698 12.221L5.82988 11.5139L5.82988 11.5139L6.53698 12.221ZM8.7788 12.1223L10.8123 6.39166L8.9274 5.72284L6.89394 11.4535L8.7788 12.1223ZM11.4374 5.85042L23.4086 3.45617L23.0164 1.49501L11.0451 3.88926L11.4374 5.85042ZM22.2284 2.29812L20.0438 14.4129L22.012 14.7678L24.1966 2.65305L22.2284 2.29812ZM19.4693 15.0637L13.6019 16.8972L14.1985 18.8062L20.0658 16.9727L19.4693 15.0637ZM20.0438 14.4129C19.9884 14.7199 19.767 14.9706 19.4693 15.0637L20.0658 16.9727C21.0745 16.6574 21.8245 15.8078 22.012 14.7678L20.0438 14.4129ZM10.8123 6.39166C10.9109 6.1138 11.1483 5.90824 11.4374 5.85042L11.0451 3.88926C10.0657 4.08514 9.26142 4.78153 8.9274 5.72284L10.8123 6.39166ZM22.2888 1.98505L17.0913 7.18261L18.5055 8.59683L23.703 3.39926L22.2888 1.98505ZM7.5624 12.9281L12.76 18.1257L14.1742 16.7115L8.97661 11.5139L7.5624 12.9281ZM12.76 18.444L10.5943 20.6097L12.0085 22.0239L14.1742 19.8582L12.76 18.444ZM10.276 20.6097L5.07844 15.4121L3.66422 16.8263L8.86179 22.0239L10.276 20.6097ZM5.07844 15.0938L7.24409 12.9281L5.82988 11.5139L3.66422 13.6796L5.07844 15.0938ZM5.07844 15.4121C4.99054 15.3242 4.99054 15.1817 5.07844 15.0938L3.66422 13.6796C2.79528 14.5485 2.79528 15.9574 3.66422 16.8263L5.07844 15.4121ZM10.5943 20.6097C10.5064 20.6976 10.3639 20.6976 10.276 20.6097L8.86179 22.0239C9.73074 22.8928 11.1396 22.8928 12.0085 22.0239L10.5943 20.6097ZM12.76 18.1257C12.8479 18.2136 12.8479 18.3561 12.76 18.444L14.1742 19.8582C15.0431 18.9893 15.0431 17.5804 14.1742 16.7115L12.76 18.1257ZM8.97661 11.5139C8.10766 10.645 6.69882 10.645 5.82988 11.5139L7.24409 12.9281C7.33199 12.8402 7.4745 12.8402 7.5624 12.9281L8.97661 11.5139ZM16.6581 11.0808C16.0918 11.6471 15.1736 11.6471 14.6073 11.0808L13.1931 12.495C14.5405 13.8424 16.725 13.8424 18.0724 12.495L16.6581 11.0808ZM14.6073 11.0808C14.041 10.5145 14.041 9.59628 14.6073 9.02996L13.1931 7.61574C11.8457 8.96311 11.8457 11.1476 13.1931 12.495L14.6073 11.0808ZM14.6073 9.02996C15.1736 8.46364 16.0918 8.46364 16.6581 9.02996L18.0724 7.61574C16.725 6.26837 14.5405 6.26837 13.1931 7.61574L14.6073 9.02996ZM16.6581 9.02996C17.2245 9.59628 17.2245 10.5145 16.6581 11.0808L18.0724 12.495C19.4197 11.1476 19.4197 8.96311 18.0724 7.61574L16.6581 9.02996Z"
                    />
                  </svg>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4px",
                    flex: "0 0 auto" /* Prevent growing or shrinking */,
                    width: "auto" /* Maintain natural size unless overridden */,
                  }}
                >
                  {" "}
                  <Caption1Strong>New design file</Caption1Strong>
                  <Caption1 style={{ color: "var(--colorNeutralForeground4)" }}>
                    Design and prototype
                  </Caption1>
                </div>
              </div>
            </li>
            <br />

            <Divider />
            <li>
              <h3>Enable Libraries</h3>
              <p>
                In the left panel of your design file, access the{" "}
                <div
                  style={{
                    display: "inline",
                    backgroundColor: "var(--colorNeutralBackground6)",
                    width: "20px",
                    padding: "4px 8px",
                    borderRadius: "4px",
                  }}
                >
                  <Body1Strong>Assets</Body1Strong>
                </div>{" "}
                tab , then click the book icon &nbsp;
                <div
                  style={{
                    display: "inline",
                    backgroundColor: "var(--colorNeutralBackground6)",
                    width: "20px",
                    padding: "4px",
                    borderRadius: "4px",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginBottom: "-2px" }}
                  >
                    <path
                      className="svgIconPath"
                      d="M12.1392 20.487C13.5305 19.4667 17.3705 18.0383 21.6 20.487V5.1826M2.40002 4.90434V20.487C3.79133 19.4667 7.63133 18.0383 11.8609 20.487V5.46086M2.40002 4.86508C3.79133 3.84479 7.63133 2.41639 11.8609 4.86508M12.1392 4.86508C13.5305 3.84479 17.3705 2.41639 21.6 4.86508"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                .
                
                <br/><br/>From here, you can search for and enable these libraries (No need to follow the links, they're just here for your reference).
              </p>
              <h4>Enable Fluent 2 Libraries</h4>
              <div className="personaField">
                <div className="personaContainer">
                  <LinkButton
                    icon={Figma40Icon}
                    title="Fluent 2 design language"
                    subtitle="Fluent dropshadows"
                    secondaryIcon={Link20Regular}
                    link="https://www.figma.com"
                  />

                  <LinkButton
                    icon={Figma40Icon}
                    title="Fluent 2 web"
                    subtitle="Fluent web components"
                    secondaryIcon={Link20Regular}
                    link="https://www.figma.com"
                  />

                  <LinkButton
                    icon={Figma40Icon}
                    title="Fluent 2 iconography"
                    subtitle="Fluent icon catalog"
                    secondaryIcon={Link20Regular}
                    link="https://www.figma.com"
                  />

                  <LinkButton
                    icon={Figma40Icon}
                    title="Fluent Web Variables"
                    subtitle="Colors, type, gaps, etc."
                    secondaryIcon={Link20Regular}
                    link="https://www.figma.com"
                  />
                </div>
              </div>
              <h4>Enable Coral Library</h4>
              <div className="personaField">
                <div className="personaContainer">
                  <LinkButton
                    icon={Figma40Icon}
                    title="Coral web"
                    subtitle="Coral web components"
                    secondaryIcon={Link20Regular}
                    link="https://www.figma.com"
                  />

           
                </div>
              </div>
              <br />
              <div className="infoTile">
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Microbe.png"
                  alt="Microbe"
                  width="32"
                  height="32"
                />
                <p>
                  Coral only uses components, styles, and variables from these 5
                  libraries.
                </p>
                <a
                  href="https://github.com/mochimilk/cto_eden/fork"
                  target="_blank"
                >
                  <Button appearance="primary">Visit Fluent 2</Button>
                </a>
              </div>
            </li>

            <Divider />
            <li>
              <h3>Start building</h3>
              <p>
                And that's it! You now have all the dependencies needed to start designing your app. Head over to the "Layouts" section to learn how to starting designing
                apps with Coral.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
