'use client';

import { createContext } from 'react';

import { useId } from '@/hooks';

const DEFAULTS = {
  id: ''
};

const ErrorBoundaryContext = createContext(DEFAULTS);

const ErrorBoundaryProvider = ({ value, ...props }) => {
  const id = useId();

  return (
    <ErrorBoundaryContext.Provider
      value={{ id, ...value }}
      {...props}
    />
  );
};

export default ErrorBoundaryContext;
export { ErrorBoundaryProvider };
