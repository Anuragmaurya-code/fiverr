import React from 'react'
import Featured from '../../components/featured/Featured.jsx'
import Slide from '../../components/slide/Slide.jsx'
import TrustedBy from '../../components/trustedBy/TrustedBy.jsx'
import { cards,projects,gigs } from '../../../data.js'
import CatCard from '../../components/catCard/CatCard'
import './Home.scss'
import ProjCard from '../../components/projCard/ProjCard.jsx'
import { Carousel } from 'react-responsive-carousel';
import 'react-multi-carousel/lib/styles.css';

import Gigs from '../gigs/Gigs.jsx'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>A whole world of freelance talent at your fingertips</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              The best for every budget
            </div>
            <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Quality work done quickly
            </div>

            <p>Find the right freelancer to begin working on your project within minutes.</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Protected payments, every time
            </div>

            <p>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              24/7 support
            </div>

            <p>Find the right freelancer to begin working on your project within minutes.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>

        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1><b>fiverr</b> business.</h1>
            <h1>A business solution designed for teams</h1>
            Upgrade to a curated experience packed with tools and benefits, dedicated to businesses
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Fiverr Business</button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" controls></img>
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={2}>
        {projects.map(project => (
          <ProjCard key={project.id} item={project} />
        ))}
      </Slide>
      <Gigs/>
      

    </div>
  )
}

export default Home
