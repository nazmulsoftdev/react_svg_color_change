import React from 'react';
import './assets/css/Global.css';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';



const App = () => {
 
 return(
   <div className="App">
      <Header/>
      <Body/>
      <Footer/>
   </div>
 );

}


export default App;