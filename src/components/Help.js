import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <h1
          className="text-center my-4 fw-bold"
          style={{ color: "rgba(24, 23, 23, 0.9)" }}
        >
          Help Center – Create, Edit & Manage Your Blogs
        </h1>
        <div className="row m-4">
          {/* Main Content */}
          <main className="col-lg-9 col-md-8">
            <article
              className="p-4 rounded shadow-sm mb-4"
              style={{ backgroundColor: "rgb(201, 201, 201)" }}
            >
              <h1 className="mb-4 text-center">Create a blog</h1>
              <p className="lead mb-4">
                You can create and manage your own blog with iNotebook.
              </p>

              <h2 className="h4 mt-4">Steps:</h2>
              <ol className="ps-3">
                <li className="mb-2">
                  <Link to="/singup" rel="noopener noreferrer">
                    Create Account in iNotebook
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/login" rel="noopener noreferrer">
                    Login in iNotebook
                  </Link>
                </li>
                <li className="mb-2">
                  Click <span className="text-dark fw-bold">New blog</span>.
                </li>
                <li className="mb-2">Enter a Title for your blog.</li>
                <li className="mb-2">Enter a Description for your blog.</li>
                <li className="mb-2">Enter a Tag for your blog.</li>
                <li className="mb-2">
                  Click <strong>Add</strong>.
                </li>
              </ol>
            </article>
          </main>

          {/* Sidebar (Left) */}
          <aside className="col-lg-3 col-md-4 mb-4">
            <div
              className="p-3 rounded shadow-sm"
              style={{
                backgroundColor: "rgb(201, 201, 201)",
              }}
            >
              <h2 className="h5 pb-2 border-bottom mb-3 text-dark">Help</h2>
              <ul className="list-unstyled">
                <li className="mb-3">
                  <Link
                    to="/"
                    className="d-flex align-items-center text-decoration-none text-dark fw-semibold"
                  >
                    <svg
                      className="me-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                    Create a blog
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/"
                    className="d-flex align-items-center text-decoration-none text-dark fw-semibold"
                  >
                    <svg
                      className="me-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                    Edit, Delete and Add
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/blog"
                    className="d-flex align-items-center text-decoration-none text-dark fw-semibold"
                  >
                    <svg
                      className="me-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                    Read All Blogs
                  </Link>
                </li>
                <li className="mb-3">
                  <Link
                    to="/purpose"
                    className="d-flex align-items-center text-decoration-none text-dark fw-semibold"
                  >
                    <svg
                      className="me-2"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
                    </svg>
                    Our Purpose
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

          {/* Feedback Section */}
          <div className="card shadow border-0 bg-transparent">
            <div className="card-body p-4">
              <h2
                className="text-center my-4 fw-bold"
                style={{ color: "rgba(24, 23, 23, 0.9)" }}
              >
                We Value Your Feedback
              </h2>
              <form>
                <div className="container mb-3">
                  <textarea
                    style={{ backgroundColor: "rgb(201, 201, 201)" }}
                    className="form-control rounded-3 shadow-sm mb-3"
                    id="message"
                    rows="5"
                    placeholder="Write your feedback here..."
                  ></textarea>

                  <div className="d-flex justify-content-center">
                    <button
                      type="submit"
                      className="btn btn-secondary" style={{width:"30%"}}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
