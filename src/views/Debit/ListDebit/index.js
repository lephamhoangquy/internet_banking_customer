/* eslint-disable camelcase */
/* eslint-disable no-alert */
/* eslint-disable react/require-default-props */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import ReceiptIcon from '@material-ui/icons/Receipt';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import HeadList from './HeadTable';
import DebitItem from './DebitItem';
import { getListDebit, verifyPayDebitOTP, rejectDebit } from '../../../Actions';
import DebitList from '../../../Components/Dashboard/TableBody';

const styles = {
  table: {
    width: '96%',
    marginLeft: 20,
  },
  pagination: {
    marginTop: 6,
    display: 'flex',
    justifyContent: 'center',
  },
  notFound: {
    textAlign: 'center',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    '& svg': {
      margin: '15px 10px',
    },
  },
  btn: {
    position: 'absolute',
    right: 50,
    top: 88,
    '& a': {
      textDecoration: 'none',
    },
  },
};

const Debit = ({
  classes,
  getDebit,
  debit,
  payDebit,
  isPayDebit,
  handleCloseOTPForm,
  verify,
  removeDebit,
}) => {
  const [page, setPage] = useState(1);
  const [idDebit, setIdDebit] = useState(null);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const handleSubmitOTP = ({ OTP }) => {
    verify(OTP);
    handleCloseOTPForm();
  };

  useEffect(() => {
    getDebit(page);
  }, [page]);

  const handleSubmitRemove = ({ message }) => {
    if (idDebit) {
      removeDebit(idDebit, message);
    }
  };
  const { total, items } = debit;

  return (
    <div>
      <div className={classes.title}>
        <ReceiptIcon fontSize="large" />
        <h2>Danh sách ghi nợ</h2>
        <div className={classes.btn}>
          <Link to="/create-debit">
            <Button color="primary" size="small" variant="outlined">
              Nhắc nợ mới
            </Button>
          </Link>
        </div>
      </div>
      <TableContainer className={classes.table} component={Paper}>
        <Table>
          <HeadList />
          <DebitList>
            {Array.isArray(items) &&
              items.map((elem, index) => (
                <DebitItem
                  key={elem.id}
                  index={index + 1}
                  payDebit={payDebit}
                  debit={elem}
                  isPayDebit={isPayDebit}
                  handleCloseOTPForm={handleCloseOTPForm}
                  handleSubmitOTP={handleSubmitOTP}
                  setIdDebit={setIdDebit}
                  handleSubmitRemove={handleSubmitRemove}
                />
              ))}
          </DebitList>
        </Table>
      </TableContainer>
      {(!Array.isArray(items) || items.length === 0) && (
        <div className={classes.notFound}>
          <p>Không có giao dịch nào.</p>
        </div>
      )}
      <div className={classes.pagination}>
        <Pagination count={Math.ceil(total / 10)} onChange={handleChangePage} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  debit: state.debit,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getDebit: (page) => {
      dispatch(getListDebit(page));
    },
    verify: (OTP) => {
      dispatch(verifyPayDebitOTP(OTP));
    },
    removeDebit: (id, message) => {
      dispatch(rejectDebit(id, message));
    },
  };
};

Debit.propTypes = {
  classes: PropTypes.instanceOf(Object),
  getDebit: PropTypes.func,
  removeDebit: PropTypes.func,
  debit: PropTypes.instanceOf(Object),
  payDebit: PropTypes.func,
  isPayDebit: PropTypes.bool,
  handleCloseOTPForm: PropTypes.func,
  verify: PropTypes.func,
};

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps),
)(Debit);
