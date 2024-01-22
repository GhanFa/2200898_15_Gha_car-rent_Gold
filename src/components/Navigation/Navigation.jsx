import { useEffect } from "react";
import "./navigation.css";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    // if not a hash link, scroll to top
    if (hash === "") {
      window.scrollTo(0, 0);
    }
    // else scroll to id
    else {
      setTimeout(() => {
        const id = hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [pathname, hash, key]); // do this on route change

  return (
    <nav className=" mynavbar navbar navbar-expand-lg">
      <div className="container w-80">
        <Link to="/" className="navbar-brand"></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* offcanvas */}
        <div
          className="offcanvas offcanvas-end offcanvas-sm"
          tabIndex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className="offcanvas-header pt-4 pb-2 ">
            <h5 className="offcanvasRightLabel fw-bold mb-0 ">BCR</h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="myoffcanvas offcanvas-body justify-content-end">
            <ul className="navbar-nav offcanvas-nav">
              <li className="nav-item">
                <a
                  className="nav-link active mx-3"
                  aria-current="page"
                  href="/#ourservices"
                >
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/#whyus">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/#testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/#faq">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
