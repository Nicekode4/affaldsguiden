import React, { useEffect, useState } from 'react'
import { StationDetailsStyle } from './StationDetails.style'
import starGrey from '../../Images/Layout/icon-magic-star.svg'
import starGold from '../../Images/Layout/icon-magic-star-gold.svg'
import supabase from '../../supabase.js'
import Review from '../../Components/Review/Review'

function StationDetails({data}) {

    const [avgRating, setAvgRating] = useState(0)

    useEffect(() => {
        async function getRating(id) {
            
let { data: review, error } = await supabase
.from('review')
.select('num_stars')
.eq('org_id', id)

if (error) {
    console.log('Error getting ratings: ', error);
}else{
        //Regner alle ratings sammen hvis der er nogen
if (review.length > 0) {
    let result = 0
    //Regner alle ratings sammen
    for (let index = 0; index < review.length; index++) {
        const element = review[index];
        result = result + element.num_stars
    }
    // Regner den gennemsnitlige rating ud
    setAvgRating(parseFloat(result) / review.length)
} 
}
  
        }

        getRating(data.id)
    }, [data.id])

  return (
    <StationDetailsStyle>
        <div className="gmap_canvas">
            <iframe title='googlemap' src={`https://maps.google.com/maps?q=${data?.longtitude},${data?.latitude}&z=14&output=embed`} 
></iframe>
        </div>
        <p className='title'>{data?.name}</p>
        <div className='stars'>
        {
                [1,2,3,4,5].map((num) =>{
                                    // Hvis num er større end værdien i avgRating hooket, så bliver stjernen grå 
                    if (num > avgRating) {
                        return <img src={starGrey} alt="Grey star" />
                    }else{
                        return <img src={starGold} alt="Gold star" />
                    }
                })
            }
        </div>
    <p className='text'>{data?.address}</p>
    <p className='text'>{data?.zipcode} {data?.city}</p>
    <p className='text'>{data?.country}</p>

    <Review data={data} />
    </StationDetailsStyle>
  )
}

export default StationDetails