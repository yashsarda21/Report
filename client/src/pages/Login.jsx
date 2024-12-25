import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
// import { toast } from 'react-toastify';
// import {}

const Login = () => {
    const [user ,setUser] = useState({
            email : "",
            password: "",
        });
    
        const {storeTokenInLocalStorage} = useAuth();

        const navigate = useNavigate();

        const handleInput = (e) =>{
            let name = e.target.name;
            let value = e.target.value;
    
    
            setUser({
                ...user, 
                [name]: value,
            })
        };
    
        const handleSubmit = async (e) =>{
            e.preventDefault();
            console.log(user);
            try {
                const response = await fetch("http://localhost:5002/api/auth/login" , {
                    method : "POST",
                    headers: {
                        "Content-Type" : "application/json",
                    }, 
                    body:JSON.stringify(user),
                });
                console.log("login form" ,response)
                const res_data = await response.json();
                if(response.ok){
                    // const res_data = await response.json();
                    console.log(res_data);
                    setUser({
                        email : "",
                        password: "",
                    })
                    storeTokenInLocalStorage(res_data.token);
                    // localStorage.setItem("token" , res_data.token);
                    navigate("/")
                }
                else{
                    alert("invalid credentials");
                }
            } catch (error) {
                console.log(error);
            }    
        }

    return <>
        <section>
            <main>
                <div className="section-registration">
                    <div className="container grid grid-two-cols">
                        <div className="registration-img">
                            <img className="reg-img" src="/images/login.png" alt="" />
                        </div>

                        <div className="registration-form">
                            <h1 className="main-heading mb-3">Login Form</h1>
                            <br />
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="email">email</label>
                                    <input type="email" name="email" value = {user.email} onChange={handleInput} placeholder="email" id="email" required autoComplete="off"/>
                                </div>                        
                                <div>
                                    <label htmlFor="password">password</label>
                                    <input type="password" name="password" value = {user.password} onChange={handleInput} placeholder="password" id="password" required autoComplete="off"/>
                                </div>
                                <br />
                                <button type="submit" className="btn btn-submit" >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
};

export default Login;