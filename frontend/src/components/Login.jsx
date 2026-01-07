
const Login = () => {
  function loginUser(){
    
  }
  return (
    <div>
      <h1 className="text-center fw-bold my-3">Login</h1>
      <form className="container">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter your password"/>
  </div>
  <button type="submit" class="btn btn-primary" onClick={loginUser}>Submit</button>
</form>

    </div>
  )
}

export default Login
