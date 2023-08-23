import { Button, Pagination, TextField, Typography } from "@mui/material";
import WithAuth from "../../layout/WithAuth";
import React, { useState } from "react";
import { useEffect } from "react";
import bookService from "../../services/bookService";

const BooksListing = () => {


    const [books, setBooks] = useState([]);
    // const navigate = useNavigate();
    // const handleButtonclick = () => {
    //     navigate('/');
    // }

    const getBooks = async () => {
        await bookService.GetAllBooks().then((response) => {

            if (response && response.status === 200) {
                setBooks(response.data.result);
            }

        }).catch((err) => { });
    };

    useEffect(() => {
        getBooks();
    }, []);

    console.log("Books", books);
    return (<>
        {/* <div>book</div>
        <Button variant="contained" color="info" onClick={() => { handleButtonclick() }}>Go to Home</Button> */}
        <div className="flex-1 ml-40 mr-40">
            <Typography
                variant="h4"
                sx={{
                    marginTop: "25px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    color: "#474747",
                }}
            >
                Book Listing
            </Typography>
            <div className="flex items-center justify-center m-6">
                <div className="border-t-2 border-black w-32"></div>
            </div>
            <div className="flex justify-between items-center ">
                <Typography variant="h6">
                    Total - {books.length} items
                </Typography>
                <div className="flex items-center space-x-10">
                    <TextField
                        name="text"
                        placeholder="Search..."
                        variant="outlined"
                        size="small"
                        onChange={(e) => {

                        }}
                        sx={{
                            backgroundColor: "white",
                            fontStyle: "italic",
                            "& .MuiInputBase-input": {
                                fontStyle: "normal",
                            },
                        }}
                    />
                    <div className="flex">
                        <Typography variant="subtitle1" sx={{ marginRight: "10px" }}>
                            Sort By
                        </Typography>

                        <select >
                            <option value="a-z">a - z</option>
                            <option value="z-a">z - a</option>
                        </select>
                    </div>
                </div>
            </div>
                <div className="card-deck " g>
                    {books.map((book, index) => (

                        <div className="card" style={{ width: '18rem' }} key={index} >
                            <img className="card-img-top" src={book.base64image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{book.name}</h5>
                                <p className="card-text">{book.description}</p>

                            </div>
                        </div>
                    ))}
                </div>
           

            <div>
                <Pagination
                    sx={{
                        marginTop: "25px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}


                />
            </div>
        </div>
    </>)
};
export default WithAuth(BooksListing);