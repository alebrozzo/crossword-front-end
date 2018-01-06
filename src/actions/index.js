import { BlackBox } from "../reducers/setWordNumbers";

const constants = {
    GENERATE_STRUCTURE: "generateStructure",
    TOGGLE_BLACK_BOX: "toggleBlackBox",
    FILL_GRID: "fillGrid",
    REQUEST_CROSSWORD: "requestCrossword",
    RECEIVE_CROSSWORD: "receiveCrossword",
    ERROR_HANDLING: "errorHandling",
    RESET_ERROR_MESSAGE: "resetErrorMessage",
};

export default constants;

export const generateStructure = (rowCount, colCount) => ({
    type: constants.GENERATE_STRUCTURE,
    rowCount,
    colCount,
});

export const toggleBlackBox = (rowIndex, colIndex) => ({
    type: constants.TOGGLE_BLACK_BOX,
    rowIndex,
    colIndex,
});

export const fillGrid = random => ({
    type: constants.FILL_GRID,
});

// Resets the currently visible error message.
export const resetErrorMessage = () => ({
    type: constants.RESET_ERROR_MESSAGE,
});

export const requestCrossword = grid => {
    return {
        type: constants.REQUEST_CROSSWORD,
        grid,
    };
};

export const receiveCrossword = crossword => {
    //console.log('received crossword:', crossword);
    return {
        type: constants.RECEIVE_CROSSWORD,
        crossword,
    };
};

export const errorHandling = error => {
    return {
        type: constants.ERROR_HANDLING,
        errorMessage: error.message,
    };
};

const boxesToUrlParam = grid => {
    let returnValue = "[";
    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
        returnValue += "[";
        for (let colIndex = 0; colIndex < grid[rowIndex].length; colIndex++) {
            returnValue += grid[rowIndex][colIndex] === BlackBox ? '"%23",' : "null,";
        }
        returnValue = returnValue.slice(0, -1) + "],";
    }
    return returnValue.slice(0, -1) + "]";
};

export const fetchCrossword = (grid = null) => {
    const gridParam =
        grid === null || grid.length === 0 || grid[0].length === 0 || (grid.length === 1 && grid[0].length === 1)
            ? null
            : boxesToUrlParam(grid);
    //console.log('gridParam:', gridParam, grid);
    return dispatch => {
        dispatch(requestCrossword(gridParam));
        return (
            fetch(
                gridParam === null
                    ? "https://portfolio-back-end.herokuapp.com/apicw/random"
                    : `https://portfolio-back-end.herokuapp.com/apicw/full/${gridParam}`
            )
                //`http://localhost:5000/apicw/random` : `http://localhost:5000/apicw/full/${gridParam}`)
                .then(response => response.json())
                .then(json => {
                    // console.log("received json", json);
                    dispatch(receiveCrossword(JSON.parse(json)));
                })
                .catch(err => {
                    console.log("error fetching crossword!", err);
                    dispatch(errorHandling(err));
                })
        );
    };
};
