import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  "./Register.css";

const TeacherRegister = () => {
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
			const url = "http://localhost:8000/admin/addTeach";
			const res = await fetch(url,{
                'method':'POST',
			    'body':{
                'name':data.name,
				'userId':data.user,
				'password':data.password,
                'subject':data.subject
			}
            });
            const parsedRes =res.json()
			// navigate("/");
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
                placeholder="Teacher ID"
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

export default TeacherRegister;
