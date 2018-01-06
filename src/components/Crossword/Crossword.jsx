import React from "react";
import PropTypes from "prop-types";

import { LetterBox } from "../LetterBox/LetterBox";
// import { BlackBox } from '../reducers/setWordNumbers';
const BlackBox = "#";

const getWordNumberInArray = (wordArray, row, col) => {
    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].cell.row === row && wordArray[i].cell.col === col) {
            return wordArray[i].definitionNumber;
        }
    }
    return 0;
};

const getWordNumber = (crossword, rowIndex, colIndex) => {
    const wordNumber = getWordNumberInArray(crossword.horizontalWords, rowIndex, colIndex);
    return wordNumber !== 0 ? wordNumber : getWordNumberInArray(crossword.verticalWords, rowIndex, colIndex);
};

const getLetterFromWords = (crossword, rowIndex, colIndex) => {
    return crossword && crossword.grid && crossword.grid[rowIndex] && crossword.grid[rowIndex][colIndex];
};

const isBlackBox = (crossword, rowIndex, colIndex) => {
    return crossword.grid[rowIndex][colIndex] === BlackBox;
};

export function Crossword({ crossword, isGenerating, errorMessage, onToggleBlackBox }) {
    return (
        <div className="crossword">
            <div className={"fullsizeContainer" + (isGenerating ? " disabledElement" : "")}>
                <span className={"fullSize generatingMsg" + (isGenerating ? "" : " hiddenElement")}>
                    Generating Crossword...
                </span>
                {crossword.grid.map((row, rowIndex) => (
                    <div key={"row_" + rowIndex} className="crossRow">
                        {row.map((col, colIndex) => (
                            <LetterBox
                                key={`cell_${rowIndex}_${colIndex}`}
                                isBlackBox={isBlackBox(crossword, rowIndex, colIndex)}
                                wordNumber={
                                    isBlackBox(crossword, rowIndex, colIndex)
                                        ? 0
                                        : getWordNumber(crossword, rowIndex, colIndex)
                                }
                                letter={
                                    isBlackBox(crossword, rowIndex, colIndex)
                                        ? ""
                                        : getLetterFromWords(crossword, rowIndex, colIndex)
                                }
                                onClick={() => onToggleBlackBox(rowIndex, colIndex)}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
Crossword.propTypes = {
    crossword: PropTypes.object.isRequired,
    isGenerating: PropTypes.bool.isRequired,
    onToggleBlackBox: PropTypes.func.isRequired,
};
