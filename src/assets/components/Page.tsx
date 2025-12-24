import { BaseCard } from "./BaseCard";
import { NavigationCard } from "./NavigationCard";
import myMusic from "../img/My Music.png";

export function Page() {
    return (
        <main className="page">
            <NavigationCard/>
            <div className="main-content">
                <BaseCard title="hfgasdf" icon={myMusic}>
                    <p>
                        adfaqfgwrghaerhs
                    </p>
                </BaseCard>
            </div>
        </main>

    );
}
