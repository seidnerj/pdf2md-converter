"use client";

import React, { useState, useCallback, useReducer } from "react";
import LandingPage from "@/components/LandingPage/LandingPage"; // Main Compound Component
import { reducer, initialState, ACTIONS } from "@/components/LandingPage/state";
import toast from "react-hot-toast";

export default function Home() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleFileDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      dispatch({ type: ACTIONS.SET_FILE, payload: acceptedFiles[0] });
    } else {
      toast.error("Invalid file type. Please upload a PDF.");
      dispatch({ type: ACTIONS.SET_FILE, payload: null }); // Clear file on error
    }
  }, []);

  const handleConvert = async () => {
    // Check if a file is selected
    if (!state.selectedFile) {
      dispatch({
        type: ACTIONS.CONVERSION_ERROR,
        payload: "No file selected.",
      });
      return;
    }

    dispatch({ type: ACTIONS.SET_LOADING, payload: true });
    dispatch({ type: ACTIONS.CONVERSION_ERROR, payload: null }); // Clear previous errors

    const file = state.selectedFile;
    const apiUrl = "http://localhost/pdf2md/public/pdf2md"; // Or your actual API endpoint

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          // Set Content-Type to indicate raw data, adjust if needed
          "Content-Type": "application/pdf",
          // Include the filename in a custom header as your backend expects
          "X-Filename": file.name,
        },
        // *** Send the File object directly as the body ***
        body: file,
      });

      if (!response.ok) {
        // Handle non-2xx responses (like the 400 or 500 errors from PHP)
        let errorMsg = `Conversion failed with status: ${response.status}`;
        try {
          // Try to get a more specific error message from the backend response body
          const errorData = await response.json(); // Assuming backend sends JSON on error
          errorMsg = errorData.message || errorMsg;
          console.error("Conversion error:", errorData);

        } catch (e) {
          // If response body isn't JSON or empty, use the status code
          errorMsg = (await response.text()) || errorMsg; // Get raw text if not JSON
        }
        throw new Error(errorMsg); // Throw error to be caught below
      }

      // --- Handle successful conversion ---

      // Get the markdown content from the response body
      const markdownContent = await response.text();

      // Create a Blob from the markdown content
      const blob = new Blob([markdownContent], {
        type: "text/markdown;charset=utf-8",
      });

      // Create a temporary URL for the Blob
      const url = window.URL.createObjectURL(blob);

      // Create a link element to trigger the download
      const link = document.createElement("a");
      link.href = url;

      // Set the download filename (use original filename + .md)
      const downloadFilename = file.name.replace(/\.[^/.]+$/, "") + ".md"; // Remove original extension, add .md
      link.setAttribute("download", downloadFilename);

      // Append to DOM, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Revoke the object URL to free up memory
      window.URL.revokeObjectURL(url);

      dispatch({ type: ACTIONS.CONVERSION_SUCCESS }); // Update state on success
    } catch (error: any) {
      console.error("Conversion error:", error);
      dispatch({
        type: ACTIONS.CONVERSION_ERROR,
        payload:
          error.message || "An unknown error occurred during conversion.",
      });
    } finally {
      dispatch({ type: ACTIONS.SET_LOADING, payload: false }); // Ensure loading is always turned off
    }
  };

  return (
    // Pass state and handlers down via context provided by LandingPage
    <LandingPage
      state={state}
      onFileDrop={handleFileDrop}
      onConvert={handleConvert}
    >
      <LandingPage.Hero />
      <LandingPage.UploadZone />
      {/* Conditional Rendering inside LandingPage based on state */}
      <LandingPage.FileInfo />
      <LandingPage.ConvertButton />
      <LandingPage.LoadingIndicator />
      {/* Optional Sections */}
      {/* <LandingPage.Features /> */}
    </LandingPage>
  );
}
