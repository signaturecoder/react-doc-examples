import React, { useState, useContext } from "react";
import { Panel } from "./Panel";
import LoginButton from "./LoginButton";
import Button from "./Button";
import { CurrentUserContext } from "../../../App";

// store the firstname and lastname of the form in an object
const Form = () => {
  const {setCurrentUser} = useContext(CurrentUserContext);
  const [userName, setUsername] = useState({
    firstName: "",
    lastName: "",
  });
  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUsername({ ...userName, [name]: value });
  };

  console.log("Username ", userName);
  return (
    <>
      <form>
        <div className="form-field">
          <label>Firstname:</label>
          <input
            type="text"
            name="firstName"
            value={userName.firstName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>

        <div className="form-field">
          <label>Lastname:</label>
          <input
            type="text"
            name="lastName"
            value={userName.lastName}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
      </form>

      <Button onBtnClick={() => setCurrentUser({name: userName.firstName + ' ' + userName.lastName})}>Login</Button>
      </>
  );
};

export default Form;
