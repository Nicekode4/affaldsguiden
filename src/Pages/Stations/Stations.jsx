import React, { useEffect, useState } from 'react'
import { StationsStyle } from './Stations.style'
import supabase from '../../supabase.js'
import StationCard from '../../Components/StationsCard/StationCard'
import StationDetails from '../StationDetails/StationDetails'


function Stations() {
const [allStations, setAllStations] = useState([])
const [selectedId, setSelectedId] = useState([])

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

            {selectedId ?
                allStations.map((station,index) => (
                    <div onClick={() => setSelectedId(index)}>
                        <StationCard data={station}/> 
                    </div>

                )) : <StationDetails data={allStations[selectedId]} />
            }
    </StationsStyle>
  )
}

export default Stations