import img from '../imgs/bg8.jpg'
import { useNavigate } from 'react-router-dom'; 
const Getstart = () => {

  const navigate = useNavigate(); 
const getstart = ()=>{
   navigate("/singup");
}
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              Hassle-free iNotebook
            </h1>
            <p className="lead">
              Join a Community Built Around Ideas and Creating new Things
            </p>
            <button className="btn btn-outline-dark mx-1" onClick={getstart}>Getstart</button>
          </div>
          
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
            <img className="rounded-lg-3" style={{borderRadius:"10px" }} src={img} alt="" width="372" />
          </div>
        </div>
      </div>
          <div>
      <div class="px-4 py-1 my-4 text-center">
        <h5 class="display-5 fw-bold text-body-emphasis">
          
        </h5>
      </div>
      <div
        class="d-flex flex-wrap justify-content-around align-items-center py-2 my-2 border-top"
       style={{  gap:"8px"}}
     >
  
        <div class="card text-bg-warning mb-3" style={{maxWidth: "23rem"}}>
          <div class="card-header">Important Notes</div>
          <div class="card-body">
            <h5 class="card-title">Store Key Info</h5>
            <p class="card-text">
              Save critical information such as passwords, reminders, and
              meeting notes in one place.
            </p>
          </div>
        </div>

        <div class="card text-bg-info mb-3" style={{maxWidth: "23rem"}}>
          <div class="card-header">Ideas & Inspiration</div>
          <div class="card-body">
            <h5 class="card-title">Capture Your Thoughts</h5>
            <p class="card-text">
              Jot down creative ideas, quotes, or sudden insights you want to
              revisit later.
            </p>
          </div>
        </div>

        <div class="card text-bg-light mb-3" style={{maxWidth: "23rem"}}>
          <div class="card-header">General Notes</div>
          <div class="card-body">
            <h5 class="card-title">Everything Else</h5>
            <p class="card-text">
              Use this space for anything that doesn't fit in the other
              categories. Notes, logs, etc.
            </p>
          </div>
        </div>
      </div>
    </div>
   
   
    </>
  );
};

export default Getstart;
