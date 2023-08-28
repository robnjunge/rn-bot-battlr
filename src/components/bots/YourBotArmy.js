import React from "react";
import SelectedBot from "./SelectedBot";
import { GiRobotGolem } from "react-icons/gi";

function YourBotArmy({ botId, bots, setBotId }) {
    function handleDelete(input) {
        setBotId(botId.filter((bot) => bot !== input));
        console.log(input);
    }

    let theSelectedArmy = bots.filter((bot) => {
        for (let i = 0; i < botId.length; i++) {
            if (bot.id === botId[i]) {
                return true; 
            }
        }
        return false; 
    });

    console.log(theSelectedArmy);
    console.log(botId);

    const theeBots = theSelectedArmy.map((content, index) => (
        <SelectedBot
            image={content.avatar_url}
            name={content.name}
            health={content.health}
            damage={content.damage}
            armor={content.armor}
            bot_class={content.bot_class}
            catchphrase={content.catchphrase}
            key={content.name + index}
            id={content.id}
            handleDelete={handleDelete}
        />
    ));

    return (
        <div className="container mt-4" id="selection">
                    <div className="row">
                        <center>
                            <h2 style={{ color: "red" }} id="armySelect">
                                Bot <GiRobotGolem /> Army
                            </h2>
                        </center>
                        {theeBots}
                    </div>
                </div>
    );
}

export default YourBotArmy;
