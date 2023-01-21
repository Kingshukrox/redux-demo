import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

function UserView() {
const dispatch=useDispatch()
const users=useSelector(state=>state.user)
    useEffect(()=>{
        dispatch(fetchUsers())
    },[])
    return (  <>
    <h2>List of Users</h2>
    {console.log(users)}
    {users.loading?<div>Loading ...</div>:null}
    {!users.loading&&users.error?<div>Error : {users.error}</div>:null}
    {!users.loading&&users.users.length>0?(
        <ul>
            {users.users.map(user=><li key={user.id}>{user.name}</li>)}
        </ul>
        ):null}
    </>);
}

export default UserView;