import React from 'react'
import homeIcon from '../images/homeIcon.png'
function Navbar() {
  return (
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><img src={homeIcon} alt='not found' style={{width:"40px",height:"40px"}} /></a>
    
    

    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarText" >
      <ul class="navbar-nav " >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Project</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">About me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/">Hire Me</a>
        </li>
      </ul>

    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
