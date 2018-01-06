import { connect } from "react-redux";

import { toggleBlackBox } from "../../actions";
import { Crossword } from "./Crossword";

const mapDispatchToProps = (dispatch, ownProps) => ({
    onToggleBlackBox: (rowIndex, colIndex) => dispatch(toggleBlackBox(rowIndex, colIndex)),
});

export const CrosswordContainer = connect(null, mapDispatchToProps)(Crossword);
