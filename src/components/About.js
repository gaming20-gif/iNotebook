import './About.css'
import img1 from "../imgs/bg11.jpg";
const About = () => {

  return (
  <div>
    

 
 <div className="w-100 overflow-hidden" id="width">
  <img
    src={img1}
    alt="Top Banner"
    className="w-100 h-100 block-d"
    style={{ objectFit: "cover" }}
  />
</div>


      <div class="px-4 my-4 text-center ">
        <h5 class="display-5 fw-bold text-body-emphasis mb-4">
          iNotebook - Creating new Things
        </h5>
        <div class="col-lg-10 mx-auto">
          <p class="lead mb-4">
            Welcome to <strong>iNotebook</strong> — a space designed for curious
            minds, passionate writers, and readers who love to explore
            meaningful content. Whether you're here to share your thoughts or
            discover something new, our blog platform offers a place to connect,
            express, and grow. <br />
            <br />
            We believe everyone has a story worth sharing. That’s why we invite
            you to join our community — not just as a reader, but as a creator.
            From lifestyle and self-growth to technology, travel, and more, we
            welcome diverse voices and fresh perspectives.
            <br />
            <br />
            By creating an account, you can interact with posts, save your
            favorites, comment on discussions, and even publish your own blogs.
            It’s quick, free, and open to anyone with a passion for ideas and
            storytelling.
            <br />
            <br />
            At <strong>iNotebook</strong>, we’re not just building a blog site —
            we’re building a creative, supportive community.
          </p>
        </div>
      </div>
  </div>
  );
};

export default About;
