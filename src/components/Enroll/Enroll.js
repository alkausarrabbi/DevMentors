import React from 'react';


const Enroll = () => {
    return (
        <div className=" container-fluid mx-auto w-50 pe-5 ">
            <h2 className="mb-5 ps-5">Student Form</h2>
             <div className=" ms-5 mb-5 ">
            <div className="row g-3">
            <div className="col-sm-6">
              <label for="firstName" className="form-label">First name</label>
              <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid first name is required.
              </div>
            </div>

            <div className="col-sm-6">
              <label for="lastName" className="form-label">Last name</label>
              <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>


            <div className="col-12">
              <label for="email" className="form-label">Email <span className="text-muted">(Requird)</span></label>
              <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
              <div className="invalid-feedback">
                Please enter a valid email address 
              </div>
            </div>

            <div className="col-12">
              <label for="address" className="form-label">Address</label>
              <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
              <div className="invalid-feedback">
                Please enter your present address.
              </div>
            </div>


            <div className="col-md-6">
              <label for="country" className="form-label">Course</label>
              <select className="form-select" id="country" required="">
                <option value="">Choose Course ID</option>
                <option></option>
              </select>
              <div className="invalid-feedback">
                Please select a valid id
              </div>
            </div>
            <div className="col-md-6 mb-5">
              <label for="country" className="form-label">Course</label>
              <select className="form-select" id="country" required="">
                <option value="">Payment Method</option>
                <option>BKash</option>
                <option>Nagad</option>
                <option>Card</option>
                <option>Cash</option>
              </select>
              <div className="invalid-feedback">
                Please select a valid country.
              </div>
              
            </div>
            <button type="button" class="btn btn-warning ">Submit</button>
            </div>
          </div>
        </div>
    );
};

export default Enroll;