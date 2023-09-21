import React, { useEffect, useState } from 'react'
import { ReviewStyle } from './Review.style'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import axios from 'axios'
import starGrey from '../../Images/Layout/icon-magic-star.svg'
import starGold from '../../Images/Layout/icon-magic-star-gold.svg'
import comment from '../../Images/Layout/icon-speech-bubble.svg'

function Review({data}) {
    const [ratingNum, setRatingNum] = useState(0)
    const reviewUrl = 'https://haqfhdjzvotveqhuioyh.supabase.co/rest/v1/review?select=*'
    const namesUrl = 'https://haqfhdjzvotveqhuioyh.supabase.co/rest/v1/user?select=id,firstname'
    const [reveiws, setReveiws] = useState([])
    const [names, setNames] = useState([])

    const { register, handleSubmit, formState: { errors } } = useForm() 

    const submitForm = (data) => {
        console.log(data);
        createReview(data)
    }

    async function createReview(formData) {
        axios.post(reviewUrl, { 
            "subject": formData.subject, 
            "comment": formData.message,
            "num_stars": ratingNum,
            "date": "2023-09-19",
            "org_id": data.id,
            "user_id": JSON.parse(sessionStorage.getItem('user'))[0].id || 0,
            "is_active": JSON.parse(sessionStorage.getItem('user'))[0].is_active || 0
        }, {
            headers: {
                'apiKey': `${supabase.supabaseKey}`
              }
        })
        .then((response) => {
            console.log("PostRequest ",response.data);
        }).catch(error => {
            console.log("post error: ", error);
        })
    }
    useEffect(() => {
        axios.get(reviewUrl, {
            headers: {
              'apiKey': `${supabase.supabaseKey}`
            }
          }).catch(error => {
            console.log("get error: ", error);
        })
        .then((response) => {
            console.log('axiosData', response.data);
            setReveiws(response.data)
        })

        axios.get(namesUrl, {
            headers: {
              'apiKey': `${supabase.supabaseKey}`
            }
          }).catch(error => {
            console.log("get error: ", error);
        })
        .then((response) => {
            console.log('axiosData', response.data);
            setNames(response.data)
        })
    }, [])
  return (
    <ReviewStyle>
    
{sessionStorage.getItem('user') ? <form onSubmit={handleSubmit(submitForm)}>
<div className='subjectRatingDiv'>
 
    <label htmlFor="subject">Overskrift</label>
    <input type="text" name="subject" id="subject" placeholder='Skriv en kommentar' {...register('subject', {required: true})} />
   <div></div>
   <div className='ratingDiv'>
    <label htmlFor="stars">Antal stjerner </label>
        <div>
        <img id='star1' onClick={() => setRatingNum(1)} src={ratingNum > 0 ? starGold : starGrey} alt="star" />
        <img id='star2' onClick={() => setRatingNum(2)} src={ratingNum > 1 ? starGold : starGrey} alt="star" />
        <img id='star3' onClick={() => setRatingNum(3)} src={ratingNum > 2 ? starGold : starGrey} alt="star" />
        <img id='star4' onClick={() => setRatingNum(4)} src={ratingNum > 3 ? starGold : starGrey} alt="star" />
        <img id='star5' onClick={() => setRatingNum(5)} src={ratingNum > 4 ? starGold : starGrey} alt="star" />
    </div>
    </div>
</div>
    
    <label htmlFor="message">Besked </label>
    <textarea name="message" id="message" placeholder='Skriv en besked...' {...register('message', {required: true, pattern: { value: /^[A-Za-z.,()!?@\såæø-]+$/i, message: 'Din besked indeholder ugyldige tegn'}  })} cols="30" rows="10"></textarea>
    {errors.message && <span>{errors.message.message || 'Du skal skrive en besked'}</span>}
    {errors.subject && <span>Du skal skrive en overskrift</span>}
    {errors.stars && <span>Du skal give en rating</span>}
    <div className='commentDiv'>
        <img src={comment} alt="speech bubble" />
        <input type="submit" value="Kommenter" />
    </div>

{/* <button type="reset">Start forfra</button> */}
</form> : 'Log ind for at skrive en anmeldelse'}

<ul>
    
    {
        reveiws.map((item) => (
            <>
            <div>
                           <li>{
                            names.map((name) => {
                                if (item.user_id == name.id) {
                                    return name.firstname || 'Anon'
                                }
                            })
                            }</li>            
                <li>{item.date}</li>    
<li>{item.comment}</li>
            </div>

            </>


        ))
    }
</ul>
    </ReviewStyle>
  )
}

export default Review