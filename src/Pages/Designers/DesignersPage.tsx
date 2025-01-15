import * as React from "react";
import ContentDesignersGettingStarted from "../Designers/Content/ContentDesigners.tsx";
import ContentDesignersLayouts from "./Content/ContentDesignersLayouts.tsx";
import PanelLeft from "./DesignersPanelLeft.tsx";
import PanelRight from "../../Modules/Panels/PanelRight.tsx";

import { useAppHooks } from "../../Hooks/useAppHooks.tsx";
import { Routes, Route } from "react-router-dom";

const routeConfigs = [
  {
    path: "getting-started",
    component: ContentDesignersGettingStarted,
  },

  {
    path: "layouts",
    component: ContentDesignersLayouts,
  },


];

const Layout: React.FC = () => {
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
      {/* 📌 PanelLeft setup */}
      {isPanelOpen && (
        <div className="panelLeft" style={{ width: `${panelWidth}px` }}>
          <PanelLeft />
          <div
            className="resize-handle-left"
            onMouseDown={handleMouseDownLeft}
          />
        </div>
      )}

      {/* 📌 Content setup */}
      <div className="contentContainer" style={{ flexGrow: 1 }}>
        <Routes>
          {routeConfigs.map(({ path, component: Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <Component
                  isPanelOpen={isPanelOpen}
                  togglePanel={togglePanel}
                  isRightPanelOpen={isRightPanelOpen}
                  toggleRightPanel={toggleRightPanel} // Right toggle is active
                />
              }
            />
          ))}
        </Routes>
      </div>

      {/*📌 Below is the setup for panelRight.
       ***To populate its contents, go to ./src/Modules/PanelRight.tsx */}

      {/* {isRightPanelOpen && (
        <div className="panelRight" style={{ width: `${rightPanelWidth}px` }}>
          <div
            className="resize-handle-right"
            onMouseDown={handleMouseDownRight}
          />
          <PanelRight />
        </div>
      )} */}
    </div>
  );
};

export default Layout;
