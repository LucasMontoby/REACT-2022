import React from "react";

const Genre = ( props ) => {

    let genres = props.genres;
    let jsx    = genres.map( ( genre, index ) => {

        return(

            <div className="col-lg-6 mb-4" key={ index }>
                <div className="card bg-dark text-white shadow">
                    <div className="card-body">
                        { genre }
                    </div>
                </div>
            </div>

        )

    });

    /*
    const genero = props.genero || 'Sin categoría';

    console.log( props.uniqueId );

    return(

        <div className="col-lg-6 mb-4" key={ props.uniqueId }>
            <div className="card bg-dark text-white shadow">
                <div className="card-body">
                    { genero }
                </div>
            </div>
        </div>

    );
    
    */

    return( jsx );

}

export default Genre;