import React, { useEffect, useState } from 'react'
import { TrashguideItemStyle } from './TrashguideItem.style'
import supabase from '../../supabase.js'
import placeholder from '../../Images/Guide/Icons/asfalt.svg'

function TrashguideItem({title, id}) {
        const [data, setData] = useState([])
        const [typeName, setTypeName] = useState([])
        let typeNamesArray;
        
        useEffect(() => {
            async function getData(id) {
                
let { data: category_type_rel, error } = await supabase
.from('category_type_rel')
.select('*')
.eq('category_id', id)

console.log(category_type_rel);
setData(category_type_rel)

if (error) {
    console.log(error);
}else{
    for (let index = 0; index < data.length; index++) {
        const element = data[index];

        //typeNamesArray.push(element.type_id)
        
    }
    console.log(typeNamesArray);
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
    console.log(type);
    setTypeName(type)
}
        }

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
            <img src={placeholder} alt="Icon" />
            <h2>{title}</h2>
        </div>
        <p>hvad modtager vi?</p>
        <hr />
        <ul>
            {
                data.map((item) => {
                   console.log(item.type_id);
                   //getType(item.type_id)
                    if (item.is_allowed) {
                      return <li><p>{sorter(item.type_id)}</p><p className='allowed'>Ja tak</p></li>  
                    }
                    
                })
            }
            <li><p>Ja tak</p>{}</li>
        </ul>
        <p>hvad modtager vi ikke?</p>
        <hr />
        <ul>
        {
                data.map((item) => {
                   // console.log(item);
                    //getType(item.type_id)
                    if (!item.is_allowed) {
                      return <li><p >{sorter(item.type_id)}</p><p className='notAllowed'>Nej tak</p ></li>  
                    }
                    
                })
            }
        </ul>
        {/* <p>Hvor kommer du af med det?</p>
        <hr />
        <ul>
        <li><p>Ja tak</p>På genbrugstationen</li>
            <li><p>Ja tak</p>Derhjemme</li>
        </ul> */}
        </article>
    </TrashguideItemStyle>
  )
}

export default TrashguideItem