
function ConfirmShop () {


    return(
        <div>
           <div class="container mt-3">
              <h2>Rincian Belanja</h2>
              <br></br>
              <form action="/addtocart">
                 <button type="submit" class="btn btn-primary">Kembali</button>
              </form>
                      <table class="table table-borderless">
                          <thead>
                              <tr>
                                 <th>Jenis Baju</th>
                                      <th>Jumlah Harga</th>
                                           <th>Jumlah Baju</th>
                              </tr>
                         </thead>
                             <tbody>
                                  <tr>
                                      <td>Baju lebaran</td>
                                      <td>Rp 50.000</td>
                                      <td>2</td>
                                  </tr>
                                  <tr>
                                       <td>Baju kaos</td>
                                       <td>Rp. 100.000</td>
                                       <td>4</td>
                                  </tr>
                                   <tr>
                                        <td>Baju Kantor</td>
                                        <td>Rp 150.000</td>
                                        <td>6</td>
                                  </tr>
                                   <tr>
                                      <th> Total biaya</th>
                                 </tr>
                             </tbody>
                    </table>
             </div>
             <h5> Apabila telah selesai belanja maka Klik status</h5>

            
             <form action="/status">
                 <button type="submit" class="btn btn-primary">Status</button>
              </form>
              <form action="/logout">
                 <button type="submit" class="btn btn-primary">Log out</button>
              </form>

        </div>
    )
    }
export default ConfirmShop;