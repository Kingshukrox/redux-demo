import { useSelector,useDispatch } from "react-redux";
import { buy, restock } from "./icecreamSlice";


function IcecreamView() {
const dispatch=useDispatch();
const numberOfIcecreams= useSelector((state)=>state.icecream.numberOfIcecreams)
return ( <>
        <h2>Number of Icecreams - {numberOfIcecreams}</h2>
        <button onClick={()=>{dispatch(buy())}}>order Icecreams</button>
        <button onClick={()=>{dispatch(restock(5))}}>restock Icecreams</button>
    </> );
}

export default IcecreamView;