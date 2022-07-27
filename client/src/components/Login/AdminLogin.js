import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const AdminLogin = () => {
	const [credentials, setCredentials] = useState({userId: "", password: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/auth/admin/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({userId: credentials.userId, password: credentials.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.authToken){
            localStorage.setItem('auth-token', json.authToken); 
            history("/admin");

        }
        else{
            alert("Invalid credentials");
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="leftt">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1 className="h1-login">Admin Login</h1>
						<input
							type="text"
							placeholder="Admin ID"
							name="userId"
							value={credentials.userId}
							onChange={onChange}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							value={credentials.password}
							onChange={onChange}
							required
							className="input"
						/>
						{/* {error && <div className="error_msg">{error}</div>} */}
						<button type="submit" className="green_btn">
							Sign In
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AdminLogin;
