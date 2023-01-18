import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"

import "./navigation.style.scss";

const Navigation=()=>{
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to='/'>
                    <CrwnLogo />
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='Shop'>SHOP</Link>
                    <Link className="nav-link" to='auth'>SignIn</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>      
    )
  }

  export default Navigation;