import React, { Component } from 'react'
import Heading from '../reusables/Heading'

export default class BundleCart extends Component {
    constructor(props){
        super(props)
        this.state = {
            bundleCourses: props.bundleCourses.edges,
        }
    }
    render() {
        // console.log(this.state.courses)
        return (
            <section className='py-3'>
                <div className='container'>
                <Heading title='Bundle Courses'/>
                    <div className='row'>
                        {
                            this.state.bundleCourses.map( ({node}) =>{

                                return(
                                <div className='col-10 col-sm-4 mx-auto d-flex column'>
                                <div className="card bg-dark text-white card-size mb-3">
                                <img src={node.image.fixed.src} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{node.title}</h5>
                                    <p className="card-text"><b> ${node.price} </b></p>
                                    {/** snipkart btn click->call our snipkart */}
                                    <button class="snipcart-add-item btn btn-warning"
                                    data-item-id={node.id}
                                    data-item-price={node.price}
                                    data-item-url="https://parthlco.netlify.app/"
                                    data-item-image={node.image.fixed.src}
                                    data-item-name={node.title}>
                                    Add to cart
                                    </button>
                                </div>
                                </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        )
    }
}
