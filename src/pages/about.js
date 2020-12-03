import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import HeroSection from '../components/reusables/HeroSection'
import InfoBlock from '../components/reusables/InfoBlock'
import Teamphotosection from '../components/about/Teamphotosection'

const AboutPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    
    <HeroSection 
    img={data.HeroImg.childImageSharp.fluid}
    title='About Learn To Code Online'
    subtitle=''
    heroclass='about-background'
    />
    <InfoBlock heading='Our Vision'/>
    <Teamphotosection />

  </Layout>
)

//graphql query for loading the hero image.
export const Heroquery = graphql`
{
  HeroImg: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
}
`
export default AboutPage
