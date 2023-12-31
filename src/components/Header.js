import * as React from "react";
import logo from "../img/Tatvasoft-logo-profile.jpg";
import { Link, useNavigate } from "react-router-dom";
import { Search, Cart4 } from "react-bootstrap-icons";
import Cookies from "js-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bookService from "../services/bookService";
import { HttpStatusCode } from "axios";

function Header() {
  const [bookSearch, setBookSearch] = React.useState("");
  const [searchResultList, setSearchResultList] = React.useState([]);
  const navigate = useNavigate();
  const email = Cookies.get("auth_email");
  // console.log(email);
  React.useEffect(() => {
    navigate("/");
  }, [email]);

  const handleLogOut = () => {
    Cookies.remove("auth_email");
    toast.success("User Logged out successfully!", {
      position: "bottom-right",
    });
    navigate("/");
  };

  const handleSearch = async () => {
    const payload = bookSearch;
    console.log(bookSearch);
    await bookService
      .SearchBook(payload)
      .then((res) => {
        setSearchResultList(res.data.result);
        document.getElementById("overlay").style.display = "block";
      })
      .catch((err) => {
        console.log(err.response);
        setSearchResultList([]);
        document.getElementById("overlay").style.display = "none";
      });
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg "
        style={{ backgroundColor: "white", height: 92 }}
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img alt="TatvaSoft" src={logo} style={{ height: 92 }} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
            style={{ position: "relative" }}
          >
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0  "
              style={{
                // position: "absolute",
                right: 10,
                fontFamily: "'Roboto', sans-serif",
              }}
            >
               {/* {!email && (  */}
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/login"
                      style={{ color: "#f14d54" }}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="">
                      |
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="/register"
                      style={{ color: "#f14d54" }}
                    >
                      Register
                    </Link>
                  </li>
                </>
              {/* )} */}
               {/* {email && ( 
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="#"
                      style={{ color: "#f14d54" }}
                    >
                      Users
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="#">
                      |
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="#"
                      style={{ color: "#f14d54" }}
                    >
                      Categories
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="#">
                      |
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="#"
                      style={{ color: "#f14d54" }}
                    >
                      Books
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link disabled" to="#">
                      |
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link "
                      to="#"
                      style={{ color: "#f14d54" }}
                    >
                      Update Profile
                    </Link>
                  </li>
                </>
              )} */}
            </ul>
          </div>
          <button
            className="btn "
            style={{
              border: "1px solid #cacaca",
              color: "rgb(65,65,65)",
              padding: "8px 15px",
              marginRight: 20,
              fontFamily: "'Roboto', sans-serif",
            }}
          >
            <Cart4 color="#f14d54" size={20} />
            <span style={{ margin: 2, marginRight: 4, color: "#f14d54" }}>
              0
            </span>
            Cart
          </button>
          {email && (
            <button
              className="btn "
              style={{
                border: "1px solid #cacaca",
                color: "rgb(65,65,65)",
                padding: "8px 15px",
                fontFamily: "'Roboto', sans-serif",
                fontSize: 15,
                fontWeight: 600,
              }}
              onClick={handleLogOut}
            >
              LOG OUT
            </button>
          )}
        </div>
      </nav>
      <section
        className="d-flex justify-content-center align-items-center"
        style={{ height: 80, backgroundColor: "#f4f4f4" }}
      >
        <div className="d-flex" style={{ height: 40 }}>
          <div style={{ position: "relative" }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="What are you looking for..."
              aria-label="Search"
              style={{ width: 422, height: 40, color: "rgb(33,33,33)" }}
              value={bookSearch}
              onChange={(e) => setBookSearch(e.target.value)}
            />
            <div
              id="overlay"
              className="overlay"
              style={{
                width: 422,
                backgroundColor: "#fff",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                padding: 20,
                fontFamily: "'Roboto', sans-serif",
                display: "none",
                maxHeight: 350,
                overflow: "auto",
              }}
            >
              {searchResultList.length === 0 && (
                <p style={{ margin: "5px auto 0px 0px" }}>No product found</p>
              )}
              {!searchResultList && (
                <p style={{ margin: "15px auto 0px 0px" }}>Loading....</p>
              )}
              {searchResultList.map((book) => {
                return (
                  <div
                    className="book-info"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      margin: "30px auto 0px 0px",
                    }}
                    key={book.id}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 16,
                          margin: "2px auto 2px 0px",
                          fontWeight: 500,
                        }}
                      >
                        {book.name}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#838383",
                          margin: "1px auto 0px 0px",
                          fontWeight: 500,
                        }}
                      >
                        {book.category}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          color: "#838383",
                          margin: "0px auto 2px 0px",
                          fontWeight: 500,
                        }}
                      >
                        {`${book.description.slice(0, 40)} ${
                          book.description.length > 40 ? "..." : ""
                        }`}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <p
                        style={{
                          fontSize: 14,
                          color: "#414141",
                          marginBottom: 2,
                        }}
                      >
                        {book.price}
                      </p>
                      <p style={{ marginTop: 0, color: "#f14d54" }}>
                        Add to Cart
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <button
            className="btn "
            style={{
              height: 40,
              margin: "0 10px",
              maxWidth: 129,
              fontSize: 16,
              backgroundColor: "#80BF32",
              color: "white",
              width: 120,
              fontFamily: "'Roboto', sans-serif",
            }}
            onClick={handleSearch}
          >
            <Search style={{ marginRight: 8 }} />
            Search
          </button>

          
        </div>
      </section>
    </>
  );
}
export default Header;
