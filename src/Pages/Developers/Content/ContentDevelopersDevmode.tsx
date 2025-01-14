import React, { useState } from "react";
import "../../../Styles/App.css";
import { Toolbar, Divider, Tag } from "@fluentui/react-components";
import { FolderOpen } from "../../../Imports/bundleIcons.tsx";
import { useContentHooks } from "../../../Hooks/useContentHooks.tsx";
import ContentToolbar from "../../../Hooks/useContentToolbarHooks.tsx";
import "../../../Modules/Content/Content.css";

interface ContentProps {
  isPanelOpen: boolean;
  togglePanel?: () => void;
  isRightPanelOpen: boolean;
  toggleRightPanel?: () => void;
}

const ContentDevelopers: React.FC<ContentProps> = ({
  isPanelOpen,
  togglePanel,
  isRightPanelOpen,
  toggleRightPanel,
}) => {
  const { commandKey } = useContentHooks({ togglePanel, toggleRightPanel });

  return (
    <div className="contentContainer">
      <ContentToolbar
        panelConfig="left" // If your page is only using one panel, define it here with "left" or "right". Removing this defaults to both.
        isPanelOpen={isPanelOpen}
        togglePanel={togglePanel}
        isRightPanelOpen={isRightPanelOpen}
        toggleRightPanel={toggleRightPanel}
        commandKey={commandKey}
      >
        <Toolbar></Toolbar>

        <Toolbar></Toolbar>
      </ContentToolbar>

      <div className="content">
        <div style={{ width: "100%", maxWidth: "728px", margin: "0 auto" }}>
          <h1>Dev Mode</h1>


          <p style={{ fontSize: "24px", marginBottom: "32px" }}>
            {" "}
            Coral relies on Figma’s Dev Mode to create a more streamlined collaborative experience between developers and designers.
          </p>
          <h3>Get started</h3>
          <ol>
            <li>
              <h3>Turn on Dev Mode</h3>
              <p>In the given Figma file, navigate to the bottom toolbar.</p>
            </li>

            <li>
              <h3>Reference docs</h3>
              <p>On the right panel should be a section called "Dev Resources". This will contain a link to either Coral or Fluent's docs.</p>
            </li>
          
          </ol>



          <br />
          <br />
          <Divider />

          <h3>Page build in progress 🚧</h3>
        </div>
      </div>
    </div>
  );
};

export default ContentDevelopers;
