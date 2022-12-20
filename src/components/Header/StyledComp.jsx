import { useContext } from "react";
import { UsernameContext } from "../../App";

const StyledComp = () => {

    const { username } = useContext(UsernameContext)

    return(
        <h3>{username}</h3>
    );
}


export default StyledComp