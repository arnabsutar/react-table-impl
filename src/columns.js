import React from "react";
import { SelectColumnFilter, PreSelectColumnFilter } from './components';

export const COLUMNS = [
  {
    Header: "ID",
    Filter: PreSelectColumnFilter,
    accessor: "id"
  },
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ row: { original } }) => {
      const { name } = original;
      return (
        <a href="javascript:void(0)" onClick={() => alert(JSON.stringify(original, null, 2))}>
          {name}
        </a>
      );
    }
  },
  {
    Header: "Username",
    accessor: "username"
  },
  {
    Header: "Email",
    Filter: SelectColumnFilter,
    accessor: "email"
  },
  {
    Header: "Phone",
    accessor: "phone"
  },
  {
    Header: "Website",
    Filter: SelectColumnFilter,
    accessor: "website"
  },
  {
    Header: "Actions",
    accessor: "_id",
    disableFilters: true,
    disableSortBy: true,
    Cell: ({ row }) => (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => alert(JSON.stringify(row.original, null, 2))}>
          Edit
          </button>{" "}
        <button onClick={() => alert(JSON.stringify(row.original, null, 2))}>
          Delete
          </button>
      </div>
    )
  }
];