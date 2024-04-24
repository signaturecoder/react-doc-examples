import React, { useContext } from "react";
import { CurrentUserContext } from "../../../App";
import Greeting from "./Greeting";
import Form from "./Form";
import { Panel } from "./Panel";

const WelcomePanel = () => {
  const { currentUser } = useContext(CurrentUserContext);
  return (
    <>
      <Panel title="Welcome">
        {currentUser !== null ? <Greeting /> : <Form />}
      </Panel>
    </>
  );
};

export default WelcomePanel;
