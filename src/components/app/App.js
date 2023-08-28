import './App.css';
import BotCollection from '../bots/BotCollection';
import YourBotArmy from '../bots/YourBotArmy';
import {Route, Routes} from "react-router-dom"


function App() {
  return (

    <div>
      <div>
        <h1 id="header">STEEL-MUSCLES</h1>
      </div>
      <BotCollection/> 
    </div>

  );
}

export default App;