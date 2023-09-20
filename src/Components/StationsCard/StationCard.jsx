import React, { useEffect, useState } from 'react'
import { StationCardStyle } from './StationCard.style'
import supabase from '../../supabase.js'
import starGrey from '../../Images/Layout/icon-magic-star.svg'
import starGold from '../../Images/Layout/icon-magic-star-gold.svg'

function StationCard({data}) {
    const [avgRating, setAvgRating] = useState(0)
    const [numRating, setNumRating] = useState(0)
    useEffect(() => {
        async function getRating(id) {
            
let { data: review, error } = await supabase
.from('review')
.select('num_stars')
.eq('org_id', id)

console.log(review);
if (review.length > 0) {
    let result = 0
    for (let index = 0; index < review.length; index++) {
        const element = review[index];
        result = result + element.num_stars
    }
    setAvgRating(parseFloat(result) / review.length)
    setNumRating(review.length)
}   
        }

        getRating(data.id)
    }, [])

    return (
    <StationCardStyle>
            <div className="gmap_canvas">
            <iframe title='googlemap' src={`https://maps.google.com/maps?q=${data.longtitude},${data.latitude}&z=14&output=embed`} 
></iframe>
        </div>
    
    <p className='title'>{data.name}</p>
    <p className='text'>{data.address}, {data.zipcode} {data.city}</p>


    <div className='rating'>
        <div className='stars'>
            {
                [1,2,3,4,5].map((num) =>{
                    if (num > avgRating) {
                        return <img src={starGrey} alt="Grey star" />
                    }else{
                        return <img src={starGold} alt="Gold star" />
                    }
                })
            }
        </div>
        <p>{numRating} andmeldelser</p>
    </div>
    </StationCardStyle>
  )
}

export default StationCard