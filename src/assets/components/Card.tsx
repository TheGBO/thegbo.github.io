import { CardButton } from "./CardButton";

import infoIcon from "../img/Information.png";
import homeIcon from "../img/Home.png";
import setupIcon from "../img/Setup.png";
import gameIcon from "../img/Game.png";
import chipIcon from "../img/Chip.png";
import journalIcon from "../img/Journaling.png";

type ButtonItem = {
    icon: string;
    label: string;
};

export function Card() {
    const buttons: ButtonItem[] = [
        { icon: homeIcon, label: "Página inicial" },
        { icon: setupIcon, label: "Software" },
        { icon: gameIcon, label: "Jogos" },
        { icon: chipIcon, label: "Eletrônica e hardware" },
        { icon: journalIcon, label: "Pensamentos" },
    ];

    return (
        <article className="card">
            <span className="card-title-wrapper">
                <img src={infoIcon} alt="info" className="mini-icon" />
                <h1 className="card-title">Introdução</h1>
            </span>

            <div className="card-main">
                {buttons.map((btn, index) => (
                    <CardButton key={index} {...btn} />
                ))}
            </div>
        </article>
    );
}
