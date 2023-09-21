import React, { useEffect, useState } from 'react'
import { TrashguideStyle } from './Trashguide.style'
import TrashCard from '../../Components/TrashCard/TrashCard'
import supabase from '../../supabase.js'
import { useForm } from "react-hook-form"
import axios from 'axios'
import search from '../../Images/Layout/icon-search.svg'
import wave from '../../Images/Layout/bg-waves-1.svg'
import TrashguideItem from '../../Components/TrashguideItem/TrashguideItem'


function Trashguide() {
    const url = 'https://haqfhdjzvotveqhuioyh.supabase.co/rest/v1/section?select=*'
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState([])
    const [selectedId, setSelectedId] = useState([])
    const [selectedIndex, setSelectedIndex] = useState([])

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

    useEffect(() => {
        async function getItems(id) {
            
let { data: category, error } = await supabase
.from('category')
.select('*')
.eq('section_id', id)

console.log(category);
setItems(category)
        }

        getItems(selectedId)
    }, [selectedId])
    
  return (
    <>
   
    <TrashguideStyle>
        <h1><span>Din guide</span> til en sund affaldsortering</h1>
        <section className='searchSec'>
            <form>
            <input type="search" name="search" id="search" placeholder='Søg på affald'/>
            <button type='submit'><img src={search} alt="search icon" /></button>
            </form>

        </section>

{      !items ? <section className='categorySec'>
            {
                categories.map((category,index) =>(
                    <div key={index} onClick={() => {
                        setSelectedId(category.id)
                        setSelectedIndex(index)
                        }}>
                         <TrashCard color={'#' + category.color} title={category.title} img={category.filename}/>
                    </div>
                           
                ))
            }

        </section> 
        
        : 

        <section>                
            <article className='titleArt' style={{backgroundColor: `#${categories[selectedIndex]?.color}`}}>
            <h2>{categories[selectedIndex]?.title}</h2>
            <img src={require(`../../Images/Guide/Categories/${categories[selectedIndex]?.filename || 'asbest.jpg'}`)} alt="img" />
        </article>
        {
            items.map((items,index) => (
                <TrashguideItem title={items.title} id={items.id} filename={items.image_filename}/>
            ))
        }
        </section>}
        
    </TrashguideStyle>
    <img style={{width: '98.8vw', marginBottom: '-0.5vh'}} src={wave} alt="wave" /> 
    </>
  )
}

export default Trashguide