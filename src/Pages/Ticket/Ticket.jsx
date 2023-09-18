import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { TicketStyle } from './Ticket.style'
import supabase from '../../supabase.js'

function Ticket() {
    let reservations = []
    const [ticketAmount, setTicketAmount] = useState(0)
    const { register, handleSubmit, formState: { errors } } = useForm() 
    const [formData, setFormData] = useState([])

    const onSubmit = (data) => {
        console.log(data);
        setFormData(data)
    }

    useEffect(() => {
        
            reservations = []
        for (let index = 0; index < ticketAmount; index++) {

            reservations.push({ 
            firstname: formData.firstname,
            lastname: formData.lastname,
            address: formData.address + " " + formData.streetnum,
            zipcode: formData.zipcode,
            city: formData.city, 
            event_id: 1,
            email: JSON.parse(sessionStorage.getItem('user'))[0].email || null
        })
        }
    
        console.log(reservations);
    }, [ticketAmount])
    

    async function buyTicket() {
        

        const { data, error } = await supabase
        .from('reservation')
        .insert(reservations)
        .select()
      

    }

  return (
    <TicketStyle>
        <div className='textDiv'>
                    <h2>Køb billet</h2>
                    <h3>mit nordkraft</h3>
                    <p>Kælderscenen</p>

                    <form onSubmit={handleSubmit(onSubmit)}>
                    {errors.firstname && <span>Du skal skrive dit fornavn</span>}
                        <div className='inputDiv'>
                        <label htmlFor="">Fornavn </label>
                        <input type="text" {...register('firstname' ,{required: true})}/>
                        
                        </div>

                        <div className='inputDiv'>
                        <label htmlFor="">Efternavn </label>
                        <input type="text" {...register('lastname')}/>
                        </div>


                        

                        <div className='streetDiv'>
                            <label htmlFor="address">Vejnavn & nr </label>
                            <input type="text" name="address" id="address" {...register('address') } />
                            {errors.address && <span>This field is required</span>}
                            <input type="text" name="" id="" {...register('streetnum')}/>
                        </div>

                        <div className='cityDiv'>
                            <label htmlFor="">Postnr & by </label>
                            <input type="number" min={1000} max={9999} name="zipcode" id="zipcode" {...register('zipcode')} />
                            <input type="text" name="city" id="city" {...register('city')}/>
                        </div>
                            <p>Alle felter skal udfyldes</p>
                        <div className='numSelection'>
                            <label htmlFor="">Antal</label>
                            <button onClick={() => setTicketAmount(ticketAmount - 1)}>-</button>
                            <p id='num'>{ticketAmount}</p>
                            <button onClick={() => setTicketAmount(ticketAmount + 1)}>+</button>
                            <div>
                            <h4>Pris {(ticketAmount * 234).toLocaleString()} DKK</h4>
                            <p>Pris INKL moms</p>   
                            </div>

                        </div>

                        <button type="submit" onClick={() => buyTicket()}>Godkend</button>
                        <button type="reset">Start forfra</button>
                    </form>
                    

                </div> 
    </TicketStyle>

  )
}

export default Ticket