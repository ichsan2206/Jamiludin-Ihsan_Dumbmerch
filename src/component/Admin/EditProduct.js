import React from 'react'
import {Button, Form} from "react-bootstrap";
import NavbarAdmin from '../Navbar/NavbarAdmin';
import './styleAdmin.css'

export default function EditProduct() {
  return (
    <div>
        <NavbarAdmin />
        <div className=" post side1 justify-content-center align-items-center">
                <h1>List Product</h1>
                <Form>
                    <div className="mb-3">
                        <input className="form-control" style={{backgroundColor: "#323030", color: "white"}} type="file" id="formFile"/>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="nama produk"/>
                    </div>
                    <div className="mb-3">
                        <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: "#323030", color: "white"}} placeholder="deskripsi" rows="4"></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="harga"/>
                    </div>
                    <div className="mb-5">
                        <input type="text" className="form-control" id="exampleFormControlInput1" style={{backgroundColor: "#323030", color: "white"}} placeholder="qty"/>
                    </div>
                    <Button type="submit" className="btn-success col-12 btn-primary ">Save</Button>
                </Form>
            </div>
    </div>
  )
}
