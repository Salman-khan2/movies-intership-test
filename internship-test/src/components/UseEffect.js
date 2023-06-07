import React, { useEffect, useState } from 'react'
import './Style.css';

const UseEffect = () => {
    const [user, setUser] = useState([]);
    const getUser = async () => {

        const response = await fetch('https://api.tvmaze.com/search/shows?q=all')
        setUser(await response.json());
    }


    useEffect(() => {
        getUser();
    }, []);

    return (
        <>
        
        <h1 className='heading'>Internship Test </h1>
        <div className='movies-list'>
            {
                
                user.map((currelem) => {
                    return (
                        
                            <div className='box'>
                                <div className='box-container'>
                                    <div className='image-div'>
                                        <img src={currelem.show.image.medium} alt='movies' className='image' />
                                    </div>
                                 <div className='text-container'>
                                  <h4 className='genras'>Genre : {currelem.show.genres}</h4>
                                  <h4 className='movies-name'>Movie Name : {currelem.show.name}</h4>
                                  {/* <h3>Rating : {currelem.show.rating}</h3> */}
                                  <button className='button'><a href={currelem.show.url} className='anchor'>Summary:Click On Me!</a></button>
                                 </div>
                                </div>
                            
                        </div>
                    )
                })
            }
            {/* Creatin a movie box  */}


            {/* <div className='box'>
    <div className='box-container'>
        <div className='image'>
            <img src='' alt='movies'/>
        </div>

    </div>
    </div> */}
    </div>
   
        </>
    )
    
}

export default UseEffect
