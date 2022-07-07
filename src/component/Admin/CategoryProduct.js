import React from 'react'
import {Button, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import NavbarAdmin from '../Navbar/NavbarAdmin';
import './styleAdmin.css'

export default function CategoryProduct() {
  return (
    <div>
    <NavbarAdmin />
    <div className="post side1 justify-content-center align-items-center">
    <h1>List Category</h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mouse</td>
                <td className='col-5'>
                <Link to="/Edit-Category"><Button type="button" className="btn px-2 mx-3 btn-success col-2 position-relative text-decoration-none">Edit</Button></Link>
                <Button type="button" className="btn px-2 mx-3 btn-danger col-2 position-relative text-decoration-none">Delete</Button>
                </td>
            </tr>                       
            </tbody>
        </Table>
    </div>
    </div>
);
};