import React from 'react'
import Heading from '../reusables/Heading'

export default function Contact() {
    return (
        <div>
            <section className='py-3'>
            <Heading title='Contact Us'/>
            <div className='col-10 col-sm-8 mx-auto'>
                <form action='https://formspree.io/f/xyybdqdz' method='POST'>
                    <div className='form-group'>
                        <input type='text' name='name' placeholder='Your Name' id='name' className='form-control'/> <br />
                        <input type='text' name='email' placeholder='Your Email' id='email' className='form-control'/> <br />
                        <input type='text' name='mobile' placeholder='Your mobile' id='mobile' className='form-control'/> <br />
                        <textarea type='text' name='description' id='description' className='form-control' placeholder='Your Message...' /> <br />
                        <button className='btn btn-outline-info btn-block' name='submit' id='submit' type='submit'>Submit</button> <br />                     
                    </div>
                </form>
            </div>
            </section>
        </div>
    )
}
