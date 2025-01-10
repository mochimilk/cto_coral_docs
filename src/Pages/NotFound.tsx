import * as React from "react";
import Content from "../Modules/Content.tsx";
import { Button, Subtitle1, Subtitle2, Title3 } from "@fluentui/react-components";



const NotFound: React.FC = () => {

  return (
    <div className="layout" style={{ display: "flex" }}>
        <div style={{ margin: 'auto', textAlign: 'center'}}>
            <Title3>🌿</Title3>   
            <br/><br/>
            <Subtitle1>Oh hello, may I kelp you?</Subtitle1>
            <br/>
            <p>The page you are looking for doesn't exist. Let's get you back to dry land.</p>
            <br/>
            <Button>Go home</Button>
            </div>


    </div>
  );
};

export default NotFound;
