import React from "react";
import PropTypes from "prop-types";
import { Body1Strong, Caption1 } from "@fluentui/react-components";

const LinkButton = ({
  icon: Icon,
  title,
  subtitle,
  secondaryIcon: SecondaryIcon,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
      className="personaButton"
    >
      <div style={{ flex: "0 0 auto", display: "flex", alignItems: "center" }}>
        <Icon />
      </div>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Body1Strong
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {title}
        </Body1Strong>
        <Caption1
          style={{
            color: "var(--colorNeutralForeground4)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {subtitle}
        </Caption1>
      </div>

      <div
        style={{
          flex: "0 0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
        }}
      >
        <SecondaryIcon />
      </div>
    </a>
  );
};

// Define prop types for the component
LinkButton.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  secondaryIcon: PropTypes.elementType.isRequired,
  link: PropTypes.string.isRequired,
};

export default LinkButton;
