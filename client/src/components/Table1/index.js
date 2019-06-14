import React, { Component } from 'react';
import {BootstrapTable, 
       TableHeaderColumn} from 'react-bootstrap-table';
// import '../css/Table.css';
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
      
 
 
class Table1 extends Component {
  render() {
    return (
      <div>
        <BootstrapTable data={this.props.data}>
          <TableHeaderColumn isKey dataField='machine_name'>
            Machine_Name
          </TableHeaderColumn>
          <TableHeaderColumn dataField='assignedto'>
            AssignedTo
          </TableHeaderColumn>
          <TableHeaderColumn dataField='api1'>
            API1
          </TableHeaderColumn>
          <TableHeaderColumn dataField='ping_tool'>
            Ping_Tool
          </TableHeaderColumn>
          <TableHeaderColumn dataField='status'>
            Status
          </TableHeaderColumn>
          <TableHeaderColumn dataField='comment'>
            Comment
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
 
export default Table1;
