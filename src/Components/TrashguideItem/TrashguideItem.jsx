import React, { useEffect, useState } from 'react'
import { TrashguideItemStyle } from './TrashguideItem.style'
import supabase from '../../supabase.js'

function TrashguideItem({title, id, filename}) {
        const [data, setData] = useState([])
        const [typeName, setTypeName] = useState([])
        
        useEffect(() => {
            async function getData(id) {
                // Supabase fetch
let { data: category_type_rel, error } = await supabase
.from('category_type_rel')
.select('*')
.eq('category_id', id)

//Sætter response fra fetch som værdi i data useState hooket
setData(category_type_rel)

// Er der en fejl med fetchet, vises fejlen i konsollen
if (error) {
    console.log(error);
}

            }

            getData(id)
            getType()
        }, [])

        async function getType() {
            
let { data: type, error } = await supabase
.from('type')
.select('*')

if (error) {
    console.log('error getting type: ', error);
}else{
    setTypeName(type)
}
        }

        // Funktion der finder navnet på det id der bliver passed (her typeId) ved at loop igennem alle indtil den finder det rigtige id
function sorter(typeId) {
    let result; 
    for (let index = 0; index < typeName.length; index++) {
        const element = typeName[index];
        if (element.id == typeId) {
            result = element.title
        }
    }
    return result
}
  return (
    <TrashguideItemStyle>
        <article className='itemArt'>
        <div>
            <img src={require(`../../Images/Guide/Icons/${filename}`)} alt="Icon" />
            <h2>{title}</h2>
        </div>
        <p>hvad modtager vi?</p>
        <hr />
        <ul>
            {
                            // Looper gennem data objektet og hvis item.is_allowed er true så viser den værdien der har type_id som id som den henter via sorter funktionen 
                data.map((item) => {
                    if (item.is_allowed) {
                      return <li><p>{sorter(item.type_id)}</p><p className='allowed'>Ja tak</p></li>  
                    }
                    
                })
            }
        </ul>
        <p>hvad modtager vi ikke?</p>
        <hr />
        <ul>
        {
            // Looper gennem data objektet og hvis item.is_allowed er false så viser den værdien der har type_id som id som den henter via sorter funktionen 
                data.map((item) => {
                    if (!item.is_allowed) {
                      return <li><p >{sorter(item.type_id)}</p><p className='notAllowed'>Nej tak</p ></li>  
                    }
                    
                })
            }
        </ul>
        </article>
    </TrashguideItemStyle>
  )
}

export default TrashguideItem