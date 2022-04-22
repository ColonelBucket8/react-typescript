import React from "react";
import UserInterface from "../UserInterface";

const UserComponent: React.FC<UserInterface> = ({name, age, address, dob}) => {

    return(
        <div>
        <h1>User Component</h1>
        Hello, <b>{name}</b>
        <br />
        You are <b>{age}</b> years old
        <br />
        You live at: <b>{address}</b>
        <br />
        You were born: <b>{dob.toDateString()}</b>
        </div>
        )
}

export default UserComponent;
