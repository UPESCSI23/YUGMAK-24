import React from "react";

const About = () => {
  return (
    <div>
      <div className="section_about_us">
        <div className="rotation_hide_container">
          <div className="gradient_cover"></div>
          <div className="about_rotate"></div>
          <div className="about_rotate_background"></div>
        </div>
        <div className="container_about">
          <div className="about_us_div">
            <h2 className="h2_home opacity-100 transform translate-x-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0">
              About Us{" "}
            </h2>
            <p className="opacity-100 transform translate-x-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0">
              Just when you thought UPES-CSI was only a Technical Chapter, we
              bring for you "Yugmak". A 3-day event filled with all fun
              activities like Bidding Battle, Clickathon, Comic Chaos and many
              many more, this event unlike all other events invites participants
              to engage in photo clicking competitions, pitch business ideas,
              participate in caricature making which helps in an all-round
              development beyond the technical dimensions.
            </p>
            <a
              href="https://upescsi.in/"
              className="text-link home opacity-100 transform translate-x-0.1224px scale-100 rotate-x-0 rotate-y-0 rotate-z-0"
            >
              Learn More <span className="fa"></span>
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
