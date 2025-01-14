import * as React from "react";
import {
  Body1Strong,
  Button,
  Tree,
  TreeItem,
  TreeItemLayout,
} from "@fluentui/react-components";
import { MoreHorizontalRegular, Image20Regular } from "@fluentui/react-icons";

const PanelLeft: React.FC = () => {
  return (
    <div className="panelLeft">
      {/* PanelHeader */}
      <div className="panelToolbar">
        <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
          Panel
        </Body1Strong>
        <Button icon={<MoreHorizontalRegular />} appearance="subtle"></Button>
      </div>

      {/* Content */}
      <div className='content' >
      
      </div>
    </div>
  );
};

export default PanelLeft;
