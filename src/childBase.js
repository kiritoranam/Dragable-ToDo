import React from "react";

export default class ChildBase extends React.Component {
    constructor(props) {
        super(props);
        this.state = { first: "" }

    }
    handlChange = () => {
        this.setState({ first: "Tushar" })
    }

    render() {

        return (
            <>
                <div>{this.state.first}</div>
                <button onClick={this.handlChange}>{"Click"}</button>
            </>
        )
    }
}