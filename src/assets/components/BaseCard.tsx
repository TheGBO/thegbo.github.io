import type React from "react";

export type CardProperties = {
    title: string;
    icon?: string;
    children: React.ReactNode;
    className?: string;
};

// The most basic card element to be created
export function BaseCard({ title, icon, children, className }: CardProperties) {
    return (
        <article className={`card ${className ?? ""}`}>
            <span className="card-title-wrapper">
                <img src={icon} alt="info" className="mini-icon" />
                <h1 className="card-title">{title}</h1>
            </span>

            <div className="card-main">
                {children}
            </div>
        </article>
    );
}