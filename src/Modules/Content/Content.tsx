import React from "react";
import "../../Styles/App.css";
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
} from "@fluentui/react-components";
import {
  MoreHorizontalRegular,
  BranchRequestRegular,
  CubeRegular,
  BranchRegular,
} from "@fluentui/react-icons";
import {
  Link,
  PanelLeftContract,
  PanelLeftExpand,
  PanelRightContract,
  PanelRightExpand,
  Search,
} from "../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../Hooks/useContentHooks.tsx";
import ContentToolbar from "../../Hooks/useContentToolbarHooks.tsx";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void; // Optional to conditionally render left toggle
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void; // Optional to conditionally render right toggle
}

const Content: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

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
        {/* <ReactMarkdown>{markdownFile}</ReactMarkdown>; */}
      </div>
    </div>
  );
};

export default Content;
