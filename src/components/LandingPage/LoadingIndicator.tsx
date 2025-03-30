import React from 'react';
import { useLandingPageContext } from './LandingPageContext';

function LoadingIndicator() {
  const { state } = useLandingPageContext();

  if (!state.isLoading) {
    return null;
  }

  return (
    <div className="mt-6 flex items-center justify-center space-x-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      <span className="text-secondary">Converting your PDF...</span>
    </div>
  );
}

export default LoadingIndicator;