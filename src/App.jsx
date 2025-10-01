import { useState } from "react";
import Button from "./_ui/Button/Button";
import BeerCard from "./_ui/BeerCard/BeerCard";
import NavBar from "./_ui/NavBar/NavBar";
import Search from "./_ui/Search/Search";
import ArrowBack from "./_ui/ArrowBack/ArrowBack";
import SearchCard from "./_ui/SearchCard/SearchCard";
import Menu from "./_ui/Menu/Menu";
import Tag from "./_ui/Tag/Tag";
import BeerSpecs from "./_ui/BeerSpecs/BeerSpecs";
import Feed from "./_pages/Feed/Feed";
import SearchPage from "./_pages/SearchPage/SearchPage";
import BeerInfo from "./_pages/BeerInfo/BeerInfo";

function App() {
    return (
        <div>
            <BeerInfo />
        </div>
    );
}

export default App;
