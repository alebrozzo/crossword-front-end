import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { solvedCrossword } from "./utils";

import { Definitions } from "../components/Definitions/Definitions";

storiesOf("Definitions", module).add("Definition column", () => (
    <Definitions className="definitions" header="HORIZONTAL" definitions={solvedCrossword.horizontalWords} />
));
