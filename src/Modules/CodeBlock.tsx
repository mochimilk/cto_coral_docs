import React, { useState } from "react";
import { Caption1, Button, Display } from "@fluentui/react-components";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
    });
  };


  
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid var(--colorNeutralStroke2)",
        borderRadius: "8px",
        marginTop: '24px',
        // boxShadow: 'var(--shadow4)'
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flex: "1 1 auto",
          justifyContent: "space-between",
          padding: ".6rem .6rem .6rem 1rem",
          boxSizing: "border-box",
        }}
      >
        <Caption1 style={{ color: "var(--colorNeutralForeground4" }}>
          bash
        </Caption1>
        <Button onClick={handleCopy} size="small" appearance="subtle">
          {copied ? "Copied ✅" : "Copy Code"}
        </Button>
      </div>
      <pre
        style={{
          backgroundColor: "var(--colorNeutralBackground4)",
          color: "var(--colorNeutralForeground2)",
          padding: "1rem",
          borderRadius: "0 0 8px 8px",
          overflowX: "auto",
          margin: "0",
        }}
      >
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
