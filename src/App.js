import logo from './logo.svg';
import { createContext, useState } from 'react';
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
import Modal from './Modal';
import Alert from './Alert';
import AlertTest from './AlertTest';
import Password from './Password';
import Toggle from 'react-toggle';
import Accordion from './Accordion';

export const ThemeContext = createContext(null);

function App() {

  const images = [
    'https://images.pexels.com/photos/13063592/pexels-photo-13063592.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/15272834/pexels-photo-15272834/free-photo-of-the-moon-in-the-night-sky.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/12652584/pexels-photo-12652584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/4466205/pexels-photo-4466205.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ]

  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode); // Toggle the darkMode state
  }

  const dummyAccordionData = [
    {
      title: 'Section 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum turpis, facilisis nec mattis sed, varius quis velit. Curabitur ac ultrices mauris. Mauris non blandit enim, ac commodo ipsum. Mauris posuere nisi sed odio mattis malesuada. Nam non velit vitae ex dapibus varius ac ut sem. Cras condimentum convallis tellus vel scelerisque. Integer lorem augue, ullamcorper nec orci vitae, malesuada fermentum velit.',
    },
    {
      title: 'Section 2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum turpis, facilisis nec mattis sed, varius quis velit. Curabitur ac ultrices mauris. Mauris non blandit enim, ac commodo ipsum. Mauris posuere nisi sed odio mattis malesuada. Nam non velit vitae ex dapibus varius ac ut sem. Cras condimentum convallis tellus vel scelerisque. Integer lorem augue, ullamcorper nec orci vitae, malesuada fermentum velit.',
    },
    {
      title: 'Section 3',
      content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    },
  ];

  return (

      <div id={darkMode ? 'dark' : 'light'}>

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
            <AlertTest />
            <Modal />
            <Password length={8} symbols={true} capitalLetter={true} number={true} />
            
            <h3> <u>10. Dark mode:</u> </h3>
            <Toggle
              defaultChecked={false}
              onChange={handleDarkMode} 
            />
            <hr />

            <Accordion data={dummyAccordionData} />

          </div>
        </div>
      </div>    
  );
}

export default App;
