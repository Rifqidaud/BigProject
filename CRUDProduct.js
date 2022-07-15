import './style.scss';

function CRUDProduct () {
   return(
       <div>
             <div className="col-4">
                 <div className="card-detail1">
                      <div className="card-body-detail1">
                         <img className="card-img-top" src="https://ceklist.id/wp-content/uploads/2022/02/Outfit-Lebaran-Pria-Terbaik.jpg" height="100px" />
                              <h5 className='card-title-detail1'>BajuLebaran putih</h5>
                                  <p>Harga : Rp 100.000.00</p>
                              <a href="addtocart" class="btn btn-primary">Tambah </a>
                                                 <br></br>
                                                 <a href="" class="btn btn-primary">Hapus</a>
                     </div>
                 </div>
             </div>
     </div>
    )
}
export default CRUDProduct;