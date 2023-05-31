import PropTypes from "prop-types";

function PokemonCard(props) {

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

PokemonCard.propTypes = {

    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,
}
