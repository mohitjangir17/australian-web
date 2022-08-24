import "./components.css";
import bookicon from "./resources/book-logo.png";

function Figures() {
  return (
    <div className="Figures">
      <div className="figuresData">
        <img src={bookicon} alt="" />
        <div>
          <h1>3,000</h1>
          <p>Success Stories</p>
        </div>
      </div>
      <div className="figuresData">
        <img src={bookicon} alt="" />
        <div>
          <h1>3,000</h1>
          <p>Success Stories</p>
        </div>
      </div>
      <div className="figuresData">
        <img src={bookicon} alt="" />
        <div>
          <h1>3,000</h1>
          <p>Success Stories</p>
        </div>
      </div>
      <div className="figuresData">
        <img src={bookicon} alt="" />
        <div>
          <h1>3,000</h1>
          <p>Success Stories</p>
        </div>
      </div>
    </div>
  );
}
export default Figures;
