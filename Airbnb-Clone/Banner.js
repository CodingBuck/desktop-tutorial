import React, { useState } from 'react'
import './Banner.css'
import {Button} from "@material-ui/core";
import Search from './Search';
import {useHistory} from "react-router-dom";

//ES7 snippets to do 'rfce'

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState
    (false);

    return (
        <div className= 'Banner'>
            <div className='banner__search'>
                {showSearch && <Search />}

                <Button onClick={() =>
                setShowSearch( !showSearch)}
                className='banner__searchButton' 
                varianr='outlined'>Search Dates</Button>
            </div>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of getaway to uncovver the hidden
                    gem near you.
                </h5>
                <Button onClick={() => history.push('/search')}
                    variant='outlined'>Explore 
                    Nearby</Button>
            </div>  
            

        </div>
    )
}

export default Banner