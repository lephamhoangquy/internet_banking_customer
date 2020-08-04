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
    { id: 2, name: 'Số tài khoản' },
    { id: 3, name: 'Tên gợi nhớ' },
    { id: 4, name: 'Thao tác' },
    { id: 5, name: '' },
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
