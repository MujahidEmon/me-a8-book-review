import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";


const HomePage = () => {
    return (
        <div className="lg:max-w-6xl max-w-96 work-sans mx-auto work-sans">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default HomePage;