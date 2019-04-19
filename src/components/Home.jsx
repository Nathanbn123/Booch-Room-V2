import React from 'react';
import { Link } from 'react-router-dom';
// import { Flower } from '../assets/images/flowers.jpg';



function Home() {



  return (

<div>
    <a className='schedule'><Link to="/weekly"><img className="flower" src={require(`../assets/images/flowers.jpg`) } alt="marketImages"/></Link></a>
    <a className='produce'><Link to="/produce"><img src={require(`../assets/images/veg.jpg`) } alt="marketImages"/></Link>  </a>



    <style jsx>{`

        div {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
        }

        a {
          text-align: center;
          width: 100%;
        }

        img:hover {
          opacity: 0.7;
          transition: opacity .3s;
        }

          img {
            width: 80%;
          }

          .flower {

            position: relative;
          }

          .schedule {
            overflow: hidden;
            height: 32vw;
            margin: 30px 0;
          }

        .produce {


        }



        `}</style>
    </div>
  )
}

export default Home;
