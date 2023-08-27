import React, { useEffect, useState } from "react";
import BotItem from "./BotItem";
import YourBotArmy from "./YourBotArmy";


// const url="http://localhost:3000/bots"
const url ="https://localhost:8001/bots/"

function BotCollection(){

    const [bots, setBots] = useState([])
    const [botSelectId, setBotSelectId] = useState([])

    useEffect(()=>{
        fetch(url)
        .then(r => r.json())
        .then(data =>{
            console.log(data)
            setBots(data)
            // setBotSelect(data.slice(5,7))
            // console.log(botSelect)
        })

    },[])

    

    

    function handleDelete(id){
         fetch(`url${id}`,{
            method: "DELETE",
         })
         .then(()=>{
            setBots((bots=> bots.filter((bt)=>bt.id !== id)))
         })
    }

// state to get bot id's when the bot item is clicked in BotItem Compatment
    const [botId, setBotId] = useState([])

    console.log(botId)

    function handleClicked(idInput){
        setBotId([...botId,idInput])
    }





    const botContent= bots.map((content,index)=><BotItem image={content.avatar_url} name={content.name} health={content.health} damage={content.damage} armor={content.armor} bot_class={content.bot_class} catchphrase={content.catchphrase} id={content.id} handleClicked={handleClicked} handleDelete={handleDelete}/>)

    return(
        <div>
            {/* <YourBotArmy handleClick ={handleClick} handleRemoveSelection={handleRemoveSelection} botSelect={botSelect}/> */}
            <YourBotArmy botId={botId} bots={bots} setBotId={setBotId}/>
        <div className="container mt-4">
            <div className="row">
                {botContent}

            </div>
        </div>
        </div>
    )



}

export default BotCollection;