import { Navigate } from "react-router-dom";
import { useUser } from "../../context/userContext";

const DashBoard = () => {
    const { isLoggedIn, logOut } = useUser();
        if (!isLoggedIn) {
            return <Navigate to="/login" replace />;
        }
    return (
        <div>
            <h1>Ласкаво просимо в особистий кабінет</h1>;
            <button onClick={logOut}>Вийти з профілю</button>
        </div>
    )

};

export default DashBoard