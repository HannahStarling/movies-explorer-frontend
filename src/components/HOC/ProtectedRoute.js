import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MAIN_ROUTE } from '../../utils/constants';

export const ProtectedRoute = ({ loggedIn, component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedIn) {
      navigate(MAIN_ROUTE);
    }
  }, [loggedIn, navigate]);

  return <>{loggedIn && component}</>;
};
