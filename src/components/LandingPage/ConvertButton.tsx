import React from 'react';
import { useLandingPageContext } from './LandingPageContext';

function ConvertButton() {
  const { state, onConvert } = useLandingPageContext();

  // Only show the button if a file is selected and not loading
  if (!state.selectedFile || state.isLoading) {
    return null;
  }

  return (
    <button
      onClick={onConvert}
      disabled={state.isLoading || !state.selectedFile}
      className="btn btn-primary text-lg px-8 py-3 mt-4" // Larger button
    >
      Convert to Markdown
    </button>
  );
}

export default ConvertButton;