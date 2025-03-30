import React, { createContext, useContext } from 'react';
import { LandingPageState } from './state';

interface LandingPageContextProps {
  state: LandingPageState;
  onFileDrop: (acceptedFiles: File[]) => void; // Callback when files are dropped
  onConvert: () => void; // Callback for convert button click
}

const LandingPageContext = createContext<LandingPageContextProps | undefined>(undefined);

export const useLandingPageContext = () => {
  const context = useContext(LandingPageContext);
  if (!context) {
    throw new Error('useLandingPageContext must be used within a LandingPage Provider');
  }
  return context;
};

export default LandingPageContext;