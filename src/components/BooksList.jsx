// import { Button, Pagination, TextField, Typography } from "@mui/material";
// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import WithAuth from "../layout/WithAuth";
// import { UserData } from "../App";

// const BooksList = () => {

//     const navigate = useNavigate();
//     const handleButtonclick = () => {
//         navigate('/');
//     }


//     return (<>
//         <div>book</div>
//         <Button variant="contained" color="info" onClick={() => { handleButtonclick() }}>Go to Home</Button>
//         <div className="flex-1 ml-40 mr-40">
//             <Typography
//                 variant="h4"
//                 sx={{
//                     marginTop: "25px",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontWeight: "bold",
//                     color: "#474747",
//                 }}
//             >
//                 Book Listing
//             </Typography>
//             <div className="flex items-center justify-center m-6">
//                 <div className="border-t-2 border-black w-32"></div>
//             </div>
//             <div className="flex justify-between items-center ">
//                 <Typography variant="h6">
//                     Total - {} items
//                 </Typography>
//                 <div className="flex items-center space-x-10">
//                     <TextField
//                         name="text"
//                         placeholder="Search..."
//                         variant="outlined"
//                         size="small"
//                         onChange={(e) => {
                           
//                         }}
//                         sx={{
//                             backgroundColor: "white",
//                             fontStyle: "italic",
//                             "& .MuiInputBase-input": {
//                                 fontStyle: "normal",
//                             },
//                         }}
//                     />
//                     <div className="flex">
//                         <Typography variant="subtitle1" sx={{ marginRight: "10px" }}>
//                             Sort By
//                         </Typography>

//                         <select >
//                             <option value="a-z">a - z</option>
//                             <option value="z-a">z - a</option>
//                         </select>
//                     </div>
//                 </div>
//             </div>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
                
//                     <div
//                         className="rounded-lg shadow-xl flex flex-col space-y-4 border-black"

//                     >
//                         <div className="w-full h-56 overflow-hidden rounded-lg">
//                             <img

//                                 alt=""
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                         <div className="p-5">
//                             <h2 className="text-xl font-bold line-clamp-1 text-[#474747] ">
//                                 {}
//                             </h2>
//                             <span className="text-gray-600 mt-2 font-semibold">
//                                 { }
//                             </span>
//                             <p className=" line-clamp-2 h-14 mt-2">{ }</p>
//                             <p className=" mb-2 text-xl text-gray-500">
//                                 MRP
//                                 <span className="mx-1">&#8377;</span>
//                                 {}
//                             </p>
//                             <Button
//                                 variant="contained"
//                                 sx={{
//                                     color: "white",
//                                     backgroundColor: "#f14d54",
//                                     "&:hover": {
//                                         backgroundColor: "#f14d54", // Change the hover background color
//                                     },
//                                     marginTop: "8px",
//                                     fontWeight: "bold",
//                                 }}
//                                 fullWidth

//                             >
//                                 add to cart
//                             </Button>
//                         </div>
//                     </div>
               
//             </div>

//             <div>
//                 <Pagination
//                     sx={{
//                         marginTop: "25px",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                     }}


//                 />
//             </div>
//         </div>
//     </>)
// };
// export default WithAuth(BooksList);