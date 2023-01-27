import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import { CartContext } from "../../Contexts/cart.context";
import { UserContext } from "../../Contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.style.scss";

const Navigation=()=>{
    const { currentUser } = useContext(UserContext);
    const { active } = useContext(CartContext);
    
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
                    <CartIcon/>
                    {active && <CartDropDown/>}
                </div>
            </div>
            <Outlet/>
        </Fragment>      
    )
  }

  export default Navigation;