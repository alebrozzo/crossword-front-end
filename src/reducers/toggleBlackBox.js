import setWordNumbers, { BlackBox } from "./setWordNumbers";

const toggleBlackBox = (crossword, { rowIndex, colIndex }) => {
    //TODO: see if this can be rewritten in such a way that it only affects the cell or row... not sure if would work as the whole array would be different. Compare with toggleToDo on ToDo app.
    const updatedCrossword = Object.assign({}, crossword);
    //const updatedGrid = JSON.parse(JSON.stringify(crossword.grid));
    const currentSateIsBlackBox = updatedCrossword.grid[rowIndex][colIndex] === BlackBox;
    updatedCrossword.grid[rowIndex][colIndex] = currentSateIsBlackBox ? null : BlackBox;
    return setWordNumbers(updatedCrossword);
};

export default toggleBlackBox;
