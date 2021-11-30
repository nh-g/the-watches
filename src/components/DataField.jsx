export default function DataField({ label, text}) {
    return (
        <div className="data-field">
            <small className="label">{label}</small>
            <p className="description">{text}</p>
            <hr />
        </div>
    )
}
