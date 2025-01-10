import React from "react";
import "../App.css";
import {
  Body1Strong,
  Button,
  Tooltip,
  Toolbar,
  ToolbarButton,
  ToolbarDivider,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuItem,
  Divider,
  Title3,
  Subtitle2,
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  BranchRequestRegular,
  CubeRegular,
  BranchRegular,
} from "@fluentui/react-icons";
import {
  PanelLeftContract,
  PanelLeftExpand,
  PanelRightContract,
  PanelRightExpand,
  Search,
} from "../bundleIcons.tsx";
import { useContentHooks } from "../Hooks/useContentHooks.tsx";
import CodeBlock from "./CodeBlock.tsx";

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
            Developers
          </Body1Strong>
        </div>

        <Toolbar>
          <ToolbarButton icon={<Search />} />
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
          <ToolbarDivider />
          {toggleRightPanel && ( // Hide right toggle if toggleRightPanel is not provided
            <Tooltip content={`${commandKey} + →`} relationship="label">
              <ToolbarButton
                icon={
                  isRightPanelOpen ? (
                    <PanelRightContract />
                  ) : (
                    <PanelRightExpand />
                  )
                }
                onClick={toggleRightPanel}
                appearance="subtle"
              />
            </Tooltip>
          )}
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
          <h3>1. Fork repository</h3>
          <p>
            Click the Fork button on the top-right corner of this repository to
            create your copy.
          </p>

          <br />
          <a href="https://github.com/mochimilk/cto_eden/fork" target="_blank">
            <Button appearance="primary">Fork from GitHub</Button>
          </a>

          <h3>2. Clone the forked repository</h3>

          <CodeBlock code={sampleClone.trim()} />

          <h3>3. Install dependencies</h3>
          <p>
            Make sure you have <a href="">Node.js</a> and npm or yarn installed.
            Then, run:
          </p>
          <CodeBlock code={sampleDependencies.trim()} />


          <h3>4. Run the development server</h3>
          <p>
          Start the application in development mode::
          </p>
          <CodeBlock code={sampleRun.trim()} />

   
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
