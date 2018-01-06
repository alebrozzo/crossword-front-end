import React from "react";
import PropTypes from "prop-types";

export function Definitions({ header, definitions, className }) {
    return (
        <div className={className}>
            <h5>{header}</h5>
            <ol>
                {definitions.map(({ definition, definitionNumber }) => (
                    <li value={definitionNumber} key={definitionNumber}>
                        {definition}
                    </li>
                ))}
            </ol>
        </div>
    );
}
Definitions.propTypes = {
    header: PropTypes.string.isRequired,
    definitions: PropTypes.array.isRequired,
    className: PropTypes.string,
};
