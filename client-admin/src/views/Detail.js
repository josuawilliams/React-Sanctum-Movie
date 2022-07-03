import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchDetail } from "../store/actionFetch/detailMovie"
import { useSelector, useDispatch } from "react-redux"

export default function Detail() {
    const params = useParams()
    const [isError, setisError] = useState(false)
    const [isLoading, setisLoading] = useState(true)
    const detailMovie = useSelector((state) => state.Detail.detail)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchDetail(params.slug))
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
            <div className="box1">
                <div className="box-image">
                    <img className="detail"
                        src={detailMovie.imgURL}
                        alt="" />
                </div>
                <div className="box-body">
                    <p className="posted"> Rating : {detailMovie.rating}/10</p>
                    <p className="text">Genre : {detailMovie.Genre.name}</p>
                    <h2>{detailMovie.title}</h2>
                    <p className="text">{detailMovie.synopsis}</p>
                    {/* <button type="button"
                            className="btn btn-success">ADD TO FAVORITE
                            </button><br></br> */}
                    <div className="cl">&nbsp;</div>
                </div>
            </div>
            <h1>TRAILER</h1>
            <div>
            <iframe src={detailMovie.trailerURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>    
            </div><br/>
            <h2>CASTS</h2>
            <div id="rowDetail" className="row">
                {detailMovie.Casts.map(el => {
                    return <div className="card m-2" style={{ width: "18rem" }}>
                        <img id="imgCast" className="card-img-top" src={el.profilePict} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">{el.name}</h5>
                        </div>
                    </div>
                })}
            </div>
        </>
    )
}