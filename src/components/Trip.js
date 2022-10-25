import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assests/Travel6.jpeg";
import Trip2 from "../assests/travel4.jpg";
import Trip3 from "../assests/travel8.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can Discover unique Destination using google maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip to Dubai"
          text="Dubai is a magical place and pictures just capture the surface of its stunning architecture, glamour, beaches and Arab vibe. I have put together this post on the best Dubai Instagram captions to help you find find words to go along with your photos. This post, just like Dubai, has all of the glitz and glamour, as well as the beach inspiration that you need!"
        />
        <TripData
          image={Trip2}
          heading="Trip to Paris"
          text="Paris is not a city its a world To know Paris is to know a great deal If you are lucky enough to have lived in Paris as a young man, then wherever you go for the rest of your life it stays with you for Paris is a moveable feast When good Americans die they go to Paris."
        />
        <TripData
          image={Trip3}
          heading="Trip to London"
          text="A trip to London might not be possible at the moment, but we can still daydream about spending a couple of days in London checking things off our London bucket list. To help with those imaginative travels and fuel your wanderlust, we’ve put together over 100 of the best London quotes."
        />
      </div>
    </div>
  );
}

export default Trip;
