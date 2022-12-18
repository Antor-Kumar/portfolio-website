import React from 'react'
import './Portfolio.css'
import Imgaes1 from '../Images/fn-1.jpg'
import Imgaes2 from '../Images/all-2.png'
import Imgaes3 from '../Images/fn-2.jpg'
import Imgaes4 from '../Images/fn-4.jpg'
import Imgaes5 from '../Images/fn-5.png'
import Imgaes6 from '../Images/fn-6.jpg'

function Portfolio() {
   return (
      <div className='container'>
         <section  id='portfolio'>
            <h3 className='port-heading'>Portfolio</h3>
            <h4 className='port-heading-text'>Check out some project i recently work</h4>

            <div className='portfolio-container'>
               <div className='portfolio-item'>
                  <div className="portfolio-item-img">
                     <img src={Imgaes1} alt="" />
                  </div>
                  <h3>This is a Crypto Currency payment portfolio</h3>
                  <p><a href=''><button>Demo</button></a>
                  <a href=''><button>Github</button></a></p>
               </div>
               

               <div className='portfolio-item'>
                  <div className="portfolio-item-img">
                     <img src={Imgaes2} alt="" />
                  </div>
                  <h3>Ecommerce Website Using HTML And CSS</h3>
                  <p><a href=''><button>Demo</button></a>
                  <a href=''><button>Github</button></a></p>
               </div>
               <div className='portfolio-item'>
                  <div className="portfolio-item-img">
                     <img src={Imgaes3} alt="" />
                  </div>
                  <h3>It's look like Personal Portfolio website </h3>
                  <p><a href=''><button>Demo</button></a>
                  <a href=''><button>Github</button></a></p>
               </div>
               <div className='portfolio-item'>
                  <div className="portfolio-item-img">
                     <img src={Imgaes4} alt="" />
                  </div>
                  <h3>Simple React Project in Darwin Travel</h3>
                  <p><a href=''><button>Demo</button></a>
                  <a href=''><button>Github</button></a></p>
               </div>
               <div className='portfolio-item'>
                  <div className="portfolio-item-img">
                     <img src={Imgaes5} alt="" />
                  </div>
                  <h3>Simple React Project in GameDay Catering</h3>
                  <p><a href=''><button>Demo</button></a>
                  <a href=''><button>Github</button></a></p>
               </div>
               <div className='portfolio-item'>
                  <div className="portfolio-item-img">
                     <img src={Imgaes6} alt="" />
                  </div>
                  <h3>This is Social Media Website using bootstrap</h3>
                  <p><a href=''><button>Demo</button></a>
                  <a href=''><button>Github</button></a></p>
               </div>
            </div>
         </section>
      </div>
   )
}

export default Portfolio