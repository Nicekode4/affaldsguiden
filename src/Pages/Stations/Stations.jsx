import React, { useEffect, useState } from 'react'
import { StationsStyle } from './Stations.style'
import supabase from '../../supabase.js'
import StationCard from '../../Components/StationsCard/StationCard'
import StationDetails from '../StationDetails/StationDetails'
//d

function Stations() {
const [allStations, setAllStations] = useState([])
const [selectedId, setSelectedId] = useState()
const [isClicked, setIsClicked] = useState(false)
useEffect(() => {
    const getStations = async () => {
        
        // Supabase fetch for at få alle stationer og deres data
let { data: org, error } = await supabase
.from('org')
.select('*')

if (error) {
    console.log('Error getting stations: ', error);
}else{
    setAllStations(org)
}
    } 

    getStations()
}, [])
  return (


    <StationsStyle isDetail={!isClicked || false}>
            {/* hvis isClicked (Boolean, false som standart) er true skal den bruge dens værdi, ellers bliver false passed til mit stylesheet  */}
            {!isClicked ?
                allStations.map((station,index) => (
                    <div key={index} onClick={() => {
                        // Sætter isClicked til true og sætter selectedId til den valgte staions index i den hentede liste
                        setIsClicked(true)
                        setSelectedId(index)}}>
                        <StationCard data={station}/> 
                    </div>

                )) : <StationDetails data={allStations[selectedId]} />
            }
    </StationsStyle>
  )
}

export default Stations