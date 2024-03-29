import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "../navigation/nav.styles.scss";

export const Navigation = () => {
    return (
      <>
        <div className="navigation">
            <Link className="logo-container" to='/'>
            <CrwnLogo className="logo">Logo</CrwnLogo>
            </Link>
            <div className="nav-links-container">
                <Link className="nav-link" to='/shop'>SHOP</Link>
                <Link className="nav-link" to='/signin'>SIGN IN</Link>
            </div> 
        </div>
        <Outlet></Outlet>
      </>
    );
  };