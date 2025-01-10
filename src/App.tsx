import * as React from "react";
import { Body1, Tag } from "@fluentui/react-components";
import { useAppHooks } from "./Hooks/useAppHooks.tsx";
import Header from "./Modules/Header.tsx"; // Import Header
import "./App.css";
import "./Modules/css/Panels.css";
import HomePage from "./Pages/HomePage.tsx";
import DevelopersPage from "./Pages/DevelopersPage.tsx";
import DesignersPage from "./Pages/DesignersPage.tsx";
import ProductManagersPage from "./Pages/ProductManagersPage.tsx";
import NotFound from "./Pages/NotFound.tsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

type AppProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const App: React.FC<AppProps> = ({ isDarkMode, toggleTheme }) => {
  const { showHotkeyOverlay, modifierKey } = useAppHooks();

  return (
    <div className="app-container">
      <Router>
        {/* Move Header into App */}
        <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />

        {/* Main Layout */}
        <main>
          <Routes>
          <Route path="/" element={<HomePage />} /> {/* Default route */}
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/designers" element={<DesignersPage />} />
            <Route path="/product-managers" element={<ProductManagersPage />} />
            <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
          </Routes>
        </main>
      </Router>

      {/* Hotkey Overlay */}
      {showHotkeyOverlay && (
        <div className="hotkey-overlay">
          <Body1>System</Body1>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">D</Tag> : Theme
          </div>
          <Body1>View</Body1>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">shift</Tag> +{" "}
            <Tag appearance="outline">←</Tag> : Left panel
          </div>
          <div>
            <Tag appearance="outline">{modifierKey}</Tag> +{" "}
            <Tag appearance="outline">shift</Tag> +{" "}
            <Tag appearance="outline">→</Tag> : Right panel
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
