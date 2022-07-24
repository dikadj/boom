const Movie = ({ mov }) => {
    const movBg1 = "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 70%, rgba(0,0,0,0.7) 100%)"
    const movBg2 = mov.Poster
    const movieStyle = {
        backgroundImage: `${movBg1}, url(${movBg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff"
    }
    const movieImgStyle = {
        opacity: 0
    }

    return(
        <li key={mov.imdbID} style={movieStyle} className="col-2 m-2">
            <div className="w-100 h-100">
                <h5 className="text-center p-3">{mov.Title}</h5>
                <img src={mov.Poster} alt={mov.Title} style={movieImgStyle} 
                    width="100%" className=""
                />
            </div>
        </li>
    )
}

export default Movie