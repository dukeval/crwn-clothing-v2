import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.style.scss";

const Navigation=()=>{
    const { currentUser } = useContext(UserContext);
    
    const signOutHandler =async ()=>{
        await signOutUser();
    }
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='Shop'>SHOP</Link>
                    {
                        currentUser?
                        (<span className="nav-link" onClick={signOutHandler}>Sign Out</span>)
                        :
                        (<Link className="nav-link" to='auth'>Sign In</Link>)
                    }
                    
                </div>
            </div>
            <Outlet/>
        </Fragment>      
    )
  }

  export default Navigation;