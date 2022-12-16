import React, { useState } from "react";

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [isUserEmailError, setUserEmailError] = useState(false);
  const [userPhoneNo, setUserPhoneNo] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [isUserPassword, setUserPasswordError] = useState(false);
  const [isinputPhoneNo, setInputPhoneNo] = useState(false);

  const handleEmailPhoneInput = (event: any) => {
    const checkUserInputType = Number(event.target.value);
    if (isNaN(checkUserInputType) || event.target.value == "") {
      setInputPhoneNo(false);
      setUserEmail(event.target.value);
    } else {
      setInputPhoneNo(true);
      setUserPhoneNo(event.target.value);
    }
  };

  const handlePasswordInput = (event: any) => {
    setUserPassword(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (userEmail == "") {
      //if user email exist in database then entered password will be validated
      //or else if does not exist then register yourself with phone no
      setUserEmailError(true);
    } else {
      if (userEmail == "preeti@gmail.com") {
        if (userPassword == "123") {
          // setUserPasswordError("Password is incorrect");
        } else {
          alert("Successfully Logged In");
        }
      }
    }
  };

  return (
    // https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg
    <div className="grid grid-cols-2 items-center w-120 mx-40 my-20 max-sm:w-full border-2 border-gray-50">
      <div className="bg-blue-500 h-full px-10 py-10  max-sm:col-span-2">
        <h3 className="text-white font-semibold text-2xl mb-8">Login</h3>
        <h6 className=" text-white">
          Get access to your Orders, Wishlist and Recommendations
        </h6>
      </div>
      <div className="w-full px-10 max-sm:col-span-2 ">
        <form onSubmit={submitHandler}>
          {isinputPhoneNo ? (
            <>
              <span>
                +91 <span className=" font-thin mx-2 text-gray-500 ">|</span>
              </span>
              <input
                placeholder="Enter Email/Mobile Number"
                className=" text-gray-500 outline-none my-5"
                onChange={handleEmailPhoneInput}
                value={userPhoneNo}
                name="emailPhoneNo"
              />
            
            </>
          ) : (
            <>
            <input
              placeholder="Enter Email/Mobile Number"
              className=" text-gray-500 outline-none my-5"
              onChange={handleEmailPhoneInput}
              value={userEmail}
              name="emailPhoneNo"
            />
              {
                isUserEmailError ? (
                  <p className=" text-red-600 text-xs">Please enter valid Email ID/Mobile number</p>
                ) :
                ""
              }
            </>
          )}

          <br />
          <input
            placeholder="Enter Password"
            name="password"
            className="text-gray-500 outline-none my-4"
            onChange={handlePasswordInput}
            value={userPassword}
          />
          <span className=" text-blue-500 font-medium cursor-pointer">
            Forgot ?{" "}
          </span>
          <br />
          <p className="text-gray-500 text-xs my-6">
            By continuing,you agree to Shop's
            <span className=" cursor-pointer text-blue-600 mr-1">
              Terms of Use
            </span>
            and
            <span className="ml-1 text-blue-600 cursor-pointer">
              Privacy Policy
            </span>
          </p>
          <br />
          <button
            type="submit"
            value="submit"
            className="text-white bg-orange-500 w-full font-semibold py-2 text-md"
          >
            Login
          </button>
        </form>
        <h6 className=" text-gray-500 text-center py-5">OR</h6>
        <div className="text-blue-600 font-bold cursor-pointer text-center drop-shadow-2xl my-4 bg-white py-2">
          Request OTP
        </div>
        <div className="text-blue-600 text-center text-sm py-4">
          New to Shop?{" "}
          <span className="ml-1 cursor-pointer">Create an account</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
