import { useEffect, useState } from "react";
import Movie from "./Movie";
import {Movies} from "../../types";

const Main=()=>{
    const [inputValue, setInputValue] = useState('')
    const [clicker, setClicker] = useState(true);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(e.target.value)
    }


    const [movies, setMovies] = useState<Movies[]>([])
    const dataOfStorage = localStorage.getItem('3');
    
    
    useEffect(()=>{
        if (dataOfStorage !== null) {
             setMovies(JSON.parse(dataOfStorage))
        }
    },[])
    useEffect(()=>{
        localStorage.setItem('3', JSON.stringify(movies));
    },[movies])


    const editState = (value: string, index: number)=>{
        const moviesCopy:Movies[] = movies;
        moviesCopy[index].movie = value;
        setMovies(moviesCopy);
        localStorage.setItem('3', JSON.stringify(movies));

    } 

    const addMovie =()=>{
        if (inputValue.trim() === '' || inputValue.trim() === null) {
            alert('Заполинте поле ниже!')
        }
        else{
            setMovies(prev => [...prev, {movie: inputValue, id: Math.random()}]);
        }
    }   

    return(
        <>
            <div className="container">
                <h2>
                    Lesson-1
                </h2>
                <div className="d-flex mt-4 gap-4">
                    <input type="text" className="form-control" onChange={inputChange} value={inputValue}/>
                    <button className="btn btn-dark" onClick={addMovie}>Add</button>
                </div>
                <ul className="list-group">
                    {movies.map((movie, index)=>{
                    
                        return(
                            <Movie editState={editState} index={index} key={movie.id} movie={movie.movie}></Movie>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}
    
export default Main