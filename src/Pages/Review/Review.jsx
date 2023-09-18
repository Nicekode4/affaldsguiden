import React, { useEffect, useState } from 'react'
import { ReviewStyle } from './Review.style'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import axios, { Axios, AxiosHeaders } from 'axios'

function Review() {
    const url = 'https://tqdmywgvevlkngjvxkcy.supabase.co/rest/v1/review?select=*'
    const [reveiws, setReveiws] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm() 

    const submitForm = (data) => {
        console.log(data);
        createReview(data)
    }

    async function createReview(formData) {
        axios.post(url, { 
            "subject": formData.subject, 
            "comment": formData.message,
            "num_stars": formData.stars,
            "date": "2023-08-23",
            "event_id": 1,
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
        axios.get(url, {
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
    }, [])
    
  return (
    <ReviewStyle>
    

<ul>
    <h2>Reveiws</h2>
    {
        reveiws.map((item) => (
            <div>
                <li><strong>{item.subject}</strong></li>
                <li>{item.comment}</li>
            </div>

        ))
    }
</ul>
{sessionStorage.getItem('user') ? <form onSubmit={handleSubmit(submitForm)}>

    <label htmlFor="stars">Antal stjerner </label>
    <input type="number" min={1} max={5} name="stars" id="stars" {...register('stars', {required: true})} />
    {errors.stars && <span>Du skal give en rating</span>}

    <label htmlFor="subject">Overskrift </label>
    <input type="text" name="subject" id="subject" {...register('subject', {required: true})}/>
    {errors.subject && <span>Du mangler en overskrift</span>}

    <label htmlFor="message">Besked </label>
    <textarea name="message" id="message" {...register('message', {required: true, pattern: { value: /^[A-Za-z.,()!?@-]+$/i, message: 'Din besked indeholder ugyldige tegn'}  })} cols="30" rows="10"></textarea>
    {errors.message && <span>{errors.message.message || 'Du skal skrive en besked'}</span>}
    <p>Alle felter skal udfyldes</p>
<button type="submit">Send</button>
<button type="reset">Start forfra</button>
</form> : 'Log ind for at skrive en anmeldelse'}
    </ReviewStyle>
  )
}

export default Review