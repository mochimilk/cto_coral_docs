import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header, useHeaderHooks } from "../Hooks/useHeaderHooks.tsx";
import {
  TabList,
  Tab,
  Menu,
  MenuTrigger,
  MenuPopover,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
  Avatar,
  Button,
} from "@fluentui/react-components";
import {
  LeafOne,
  Beaker,
  Flow,
  WeatherSunny,
  WeatherMoon,
  Person,
  PersonFeedback,
  ArrowExit,
  Share,
  Code,
  DesignIdeas,
} from "../bundleIcons.tsx";
import MsftLogo from "../Imports/MsftColor.svg";
import "./css/Header.css";

interface HeaderPageProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const HeaderPage: React.FC<HeaderPageProps> = ({ toggleTheme, isDarkMode }) => {
  const { shortcutLabel } = useHeaderHooks({ toggleTheme, isDarkMode });
  const navigate = useNavigate();
  const location = useLocation();

  // Map each tab to a route
  const tabToRouteMap = {
    home: "/",
    designers: "/designers",
    developers: "/developers",
    productManagers: "/product-managers",
  };

  const routeToTabMap = Object.entries(tabToRouteMap).reduce(
    (acc, [tab, route]) => ({ ...acc, [route]: tab }),
    {}
  );

  // Determine the current active tab based on the route
  const currentTab = routeToTabMap[location.pathname] || "/";

  // Handle tab selection
  const handleTabChange = (event, data) => {
    navigate(tabToRouteMap[data.value]);
  };

  return (
    <Header
      avatarSrc={MsftLogo} // Profile icon for businesses.
      title="Microsoft" // Site title
      subtitle="CTO Coral" // Site subtitle
      badge="Docs" //
    >
      {/* Navigation Section
      Placeholder. You can configure it to your needs or omit entirely */}
      <div className="headerNav">
        <TabList
          selectedValue={currentTab}
          onTabSelect={handleTabChange}
          aria-label="Site Navigation Tabs"
          size="small"
        >
                    <Tab icon={<LeafOne />} value="home">
            Hello
          </Tab>
          <Tab icon={<Code />} value="developers">
            Developers
          </Tab>
          <Tab icon={<DesignIdeas />} value="designers">
            Designers
          </Tab>
          <Tab icon={<Flow />} value="productManagers">
            Product Managers
          </Tab>
        </TabList>
      </div>

      {/* Tools Section */}
      <div className="headerTools">
        <Menu hasIcons positioning={{ autoSize: true }}>
          <MenuTrigger disableButtonEnhancement>
            <Avatar
              color="colorful"
              name="Pepper Hayuki"
              aria-label="App"
              badge={{ status: "out-of-office", outOfOffice: true }}
              className="clickable-avatar"
            />
          </MenuTrigger>
          <MenuPopover style={{ minWidth: "192px" }}>
            <MenuList>
              <MenuGroup>
                <MenuItem icon={<Person />}>Account</MenuItem>
                <MenuItem
                  icon={isDarkMode ? <WeatherSunny /> : <WeatherMoon />}
                  onClick={toggleTheme}
                  secondaryContent={shortcutLabel}
                >
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </MenuItem>
                <MenuItem icon={<PersonFeedback />}>Feedback</MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem icon={<ArrowExit />}>Logout</MenuItem>
            </MenuList>
          </MenuPopover>
        </Menu>
        <Button icon={<Share />} appearance="subtle" />
      </div>
    </Header>
  );
};

export default HeaderPage;
