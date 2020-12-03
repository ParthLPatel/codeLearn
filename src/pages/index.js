import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import HeroSection from '../components/reusables/HeroSection'
import InfoBlock from '../components/reusables/InfoBlock'
import CourseCart from '../components/cart/CourseCart'
import BundleCart from '../components/cart/BundleCart'

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection 
    img={data.HeroImg.childImageSharp.fluid}
    title='I write Code'
    subtitle='Learn To Code Online'
    heroclass='hero-background'
    />
    <InfoBlock heading='About Us'/>
    <CourseCart courses={data.mycourses}/>
    <BundleCart bundleCourses={data.mybundles}/>

  </Layout>
)

//graphql query for loading the hero image.
export const Heroquery = graphql`
{
  HeroImg: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    mycourses: allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        image{
          fixed(width:200, height:120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }

  mybundles: allContentfulBundles{
    edges{
      node{
        id,
        title,
        price,
        image{
          fixed(width:200,height:120){
            src
          }
        }
      }
    }
  }
}
`
export default IndexPage
