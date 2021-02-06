import React from "react";

export function PreSelectColumnFilter({
    column: { filterValue, setFilter, preFilteredRows, id }
  }) {
    return (
      <select
        value={filterValue}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
      >
        <option value="">All</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="11">11</option>
        <option value="12">12</option>
      </select>
    );
  }
  