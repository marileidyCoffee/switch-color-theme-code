import React from 'react';
import Card from "./Card"
const info=[
    {
        id:1,
        user:'@nathanf',
        followers:'1987',
        socialMedia:'facebook',
        mediaChange:'12 Today'
    },
    {
        id:2,
        user:'@nathanf',
        followers:'1044',
        socialMedia:'twiter',
        mediaChange:'99 Today'
    },
    {
        id:3,
        user:'@realnathanf',
        followers:'11k',
        socialMedia:'instagram',
        mediaChange:'1099 Today'
    },
    {
        id:4,
        user:'Nathan F.',
        followers:'8239',
        socialMedia:'youtube',
        mediaChange:'144 Today'
    }
]
const Cards = ()=>{
return(
    <div className="cards">
        {
            info.map(card=>(
                <Card 
                    key={card.id}
                    user={card.user}
                    followers={card.followers}
                    socialMedia={card.socialMedia}
                    mediaChange={card.mediaChange}
                />  
            ))
        }
        
    </div>
)
}

export default Cards