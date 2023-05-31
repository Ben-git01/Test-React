

function PokemonCard(props) {
    console.log(props);
    let pokemon = {
        nom: props.name,
        imgSrc: props.imgSrc
    };





    return (


        <figure>
            {pokemon.imgSrc ? (
                <img src={pokemon.imgSrc} alt={pokemon.nom} />
            )
                : (<p> ??? </p>)
            }
            <figcaption>{pokemon.nom}</figcaption>

        </figure>
    )
}


export default PokemonCard;