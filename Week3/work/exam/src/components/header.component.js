import Lottie from "lottie-react";
import animation from "../animation/quiz.json"

const Header=()=>{
    return(
        <>
        <div class="container">
  <div class="row">
    <div class="col">
    <Lottie animationData={animation} loop={true} />
    
    </div>
    <div class="col">
      
      <p class="fw-bold fs-1">Industrial Training Weekly Test</p>
      <p class="fs-3">Instructions:</p>
      <ul>
      
      <li><p class="fs-5">30 Marks</p></li> 
      <li><p class="fs-5">MCQ Type</p></li>
      <li><p class="fs-5">Limited Time</p></li>
      </ul>

      <button class="btn btn-primary m-2 shadow" type="submit">Open Web-Dev Test</button><br/>
      <button class="btn btn-primary m-2 shadow" type="submit">Open App-Dev Test</button>
      
    </div>
  
  </div>
</div>

        </>
    )
}
export default Header;