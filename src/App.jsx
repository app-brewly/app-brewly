import { useState } from "react";
import Button from "./_ui/Button/Button";
import BeerCard from "./_ui/BeerCard/BeerCard";
import NavBar from "./_ui/NavBar/NavBar";
import Search from "./_ui/Search/Search";
import ArrowBack from "./_ui/ArrowBack/ArrowBack";
import SearchCard from "./_ui/SearchCard/SearchCard";
import Menu from "./_ui/Menu/Menu";

function App() {
    return (
        <div>
            <h1>Brewly app!</h1>
            <Menu />
        </div>
    );
}

export default App;
