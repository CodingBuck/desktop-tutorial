import React from 'react';
import './Home.CSS'
import Banner from './Banner';

//ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className= 'home'>
            <h1>Home component</h1>
            <Banner />

            <div className='home__section'>
                 <Card
                     src="https://imgs.search.brave.com/QSH5NQu_yf4cJ_Ut1c5iknjAzPR1iindo66pm_MmGYA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/aW1wcmVzc2l2ZWlu/dGVyaW9yZGVzaWdu/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxOS8wOC9UZXh0/dXJhbC1CYWxhbmNl/LVN1aXRlLU1hc3Rl/ci5qcGc"
                    title="Online Experiences"
                    description="Unique activities we can do together,
                    led by a world of hosts."
                    />
                 <Card 
                     src="https://designsbyamylou.com/wp-content/uploads/2018/06/7PALM-DR-BACKYARD-scaled.jpg"
                     title="Unique stays"
                     description="Spaces that are more than just a place to sleep"
                     />
                 <Card 
                     src="https://th.bing.com/th/id/OIP.uz43x9GmCBQEHbzRGDvDVQHaE7?pid=ImgDet&rs=1"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family"
                    />
            </div>
            <div className='home__section'>
                 <Card 
                     src="https://eugenieterrace.com/wp-content/uploads/2018/08/04_1730NClark_2004_HiRes-2-1.jpg"
                     title="2 Bedroom Apartment in Lincoln Park Chicago"
                     description="Enjoy the amazing sights of the city and
                     just 10 mins from the downtown area"
                    price="$220/night"
                 />
                 <Card 
                    src="https://explorenowornever.com/wp-content/uploads/2021/01/right-on-ocean-renovated-1.jpg"
                    title="4 bedroom, 4.5 bath"
                    description="Superhost with a stunning view of the beachside in Kona, Hawaii"
                    price="$400/night"
                 />
                 <Card 
                    src="https://imgs.search.brave.com/b1cz5MDn6q77BDtkiy82SKeCtUwsmaoKEbja00G_7ps/rs:fit:1200:1125:1/g:ce/aHR0cHM6Ly9iZXN0/YmVhY2hhZ2VudHMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9y/b2tnYWxsZXJ5Lzkv/OWY5YWI4ZGItZjk4/MS00OGE2LWU5MDct/M2M0ODFhODk3NjJj/L1BlbnNhY29sYSUy/MEJlYWNoJTIwSG91/c2VzXzAwMy5qcGc"
                    title="6 bedroom, 5 bath"
                    description="Explore the vacation hotspots in pensacola Florida. 
                    From Beach houses to townhouses near the gulf"
                    price="$440/night"
                 />
            </div>
        </div>
    )
}

export default Home
