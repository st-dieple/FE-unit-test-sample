import React from 'react';
import { Navigate } from 'react-router-dom';

function isAuthenticated(): boolean {
  const token = localStorage.getItem('ACCESS_TOKEN');
  return token ? true : false;
}

export function privateRoute(Wrapped: any) {
  return (props: any) => isAuthenticated() ? <Wrapped /> : <Navigate to="/auth/login" />;
}
