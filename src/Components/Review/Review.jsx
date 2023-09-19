import React, { useEffect, useState } from 'react'
import { ReviewStyle } from './Review.style'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import axios from 'axios'

function Review({data}) {
    console.log(data);
    const url = 'https://haqfhdjzvotveqhuioyh.supabase.co/rest/v1/review?select=*'
    const [reveiws, setReveiws] = useState([])
    const { register, handleSubmit, formState: { errors } } = useForm() 

    const submitForm = (data) => {
        console.log(data);
        createReview(data)
    }

    async function createReview(formData) {
        axios.post(url, { 
            "subject": `Anmeldelse om ${data.name}`, 
            "comment": formData.message,
            "num_stars": formData.stars,
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
    
<h2>Skriv en kommentar</h2>
{sessionStorage.getItem('user') ? <form onSubmit={handleSubmit(submitForm)}>

    <label htmlFor="stars">Antal stjerner </label>
    <input type="number" min={1} max={5} name="stars" id="stars" {...register('stars', {required: true})} />

    <label htmlFor="message">Besked </label>
    <textarea name="message" id="message" {...register('message', {required: true, pattern: { value: /^[A-Za-z.,()!?@\såæø-]+$/i, message: 'Din besked indeholder ugyldige tegn'}  })} cols="30" rows="10"></textarea>
    {errors.message && <span>{errors.message.message || 'Du skal skrive en besked'}</span>}
    {errors.stars && <span>Du skal give en rating</span>}
<button type="submit">Send</button>
<button type="reset">Start forfra</button>
</form> : 'Log ind for at skrive en anmeldelse'}

<ul>
    
    {
        reveiws.map((item) => (
            <div>
                <li>{item.user_id}</li>            
                <li>{item.date}</li>
                <li>{item.comment}</li>
    
            </div>

        ))
    }
</ul>
    </ReviewStyle>
  )
}

export default Review