export default function StatusLoading() {
    return (
      <div className="spin-loader">
        <div className="loader"/>
        <span className="description-small">Fetching parcels</span>
      </div>
    );
}
