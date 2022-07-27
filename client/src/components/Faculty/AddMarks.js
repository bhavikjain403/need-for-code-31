import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import  "../Landing/Register.css";

const AddMarks = () => {
	const [error, setError] = useState("");

    const [credentials, setCredentials] = useState({name: "",subject: "", marks: "", date: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8080/teacher/addMarks", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('auth-token')
                },
                body: JSON.stringify({name:credentials.name, subject: credentials.subject, marks: credentials.marks, date:credentials.date})
            });
            const json = await response.json()
            console.log(json);
            history('/teacher')
        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

	return (
		<form className="form_container" onSubmit={handleSubmit}>
			<h1>Add Marks</h1>
			<input
				type="text"
				placeholder=" Student Name"
				name="name"
				onChange={handleChange}
				value={credentials.name}
				required
				className="input"
			/>
			<input
				type="text"
				placeholder="Subject"
				name="subject"
				onChange={handleChange}
				value={credentials.subject}
				required
				className="input"
			/>
			<input
				type="text"
				placeholder="Marks"
				name="marks"
				onChange={handleChange}
				value={credentials.marks}
				required
				className="input"
			/>
			<input
				type="Date"
				placeholder="Date (DD-MM-YYYY)"
				name="date"
				onChange={handleChange}
				value={credentials.date}
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

export default AddMarks;
