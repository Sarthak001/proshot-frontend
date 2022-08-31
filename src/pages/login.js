import React, { useState } from "react";

import { FcUnlock } from "react-icons/fc";
import { getcredentialsverified } from "../services/Authentication";

import { AuthStore } from '../store/authstore';
import {useRecoilState} from 'recoil';
import { useNavigate } from "react-router-dom";
const Login = (props) => {
    let navigate = useNavigate();
    // eslint-disable-next-line 
    const [auth, setAuth] = useRecoilState(AuthStore);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const formHandler = async () => {
        const response = await getcredentialsverified(formData)
        if (response.statusCode === 200) {
            setFormData({ ...formData ,email: "", password: "" })
            setAuth({
                status:true,
                message:response.message,
                userName:response.userName,
                email:response.email,
                token:response.token,
                imageToken:response.cdnToken,
            })
            navigate("/");
        }else{
            setFormData({ ...formData ,email: "", password: "" })
            alert("something went wrong")
        }
    }

    return (<>
        <div className="min-h-screen bg-slate-500 flex flex-col justify-center items-center">
            <div className="max-w-md bg-slate-200 rounded-sm shadow-sm flex flex-col">
                <div className="logo m-1 p-1 mx-2">
                    <FcUnlock size={60}></FcUnlock>
                </div>
                <div className="grid gap-6 mb-6 md:grid-cols-1 m-1 p-1 mx-2">
                    <div>
                        <label htmlFor="first_name" className="block mb-2 text-sm font-medium">Email</label>
                        <input value={formData.email} onInput={(e) => setFormData({ ...formData, email: e.target.value })} type="email" id="first_name" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                    </div>
                    <div>
                        <label htmlFor="last_name" className="block mb-2 text-sm font-medium">Password</label>
                        <input value={formData.password} onInput={(e) => setFormData({ ...formData, password: e.target.value })} type="password" id="last_name" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" required="" />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                    </div>
                    <button onClick={formHandler} type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
                </div>
            </div>
            <div className="my-4 rounded-sm p-2 shadow-sm flex flex-col bg-slate-200"> 
                <span>Demo Username : demouser01@gmail.com</span>
                <span>Demo Password : demopass</span>
            </div>

        </div>

    </>);
}



export default Login;