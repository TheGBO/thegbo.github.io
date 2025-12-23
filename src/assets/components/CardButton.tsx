type CardButtonProps = {
    icon: string;
    label: string;
};

export function CardButton({ icon, label }: CardButtonProps) {
    return (
        <button className="clickable-item">
            <div className="icon-and-text">
                <img src={icon} alt={label} className="mini-icon" />
                <span className="icon-and-text-maintext">
                    {label}
                </span>
            </div>
        </button>
    );
}
