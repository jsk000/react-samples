import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Input from './Input';
import Dropdown from './Dropdown';
import NestedDropdown from './NestedDropdown';
import Timer from './Timer';
import Counter from './Counter';
import ContactForm from './ContactForm';
import ImageSlider from './ImageSlider';
import ToDo from './ToDo';


function App() {

  const images = [
    'https://images.pexels.com/photos/13063592/pexels-photo-13063592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15272834/pexels-photo-15272834/free-photo-of-the-moon-in-the-night-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12652584/pexels-photo-12652584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4466205/pexels-photo-4466205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  return (
    <div className='main'>
      
      <h1> React Samples</h1>

      <div>
        <Buttons/>
        <Input/>
        <Dropdown/>
        <NestedDropdown />
        <Timer/>
        <Counter/>
        <ContactForm/>
        <ImageSlider images={images}/>
        <ToDo/>
      </div>
   
    </div>
  );
}

export default App;
