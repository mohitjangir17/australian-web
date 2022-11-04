import "../styles/ourfeatures.css";
import feature1 from "./resources/support-1.png";
import feature2 from "./resources/support-2.png";
import feature3 from "./resources/support-3.png";
import feature4 from "./resources/support-4.png";
import feature5 from "./resources/support-5.png";
import feature6 from "./resources/support-6.png";

function OurFeatures() {
  return (
    <div className="OurFeatures">
      <span className="spanOurFeatures">Features</span>
      <h2>Features that we give</h2>
      <section className="FeaturesContainer">
        <div className="FeatureList">
          <img src={feature1} alt="" />
          <div>
            <h3>Plagarism Free</h3>
            <p>
              Around the clock help-when students face homework problems, we are
              always there.
            </p>
          </div>
        </div>
        <div className="FeatureList">
          <img src={feature2} alt="" />
          <div>
            <h3>24*7 Help</h3>
            <p>
              100% original solutions that reduce the risk of negative marking.
            </p>
          </div>
        </div>
        <div className="FeatureList">
          <img src={feature3} alt="" />
          <div>
            <h3>On Time Delivery</h3>
            <p>
              No matter how tough the work is, we will submit it before
              deadline.
            </p>
          </div>
        </div>
        <div className="FeatureList">
          <img src={feature4} alt="" />
          <div>
            <h3>P.Hd. Expert Writers</h3>
            <p>
              Get unlimited rewrites of your homework until you are satisfied.
            </p>
          </div>
        </div>
        <div className="FeatureList">
          <img src={feature5} alt="" />
          <div>
            <h3>Confidential</h3>
            <p>
              We guarantee the safety of your information from any third party
              miscreants.
            </p>
          </div>
        </div>
        <div className="FeatureList">
          <img src={feature6} alt="" />
          <div>
            <h3>Best Price</h3>
            <p>
              Get 100% Accurate solutions in 250+ subjects to boost your GPA.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurFeatures;
