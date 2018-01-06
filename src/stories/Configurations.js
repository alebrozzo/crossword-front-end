import React from "react";
import withPropsCombinations from "react-storybook-addon-props-combinations";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { solvedCrossword } from "./utils";

import { Configurations } from "../components/Configurations/Configurations";

storiesOf("Config", module).add(
    "Config",
    withPropsCombinations(
        Configurations,
        {
            isGenerating: [true, false],
            grid: [solvedCrossword.grid],
            onSizeChange: [action("Crossword size changed")],
            onGenerate: [action("Generate clicked")],
        },
        { showSource: false }
    )
);
