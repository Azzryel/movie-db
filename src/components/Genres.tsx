import React from "react"
import { genre } from "../types"

const Genres = ({ titleGenres, genres }: { titleGenres: number[]; genres: genre[] } ) => {

    const filteredGenre = genres.filter( (genre) => titleGenres.includes(genre.id) )

    return (
        <div className="Genres" >
            {
                filteredGenre.map( (genre) => {
                    return (
                        <span key={ genre.id } className="s-genre" > { genre.name } </span>
                    )
                })
            }
        </div>
    )
}

export default Genres