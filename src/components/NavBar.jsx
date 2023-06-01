// import PropTypes from "prop-types";
// import { useState } from 'react';

const  NavBar = ({pokemonIndex,  pokemonList, handleClickNext, handleClickPrevious}) => {
    


    return(
        <>
        { pokemonIndex > 0 ? <button onClick={handleClickPrevious}  > Previous </button> : null }

        { pokemonIndex < pokemonList.length -1 ? <button onClick={handleClickNext}> Next </button> : null }
        </>
    )
}



export default NavBar;