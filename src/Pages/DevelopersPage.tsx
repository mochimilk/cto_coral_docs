import * as React from "react";
import ContentDevelopersInstallation from "../Modules/ContentDevelopers.tsx";
import PanelRight from "../Modules/PanelRight.tsx";
import PanelLeft from "../Modules/PanelLeftDevelopers.tsx";
import ContentDevelopersSupport from "../Modules/ContentDevelopersSupport.tsx";
import ContentDevelopersLabs from "../Modules/ContentDevelopersLabs.tsx";
import { useAppHooks } from "../Hooks/useAppHooks.tsx";
import { Routes, Route, Navigate } from "react-router-dom";

const DevelopersInstallation = () => <div>Designers Overview</div>;
const DevelopersSupport = () => <div>Designers Guides</div>;

const TriPanelLayout: React.FC = () => {
  const {
    isPanelOpen,
    panelWidth,
    togglePanel,
    handleMouseDownLeft,
    isRightPanelOpen,
    rightPanelWidth,
    toggleRightPanel,
    handleMouseDownRight,
  } = useAppHooks();
  return (
    <div className="layout" style={{ display: "flex" }}>
      {/*📌 Below is the setup for panelLeft.
       ***To populate its contents, go to ./src/Modules/PanelLeft.tsx */}

      {isPanelOpen && (
        <div className="panelLeft" style={{ width: `${panelWidth}px` }}>
          <PanelLeft />
          <div
            className="resize-handle-left"
            onMouseDown={handleMouseDownLeft}
          />
        </div>
      )}

      {/*📌 Below is the setup for Content.
       ***To populate its contents, go to ./src/Modules/Content.tsx */}

      <div className="contentContainer" style={{ flexGrow: 1 }}>
        <Routes>
          {/* <Route path="/" element={<Navigate to="installation" replace />} /> */}
          <Route
            path="installation"
            element={
              <ContentDevelopersInstallation
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel} // Left toggle is active
                isRightPanelOpen={isRightPanelOpen}
                toggleRightPanel={toggleRightPanel} // Right toggle is active
              />
            }
          />
          <Route
            path="support"
            element={
              <ContentDevelopersSupport
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel} // Left toggle is active
                isRightPanelOpen={isRightPanelOpen}
                toggleRightPanel={toggleRightPanel} // Right toggle is active
              />
            }
          />

          <Route
            path="labs"
            element={
              <ContentDevelopersLabs
                isPanelOpen={isPanelOpen}
                togglePanel={togglePanel} // Left toggle is active
                isRightPanelOpen={isRightPanelOpen}
                toggleRightPanel={toggleRightPanel} // Right toggle is active
              />
            }
          />
        </Routes>
      </div>

      {/*📌 Below is the setup for panelRight.
       ***To populate its contents, go to ./src/Modules/PanelRight.tsx */}

      {isRightPanelOpen && (
        <div className="panelRight" style={{ width: `${rightPanelWidth}px` }}>
          <div
            className="resize-handle-right"
            onMouseDown={handleMouseDownRight}
          />
          <PanelRight />
        </div>
      )}
    </div>
  );
};

export default TriPanelLayout;
