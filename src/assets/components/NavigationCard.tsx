import { BaseCard } from "./BaseCard";

import { CardButton } from "./CardButton";
import type { ButtonItem } from "./CardButton";

import infoIcon from "../img/Information.png";
import homeIcon from "../img/Home.png";
import setupIcon from "../img/Setup.png";
import gameIcon from "../img/Game.png";
import chipIcon from "../img/Chip.png";
import journalIcon from "../img/Journaling.png";


export function NavigationCard() {

    // Definition of the buttons
    const buttons: ButtonItem[] = [
        { icon: homeIcon, label: "Página inicial" },
        { icon: setupIcon, label: "Software" },
        { icon: gameIcon, label: "Jogos" },
        { icon: chipIcon, label: "Eletrônica e hardware" },
        { icon: journalIcon, label: "Pensamentos" },
    ];

    return (

        <BaseCard title="Navegação" icon={infoIcon} className="nav-bar">
            <div className="card-controls">
                {buttons.map((btn)=>(
                    <CardButton key={btn.label} {...btn}/>
                ))}
            </div>
        </BaseCard>
    );
}
