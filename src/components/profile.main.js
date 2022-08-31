
import { useEffect, useState } from "react";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { getProfile } from "../services/profile.service";
import { AuthStore } from "../store/authstore";
import { useRecoilValue } from 'recoil';



const ProfileMain = () => {
    const auth = useRecoilValue(AuthStore)
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        userName:"",
        email: "",
    })

    useEffect(()=>{
        const data = async ()=>{
            const response = await getProfile(auth.token,auth.userName)
            if (response.statusCode === 200){
                setFormData({...formData,firstName:response.firstName,lastName:response.lastName,userName:response.userName,email:response.email})
            }
            alert("Something went worng")
        }
        data()
    })

    const formHandler = async () => {
        alert("Details Will Update Shortly")
    }
    return (<>
        <div className="main-content flex justify-center ml-40 mt-16 peer-hover:ml-80 duration-500 peer-hover:duration-1000 w-full mr-20 peer-hover:mr-10 ">
                <div className="max-w-md bg-slate-50 h-max rounded-lg shadow-lg flex flex-col">
                    <div className="logo m-1 p-1 mx-2">
                        <FcSelfServiceKiosk size={60}></FcSelfServiceKiosk>
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
                            <input value={formData.userName}  type="email" id="userName" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" disabled />
                        </div>
                        <div  className="col-span-2">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                            <input value={formData.email}  type="email" id="email" className="bg-slate-50 border border-slate-300 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 " placeholder="" disabled />
                        </div>
                        <button onClick={formHandler} type="submit" className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Update!!</button>
                    </div>
                </div>
            </div>
    </>)

}


export default ProfileMain;