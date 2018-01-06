import React from "react";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { solvedCrossword } from "./utils";

import { Crossword } from "../components/Crossword/Crossword";

storiesOf("Crossword", module).add(
    "Full crossword",
    withPropsCombinations(
        Crossword,
        {
            isGenerating: [true, false],
            crossword: [solvedCrossword],
            onToggleBlackBox: [action("Toggle letter box color")],
        },
        { showSource: false }
    )
);
