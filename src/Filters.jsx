import React from "react";
import remove from "/images/icon-remove.svg";

export default function Filters({ filters, reset, removeFilter }) {
  return (
    <div className="filter-container">
      <div className="filter">
        {filters.map((filter, index) => (
          <div className="filter-item" key={index}>
            <p>{filter}</p>
            <img
              className="cancel"
              src={remove}
              alt={remove}
              onClick={() => removeFilter(filter)}
            />
          </div>
        ))}
      </div>
      <p onClick={reset} className="clear">
        Clear
      </p>
    </div>
  );
}
