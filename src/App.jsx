import React from "react";
import PropTypes from "prop-types";

import { MessageContainer } from "./components/Common/MessageContainer";
import { ConfigurationsContainer } from "./components/Configurations/ConfigurationsContainer";
import { CrosswordContainer } from "./components/Crossword/CrosswordContainer";
import { Definitions } from "./components/Definitions/Definitions";

import "./assets/css/crossword.css";

export class AppCrossword extends React.Component {
    componentDidMount() {
        this.unsubscribe = this.context.store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const crosswordState = this.context.store.getState();
        // console.log("crosswordState", crosswordState);
        return (
            <div className="AppCrossword">
                <h1>Crossword Generator</h1>
                <MessageContainer message={crosswordState.errorMessage} messageType={"E"} />
                <ConfigurationsContainer
                    crossword={crosswordState.crossword}
                    isGenerating={crosswordState.isRequesting}
                />
                <br />
                <CrosswordContainer crossword={crosswordState.crossword} isGenerating={crosswordState.isRequesting} />
                <br />
                <div
                    className={
                        "flexContainer" +
                        (crosswordState.isRequesting ||
                        (crosswordState.crossword.horizontalWords.length === 0 &&
                            crosswordState.crossword.verticalWords.length === 0)
                            ? " hiddenElement"
                            : "")
                    }>
                    <Definitions
                        className="definitions"
                        header="HORIZONTAL"
                        definitions={crosswordState.crossword.horizontalWords}
                    />
                    <Definitions
                        className="definitions"
                        header="VERTICAL"
                        definitions={crosswordState.crossword.verticalWords}
                    />
                </div>
            </div>
        );
    }
}
AppCrossword.contextTypes = {
    store: PropTypes.object,
};
