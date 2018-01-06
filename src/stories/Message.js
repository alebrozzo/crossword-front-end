import React from "react";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Message } from "../components/Common/Message";
// import { MessageContainer } from "../components/Common/MessageContainer";

storiesOf("Common", module).add(
    "Message box",
    withPropsCombinations(
        Message,
        {
            message: ["test message"],
            messageType: ["E", "W", "S", "I", "other"],
            onClose: [action("Close")],
        },
        { showSource: true }
    )
);
// .add("Message Container", () => <MessageContainer message="test container" messageType="w" />);
