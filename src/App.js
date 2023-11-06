import logo from './logo.svg';
import './App.css';
import Buttons from './Buttons';
import Input from './Input';
import Dropdown from './Dropdown';
import NestedDropdown from './NestedDropdown';
import Timer from './Timer';

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
      </div>
   
    </div>
  );
}

export default App;
