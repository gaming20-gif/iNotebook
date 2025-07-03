import React from "react";
import recc from "../imgs/bg2.jpg";
import recc1 from "../imgs/bg4.avif";
import recc2 from "../imgs/bg6.jpg";



const Purpose = () => {
  return (
    <div>
      {/* Our Purpose */}
      <div className="px-4 py-5 my-1 text-center">
        <h1 className="display-4 fw-bold mb-20" style={{color:"#383838"}}> <b>Our Purpose</b></h1>
        <div className="col-lg-10 mx-auto">
          <p className="lead mb-1">
          <b style={{color:"rgb(71, 71, 71)"}}>
            At the core of everything we do is a simple purpose: to create
            content that matters. We believe in the power of words to inform,
            inspire, and connect. Whether we're exploring ideas, offering
            advice, or just reflecting on everyday life, our goal is to be a
            trusted voice you can return to. <br /> <br />
            We write with intention. Every post is created to resonate—not just to be read, but to be
            felt, shared, and remembered. <br /> <br />
            Our purpose is to add meaning, not clutter. To encourage growth, not perfection. And to build
            community through honesty, curiosity, and creativity.
            </b>
          </p>
        </div>
      </div>

      <hr />

      {/* Our Mission */}
      <div className="row flex-lg-row-reverse align-items-center py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={recc1}
            className="d-block mx-lg-auto img-fluid"
            alt="Mission"

            width="500"
            style={{ objectFit: "cover", borderRadius:"10px" }}
            loading="lazy"
          />
        </div>
        <div className="container col-lg-5">
          <h1 className="display-7 fw-bold text-body-emphasis lh-1 mb-4">
           <i> Our Mission </i>
          </h1>
          <i className="lead">
            To build a community-driven platform that encourages curiosity,
            fosters connection, and champions authenticity in every post,
            comment, and conversation.
            <br />
            <br />
            We envision a digital space that grows with its readers—where
            content evolves alongside your needs, questions, and passions.
          </i>
        </div>
      </div>

      <hr />

      {/* Our Values */}
      <div className="px-4 pt-5 my-5 text-center border-bottom">
  <h1 className="display-7 fw-bold text-body-emphasis"><i>Our Values</i></h1>
  <div className="col-lg-8 mx-auto">
    <i className="lead mb-4">
      {/* <strong>Authenticity</strong> – We believe in being real, transparent, and true to our voice. No clickbait. No fluff. Just honest content that matters. */}
      <br />
      <strong>Creativity</strong> – Whether it’s a how-to guide, a personal story, or a new idea, we approach everything with curiosity and originality.
      <br />
      <strong>Connection</strong> – Community is at the heart of everything we do. We value respectful dialogue and diverse perspectives.
      <br />
      <strong>Growth</strong> – We’re here to learn, adapt, and grow—together. Every post is a step forward in a shared journey of discovery.
      <br />
      {/* <strong>Quality</strong> – We’re committed to delivering content that is well-researched, thoughtfully written, and genuinely useful. */}
    </i>
  </div>

  {/* Removed maxHeight restriction here */}
  <div className="container px-5 mt-4">
    <img
      src={recc}
      style={{ objectFit: "cover", borderRadius: "10px", width: "90%", height: "250px" }}
      className="img-fluid border rounded-3 shadow-lg mb-4"
      alt="Values"
      loading="lazy"
    />
  </div>
</div>


      <hr style={{ color: "gray" }} />

      {/* Our Vision */}
      <div className="container my-5" >
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-7 fw-bold lh-1 text-body-emphasis">
            <i> Our Vision</i> 
            </h1>
            <i className="lead">
              To build a community-driven platform that encourages curiosity,
              fosters connection, and champions authenticity in every post,
              comment, and conversation.
              <br /><br />
              We envision a digital space that grows with its readers—where content evolves
              alongside your needs, questions, and passions.
            </i>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
            <img
              className="rounded-lg-3 mb-3"
                style={{ objectFit: "cover", borderRadius:"10px" }}
              src={recc2}
              alt="Vision"
              width="330"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purpose;
