import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const AdminLogin = () => {
	const [user, setUser] = useState("");
	const [password, setPassword] = useState("");
	let navigate=useNavigate()
	const routeChange=()=>{
		navigate('/admin')
	}
	const [error, setError] = useState("");

	const handleUser = (e) => {
		setUser(e.target.value)
	};

	const handlePassword = (e) => {
		setPassword(e.target.value)
	};

	const handleSubmit = async (e) => {
		e.preventDefault()
		const user=await fetch("http://localhost:8000/auth/admin",{
			'method':'POST',
			'body':{
				'userId':user,
				'password':password
			}
		})
		const data =user.json()
		localStorage.setItem('auth-token',data)
		localStorage.setItem('type','admin')
		window.push('/')
	};

	return (
		<div className="login_container">
			<div className="login_form_container">
				<div className="leftt">
					<form className="form_container" onSubmit={handleSubmit}>
						<h1 className="h1-login">Admin Login</h1>
						<input
							type="text"
							placeholder="Admin ID"
							name="user"
							onChange={handleUser}
							required
							className="input"
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handlePassword}
							required
							className="input"
						/>
						{error && <div className="error_msg">{error}</div>}
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
