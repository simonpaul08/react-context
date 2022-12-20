import { useContext } from "react";
import { UsernameContext } from "../App";

const Form = () => {

    const {username, setUsername} = useContext(UsernameContext)

    return(
        <div className="form">
            <div className="form__content">
                <div className="form-block">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
            </div>
        </div>
    );
}


export default Form