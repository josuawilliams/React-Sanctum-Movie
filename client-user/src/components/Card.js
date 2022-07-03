import { Link } from "react-router-dom"
export default function Cards({ movies }) {
    return (
        <>  
            <div id="mainConatiner" style={{ backgroundImage: `url(${movies.imgURL})`}}>
            <Link id="home" to={`/detail/${movies.slug}`}>
                <h5 id='rate'>{movies.rating}/10</h5>
                    <div id="description">
                        <div id="title">
                            <h3 className="p-1" >{movies.title}</h3>
                            <ul id="menu">
                                <li>{movies.Genre.name}&nbsp;&nbsp;</li>
                            </ul>
                        </div>
                        <div id="info">
                            {movies.synopsis}
                        </div>
                    </div>
            </Link>
                <a target="_blank" id='link' href={movies.trailerURL}>
                    <div id="buttons">
                        <div id="trailer">
                            <h4>WATCH TRAILER</h4>
                        </div>
                    </div>
                </a>
            </div>
        </>
    )
}