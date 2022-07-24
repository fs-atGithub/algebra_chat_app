function Spinner(props) {
  return (
    <div className="chat-page loading">
      <div>{props.status}</div>
      <div className="spinner-sector spinner-sector-red"></div>
      <div className="spinner-sector spinner-sector-blue"></div>
      <div className="spinner-sector spinner-sector-green"></div>
    </div>
  );
}
export default Spinner;
