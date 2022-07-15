import './style.scss'
function Logout () {


    return (
        <div>
            <div className='Logout'>
                 <h2>Apakah anda akan Log Out ? </h2>
                </div>
            
             <a href="/login">
                  <button type="submit" class="btn btn-primary">Tidak</button>
              </a>
              <div className='iya'>
                  <a href="/">
                      <button type="submit" class="btn btn-primary">Iya</button>
                   </a>
                </div>
             

          
      </div>     
        
    )
 }
export default Logout;