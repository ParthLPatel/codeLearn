import Heading from './Heading'

import React from 'react'
import { Link } from 'gatsby'

export default function InfoBlock({heading}) {
    return (
        <section className='bg-theme my-5 py-4'>
            <div className='container'>
                <Heading title={heading} />
                <div className='row'>
                    <div className='col-10 col-sm-8 mx-auto text-center'>
                        <p className='lead mb-4 text-white'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                            Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. 
                            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. 
                            Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. 
                            quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                        </p>
                        <Link to='/about'>
                            <button className='btn btn-warning btn-lg'>
                            {heading}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

