import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    reportID: "",
    groupID:"",
  });
  const navigate = useNavigate();

  const {storeTokenInLocalStorage} = useAuth();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  // handle form on submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`${import.meta.env.VITE_APU_URL}/api/auth/register`, {
        method : "POST",
        headers: {
            "Content-Type" : "application/json",
        }, 
        body:JSON.stringify(user),
      });
      const res_data = await response.json();
      // console.log(res_data);
      if(response.ok){
        setUser({
          username: "",
          email: "",
          phone: "",
          password: "",
          reportID: "",
          groupID:"",
          })
        storeTokenInLocalStorage(res_data.token);
        navigate("/login");
      }
      else{
        alert("not a valid:");
      }
    } catch (error) {
      console.log(error);
    } 
  };

  

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/register.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={user.username}
                      onChange={handleInput}
                      placeholder="username"
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="number"
                      name="phone"
                      value={user.phone}
                      onChange={handleInput}
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <label htmlFor="reportID">ReportID</label>
                    <input
                      type="text"
                      name="reportID"
                      value={user.reportID}
                      onChange={handleInput}
                      placeholder="reportID"
                    />
                  </div>
                  <div>
                    <label htmlFor="groupID">GroupID</label>
                    <input
                      type="text"
                      name="groupID"
                      value={user.groupID}
                      onChange={handleInput}
                      placeholder="groupID"
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Register Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};