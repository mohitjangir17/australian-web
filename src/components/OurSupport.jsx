import "../styles/oursupport.css";

function OurSupport() {
  return (
    <div className="OurSupport">
      <span className="spanOurSupport">Our Support</span>
      <h2>Step by Step Guide </h2>
      <article>
        <section>
          <div className="supportList">
            {" "}
            <span> Upload Asssignment </span>
          </div>
          <div className="supportList">
            <span> Pay for Assignment </span>
          </div>
          <div className="supportList">
            <span> Track Progress</span>
          </div>
          <div className="supportList">
            <span> Delivery </span>
          </div>
          <div className="supportList">
            <span> Feedback </span>
          </div>
        </section>
      </article>
    </div>
  );
}

export default OurSupport;
