
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
const homeStyle = { 
  backgroundImage: `${bgImg1}, url(${bgImg2})`,
  backgroundSize: "cover",
  width: "100vw",
  height: "100vh"
}

const textShadow = { textShadow: "#5b5b5b 1px 0 10px" }

const Home = () => (
    <div className="" style={homeStyle}>
        <div className="container d-flex align-items-center justify-content-center h-100">
        <div className="row">
            <h1 className="text-center text-light display-3" style={textShadow}><strong>BOOM</strong></h1>
            <p className="text-center text-light lead" style={textShadow}>Find your favorite movies &amp; series</p>
          <form action="/search" method="get" className="input-group shadow">
              <input placeholder="Search movie title..." type="search" id="search-input" name="q" className="form-control" />
              <button className="btn btn-danger">Search</button>
            </form>
        </div>
        </div>
    </div>
)
export default Home