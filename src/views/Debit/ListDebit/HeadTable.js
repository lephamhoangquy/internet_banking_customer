import React from 'react';
import { TableRow, TableCell, TableHead } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = {
  cell: {
    fontWeight: 'bold',
  },
};

const HeadTable = ({ classes }) => {
  const headCells = [
    { id: 1, name: 'STT' },
    { id: 2, name: 'Thời gian' },
    { id: 3, name: 'Người nhắc nợ' },
    { id: 4, name: 'Người bị nhắc nợ' },
    { id: 5, name: 'Số tiền' },
    { id: 6, name: 'Lời nhắn' },
    { id: 7, name: 'Thao tác' },
  ];
  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ id, name }) => (
          <TableCell className={classes.cell} key={id}>
            {name}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

HeadTable.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default withStyles(styles)(HeadTable);
