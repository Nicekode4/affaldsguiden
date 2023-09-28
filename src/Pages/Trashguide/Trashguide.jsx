import React, { useEffect, useState } from 'react'
import { TrashguideStyle } from './Trashguide.style'
import TrashCard from '../../Components/TrashCard/TrashCard'
import supabase from '../../supabase.js'
import axios from 'axios'
import search from '../../Images/Layout/icon-search.svg'
import wave from '../../Images/Layout/bg-waves-1.svg'
import TrashguideItem from '../../Components/TrashguideItem/TrashguideItem'
import { useForm } from 'react-hook-form'


function Trashguide() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const url = 'https://haqfhdjzvotveqhuioyh.supabase.co/rest/v1/section?select=*'
    const [categories, setCategories] = useState([])
    const [items, setItems] = useState()
    const [useSectionId, setUseSectionId] = useState(false)
    const [allTypes, setAllTypes] = useState()
    const [allCategories, setAllCategories] = useState()
    const [selectedId, setSelectedId] = useState()
    const [selectedIndex, setSelectedIndex] = useState([])

    async function getOneType() {
        
let { data: type, error } = await supabase
.from('type')
.select('*')

setAllTypes(type)
    }

    async function getOneCat(id) {
        

        let { data: category_type_rel, error } = await supabase
        .from('category_type_rel')
        .select('category_id')
        .eq('type_id', id)
      
        console.log(category_type_rel === null ? 1 : category_type_rel[0]?.category_id);

        setSelectedId(category_type_rel === null ? 1 : category_type_rel[0]?.category_id )
            }
        



    const onSubmitForm = (data) => {
        console.log(allTypes[data.search]?.id);
        setSelectedId([])
        setUseSectionId(false)
        setItems()
        setCategories([])

        getOneCat(allTypes[data.search]?.id)
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
            setCategories(response.data)
            setAllCategories(response.data)
        })

        getOneType()
    }, [])

    useEffect(() => {
        async function getItems(id) {
let { data: category, error } = await supabase
.from('category')
.select('*')
.eq(useSectionId ? "section_id" : "id", id)

if (error) {
    console.log('error while fetching category: ', error);
}else{
    console.log(category);

   setItems(category) 
}

        }

        
if (selectedId) {
            getItems(selectedId)
}

    }, [selectedId])
    
  return (
    <>
   
    <TrashguideStyle>
        <h1><span>Din guide</span> til en sund affaldsortering</h1>
        <section className='searchSec'>
            <form onSubmit={handleSubmit(onSubmitForm)}>
            <input onInput={(e) => {
                if (e.target.value === "") {
                    setUseSectionId(false)
                    setItems()
                    setCategories(allCategories)
                }
                console.log(allTypes[e.target.value]?.title)}} list='searchList' type="search" name="search" id="search" placeholder='Søg på affald' {...register('search')}/>
            {allTypes ? <datalist id="searchList">
                {
                    allTypes.map((item,index) => (
                        <option key={item.id} id={index} value={index}>{item.title}</option>
                    ))
                }
            </datalist> : null}
            <button type='submit'><img src={search} alt="search icon" /></button>
            </form>

        </section>

{      !items ? <section className='categorySec'>
            {
                categories.map((category,index) =>(
                    <div key={index} onClick={() => {
                        setUseSectionId(true)
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
            {categories[selectedIndex]?.filename ? <img src={require(`../../Images/Guide/Categories/${categories[selectedIndex]?.filename}`)} alt="img" /> : null}
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