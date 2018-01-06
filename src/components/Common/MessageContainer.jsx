import { connect } from "react-redux";

import { resetErrorMessage } from "../../actions";
import { Message } from "./Message";

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(resetErrorMessage()),
});

export const MessageContainer = connect(null, mapDispatchToProps)(Message);
