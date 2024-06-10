import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddStudent = () => {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        college: "",
        dob: "",
        course: "",
        mob: "",
        email: "",
        address: ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status ==  "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
    return (
        <div>
            <Navbar />
            <h1><center>FISAT</center></h1>
            <h2><center>Student Application</center></h2>
            <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYB2Sm9iRIw76S2u7QYCk2cAcv3I295pBcFw&s"height="300px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://fisat.ac.in/wp-content/uploads/2022/07/Institution1-768x356.jpg"height="300px" class="d-block w-100" alt="..."></img>
    </div>
    <div class="carousel-item">
      <img src="https://careermudhra.com/wp-content/uploads/federal-institute-of-science-and-technology-fisat-ernakulam-jpg.webp"height="300px" className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="fname" className="form-label">FIRST NAME</label>
                                <input type="text" className="form-control" name='firstname' value={data.firstname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="lname" className="form-label">LAST NAME</label>
                                <input type="text" className="form-control" name='lastname' value={data.lastname} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="college" className="form-label">COLLEGE</label>
                                <input type="text" className="form-control" name='college' value={data.college} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="dob" className="form-label">DOB</label>
                                <input type="date" className="form-control" name='dob' value={data.dob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="" className="form-label">COURSE</label>
                                <select name='' className="form-control" value={data.course} onChange={inputHandler}>
                                    <option value="">Select Course</option>
                                    <option value="MCA">MCA</option>
                                    <option value="MSC">MSC</option>
                                    <option value="MTECH">MTECH</option>
                                    <option value="MBA">MBA</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">MOBILE</label>
                                <input type="text" className="form-control" name='mob' value={data.mob} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="email" className="form-label">EMAIL ID</label>
                                <input type="text" className="form-control" name='email' value={data.email} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="address" className="form-label">ADDRESS</label>
                                <textarea className="form-control" name='address' value={data.address} onChange={inputHandler}></textarea>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudent
