import React from 'react';
import { TableRow, TableCell, TableHead } from '@material-ui/core';

const HeadTable = () => {
  const headCells = [
    { id: 1, name: 'STT' },
    { id: 2, name: 'Số tài khoản' },
    { id: 3, name: 'Tên gợi nhớ' },
    { id: 4, name: 'Thao tác' },
  ];
  return (
    <TableHead>
      <TableRow>
        {headCells.map(({ id, name }) => (
          <TableCell key={id}>{name}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default HeadTable;
