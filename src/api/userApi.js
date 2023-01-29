import axios from 'axios'


export const singup =(data)=> axios.post('https://e-commerce-server-019n.onrender.com/singup' , data)
export const singin =(data)=> axios.post('https://e-commerce-server-019n.onrender.com/singin' , data)
export const users =()=> axios.get('https://e-commerce-server-019n.onrender.com/user' )
export const usersUpdate =(data , id)=> axios.put(`https://e-commerce-server-019n.onrender.com/user/${id}` , data )

export const allStores = ()=> axios.get('https://e-commerce-server-019n.onrender.com/store' )
// export const forgotPassword = (data)=> axios.post('https://e-commerce-server-019n.onrender.com/forgot-password' , data)
export const forgotPassword = (data)=> axios.post('https://e-commerce-server-019n.onrender.com/forgot-password' , data)

