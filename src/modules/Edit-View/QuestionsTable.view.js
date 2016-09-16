import React, { PropTypes } from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const QuestionsTable = props => (
  <Table height="20em" fixedHeader={ true } selectable={ false }>
    <TableHeader displaySelectAll={ false } adjustForCheckbox={ false }>
      <TableRow>
        <TableHeaderColumn colSpan="3" tooltip="Quiz Name" style={ {textAlign: 'center'} }>
          { props.session.currentQuiz.name }
        </TableHeaderColumn>
      </TableRow>
      <TableRow>
        <TableHeaderColumn>Question</TableHeaderColumn>
        <TableHeaderColumn>Type</TableHeaderColumn>
        <TableHeaderColumn>Answer</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody displayRowCheckbox={ false }>
      {
        props.questionsList.map(question => (
          <TableRow key={ question.id }>
            <TableRowColumn>{ question.question }</TableRowColumn>
            <TableRowColumn>{ question.type }</TableRowColumn>
            <TableRowColumn>{ question.answer }</TableRowColumn>
          </TableRow>
        ))
      }
    </TableBody>
  </Table>
);

QuestionsTable.propTypes = {
  questionsList: PropTypes.array.isRequired,
  session: PropTypes.object.isRequired
};

export default QuestionsTable;
