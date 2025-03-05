// import React, { useState } from 'react'
// import json from './db.json';
// import { Link } from 'react-router-dom';
// import './Pr2.css';
// function Pr2() {

//     const [search, setSearch] = useState('');


//     return (
//         <div className='Cour-top'>
//             <div>
//                 <input type='text' id="searchInput" placeholder='search for course' onChange={(event)=>{
//                     setSearch(event.target.value)
//                 }}/>
//             </div>
//             <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
//                 {json.filter((val)=>{
//                     if(search ===""){
//                         return val;
//                     }else if(val.description.toLowerCase().includes(search.toLocaleLowerCase())){
//                         return val;
//                     }
//                     return false;
//                 })
//                 .map((course) => (
//                     <div class="card" key="id" >
//                         <div class="card-cat">
//                             <h5>{course.category}</h5>
//                             <img src={course.image} alt={course.category} />
//                             <i class="fa-regular fa-heart"></i>
//                         </div>
//                         <div class="card-content">
//                             <div class="main-content">
//                                 <h2>{course.description}</h2>
//                                 <span class="main-content-det">
//                                     <h3>name</h3>
//                                     <h3><i class="fa-regular fa-clock"></i> 2 hours 30 min</h3>
//                                 </span>
//                             </div>
//                             <div className="rating">Rating: 4 / 5</div>
//                             <div class="price">
//                                 <h2>Rs. {course.price}</h2>
//                             </div>
//                             <div class="card-buttons">
//                                 {/* <button className='edu-btn1'>View Details</button> */}
//                                 <button className='edu-btn1'><Link to={`/course/${course.id}`}  className='edu-btn1'>View details</Link></button>
//                                 <button className='edu-btn2'>Add to Cart</button>
//                             </div>
//                         </div>
//                     </div>

//                 ))}

//             </div>
//         </div>
//     )
// }

// export default Pr2;


import React, { useState,useEffect } from 'react'
// import json from './db.json';
import { Link } from 'react-router-dom';
import './Pr2.css';
function Pr2() {
    const [courses, setCourses] = useState([]); 
    const [search, setSearch] = useState('');


    useEffect(() => {
        fetch("http://localhost:5407/Courses") //http://localhost:5407/api/courses
            .then(response => response.json())
            .then(data => setCourses(data.list)) 
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div className='Cour-top'>
            <div>
                <input type='text' id="searchInput" placeholder='search for course' onChange={(event)=>{
                    setSearch(event.target.value)
                }}/>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {courses.filter((val)=>{
                    if(search ===""){
                        return val;
                    }else if(val.description.toLowerCase().includes(search.toLocaleLowerCase())){
                        return val;
                    }
                    return false;
                })
                .map((course) => (
                    <div class="card" key={course.id} >
                        <div class="card-cat">
                            <h5>{course.category}</h5>
                            <img src={course.image} alt={course.category} />
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="card-content">
                            <div class="main-content">
                                <h2>{course.description}</h2>
                                <span class="main-content-det">
                                    <h3>name</h3>
                                    <h3><i class="fa-regular fa-clock"></i> 2 hours 30 min</h3>
                                </span>
                            </div>
                            <div className="rating">Rating: 4 / 5</div>
                            <div class="price">
                                <h2>Rs. {course.price}</h2>
                            </div>
                            <div class="card-buttons">
                                {/* <button className='edu-btn1'>View Details</button> */}
                                <button className='edu-btn1'><Link to={`/course/${course.id}`}  className='edu-btn1'>View details</Link></button>
                                <button className='edu-btn2'>Add to Cart</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default Pr2;