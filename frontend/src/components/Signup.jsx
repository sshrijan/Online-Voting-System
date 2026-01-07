
const Signup = () => {
  return (
    <div className=""> 
    <h1 className="text-center my-4 fw-bold">Signup Form </h1>

<form className="container mt-5" method="">
  <div className="row">
        <div class="col-md-4 col-lg-4 mb-3">
    <label for="firstname" class="form-label">Firstname</label>
    <input type="text" class="form-control" id="firstname" placeholder="Enter  firstname"
    min={3}
    required
    />
  </div>
  <div class="col-md-4 col-lg-4 mb-3">
    <label for="middlename" class="form-label">Middlename</label>
    <input type="text" class="form-control" id="middlename" placeholder="Enter  middlename"
    min={3}
    />
  </div>
  <div class="col-md-4 col-lg-4 mb-3">
    <label for="lastname" class="form-label">Lastname</label>
    <input type="text" class="form-control" id="lastname"placeholder="Enter  lastname"
    min={3}
    />
  </div>
  </div>


      <div className="mb-3">
        <label 
        htmlFor="email" 
        className="form-label">
        Email address
        </label>

        <input 
        type="email"
        className="form-control" 
        id="email" 
        aria-describedby="emailHelp" 
        placeholder="Enter your email"
        min={5}
        max={50}
        required
        />
      </div>

      <div className="mb-3">
        <label 
        htmlFor="age" 
        className="form-label">
        Age
        </label>

        <input 
        type="number"
        className="form-control" 
        id="age" 
        aria-describedby="ageHelp" 
        placeholder="Enter your age"
        min={18}
        max={100}
        required
        />
      </div>

      <div className="mb-3">
        <label 
        htmlFor="address" 
        className="form-label">
        Address
        </label>

        <input 
        type="text"
        className="form-control" 
        id="address" 
        aria-describedby="addressHelp" 
        placeholder="Enter your address"
        required
        min={3}
        max={50}
        />
      </div>

      <div className="mb-3">
        <label 
        htmlFor="voterID" 
        className="form-label">
        Voter ID
        </label>

        <input 
        type="number"
        className="form-control" 
        id="voterID" 
        aria-describedby="voterIDHelp" 
        placeholder="Enter your voterID"
        required
        min={8}
        max={8}
        />
      </div>

      <div className="mb-3">
        <label 
        htmlFor="password" 
        className="form-label">
        Password
        </label>
        <input 
        type="password" 
        className="form-control" 
        id="password" 
        placeholder="Enter your password"
        required
        min={6}
        max={20}
        />
      </div>
     
      <button type="submit" className="btn btn-primary mt-2 w-100">Submit</button>
    </form>
    </div>
  )
}

export default Signup
