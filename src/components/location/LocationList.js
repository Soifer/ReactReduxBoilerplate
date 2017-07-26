import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';


const LocationList = ({locations}) => {
const state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px'
};
    return (
        <div>
            <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
                <Table
                    height={state.height}
                    fixedHeader={state.fixedHeader}
                    fixedFooter={state.fixedFooter}
                    selectable={state.selectable}
                    multiSelectable={state.multiSelectable}>
                    <TableHeader
                        displaySelectAll={state.showCheckboxes}
                        adjustForCheckbox={state.showCheckboxes}
                        enableSelectAll={state.enableSelectAll}>
                        <TableRow>
                            <TableHeaderColumn
                                colSpan="3"
                                tooltip="Super Header"
                                style={{
                                textAlign: 'center'
                            }}>
                                Super Header
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Status">Address</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={state.showCheckboxes}
                        deselectOnClickaway={state.deselectOnClickaway}
                        showRowHover={state.showRowHover}
                        stripedRows={state.stripedRows}>
                        {locations.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{index}</TableRowColumn>
                                <TableRowColumn>{row.name}</TableRowColumn>
                                <TableRowColumn>{row.address}</TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </MuiThemeProvider>
        </div>
    );

};

LocationList.propTypes = {
    locations: PropTypes.array.isRequired
};

export default LocationList;