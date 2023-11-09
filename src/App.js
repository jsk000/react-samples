import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Input from './Input';
import Dropdown from './Dropdown';
import NestedDropdown from './NestedDropdown';
import Timer from './Timer';
import Counter from './Counter';
import ContactForm from './ContactForm';

function App() {


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
      </div>
   
    </div>
  );
}

export default App;
