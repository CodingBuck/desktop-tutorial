import { imageListClasses } from '@mui/material';
import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { StayPrimaryLandscapeOutlined } from '@material-ui/icons';
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    imageListClasses,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div class='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon 
            className="searchResult__heart" />

            <div
                className='searchResult__info'>
                    <div
                    className="searchResult__infoTop">
                        <p>{location}</p>
                        <h3>{title}</h3>
                        <p>___</p>
                        <p>{description}</p>
                    </div>

                    <div
                    className="searchResult__infoBottom">
                        <div
                        className="searchResult__stars">
                                <StarIcon
                                className="searchResult__star" />
                                <p>
                                    <strong>{star}</strong>
                                </p>
                        </div>
                        <div className='serachResults__Price'>
                            <h2>{price}</h2>
                            <p>{total}</p>
                        </div>
                    </div>
            </div>
        </div>
    )
    
}