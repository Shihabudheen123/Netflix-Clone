import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import {action,ComedyMovies,orginals,RomanticMovies,sciFi,fantasy,animation,documentary,thriller} from './usrls'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
   <NavBar/>  
   <Banner /> 
   <RowPost url={orginals} title= 'Netflix Orginals'/> 
   <RowPost  url={action} title='Action' isSmall/> 
   <RowPost  url={RomanticMovies} title='Romantic Movies' isSmall/> 
   <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
   <RowPost url={sciFi} title='SciFi Movies' isSmall/>
   <RowPost url={fantasy} title='fantasy Movies' isSmall/>

   <RowPost url={animation} title='animation Movies' isSmall/>

   <RowPost url={documentary} title='documentary Movies' isSmall/>

   <RowPost url={thriller} title='thriller Movies' isSmall/>


   <Footer/>


    </div>
  );
}

export default App;
