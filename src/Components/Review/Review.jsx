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

    // useForm hooket
    const { register, handleSubmit, formState: { errors } } = useForm() 

    //Funktionen der bliver kladt når man sender formen afsted
    const submitForm = (data) => {
        createReview(data)
    }

    // Funktionen til at oprette en ny række i review tabellen
    async function createReview(formData) {
        // axios POST kald
        axios.post(reviewUrl, { 
            // request body
            "subject": formData.subject, 
            "comment": formData.message,
            "num_stars": ratingNum,
            "date": "2023-09-19",
            "org_id": data.id,
            "user_id": JSON.parse(sessionStorage.getItem('user'))[0].id || 0,
            "is_active": JSON.parse(sessionStorage.getItem('user'))[0].is_active || 0
        }, {
            // request headers
            headers: {
                'apiKey': `${supabase.supabaseKey}`
              }
        })
        .then((response) => {
            alert('Tak for din anmeldelse')
        }).catch(error => {
            console.log("post error: ", error);
        })
    }
    useEffect(() => {
        // axios GET kald
        axios.get(reviewUrl, {
            headers: {
              'apiKey': `${supabase.supabaseKey}`
            }
          }).catch(error => {
            console.log("get error: ", error);
        })
        .then((response) => {
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
            setNames(response.data)
        })
    }, [])
  return (
    <ReviewStyle>
    
    {/* ser om "user" findes i sessionstorage, gør den det så vises form elementet, ellers vises en besked som beder dig logge ind for at anmelde */}
{sessionStorage.getItem('user') ? <form onSubmit={handleSubmit(submitForm)}>
<div className='subjectRatingDiv'>
 
    <label htmlFor="subject">Overskrift</label>
    <input type="text" name="subject" id="subject" placeholder='Skriv en kommentar' {...register('subject', {required: true})} />
   <div></div>
   <div className='ratingDiv'>
    <label htmlFor="stars">Antal stjerner </label>
        <div>
            {/* En onClick eventhandler der sætter ratingNum hooket til et tal og hvis hooket er over et bestemt tal vises img tagget som en guld stjerne */}
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
                            // Tjekker efter et match på personen der har kommenteret og listen af brugernavne. finder den et, vises navnet
                            names.map((name) => {
                                if (item.user_id == name.id) {
                                    return name.firstname || 'Anon'
                                }else{
                                    return false
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