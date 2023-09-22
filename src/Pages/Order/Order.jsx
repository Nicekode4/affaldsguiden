import React, { useState } from 'react'
import { OrderStyle } from './Order.style'
import supabase from '../../supabase.js'
import one from '../../Images/Navi.png'
import two from '../../Images/Navi2.png'
import madaffald from '../../Images/Icons/restaffald.svg'
import papPapir from '../../Images/Icons/papogpapir.svg'
import plast from '../../Images/Icons/water-bottle.svg'
import farligt from '../../Images/Icons/farligt.svg'
import { useForm } from 'react-hook-form'


function Order() {
    const { register, handleSubmit, formState: { errors } } = useForm() 
    const [progress, setProgress] = useState(1)
    const [isNotChecked, setIsNotChecked] = useState(true)
    const [choosenInput, setChoosenInput] = useState(0)
    


    async function orderContainer(container_id,fullname,address,zipcode,city,email,phone) {
        
        // Indsætter en ny række i databasen med de givne informationer
const { data, error } = await supabase
.from('order')
.insert([
  { 
    container_id: container_id, 
    fullname: fullname, 
    address: address, 
    zipcode: zipcode, 
    city: city, 
    email: email, 
    phone: phone 
},
])
.select()

if (error) {
    console.log('Order post error: ', error);
}else{
    setProgress(3)
}
    }

    const submitForm = (data) => {
        orderContainer(data.option,data.name,data.address,data.zipcode,data.city,data.email,data.phone)
    }

  return (
    <OrderStyle>
            <section className='progressSec'>
                <img src={progress === 1 ? one : two} alt="" />
            </section>
            <form onSubmit={handleSubmit(submitForm)}>
            <section style={{display: `${progress === 1 ? 'block' : 'none'}`}} className='formSecOne'>
                <p className='progressP'>Trin 1</p>
                <p className='title'>Vælg type</p>
                <p className='text'>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>

                <article className='choiceArt'>
                    <div onClick={() => {
                        // Når der klikkes sættes dette input som valgt og checked
                        setChoosenInput(1)
                        setIsNotChecked(false)}} className='option'>
                        <input type="radio" checked={choosenInput === 1 ? true : false}  name="option" id="option1" value={2} {...register('option' ,{required: true})} />
                        <img src={papPapir} alt="icon" />
                        <p>Pap og papir</p>
                    </div>
                    <div onClick={() => {
                                                // Når der klikkes sættes dette input som valgt og checked
                        setChoosenInput(2)
                        setIsNotChecked(false)}} className='option'>
                    <input type="radio" checked={choosenInput === 2 ? true : false} name="option" id="option2" value={3} {...register('option' ,{required: true})} />
                        <img src={plast} alt="icon" />
                        <p>Plast og metal</p>
                    </div>

                    <div onClick={() => {
                                                // Når der klikkes sættes dette input som valgt og checked
                        setChoosenInput(3)
                        setIsNotChecked(false)}} className='option'>
                    <input type="radio" checked={choosenInput === 3 ? true : false} name="option" id="option3" value={1} {...register('option' ,{required: true})} />
                        <img src={madaffald} alt="icon" />
                        <p>Mad og rest</p>
                    </div>

                    <div onClick={() => {
                                                // Når der klikkes sættes dette input som valgt og checked
                        setChoosenInput(4)
                        setIsNotChecked(false)}} className='option'>
                    <input type="radio" checked={choosenInput === 4 ? true : false} name="option" id="option4" value={4} {...register('option' ,{required: true})} />
                        <img src={farligt} alt="icon" />
                        <p>Farligt</p>
                    </div>

                </article>
                {errors.option && <span>Du skal vælge en</span>}
                <button disabled={isNotChecked} onClick={(e) => {
                    // Forhindre at formen bliver sendt afsted før tid
                    e.preventDefault()

                    //Sætter progress hooket til trin 2
                    setProgress(2)}}>Videre</button>
            </section>
            
             <section style={{display: `${progress === 2 ? 'block' : 'none'}`}} className='formSecTwo'>
                <p className='progressP'>Trin 2</p>
                <p className='title'>Hvor skal den leveres?</p>
                <p className='text'>Tation argumentum et usu, dicit viderer evertitur te has. Eu dictas concludaturque usu, facete detracto patrioque an per, lucilius pertinacia eu vel.</p>
                
                    {errors.firstname && <span>Du skal skrive dit fornavn</span>}
                        <label htmlFor="name">Navn </label>
                        <input type="text" name='name' id='name' placeholder='Navn' {...register('name' ,{required: true})}/>
                        
                        <label htmlFor="email">Email </label>
                        <input type="email" name='email' id='email' placeholder='Email' {...register('email' ,{required: true})}/>

                        <label htmlFor="phone">Telefon </label>
                        <input type="tel" name='phone' id='phone' placeholder='Telefon' {...register('phone' ,{required: true})}/>

                        <label htmlFor="address">Adresse</label>
                        <input type="text" name="address" id="address" placeholder='Adresse' {...register('address',{required: true})} />

                        <label htmlFor="zipcode">Postnummer </label>
                        <input type="number" min={1000} max={9990} name='zipcode' id='zipcode' placeholder='Postnummer' {...register('zipcode' ,{required: true})}/>

                        <label htmlFor="city">By </label>
                        <input type="text" name='city' id='city' placeholder='By' {...register('city' ,{required: true})}/>

                        

                            {errors.name && <span>Du skal skrive dit navn</span>}
                            {errors.address && <span>Du skal skrive din addresse</span>}
                            {errors.zipcode && <span>Du skal skrive dit postnummer</span>}
                            {errors.city && <span>Du skal skrive din by</span>}
                            {errors.email && <span>Du skal skrive din email</span>}
                            {errors.phone && <span>Du skal skrive dit telefon nummer</span>}

                        <button type="submit">Send</button>
                        <button onClick={(e) => {
                            // Forhindre at formen bliver sendt afsted før tid
                            e.preventDefault()
                            setProgress(1)}}>Tilbage</button>                        
                    
            </section>

            <section style={{display: `${progress === 3 ? 'block' : 'none'}`}} className='endSec'>
                <h2>Tak for din bestilling!</h2>
            </section>
            </form>
    </OrderStyle>

  )
}

export default Order