import './signin.css'

function Signin(){
return(
    <div className='clr'>
         Email :&nbsp;
        <input type="email" placeholder="abc@gmail.com" required id="email"
         maxlength="18" name=""  />
         <br />
         Password :&nbsp;
    <input id="password" type="password" placeholder="Password "
     name="Password" required />
     <br />
     {/* <a href=""> */}
        <button>Sign In</button>
        {/* </a> */}
     <br />
<button >Forget Password</button>
        
    </div>
)
}
export default Signin;