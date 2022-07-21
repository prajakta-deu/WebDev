const Navbar=()=>{
  return(<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow p-3 mb-5 ">
<div className="container-fluid">
  <a class="navbar-brand " className="navbar-brand" href="#">
  <img src="https://cwipedia.com/static/media/logo-tran.b1608c34.png" alt="" width="30" 
  height="24" class="d-inline-block align-text-top"></img>CWIPEDIA</a>
  
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
  aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
      <li className=" nav justify-content-end">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
      </li>
      
      <li className=" nav justify-content-end">
        <a className="nav-link" aria-current="page" href="#">About</a>
      </li>
      <li className=" nav justify-content-end">
        <a className="nav-link " aria-current="page" href="#">Blog</a>
      </li>
      <li className=" nav justify-content-end">
        <a className="nav-link " aria-current="page" href="#">Career</a>
      </li>
      <li className=" nav justify-content-end">
        <a className="nav-link " aria-current="page" href="#">Contact</a>
      </li>
      <li className=" nav justify-content-end">
        <a className="nav-link " aria-current="page" href="#">Team</a>
      </li>
       
     
      
    </ul>
    
  </div>
</div>
</nav>
  </>

  )
}
export default Navbar