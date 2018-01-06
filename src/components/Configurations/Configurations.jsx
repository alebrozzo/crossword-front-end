import React from "react";
import PropTypes from "prop-types";

export function Configurations({ grid, isGenerating, onSizeChange, onGenerate }) {
    const buttonText = "Generate!";
    const rowCount = grid.length;
    const colCount = grid.length === 0 ? 0 : grid[0].length;

    const safeSize = e => {
        const selectedSize = +e.currentTarget.value;
        if (Number.isNaN(selectedSize) || selectedSize === 0) {
            return 0;
        }
        return Math.abs(selectedSize);
    };

    return (
        <div className={isGenerating ? " disabledElement" : ""}>
            <p>
                Select the number of rows and columns of the crossword and then click on the boxes to toggle letter or
                black box. When you are ready click on "{buttonText}"
            </p>
            <input
                type="text"
                className="paramConfig txt txtSmall"
                id="txtRowCount"
                value={rowCount}
                disabled={isGenerating}
                onChange={e => onSizeChange(safeSize(e), colCount)}
            />
            rows and
            <input
                type="text"
                className="paramConfig txt txtSmall"
                id="txtColCount"
                value={colCount}
                disabled={isGenerating}
                onChange={e => onSizeChange(rowCount, safeSize(e))}
            />
            columns
            <button
                type="button"
                className="paramConfig button btnMedium"
                disabled={isGenerating}
                onClick={() => onGenerate(grid)}>
                {buttonText}
            </button>
        </div>
    );
}
Configurations.propTypes = {
    grid: PropTypes.array.isRequired,
    isGenerating: PropTypes.bool.isRequired,
    onSizeChange: PropTypes.func.isRequired,
    onGenerate: PropTypes.func.isRequired,
};
