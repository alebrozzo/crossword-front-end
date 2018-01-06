import { connect } from "react-redux";

import { generateStructure, fetchCrossword, resetErrorMessage } from "../../actions";
import { Configurations } from "./Configurations";

const mapStateToProps = (state, ownProps) => ({
    grid: ownProps.crossword.grid,
});

const mapDispatchToProps = dispatch => ({
    onSizeChange: (rowCount, colCount) => {
        dispatch(resetErrorMessage());
        dispatch(generateStructure(rowCount, colCount));
    },
    onGenerate: grid => {
        dispatch(resetErrorMessage());
        dispatch(fetchCrossword(grid));
    },
});

export const ConfigurationsContainer = connect(mapStateToProps, mapDispatchToProps)(Configurations);
