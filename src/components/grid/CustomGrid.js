import React, { useMemo, useEffect } from 'react';
import { useFilters, usePagination, useSortBy, useTable } from "react-table";
import { ColumnFilter } from "./filters/ColumnFilter";
import Spinner from './filters/Spinner';
import { Wrapper, TableUtility, Table, Paginator } from "./StyledComponents";

const CustomGrid = ({ data, columns, fetchData }) => {
	const defaultColumn = useMemo(
		() => ({
			Filter: ColumnFilter
		}), []
	);

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		page,
		nextPage,
		previousPage,
		canPreviousPage,
		canNextPage,
		pageCount,
		setPageSize,
		pageOptions,
		state,
		gotoPage,
		prepareRow
	} = useTable(
		{
			columns,
			data,
			defaultColumn,
			manualFilters: true,
			manualSortBy: true,
			manualPagination: true,
			initialState: { pageIndex: 0, pageSize: 25 },
		},
		useFilters,
		useSortBy,
		usePagination
	);

	const { pageIndex, pageSize, sortBy, filters } = state;

	useEffect(() => {
		fetchData({ pageIndex, pageSize, sortBy, filters });
	}, [fetchData, pageIndex, pageSize, sortBy, filters]);

	return (
		<>
			<Wrapper>
				<TableUtility>
					<div>{`Showing ${pageIndex * pageSize + 1} - ${(pageIndex + 1) * pageSize
						} of 107`}</div>
					<div>
						<button onClick={() => alert(`Hello`)}>Reset filters</button>
						<button>Add</button>
						<button>Export</button>
					</div>
				</TableUtility>
			</Wrapper>
			<Wrapper>
				<Spinner />
				<Table {...getTableProps()}>
					<caption>Listing</caption>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => {
									return (
										<th
											scope="col"
										>
											<div {...column.getHeaderProps(column.getSortByToggleProps())}>
												{column.render("Header")}
												<span>
													{column.disableSortBy
														? ""
														: column.isSorted
															? column.isSortedDesc
																? " 🠓"
																: " 🠑"
															: " ⇵"}
												</span>
											</div>
											<div>
												{column.canFilter ? column.render("Filter") : null}
											</div>
										</th>
									);
								})}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{page.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										return (
											<td {...cell.getCellProps()}>{cell.render("Cell")}</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</Wrapper>
			<Wrapper>
				<Paginator>
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
                </button>{" "}
					<span>
						<input
							type="number"
							value={pageIndex + 1}
							defaultValue={pageIndex + 1}
							onChange={(e) => {
								const pageNumber = e.target.value
									? Number(e.target.value) - 1
									: 0;
								gotoPage(pageNumber);
							}}
							style={{ width: "50px" }}
						/>{" "}
                of {pageOptions.length}
					</span>{" "}
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
                </button>
				</Paginator>
				<div>
					<button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
						{"<<"}
					</button>{" "}
					<button onClick={() => previousPage()} disabled={!canPreviousPage}>
						Previous
                </button>{" "}
					<button onClick={() => nextPage()} disabled={!canNextPage}>
						Next
                </button>{" "}
					<button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
						{">>"}
					</button>{" "}
					<span>
						Page{" "}
						<strong>
							{pageIndex + 1} of {pageOptions.length}
						</strong>{" "}
					</span>
					<span>
						| Go to page:{" "}
						<input
							type="number"
							defaultValue={pageIndex + 1}
							onChange={(e) => {
								const pageNumber = e.target.value
									? Number(e.target.value) - 1
									: 0;
								gotoPage(pageNumber);
							}}
							style={{ width: "50px" }}
						/>
					</span>{" "}
					<select
						value={pageSize}
						onChange={(e) => setPageSize(Number(e.target.value))}
					>
						{[5, 10, 25, 50, 100].map((pageSize) => (
							<option key={pageSize} value={pageSize}>
								Show {pageSize}
							</option>
						))}
					</select>
				</div>
			</Wrapper>
		</>
	);
};

export default CustomGrid;