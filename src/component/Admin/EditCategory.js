import React from 'react'
import {Button, Form} from "react-bootstrap";
import NavbarAdmin from '../Navbar/NavbarAdmin';
import './styleAdmin.css'

export default function EditCategory() {
  return (
    <div>
 <NavbarAdmin />
        <div className=" post side1 justify-content-center align-items-center">
                <h1>Edit Category</h1>
                <Form>
                    <div className="mb-5">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="Edit Category"/>
                    </div>
                    <Button type="submit" className="btn-success col-12 btn-primary ">Save</Button>
                </Form>
            </div>
    </div>
  )
}
