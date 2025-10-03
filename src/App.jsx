import { useState } from "react";
//Imports supporting navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import StepOne from "./_pages/Onboarding/StepOne/StepOne";
import StepTwo from "./_pages/Onboarding/StepTwo/StepTwo";
import StepThree from "./_pages/Onboarding/StepThree/StepThree";
import StepFour from "./_pages/Onboarding/StepFour/StepFour";
import StepFive from "./_pages/Onboarding/StepFive/StepFive";

import Collections from "./_pages/Collections/Collections";
import Feed from "./_pages/Feed/Feed";
import BeerInfo from "./_pages/BeerInfo/BeerInfo";
import CollectionItems from "./_pages/CollectionItems/CollectionItems";
import CollectionInfo from "./_pages/CollectionInfo/CollectionInfo";
import AgeVerification from "./_pages/AgeVerification/AgeVerification";
import CodeVerification from "./_pages/CodeVerification/CodeVerification";
import LogIn from "./_pages/LogIn/LogIn";

import SearchPage from "./_pages/SearchPage/SearchPage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* This is makes StepOne the first page */}
                    <Route
                        path='/'
                        element={<StepOne />}
                    />
                    {/* This is creating routes for all the other pages */}
                    <Route
                        path='/StepTwo'
                        element={<StepTwo />}
                    />
                    <Route
                        path='/StepThree'
                        element={<StepThree />}
                    />
                    <Route
                        path='/StepFour'
                        element={<StepFour />}
                    />
                    <Route
                        path='/StepFive'
                        element={<StepFive />}
                    />
                    <Route
                        path='/AgeVerification'
                        element={<AgeVerification />}
                    />

                    <Route
                        path='/Feed'
                        element={<Feed />}
                    />
                    <Route
                        path='/Searchpage'
                        element={<SearchPage />}
                    />
                    <Route
                        path='/CodeVerification'
                        element={<CodeVerification />}
                    />
                    <Route
                        path='/LogIn'
                        element={<LogIn />}
                    />
                    <Route
                        path='/collections'
                        element={<Collections />}
                    />
                    <Route
                        path='/CollectionInfo'
                        element={<CollectionInfo />}
                    />
                    <Route
                        path='/CollectionItems'
                        element={<CollectionItems />}
                    />
                    <Route
                        path='/BeerInfo'
                        element={<BeerInfo />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
