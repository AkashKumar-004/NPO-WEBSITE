import axios from "axios";
const API=import.meta.env.VITE_API_URL;
//get
const getservices=()=>axios.get(`${API}/service/all`);
const getquery=()=>axios.get(`${API}/query/all`);
const getServiceById = (id) => axios.get(`${API}/service/${id}`);
const getUser=()=>axios.get(`${API}/auth/all`);
//post
const addservices=(data)=>axios.post(`${API}/service/add`,data);
const addquery=(data)=>axios.post(`${API}/query/add`,data);
//put
const updateservice=(id,data)=>axios.put(`${API}/service/${id}`,data);
//delete
const deleteservice=(id)=>axios.delete(`${API}/service/${id}`);
const deletequery=(id)=>axios.delete(`${API}/query/${id}`);
const deleteuser=(id)=>axios.delete(`${API}/auth/${id}`);
//login/signup
const checkuser=({email,password})=>axios.post(`${API}/auth/login`,{email,password});
const adduser=(form)=>axios.post(`${API}/auth/signup`,form);
export {getservices,getquery,addservices,addquery,updateservice,deleteservice,checkuser,adduser,getServiceById,deletequery,getUser,deleteuser};