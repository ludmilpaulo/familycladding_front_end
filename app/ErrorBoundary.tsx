import React from 'react';

interface ErrorBoundaryProps {
  errorCode: number | false;
  stars: number | null;
  children: React.ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children, errorCode, stars }) => {
  if (errorCode && errorCode !== 0) {
    return <div>Error {errorCode} occurred</div>; // Simple error display, adjust as needed
  }

  // If no error, render children
  return <>{children}</>;
};

export default ErrorBoundary;
