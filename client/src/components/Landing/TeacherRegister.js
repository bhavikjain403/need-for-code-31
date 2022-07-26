import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import  "./Register.css";

const TeacherRegister = () => {
	// const [data, setData] = useState({
	// 	name: "",
	// 	userId: "",
	// 	password: "",
    //     subject:"",
	// });
	const [error, setError] = useState("");
	// const navigate = useNavigate();

	// const handleChange = ({ currentTarget: input }) => {
	// 	setData({ ...data, [input.name]: input.value });
	// };

	// const handleSubmit = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const url = "http://localhost:8080/admin/addTeach";
	// 		const res = await fetch(url,{
    //             'method':'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'auth-token':localStorage.getItem('auth-token')
    //             },
	// 		    'body':{
    //             'name':data.name,
	// 			'userId':data.user,
	// 			'password':data.password,
    //             'subject':data.subject
	// 		}
    //         });
    //         const parsedRes = await res.json()
	// 		// navigate("/");
    //         // Navigate to Display Faculty
	// 		console.log(res.message);
	// 	} catch (error) {
	// 		if (
	// 			error.response &&
	// 			error.response.status >= 400 &&
	// 			error.response.status <= 500
	// 		) {
	// 			setError(error.response.data.message);
	// 		}
	// 	}
	// };

    const [credentials, setCredentials] = useState({name: "",userId: "", password: "", subject: ""}) 
    let history = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:8080/admin/addTeach", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token':localStorage.getItem('auth-token')
                },
                body: JSON.stringify({name:credentials.name, userId: credentials.userId, password: credentials.password, subject:credentials.subject})
            });
            const json = await response.json()
            console.log(json);
            history('/staff')
        }catch(error){
            console.log(error)
        }
    }

    const handleChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

	return (
        <form className="form_container" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={credentials.name}
                required
                className="input"
            />
            <input
                type="text"
                placeholder="Teacher ID"
                name="userId"
                onChange={handleChange}
                value={credentials.userId}
                required
                className="input"
            />
            <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={credentials.password}
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
            {error && <div className="error_msg">{error}</div>}
            <button type="submit" className="green_btn">
                Add
            </button>
        </form>
	);
};

export default TeacherRegister;
