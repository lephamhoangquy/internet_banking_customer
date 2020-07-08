import React from 'react';
import ChargeForm from './formCharge';

const Charge = () => {
  const submit = (values) => {
    console.log('submit -> values', values);
  };
  return (
    <>
      <ChargeForm onSubmit={submit} />
    </>
  );
};

export default Charge;
