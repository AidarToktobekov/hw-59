import React, { ChangeEvent, useState } from "react";

interface Props{
    movie: string;
    editState: (value: string, index: number)=>void,
    index: number,
}

const Movie:React.FC<Props> = React.memo(({movie, editState, index})=>{
    const [inputValue, setInputValue] = useState(movie)

    const editMovie = (event: ChangeEvent<HTMLInputElement>)=>{
        editState(event.target.value, index);
    }

    return(
        <>
            <li className="list-group-item active d-flex">
                <input type="text" defaultValue={inputValue} onChange={editMovie} className="form-control"/> <button className="btn btn-dark">Delete</button>
            </li>
        </>
    )
},(prevProps, nextProps)=>{
    return nextProps.movie !== prevProps.movie || nextProps.index !== prevProps.index;
})

export default Movie