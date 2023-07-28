import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.02] py-2"
        // className="bg-primary/[.03] py-2"
      >
        <div className="container">
          <SectionTitle
            title="Features"
            paragraph=""
            center
          />
        </div>
      </section>
    </>
  );
};

export default Features;
