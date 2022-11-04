import "../styles/benifits.css";
import bookicon from "./resources/book-logo.png";

function Benifits() {
  return (
    <div className="Benifits">
      <div className="benifits-img">
        {" "}
        {/* <img src={womanImg} alt="" />{" "} */}
      </div>
      <div className="benifits-content">
        <span>Expertise in every field</span>
        <h2> Benifits of working with us</h2>
        <div>
          <img src={bookicon} alt="Img" />
          <div>
            <h2>Online Courses</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div>
          <img src={bookicon} alt="Img" />
          <div>
            <h2>Online Courses</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
        <div>
          <img src={bookicon} alt="Img" />
          <div>
            <h2>Online Courses</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benifits;
