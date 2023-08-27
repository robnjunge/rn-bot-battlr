import './App.css';
import BotCollection from '../bots/BotCollection';
import YourBotArmy from '../bots/YourBotArmy';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <div id="wartime">
        <h1 id="header">WAR-TIME</h1>
      </div>
      <BotCollection/>
  
    </div>

  );
}

export default App;