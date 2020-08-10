/* eslint-disable import/prefer-default-export */
import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import Loader from 'react-loader-spinner';

export const LoadingIndicator = () => {
  const { promiseInProgress } = usePromiseTracker();

  return (
    promiseInProgress && (
      <div
        style={{
          width: '100%',
          height: '100',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'fixed',
          top: '50%',
          zIndex: 1000,
        }}
      >
        <Loader type="ThreeDots" color="#3f51b5" height="100" width="100" />
      </div>
    )
  );
};
