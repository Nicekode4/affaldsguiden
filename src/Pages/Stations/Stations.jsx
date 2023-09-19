import React, { useEffect, useState } from 'react'
import { StationsStyle } from './Stations.style'
import supabase from '../../supabase.js'
import StationCard from '../../Components/StationsCard/StationCard'


function Stations() {
const [allStations, setAllStations] = useState([])

useEffect(() => {
    const getStations = async () => {
        
let { data: org, error } = await supabase
.from('org')
.select('*')

if (error) {
    console.log('Error getting stations: ', error);
}else{
    setAllStations(org)
    console.log(org);
}
    } 

    getStations()
}, [])
  return (
    <StationsStyle>

            {
                allStations.map((station) => (
                    
                    <StationCard data={station}/>
                ))
            }
    </StationsStyle>
  )
}

export default Stations