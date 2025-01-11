import React from "react";
import "../App.css";
import {
  Body1Strong,
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
} from "@fluentui/react-components";
import { MoreHorizontalRegular } from "@fluentui/react-icons";
import { PanelLeftContract, PanelLeftExpand } from "../bundleIcons.tsx";
import { useContentHooks } from "../Hooks/useContentHooks.tsx";
import CodeBlock from "./CodeBlockBash.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel });
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

      <div className="panelHeader">
        <div className="headerTitleGroup">
          {togglePanel && ( // Hide left toggle if togglePanel is not provided
            <Tooltip content={`${commandKey} + ←`} relationship="label">
              <Button
                icon={isPanelOpen ? <PanelLeftContract /> : <PanelLeftExpand />}
                onClick={togglePanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
          <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
            installation.tsx
          </Body1Strong>
        </div>

        <Toolbar>
          <Menu>
            <MenuTrigger>
              <ToolbarButton
                aria-label="More"
                icon={<MoreHorizontalRegular />}
              />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem>New </MenuItem>
                <MenuItem>New Window</MenuItem>
                <MenuItem disabled>Open File</MenuItem>
                <MenuItem>Open Folder</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </Toolbar>
      </div>

      {/*📌 Below is the setup for Content.
       ***You can import just about anything into className"content" and it should show up in the content panel
       ***Dependencies for .md files and react-markdown are preinstalled.
       ***Don't forget call your import above!
       ***/}

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: " 0 auto" }}>
          <h1>Installation</h1>
          <ol>
            <li>
              <h3>Fork repository</h3>
            </li>
            <p>
              <div className="infoTile">
                <img
                  src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Jellyfish.png"
                  alt="Jellyfish"
                  width="32"
                  height="32"
                />
                <p>Fork this repository to create your copy.</p>
                <a
                  href="https://github.com/mochimilk/cto_eden/fork"
                  target="_blank"
                >
                  <Button appearance="primary">Fork from GitHub</Button>
                </a>
              </div>
            </p>

            <li>
              <h3>Clone the forked repository</h3>
              <CodeBlock code={sampleClone.trim()} />
            </li>

            <li>
              <h3>Install dependencies</h3>
              <p>
                Make sure you have <a href="">Node.js</a> and npm or yarn
                installed. Then, run:
              </p>
              <CodeBlock code={sampleDependencies.trim()} />
            </li>

            <li>
              <h3>Run the development server</h3>
              <p>Start the application in development mode::</p>
              <CodeBlock code={sampleRun.trim()} />
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
