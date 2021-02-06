import React, { useEffect, useMemo, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchListData } from './actions';
import CustomGrid from './components/grid/CustomGrid';
import { COLUMNS } from './columns';

function ListingPage() {
	const listData = useSelector(state => state.listData);
	const dispatch = useDispatch();
	const columns = useMemo(() => COLUMNS, []);

	const fetchData = useCallback((state) => {
		dispatch(fetchListData(state));
	}, []);

	useEffect(() => {
		dispatch(fetchListData({}));
	}, [dispatch, fetchData]);

	return (
		<>
			<h1>Listing</h1>
			<CustomGrid
				data={listData}
				columns={columns}
				fetchData={fetchData}
			/>
		</>
	);
}

export default ListingPage;