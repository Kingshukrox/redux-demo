import { useSelector,useDispatch } from "react-redux";
import { buy, restock } from "./cakeSlice";


function CakeView() {
const numberofCakes=useSelector((state)=>state.cake.numberofCakes)
const dispatch=useDispatch();
return ( <>
        <h2>Number of cakes - {numberofCakes}</h2>
        <button onClick={()=>{dispatch(buy())}}>order cakes</button>
        <button onClick={()=>{dispatch(restock(5))}}>restock cakes</button>
    </> );
}

export default CakeView;