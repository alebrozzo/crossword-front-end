import { configure } from "@storybook/react";
import { setDefaults } from "react-storybook-addon-props-combinations";

function loadStories() {
    require("../src/stories");
}

configure(loadStories, module);
