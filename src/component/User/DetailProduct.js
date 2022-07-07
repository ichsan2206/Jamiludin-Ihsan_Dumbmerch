import React from 'react'
import NavbarUser from '../Navbar/NavbarUser';
import './DetailProductStyle.css'

export default function DetailProduct() {
  return (
    <div> 
        <NavbarUser />
        <div className='postDetail'>
        <div className='containerDetail'>
          <div className='detailImage'>
            <img src='https://cdn1-production-images-kly.akamaized.net/WVFZfWv4lNhKrbqlJYLgUEFsMXQ=/640x360/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1006506/original/051189500_1443687569-gambar_mouse_-_microsoft.jpg' alt='' />
                    </div>
          <div className='detailCaption'>
          <h1 className='detailJudul'>Mouse</h1>
          <p className='detailStock'>Stock : 600</p>
          <p className='detailSpesifikasi'> - Wireless Mouse <br />
              - Konektivitas wireless 2.4 GHz<br />
              - Jarak wireless hingga 10 m<br />
              - Plug and Play<br />
              - Baterai tahan hingga 12 bulan</p>
          <p className='detailSpesifikasi2'> Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.</p>
          <div>    
            <h1 className='detailHarga'>Rp.300.900</h1>   
          </div>
          <button className='detailButton'>Buy</button>  
          </div>
        </div>
    </div>
    </div>
  )
}
