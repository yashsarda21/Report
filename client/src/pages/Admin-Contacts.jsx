import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";

export const AdminContacts = () => {

    const[contacts, setContacts] = useState([]);
    
        const {AuthorizationToken} = useAuth();
    
        const getAllContactsData = async() =>{
            try {
                const response = await fetch(`${import.meta.env.VITE_APU_URL}/api/admin/contacts` , {
                    method: "GET",
                    headers:{
                        Authorization: AuthorizationToken,
                    },
                });
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                console.log(error)
            }
        }
    
        useEffect(() =>{
            getAllContactsData();
        },[]);
    
        
        return<>(
            <section className="admin-contacts-section">
                <div className="container">
                    <h1>Admin Contacts Data</h1>
                </div>
                <div className="container admin-contacts">   
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>message</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curUser , index) =>{
                            return <tr key={index}>
                                <td >{curUser.username}</td>
                                <td >{curUser.email}</td>
                                <td >{curUser.message}</td>
                                <td >Edit</td>
                                <td >Delete</td>
                                </tr>}
                            )}
                        </tbody>
                    </table>
                    
                </div>
            </section>
    {/*         
            {contacts.map((curUser , index) =>{
            return <h2 key={index}>{curUser.username}</h2>
            })} */}
        
        )</>
}