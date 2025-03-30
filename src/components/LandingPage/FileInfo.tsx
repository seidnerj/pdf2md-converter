import React from 'react';
import { useLandingPageContext } from './LandingPageContext';
import { DocumentIcon } from '@heroicons/react/24/outline';

function FileInfo() {
  const { state } = useLandingPageContext();

  if (!state.selectedFile || state.isLoading) {
    return null; // Don't show if no file or loading
  }

  return (
    <div className="mt-4 p-3 bg-gray-100 rounded-md border border-gray-200 flex items-center space-x-2 max-w-lg w-full justify-center">
        <DocumentIcon className="w-5 h-5 text-secondary flex-shrink-0" />
        <span className="text-sm text-gray-700 truncate">
            Selected: <span className="font-medium">{state.selectedFile.name}</span>
        </span>
    </div>
  );
}

export default FileInfo;