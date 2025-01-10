import * as React from "react";
import {
  Body1Strong,
  Button,
  Caption1Strong,
  Menu,
  MenuTrigger,
  ToolbarButton,
  MenuPopover,
  MenuList,
  MenuItem,
  Body1,
} from "@fluentui/react-components";
import {
  Beaker20Regular,
  Dismiss20Regular,
  MoreHorizontalRegular,
  PersonChat20Regular,
  Settings20Filled,
  Settings20Regular,
} from "@fluentui/react-icons";
import "./css/Chat.css";
import LeftNavItem from "../Components/LeftNavItem.tsx";

// Reusable component for a chat history item
const ChatHistoryItem: React.FC<{ text: string }> = ({ text }) => (
  <LeftNavItem>{text}</LeftNavItem>
);

// Reusable component for a chat history section
const ChatHistorySection: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div>
    <div
      style={{
        padding: "0 8px 16px 8px",
        color: "var(--colorNeutralForeground4)",
      }}
    >
      <Caption1Strong>{title}</Caption1Strong>
    </div>

    {items.map((item, index) => (
      <ChatHistoryItem key={index} text={item} />
    ))}
    <br />
    <br />
  </div>
);

const PanelLeft: React.FC = () => {
  // Chat history data
  const chatSections = [
    {
      title: "Components",
      items: ["Header", "Panels", "Content", "Pages", "Custom components"],
    },

    {
      title: "Advanced Configurations",
      items: ["Page Navigation", "Routing", "Themes", "Pages"],
    },
  ];

  return (
    <div className="panelLeft">
      <div className="panelHeader">
        <Body1Strong style={{ color: "var(--colorNeutralForeground2)" }}>
          Navigation
        </Body1Strong>
        <Menu>
          <MenuTrigger>
            <ToolbarButton aria-label="More" icon={<MoreHorizontalRegular />} />
          </MenuTrigger>
          <MenuPopover>
            <MenuList>
              <MenuItem>Clear History</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
      </div>

      <div className="chatHistoryContainer" style={{ height: "100%" }}>
        <LeftNavItem icon={<Settings20Regular />}>Installation</LeftNavItem>
        <LeftNavItem icon={<PersonChat20Regular />}>Support</LeftNavItem>
        <LeftNavItem icon={<Beaker20Regular />}>Labs</LeftNavItem>

        <br />
        <br />
        {chatSections.map((section, index) => (
          <ChatHistorySection
            key={index}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>

      <div
        style={{
          margin: "12px",
          backgroundColor: "var(--colorNeutralBackground1)",
          padding: "12px",
          borderRadius: "8px",
          // border: "1px solid var(--colorNeutralStroke2)",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {<Beaker20Regular />}
      <Body1Strong>Labs</Body1Strong>
        <Body1 style={{color:'var(--colorNeutralForeground3)'}}>Help us create the best workflow for your team.</Body1>
        <a href="">Learn more</a>

      </div>
    </div>
  );
};

export default PanelLeft;
