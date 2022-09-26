const Card = ( props ) => {



    return (

        <div className="card">
            <div className="title">{ props.title }</div>
            <hr />

            { props.children }

        </div>

    );

}

export default Card;