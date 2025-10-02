import { useState } from "react";
//Imports supporting navigation
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Collections from "./_pages/Collections/Collections";
import Feed from "./_pages/Feed/Feed";
import BeerInfo from "./_pages/BeerInfo/BeerInfo";
import CollectionItems from "./_pages/CollectionItems/CollectionItems";
import CollectionInfo from "./_pages/CollectionInfo/CollectionInfo";
import AgeVerification from "./_pages/AgeVerification/AgeVerification";
import CodeVerification from "./_pages/CodeVerification/CodeVerification";
import LogIn from "./_pages/LogIn/LogIn";

import Button from "./_ui/Button/Button";
import BeerCard from "./_ui/BeerCard/BeerCard";
import NavBar from "./_ui/NavBar/NavBar";
import Search from "./_ui/Search/Search";
import ArrowBack from "./_ui/ArrowBack/ArrowBack";
import SearchCard from "./_ui/SearchCard/SearchCard";
import Menu from "./_ui/Menu/Menu";
import CreateCollection from "./_ui/CreateCollection/CreateCollection";
import CollectionCard from "./_ui/CollectionCard/CollectionCard";
import InputBox from "./_ui/InputBox/InputBox";
import Modal from "./_ui/Modal/Modal";
import CollectionInfoBox from "./_ui/CollectionInfoBox/CollectionInfoBox";
import "./App.css";
import Tag from "./_ui/Tag/Tag";
import BeerSpecs from "./_ui/BeerSpecs/BeerSpecs";

import SearchPage from "./_pages/SearchPage/SearchPage";

function App() {
    return (
        <div>
            <Router>
                <Routes>
                    {/* This is makes AgeVerification the first page */}
                    <Route
                        path='/'
                        element={<AgeVerification />}
                    />
                    {/* This is creating routes for all the other pages */}
                    <Route
                        path='/Feed'
                        element={<Feed />}
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
            {/* <Collections /> */}
        </div>
    );
}

export default App;
