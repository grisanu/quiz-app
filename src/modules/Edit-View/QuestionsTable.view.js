import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const QuestionsTable = props => (
  <Table>
    <TableHeader>
      <TableRow>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Question</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody>
    </TableBody>
  </Table>
);

QuestionsTable.propTypes = {

};

export default QuestionsTable;
