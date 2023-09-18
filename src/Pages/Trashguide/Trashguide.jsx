import React, { useEffect, useState } from 'react'
import { TrashguideStyle } from './Trashguide.style'
import TrashCard from '../../Components/TrashCard/TrashCard'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import axios from 'axios'

function Trashguide() {
    const url = 'https://haqfhdjzvotveqhuioyh.supabase.co/rest/v1/section?select=*'
    const [categories, setCategories] = useState([])

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
            setCategories(response.data)
        })
    }, [])
  return (
    <TrashguideStyle>
        <h1><span>Din guide</span> til en sund affaldsortering</h1>
        <section className='searchSec'>
            <input type="search" name="search" id="search" placeholder='Søg på affald'/>
            <button>Search</button>
        </section>

        <section className='categorySec'>
            {
                categories.map((category,index) =>(
                            <TrashCard color={'#' + category.color} title={category.title} img={category.filename}/>
                ))
            }

        </section>


    </TrashguideStyle>
  )
}

export default Trashguide