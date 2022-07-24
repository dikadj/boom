const SearchBar = ({ onSearchSubmit, paramsQueryValue, handleParamsQuery }) => {
    // Background Images
    const bgImg2 = require("./../assets/movie-posters.jpg")
    const bgImg1 = `linear-gradient(
    45deg,
    hsla(240deg, 100%, 20%, .7) 0%,
    hsla(289deg, 100%, 21%, .7) 11%,
    hsla(315deg, 100%, 27%, .7) 22%,
    hsla(329deg, 100%, 36%, .7) 33%,
    hsla(337deg, 100%, 43%, .7) 44%,
    hsla(357deg, 91%, 59%, .7) 56%,
    hsla(17deg, 100%, 59%, .7) 67%,
    hsla(34deg, 100%, 53%, .7) 78%,
    hsla(45deg, 100%, 50%, .7) 89%,
    hsla(55deg, 100%, 50%, .7) 100%
    )`

    // Styles
    const searchHeaderStyle = { 
    backgroundImage: `${bgImg1}, url(${bgImg2})`,
    backgroundSize: "cover",
    //   backgroundPosition: "center",
    width: "100vw",
    height: "100px"
    }
    const homeLinkStyle = { color: "inherit", textDecoration: "inherit" }

    return (
        <div id="" style={searchHeaderStyle}>
            <div className="container d-flex align-items-start justify-content-start">
                <div className="row w-100">
                    <div className="col-3 mt-2">
                        <a href="/" className="" style={homeLinkStyle}>
                            <h1 className="text-center text-light"><strong>BOOM</strong></h1>
                            <p className="text-center text-light">Find your favorite movies &amp; series</p>
                        </a>
                    </div>
                    <div className="col-9 d-flex justify-content-center align-items-center">
                    <form action="" method="get" className="search input-group shadow" onSubmit={onSearchSubmit}>
                        <input placeholder="Search movie title..." type="search" id="search-input" 
                            name="q" value={paramsQueryValue} className="form-control" 
                            onChange={handleParamsQuery}
                        />
                        <button className="btn btn-danger">Search</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SearchBar