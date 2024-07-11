import React, { ChangeEvent } from "react";

interface Props{
    movie: string;
    editState: (value: string, index: number)=>void;
    deleteMovie: (index: number)=>void;
    index: number;
}

const Movie:React.FC<Props> = React.memo(({movie, editState,deleteMovie, index})=>{

    const editMovie = (event: ChangeEvent<HTMLInputElement>)=>{
        editState(event.target.value, index);
    };

    return(
        <>
            <li className="list-group-item active d-flex gap-2 mb-2">
                <input type="text" defaultValue={movie} onChange={editMovie} className="form-control"/> <button className="btn btn-dark" onClick={()=>deleteMovie(index)}>Delete</button>
            </li>
        </>
    )
},(prevProps, nextProps)=>{
    return nextProps.movie !== prevProps.movie || nextProps.index !== prevProps.index;
})

export default Movie;