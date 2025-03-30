import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useLandingPageContext } from './LandingPageContext';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'; // Example Icon

function UploadZone() {
  const { onFileDrop, state } = useLandingPageContext();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileDrop(acceptedFiles);
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { // Specify accepted MIME types
        'application/pdf': ['.pdf'],
    },
    multiple: false // Allow only single file upload
  });

  return (
    <div
      {...getRootProps()}
      className={`w-full max-w-lg p-8 border-2 border-dashed rounded-lg text-center cursor-pointer transition-colors duration-200 ${
        isDragActive ? 'border-primary bg-blue-50' : 'border-gray-300 hover:border-primary'
      } ${state.isLoading ? 'opacity-50 cursor-not-allowed' : ''}`} // Disable during loading
    >
      <input {...getInputProps()} disabled={state.isLoading}/>
      <CloudArrowUpIcon className="w-12 h-12 mx-auto text-gray-400 mb-4" />
      {isDragActive ? (
        <p className="text-primary font-semibold">Drop the PDF here ...</p>
      ) : (
        <p className="text-secondary">
          Drag & drop a PDF file here, or <span className="font-semibold text-primary">click to select file</span>
        </p>
      )}
       <p className="text-xs text-gray-500 mt-2">PDF files only, max 10MB (example limit)</p>
    </div>
  );
}

export default UploadZone;