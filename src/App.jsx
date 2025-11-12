import { useState } from "react";
//Imports supporting navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import StepOne from "./_pages/Onboarding/StepOne/StepOne";
import StepTwo from "./_pages/Onboarding/StepTwo/StepTwo";
import StepThree from "./_pages/Onboarding/StepThree/StepThree";
import StepFour from "./_pages/Onboarding/StepFour/StepFour";
import StepFive from "./_pages/Onboarding/StepFive/StepFive";
import AgeVerification from "./_pages/AgeVerification/AgeVerification";
import LogIn from "./_pages/LogIn/LogIn";
import CodeVerification from "./_pages/CodeVerification/CodeVerification";
import Feed from "./_pages/Feed/Feed";
import SearchPage from "./_pages/SearchPage/SearchPage";
import BeerInfo from "./_pages/BeerInfo/BeerInfo";
import Collections from "./_pages/Collections/Collections";
import CollectionItems from "./_pages/CollectionItems/CollectionItems";
import CollectionInfo from "./_pages/CollectionInfo/CollectionInfo";
import Profile from "./_pages/Profile/Profile";
import Settings from "./_pages/Settings/Settings";
import EditProfile from "./_pages/EditProfile/EditProfile";

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
                        path='/LogIn'
                        element={<LogIn />}
                    />
                    <Route
                        path='/CodeVerification'
                        element={<CodeVerification />}
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
                        path='/BeerInfo/:id?'
                        element={<BeerInfo />}
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
                        path='/Profile'
                        element={<Profile />}
                    />
                    <Route
                        path='/Settings'
                        element={<Settings />}
                    />
                    <Route
                        path='/EditProfile'
                        element={<EditProfile />}
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
