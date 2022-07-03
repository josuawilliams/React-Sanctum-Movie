import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import Deleted from "../store/actionFetch/delete"

export default function Table({data, index}) {
    const dispatch = useDispatch()
    const onDelete = (e, id) => {
        e.preventDefault()  
        dispatch(Deleted(id))
    }

    return (
        <tbody>
            <tr>
                <th scope="row">{index+1}</th>
                <td>
                    <img className="imgURL" src={data.imgURL}/>
                </td>
                <td>{data.title}</td>
                <td>{data.rating}</td>
                <td>{data.Genre.name}</td>
                <td>
                <Link to={`/detail/${data.slug}`} type="button" className="btn btn-info">Detail</Link>
                <Link to={`edit-movie/${data.id}`} type="button" className="btn btn-info">Edit Movie</Link>
                <button 
                 type="button" onClick={(e) => onDelete(e, data.id)} className="btn btn-info">Delete</button>
                </td>
            </tr>
        </tbody>
    )
}