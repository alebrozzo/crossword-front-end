export const BlackBox = "#";

// Fills two collections of objects, one for horizontal and one for vertical words.
// Objects are { cell: { row, col}, definitionNumber, word, definition, length }
// Copied from crossword backend
const setWordNumbers = crossword => {
    const newCrossword = JSON.parse(JSON.stringify(crossword));
    newCrossword.horizontalWords = [];
    newCrossword.verticalWords = [];

    let currentNumber = 1;
    let wordStarts = false;

    for (let row = 0; row < newCrossword.grid.length; row++) {
        for (let col = 0; col < newCrossword.grid[row].length; col++) {
            // if an horizontal word begins, add it to the array
            if (
                col < newCrossword.grid[row].length - 1 && // last column cannot have starting horizontal words, and should add check later if not testing for column index here
                newCrossword.grid[row][col] !== BlackBox &&
                (col === 0 || newCrossword.grid[row][col - 1] === BlackBox) &&
                newCrossword.grid[row][col + 1] !== BlackBox
            ) {
                // if (first col or prior cell has black box), and not a black box follows, a new word begins on row
                newCrossword.horizontalWords.push({
                    cell: { row, col },
                    definitionNumber: currentNumber,
                    word: "",
                    definition: "",
                    length: 0,
                });
                wordStarts = true;
            }
            // if a vertical word begins, add it to the array
            if (
                row < newCrossword.grid.length - 1 && // last row cannot have starting vertical words; should add check later if not testing for row index here
                newCrossword.grid[row][col] !== BlackBox &&
                (row === 0 || newCrossword.grid[row - 1][col] === BlackBox) &&
                newCrossword.grid[row + 1][col] !== BlackBox
            ) {
                // if (first row, or cell above has black box), and not a black box below, a new word begins on column
                newCrossword.verticalWords.push({
                    cell: { row, col },
                    definitionNumber: currentNumber,
                    word: "",
                    definition: "",
                    length: 0,
                });
                wordStarts = true;
            }
            // we save whether a word starts in stead of just increasing the currentNumber because there could be a case where both an horizontal and a vertical word share the number
            if (wordStarts) {
                currentNumber++;
                wordStarts = false;
            }
        }
    }
    return newCrossword;
};

export default setWordNumbers;
