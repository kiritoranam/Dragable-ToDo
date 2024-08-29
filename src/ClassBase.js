import React from "react";
import ChildBase from "./childBase";

class ClassBase extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <ChildBase name={""}/>
        )
    }
}

export default ClassBase