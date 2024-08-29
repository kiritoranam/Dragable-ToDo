import React, { useState } from "react";

const DashBoard = () => {

    const [state, setState] = useState({
        passHidden: ''
    })
    const clocks = {}
    console.log(123, state);
    const getLastIndexChar = string => {
        return string.slice(string.length - 1);
    };

    const hideAllChars = fieldName => {
        debugger
        const value = state[fieldName];
        let password = "";
        if (value.length) {
            password = Array(value.length).join("•") + "•";
        }
        setState({ [fieldName]: password });
    };

    const setFieldClock = fieldName => {
        debugger
        clearTimeout(clocks[fieldName]);
        if (clocks[fieldName]) {
            debugger
            clocks[fieldName] = setTimeout(
                () => hideAllChars(fieldName),
                1000
            );
        }
    };

    const getTypingHiddenPassword = value => {
        debugger
        return Array(value.length).join("•") + getLastIndexChar(value);
    };

    const handlePasswordChanged = (fieldName, value) => {
        debugger
        setFieldClock(fieldName);
        const password = getTypingHiddenPassword(value);
        setState({ [fieldName]: password });
    };

    const inputChange = ({ target: { name, value } }) => {
        debugger
        switch (name) {
            case "password":
            case "passHidden":
                handlePasswordChanged(name, value);
                break;
            default:
                setState({ [name]: value });
                break;
        }
    };

    return (
        <div>
            <div className="form-group row">
                <input
                    className="input"
                    name="passHidden"
                    value={state.passHidden}
                    onChange={inputChange}
                    type="text"
                    placeholder="Password"
                />
            </div>
        </div>
    )
}

export default DashBoard