import React from 'react';
import './ProductStyle.css';
import Navbar from '../Navbar/NavbarUser'

const products = [
    {
        id:1,
        image:'https://siplahtelkom.com/public/products/136508/3356657/mouse.1647613710.jpg',
        product: 'Mouse',
        price: 'Rp. 200.000',
        stock: '200',
    },
    {
        id:2,
        image:'https://images.tokopedia.net/img/cache/500-square/product-1/2016/11/22/1629338/1629338_fef1723a-c93b-4ce5-91d9-515fe4f4f677.jpg',
        product: 'Keyboard',
        price: 'Rp. 250.000',
        stock: '100',
    },
    {
        id:3,
        image:'https://images.tokopedia.net/img/KRMmCm/2022/5/9/488c5172-8305-4d76-8519-06c7ed915ba6.jpg',
        product: 'Laptop',
        price: 'Rp. 5.500.000',
        stock: '25',
    },
    {
        id:4,
        image:'https://awsimages.detik.net.id/community/media/visual/2021/10/02/iphone-13-pro-33_169.jpeg?w=700&q=90',
        product: 'Iphone 13',
        price: 'Rp. 13.000.000',
        stock: '1',
    },
    {
        id:5,
        image:'https://pict.sindonews.net/dyn/620/pena/news/2020/10/05/122/185990/hanya-sekitar-29-pengguna-wireless-charger-di-dunia-ini-alasannya-ptn.jpg',
        product: 'Charger Wirelles',
        price: 'Rp. 300.000',
        stock: '200',
    },
];

function  ProductList() {
  return (
    <div>
        <Navbar />
        <div className='post'>
        <div>
            <h1>Produk</h1>
        </div>
        <div className='grid-container'>
        {products.map((products) =>(
            <div key={products.id}className='grid-item'>
                <div>
                <img className='img-product' src={products.image} alt=''/>
                </div>
                <div className='caption'>
                <h1>{products.product}</h1>
                <p>{products.price}</p>
                <p>Stok: {products.stock}</p>
                </div>
            </div>
             ))}
        </div>
        </div>
    </div>
  )
}

export default ProductList;