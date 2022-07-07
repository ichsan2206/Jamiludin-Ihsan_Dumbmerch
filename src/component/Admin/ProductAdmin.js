import React from 'react'
import {Table} from "react-bootstrap";
import {Link} from 'react-router-dom'
import NavbarAdmin from '../Navbar/NavbarAdmin';
import './styleAdmin.css'

export default function ProductAdmin() {
  return (
    <div>
        <NavbarAdmin />
         <div className="post side1 justify-content-center align-items-center">
            <h1>List Category</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th scope="col">No</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Desc</th>
                        <th scope="col">Price</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mouser</td>
                        <td>Mouse Murah Meriah</td>
                        <td>Rp. 12.000</td>
                        <td>Stok 100</td>
                        <td>
                        <Link to="/Edit-Product"><button type="button" class="btn px-2 mx-3 btn-success col-3 position-relative">Edit</button></Link>
                            <button type="button" class="btn px-2 mx-3 btn-danger col-3 position-relative">Delete</button>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
    </div>
  )
}
