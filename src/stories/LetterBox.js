import React from "react";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { LetterBox } from "../components/LetterBox/LetterBox";

storiesOf("LetterBox", module).add(
    "Letter box",
    withPropsCombinations(
        LetterBox,
        {
            isBlackBox: [true, false],
            wordNumber: [null, 0, 5],
            letter: ["A"],
            onClick: [action("Letter box clicked")],
        },
        { showSource: true }
    )
);
