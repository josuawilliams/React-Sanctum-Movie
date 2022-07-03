import { useState, useEffect } from "react"
import Table from "../components/Table"
import { useSelector, useDispatch } from "react-redux"
import { fetchMovies } from "../store/actionFetch/dataMovie"


export default function Dashboard() {
    const [isError, setisError] = useState(false)
    const [isLoading, setisLoading] = useState(true)

    const dataMovie = useSelector((state) => state.Movie.movies)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMovies())
        .catch((err) => setisError(true))
        .finally(() => setisLoading(false))
    }, [])

    if (isError) {
        return <h1 style={{ marginTop: "60px" }}>ERROR FETCH.....</h1>
    }
    if (isLoading) {
        return <div className="contain"><div className="loader"></div></div>
    }

    return (
        <>
            <section id="tables1" >
                <table id="tables" className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col">Image Movies</th>
                            <th scope="col">Title Movies</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Genre</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {dataMovie.map((el, i) => {
                        return <Table index={i} key={el.id} data={el} />
                    })}
                </table>
            </section>
        </>
    )
}