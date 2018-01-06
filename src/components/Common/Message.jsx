import React from "react";
import PropTypes from "prop-types";

export function Message({ message, messageType, onClose }) {
    return (
        <div className="fullsizeContainer messageBox">
            <div
                className={
                    message && message !== ""
                        ? messageType === "E"
                          ? " error"
                          : messageType === "W"
                            ? " warning"
                            : messageType === "S" ? " success" : messageType === "I" ? " info" : ""
                        : " noDisplayElement"
                }>
                <div className="messageBoxClose" onClick={onClose}>
                    X
                </div>
                <span className="messageText">{message}</span>
            </div>
        </div>
    );
}
Message.propTypes = {
    message: PropTypes.string,
    messageType: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};
