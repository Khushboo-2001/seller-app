import logo from './logo.svg';

import Navbar from './Navbar/navbar';
import Header from './Heading/heading';
import SideBar from './Slidebar/sidedata';

import './App.css';


function App() {
  return (
   <>
   <Header/>
    <Navbar/>
    <section className='container'>
    <SideBar />
    </section>
   
  
   </>
  );
}

export default App;
