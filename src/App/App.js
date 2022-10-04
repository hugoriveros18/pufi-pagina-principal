import './App.css';
import { createRef } from 'react';
import { MainPage } from '../Components/MainPage/MainPage';
import { CategoryInformation } from '../Components/CategoryInformation/CategoryInformation';
import { Newsletter } from '../Components/Newsletter/Newsletter';
import { Footer } from '../Components/Footer/Footer';
import umbrellaFigure from '../Assets/umbrella-figure.png';
import puffFigure from '../Assets/puff-figure.png';
import cartFigure from '../Assets/cart-figure.png';
import pillowFigure from '../Assets/pillow-figure.png';

function App() {

  // REFS
  const rainSection = createRef();
  const puffSection = createRef();
  const cartSection = createRef();
  const napSection = createRef();

  // FUNTIONS
  const moveToSection = (title) => {
    switch(title){
      case 'RAIN':
        rainSection.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 'PUFF':
        puffSection.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 'CART':
        cartSection.current?.scrollIntoView({behavior: 'smooth'});
        break;
      case 'NAP':
        napSection.current?.scrollIntoView({behavior: 'smooth'});
        break;
      default:
        return
    }
  }

  return (
    <div className="App">
      <MainPage moveToSection={moveToSection}/>
      <CategoryInformation reference={rainSection} figure={umbrellaFigure} title={"Pufi RAIN"} buttonText={"VER MAS"} reversed={false}/>
      <CategoryInformation reference={puffSection} figure={puffFigure} title={"Pufi PUFF"} buttonText={"VER MAS"} reversed={true}/>
      <CategoryInformation reference={cartSection} figure={cartFigure} title={"Pufi CART"} buttonText={"VER MAS"} reversed={false}/>
      <CategoryInformation reference={napSection} figure={pillowFigure} title={"Pufi NAP"} buttonText={"VER MAS"} reversed={true}/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
