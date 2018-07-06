import React from 'react';
import { connect } from 'react-redux';
import {updateColOrder, updateColWidth, deleteRow, updateCell, updateSort, deleteCol, addNew} from '../actions/grid';
import {getSortedGridData} from '../selectors';
import Grid from '../components/Grid';

const GridContainer = ({gridData, gridCols, login, updateColOrder, updateColWidth, deleteRow, updateCell, updateSort, deleteCol, addNew}) =>
    login === '' ? (null)
        :(<Grid
            gridData={gridData}
            gridCols={gridCols}
            updateColOrder = {updateColOrder}
            updateColWidth = {updateColWidth}
            deleteRow = {deleteRow}
            updateCell = {updateCell}
            updateSort = {updateSort}
            deleteCol = {deleteCol}
            addNew = {addNew}
        />);

const mapStateToProps = (state) => ({
    gridData: getSortedGridData(state),
    gridCols: state.gridCols,
    login: state.login.login
});

export default connect(
    mapStateToProps,
    {updateColOrder, updateColWidth, deleteRow, updateCell, updateSort, deleteCol, addNew}
)(GridContainer)
