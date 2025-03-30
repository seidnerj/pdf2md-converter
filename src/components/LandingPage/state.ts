import React from 'react';

export interface LandingPageState {
  selectedFile: File | null;
  isLoading: boolean;
  error: string | null;
  // Add other state properties if needed
}

export const initialState: LandingPageState = {
  selectedFile: null,
  isLoading: false,
  error: null,
};

export const ACTIONS = {
  SET_FILE: 'SET_FILE',
  SET_LOADING: 'SET_LOADING',
  CONVERSION_SUCCESS: 'CONVERSION_SUCCESS',
  CONVERSION_ERROR: 'CONVERSION_ERROR',
};

type Action =
  | { type: typeof ACTIONS.SET_FILE; payload: File | null }
  | { type: typeof ACTIONS.SET_LOADING; payload: boolean }
  | { type: typeof ACTIONS.CONVERSION_SUCCESS }
  | { type: typeof ACTIONS.CONVERSION_ERROR; payload: string };


export function reducer(state: LandingPageState, action: Action): LandingPageState {
  switch (action.type) {
    case ACTIONS.SET_FILE:
      return { ...state, selectedFile: action.payload, error: null }; // Reset error on new file
    case ACTIONS.SET_LOADING:
      return { ...state, isLoading: action.payload };
    case ACTIONS.CONVERSION_SUCCESS:
      // Optionally reset file after successful conversion download starts
      return { ...state, isLoading: false, error: null, selectedFile: null };
    case ACTIONS.CONVERSION_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}