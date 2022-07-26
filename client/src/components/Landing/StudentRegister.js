import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  "./Register.css";

const StudentRegister = () => {
	const [data, setData] = useState({
		name: "",
		userId: "",
		password: "",
        subject:"",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<form className="form_container" onSubmit={handleSubmit}>
			<h1>Add Student</h1>
			<input
				type="text"
				placeholder="Name"
				name="name"
				onChange={handleChange}
				value={data.name}
				required
				className="input"
			/>
			<input
				type="text"
				placeholder="Student ID"
				name="userId"
				onChange={handleChange}
				value={data.userId}
				required
				className="input"
			/>
			<input
				type="password"
				placeholder="Password"
				name="password"
				onChange={handleChange}
				value={data.password}
				required
				className="input"
			/>
			<input
				type="text"
				placeholder="Subject"
				name="subject"
				onChange={handleChange}
				value={data.subject}
				required
				className="input"
			/>
			{error && <div className="error_msg">{error}</div>}
			<button type="submit" className="green_btn">
				Add
			</button>
		</form>
	);
};

export default StudentRegister;
