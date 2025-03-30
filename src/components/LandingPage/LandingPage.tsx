import React from 'react';
import LandingPageContext from './LandingPageContext';
import { LandingPageState } from './state';
import HeroSection from '@/components/LandingPage/HeroSection';
import UploadZone from '@/components/LandingPage/UploadZone';
import FileInfo from '@/components/LandingPage/FileInfo';
import ConvertButton from '@/components/LandingPage/ConvertButton';
import LoadingIndicator from '@/components/LandingPage/LoadingIndicator';
// Import optional Features component if you create it
import FeaturesSection from '@/components/LandingPage/FeaturesSection';


interface LandingPageProps {
  children: React.ReactNode;
  state: LandingPageState;
  onFileDrop: (acceptedFiles: File[]) => void;
  onConvert: () => void;
}

function LandingPage({ children, state, onFileDrop, onConvert }: LandingPageProps) {
  return (
    <LandingPageContext.Provider value={{ state, onFileDrop, onConvert }}>
      <div className="space-y-8 flex flex-col items-center">
          {children}
      </div>
    </LandingPageContext.Provider>
  );
}

// Attach sub-components
LandingPage.Hero = HeroSection;
LandingPage.UploadZone = UploadZone;
LandingPage.FileInfo = FileInfo;
LandingPage.ConvertButton = ConvertButton;
LandingPage.LoadingIndicator = LoadingIndicator;
// LandingPage.Features = FeaturesSection; // Optional

export default LandingPage;