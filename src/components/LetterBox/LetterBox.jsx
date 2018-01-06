import React from "react";
import PropTypes from "prop-types";

export const LetterBox = ({ isBlackBox, wordNumber, letter, onClick }) => (
    <div className={"letterBox " + (isBlackBox ? "letterBlackBox" : "letterWhiteBox")} onClick={onClick}>
        <div className="wordNumberContainer">{wordNumber === 0 ? "" : wordNumber}</div>
        {letter}
    </div>
);
LetterBox.propTypes = {
    isBlackBox: PropTypes.bool.isRequired,
    wordNumber: PropTypes.number,
    letter: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
