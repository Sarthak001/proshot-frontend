import React, { useState } from "react";
import { FcBusinessman } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Register = (props) => {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        email: "",
        password: "",
    })

    const formHandler = async () => {
        alert("Not Registering Users")
        navigate("/");
    }

    return (<>
        <div className="min-h-screen bg-slate-500 flex justify-center items-center">
        <div className="max-w-md bg-slate-200 rounded-sm shadow-sm flex flex-col">
                    <div className="logo m-1 p-1 flex items-center mx-2">
                        <FcBusinessman size={60}></FcBusinessman>
                        <span className="text-2xl font-medium tracking-widest font-mono">REGISTER HERE</span>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2 m-1 p-1 mx-2">
                        <div>
                            <label htmlFor="firstName" className="block mb-2 text-sm font-medium">firstName</label>
                            <input value={formData.firstName} onInput={(e) => setFormData({ ...formData, firstName: e.target.value })} type="email" id="firstName" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-2 text-sm font-medium">lastName</label>
                            <input value={formData.lastName} onInput={(e) => setFormData({ ...formData, lastName: e.target.value })} type="email" id="lastName" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                        </div>
                        <div className="col-span-2">
                            <label htmlFor="userName" className="block mb-2 text-sm font-medium">userName</label>
                            <input value={formData.userName} onInput={(e) => setFormData({ ...formData, userName: e.target.value })} type="email" id="userName" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                        </div>
                        <div  className="col-span-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                            <input value={formData.email} onInput={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id="email" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                        </div>
                        <div  className="col-span-2">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium">Password</label>
                            <input value={formData.password} onInput={(e) => setFormData({ ...formData, password: e.target.value })} type="password" id="password" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                        </div>
                        <button onClick={formHandler} type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Register</button>
                    </div>
                </div>
        </div>

    </>);
}
export default Register;