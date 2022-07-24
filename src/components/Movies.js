import Movie from "./Movie"

const Movies = ({ searchResult }) => {
    return (
        <div className="container">
            <ul className="list-unstyled row my-3 d-flex justify-content-center">
                {searchResult.length !== undefined ? searchResult.map(mov => <Movie mov={mov} />) : ""}
            </ul>
        </div>
    )
}

export default Movies