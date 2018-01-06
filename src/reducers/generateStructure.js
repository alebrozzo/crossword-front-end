import setWordNumbers from "./setWordNumbers";

const generateStructure = (crossword, { rowCount, colCount }) => {
    const newState = Object.assign({}, crossword);
    const newGrid = new Array(rowCount); // TODO: replace this with an API call?
    for (let row = 0; row < rowCount; row++) {
        newGrid[row] = new Array(colCount);
        for (let col = 0; col < colCount; col++) {
            newGrid[row][col] = null; //row.toString() + '_' + col.toString();
        }
    }
    newState.grid = newGrid;
    return setWordNumbers(newState);
};

export default generateStructure;
