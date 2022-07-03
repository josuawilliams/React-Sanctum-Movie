import Cards from '../components/Card.js';
import { useEffect } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import LandingPage from '../store/actionfetch/LandingPage';

export default function Landingpage() {
    const dataMovies = useSelector((state)=> state.Movie.movies) 
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(LandingPage())
    }, [])
    return (
        <>   
            <h1 id='titles'> Sanctum Movies </h1>
            <div id='containerSide'>
                    {dataMovies.map((el)=>{
                        return <Cards movies={el} key={el.id}/>     
                    })}
                </div>
        </>
    )
}