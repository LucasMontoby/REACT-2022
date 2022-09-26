import React from "react";
import Card from "../Card/Card";
import Genre from "./Genre/Genre";

const GenresInDb = () => {

    const genres = [

        "Accion",
        "Animación",
        "Aventura",
        "Ciencia Ficción",
        "Comedia",
        "Documental",
        "Drama",
        "Fantasia",
        "Infantiles",
        "Musical"

    ];

    return(

        <Card title="Genres in database">

            <div className="row">

                <Genre genres={ genres } />

                <Card>
                    <Genre genres={ genres } />

                    <Card>
                    <Genre genres={ genres } />
                    </Card>

                </Card>

                {/*
                    genres.map( ( genero, index ) => {

                        return <Genre uniqueId={ "categoria-"+(index + 1 ) } genero={ genero } />

                    })
                */}

            </div>

        </Card>

    );

}

export default GenresInDb;