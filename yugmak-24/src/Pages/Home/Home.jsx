import React from 'react';
import Day1 from '../../Component/Day1/Day1';
import Day2 from '../../Component/Day2/Day2';
import About from '../About/about'; 
import Footer from '../../Component/Footer/footer';
// import Landing from '../../Component/Landing/Landing';
const Home = () => {
  return (
    <div>
      {/* <Landing/> */}
      <About/>
      <Day1/>
      <Day2/>
      <Footer/>

          </div>
  );
};

export default Home;
