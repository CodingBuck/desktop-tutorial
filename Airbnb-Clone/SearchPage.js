import React from 'react';
import './SearchPage.css';
import { Button } from '@material-ui/core';
import SearchResult from "./SearchResult";


function SearchPage() {
    Return (
        <div className='SearchPage'>
            <div className='SearchPage__info'>
            <p>62 stays  24 Ocotber to 30 October  2 guest</p>
            <h1>Stays nearby</h1>
            <Button
            variant="outlined">Cancellation
            Flexibility</Button>
            <Button
            variant="outlined">Type of
            place</Button>
            <Button
            variant="outlined">Price</Button>
            <Button
            variant="outlined">Rooms and beds</Button>
            <Button
            variant="outlined">more
            filters</Button>
        </div>
        <SearchResult
            img="https://st.hzcdn.com/simgs/1ab148650368cc75_9-7480/home-design.jpg"
            location="Private room in the center of downtown Chicago"
            title="Stay at this spacious apartment in the westloop area"
            description="2 guest  2 bedroom 1.5 bath  wifi  kitchen  Free parking  Washing Machine"
            star={4.73}
            price="$50 /night"
            total="$200 total"/>
        <SearchResult
            img="https://imgs.search.brave.com/M0lUkaEHGqRzzlnEC2lAIvMY-
                 kTdpwulaVWTH9k2K2o/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/
                 Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5W/dy1FdFY3ckF6OW9z/emZqSTl1dlhRSGFF/NyZwaWQ9QXBp"
            location="Private room in Orlando Florida"
            description="3-5 guest. 4 bedroom  3.5 bath  wifi and Garage"
            star={4.5}
            price="$125/night"
            total="$625 total"/>
        <SearchResult
            img="https://imgs.search.brave.com/s7R8f1Qxkb31M4xqjWK-jNxvR7z
                 3ukHJOfnb1nC-Rrg/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/
                 Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5F/R3o5Q0hMVy1NWXFB/WkRTTkUtdHhBSGFF/OCZwaWQ9QXBp"
            location="Beach house in Orange Beach Alabama"
            description="5-8 guest. 6 bedroom  5 bath wifi  laundry room"
            star={4.85}
            price="$200/night"
            total="$1000 total"/>
        <SearchResult
            img="https://imgs.search.brave.com/EuinWdn7-UFXZQWmwoaBzzooxKZlUj
                 tlTQCwHpNHZys/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJ
                 pbmcubmV0/L3RoP2lkPU9JUC5r/U1Ezd0xNTjhBZ3pm/WjFJTXdhcHd3SGFF/NyZwaWQ9QXBp"
            location="Panama City Beach Florida"
            description="3-4 guest. 3 bedroom 2.5 bath. Heating/cooling  wifi"
            star={4.4}
            price="$65/night"
            total="$325 total"/>
        <SearchResult
            img="https://imgs.search.brave.com/eC5qX1qiq9W5wpCQsRm1UU7nGs7SSaLGd5EfDy1gwCs/
                 rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/dGFzdGVvZmhvbWUu/Y29tL3dwLWNvbnRl/
                 bnQvdXBsb2Fkcy8y/MDE4LzA3LzQ0Lmpw/Zw"
            location="Apartment in the middle of Portland Oregon"
            description="1-2 guest. 2 bedroom  1.5 bath"
            star={4.3}
            price="$110 /night"
            total="$550 total"/>
        </div>
    )
}

export default SearchPage