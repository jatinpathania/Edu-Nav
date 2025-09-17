import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const PersistentAuth = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch({ type: 'LOGIN_SUCCESS', payload: { token } });
    }
  }, [dispatch]);
  return children;
};

export default PersistentAuth;