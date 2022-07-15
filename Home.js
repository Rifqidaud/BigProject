
//import 'font-awesome from font-awesome';
//import './src/style.scss';
function Home() {
    const SHOPNOW = () => {
        alert('SHOP NOW');
    }

    

    return (
        <div>
           <div className='container'>
               <div className='row'>
                 <div className='col-8'>
                      <h1 className='fontChoose'>Choose <b>as you want </b> <br></br>
                       pay <b>as you can </b></h1>
                  </div>
                  <div className='col-4'>
                       <ul className='list-group headerHome'>
                           <li className='list-group-item d-flex justify-content-end'>Latest</li>
                           <li className='list-group-item d-flex justify-content-end'>All</li>
                       </ul>
                  </div>
               </div>
                <div className='row mt-4'>
                    <div className='col-3'>
                         <a href="/listproduct">
                         <button type="button" class="btn btn-dark">SHOP NOW</button>
                         </a>
                    </div>
                    <div className='col-9'>
                            <h2 className='d-flex justify-content-end'><b>New Concept</b>
                            <br></br>of Online Shopping</h2>                
                    </div>
                </div>
                <div className='row'>
                    <div className='col-4 offset-8 border-top'>
                        <p className='d-flex justify-content-end'>
                          
                                 Lorem Ipsum will go here. Lorem<br></br>
                                 Ipsum Will go Here. Lorem Ipsum<br></br>
                                 will go here. Lorem Ipsum will go<br></br>
                                 here<br></br>
                      </p>
                   </div>
                 </div>
                 <div className='row d-flex justify-content-end'>
                     <div className='col-3'>
                          <div className='card'>
                              <div className='card bg-dark text-white'>
                                     <h5 className='card-title'>GALLERY</h5>
                                 <p className='card-text'>
                                     SUBTITLE
                                 </p>
                               </div>
                          </div>
                      </div>
                        <div className='col-3'>
                          <div className='card'>
                              <div className='card bg-dark text-white'>
                                  <h5 className='card-title'>ACTIVITES</h5>
                                 <p className='card-text'>
                                     SUBTITLE
                                 </p>
                              </div>
                          </div>
                       </div>
                       <div className='col-3'>
                          <div className='card'>
                              <div className='card bg-dark text-white'>
                                  <h5 className='card-title'>KEYNOTES</h5>
                                  <p className='card-text'>
                                      SUBTITLE
                                    </p>
                              </div>
                          </div>
                       </div>
                    </div>  
                </div>
       </div>         
    );     
}

export default Home;