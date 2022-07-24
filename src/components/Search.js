import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import Movies from "./Movies"
import SearchBar from "./SearchBar"

const Search = () => {
    // State
    const [searchResult, setSearchResult] = useState({})

    // Search Params
    const [searchParams, setSearchParams] = useSearchParams()
    const paramsQueryValue = searchParams.get("q")

    // Handlers
    const handleParamsQuery = (e) => { setSearchParams({ q: e.target.value }) }
    const onSearchSubmit = () => {}

    // Fetching Data
    useEffect(() => {
        // fetch(`http://www.omdbapi.com/?apikey=61d94027&s=${paramsQueryValue}`)
        // .then(response => response.json())
        // .then(result => setSearchResult(result.Search))

        axios(`http://www.omdbapi.com/?apikey=61d94027&s=${paramsQueryValue}`)
            .then(res => setSearchResult(res.data.Search))
    }, [])
    

    return (
        <>
            <SearchBar onSearchSubmit={onSearchSubmit} paramsQueryValue={paramsQueryValue} 
                handleParamsQuery={handleParamsQuery} 
            />
            <Movies searchResult={searchResult} />
        </>
    )
}

export default Search