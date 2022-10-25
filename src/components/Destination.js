import Jama from "../assests/travel3.jpg";
import Travel2 from "../assests/travel2.jpg";
import Travel3 from "../assests/travel3.jpg";
import Travel4 from "../assests/travel8.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Beautiful places to visit</p>

      <DestinationData
        className="first-dest"
        heading="The beautiful Jama Masjid"
        text="Taj Mahal is a great historical monument designed very beautifully. It is made up of white marbles which gives it a grand and bright look. It has attractive lawns, decorative trees, beautiful animals, etc in its surrounding areas. It is located in the Agra, UP at the bank of the Yamuna River."
        img1={Travel3}
        img2={Travel4}
      />
      <DestinationData
        className="first-dest-reverse"
        heading="Beauty of the Nature"
        text="Everything in nature invites us constantly to be what we are.” “Every flower is a soul blossoming in nature.” “Heaven is under our feet as well as over our heads.In every walk with nature one receives far more than he seeks"
        img1={Jama}
        img2={Travel2}
      />
    </div>
  );
};

export default Destination;
