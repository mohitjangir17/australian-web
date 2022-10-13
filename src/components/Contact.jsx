import HeaderOtherPages from "./HeaderOtherPages";
import uploadHeaderImage from "./resources/mainBanner.jpg";
function ContactUs() {
  return (
    <div className="ContactUs">
      <HeaderOtherPages headerImage={uploadHeaderImage} title="Contact Us" />
      <h1>Contact</h1>
    </div>
  );
}

export default ContactUs;
