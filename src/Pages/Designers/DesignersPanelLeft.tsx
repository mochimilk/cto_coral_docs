import * as React from "react";
import {
  Body1Strong,
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
  Beaker20Filled,
  MoreHorizontalRegular,
  PersonChat20Regular,
  PersonChat20Filled,
  Settings20Regular,
  Settings20Filled,
  Code16Regular,
  Code20Regular,
  Code20Filled,
  LeafOne20Regular,
  LeafOne20Filled,
} from "@fluentui/react-icons";
import "../HomePage.css";
import { NavLink } from "react-router-dom";

// Explicitly defines types and annotates destructured parameters to prevent TypeScript errors
interface NavItem {
  to: string;
  label: string;
  regularIcon?: React.ElementType;
  filledIcon?: React.ElementType;
}

interface NavSection {
  sectionTitle?: string | null; // Use null to omit section title
  items: NavItem[];
}

// NavLink Nav Items
const navSections = [
  {
    sectionTitle: null,
    items: [
      {
        to: "/designers/getting-started",
        regularIcon: LeafOne20Regular,
        filledIcon: LeafOne20Filled,
        label: "Getting Started",
      },

    ],
  },
  {
    sectionTitle: "Core Concepts",
    items: [
      {
        to: "/designers/layouts",
        label: "Layouts",
      },
 
    ],
  },

  {
    sectionTitle: "Explore",
    items: [

      {
        to: "/developers/support",
        regularIcon: PersonChat20Regular,
        filledIcon: PersonChat20Filled,
        label: "Support",
      },
    ],
  },
];

const PanelLeft: React.FC = () => {
  return (
    <div className="panelLeft">
      <div className="panelToolbar">
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
        <nav>
          {navSections.map(({ sectionTitle, items }, sectionIndex) => (
            <div className="navSectionContainer" key={sectionIndex}>
              {sectionTitle && (
                <div className="navSectionTitle">
                  <Caption1Strong>{sectionTitle}</Caption1Strong>
                </div>
              )}
              {items.map(
                (
                  {
                    to,
                    regularIcon: RegularIcon,
                    filledIcon: FilledIcon,
                    label,
                  }: NavItem,
                  index: number
                ) => (
                  <NavLink
                    key={to}
                    to={to}
                    role="tab"
                    className={({ isActive }) =>
                      isActive ? "active-tab" : "tab"
                    }
                  >
                    {({ isActive }) => (
                      <div className="nav-item">
                        <div className="sideNavTick" />
                        {RegularIcon && FilledIcon ? (
                          isActive ? (
                            <FilledIcon />
                          ) : (
                            <RegularIcon />
                          )
                        ) : null}
                        {label}
                      </div>
                    )}
                  </NavLink>
                )
              )}
            </div>
          ))}
        </nav>
      </div>

      <div
        style={{
          margin: "12px",
          backgroundColor: "var(--colorNeutralBackgroundAlpha2)",
          padding: "12px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20professions/Woman%20Scientist%20Light%20Skin%20Tone.png"
          alt="Woman Scientist Light Skin Tone"
          width="32"
          height="32"
        />
        <Body1Strong>Labs</Body1Strong>
        <Body1 style={{ color: "var(--colorNeutralForeground3)" }}>
          Help us create the best workflow for your team.
        </Body1>
        <a href="">Learn more</a>
      </div>
    </div>
  );
};

export default PanelLeft;
