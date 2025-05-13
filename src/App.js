import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignedIn, SignedOut, RedirectToSignIn, SignIn, SignUp, UserButton } from '@clerk/clerk-react';

import Home from './components/Home';
import Symptom_tracker from './components/Symptom';
import Guid_meditation from './components/Guided';
import Community from './components/Community';
import CBT from './components/CBT';
import Nav from './components/Nav';


import './App.css';

function App() {
  return (
    <>
      <Nav />
    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />} />
        <Route path="/sign-up" element={<SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />} />

        {/* Protected Routes */}
        <Route
          path="/Symptom_tracker"
          element={
            <>
              <SignedIn>
                <Symptom_tracker />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/Guid_meditation"
          element={
            <>
              <SignedIn>
                <Guid_meditation />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/Community"
          element={
            <>
              <SignedIn>
                <Community />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
        <Route
          path="/CBT"
          element={
            <>
              <SignedIn>
                <CBT />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;

