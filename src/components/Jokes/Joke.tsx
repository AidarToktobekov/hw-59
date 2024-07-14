import { useEffect, useState } from "react";

const Joke =()=>{
    const [joke, setJoke] = useState('');

    const randomJoke = (async()=>{   
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        try{
            const responseValue = await response.json()
            setJoke(responseValue.value);
        }
        catch (e){
            throw new Error('Error');
        }
    })

    useEffect(()=>{
        void randomJoke();
    },[])
    return(
        <>  
            <h2 className="mt-5">Lesson-2</h2>
            <div className="card mx-auto mt-5" style={{width: "300px"}}>
                <div className="card-body">
                    <h5 className="card-title">Joke</h5>
                    <p className="card-text">{joke}</p>
                    <button className="btn btn-dark" onClick={randomJoke}>New Joke</button>
                </div>
            </div>
        </>
    )
}

export default Joke;