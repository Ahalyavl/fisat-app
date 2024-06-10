import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewStudent = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
      axios.get("https://courseapplogix.onrender.com/getdata").then((response)=>{
        changeData(response.data)
        console.log(response.data)
      }).catch ((error)=>{
        alert.apply(error.message)
      })
    }

    useEffect(
      ()=>{fetchdata()},[]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">FIRST NAME </th>
                                        <th scope="col">LAST NAME</th>
                                        <th scope="col">COLLEGE</th>
                                        <th scope="col">DOB</th>
                                        <th scope="col">COURSE</th>
                                        <th scope="col">MOBILE</th>
                                        <th scope="col">EMAIL</th>
                                        <th scope="col">ADDRESS</th>
                                        
                                        
                                        
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.firstname}</th>
                                            <td>{value.lastname}</td>
                                            <td>{value.college}</td>
                                            <td>{value.dob}</td>
                                            <td>{value.course}</td>
                                            <td>{value.mob}</td>
                                            <td>{value.email}</td>
                                            <td>{value.address}</td>
                                            
                                        </tr>

                                    </tbody>
                                }
                            )}

                         </table>

                     </div>
                 </div>
             </div>

     </div>
    )
}

export default ViewStudent