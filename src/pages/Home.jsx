import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="h-screen flex flex-col justify-center pb-16
        md:flex-row md:items-center md:justify-between">
            <div className="h-1/3 md:h-auto md:flex-1 md:items-center">
                <img className="h-[100%]" src="images/img.png" alt="" />
            </div>
            <div className="p-4 mt-4 md:flex-1">
                <h2  className="font-black text-4xl md:text-6xl lg:text-8xl">Red Tea</h2>
                <p className="font-black">-- Notes from Underground</p>
                <p className="font-medium text-4xl mt-4 mb-8">"I say let the world go to hell, but I should always have my tea." — Fyodor Dostoevsky</p>
                <button onClick={() => navigate("/Shop")} 
                className="border-2 border-current font-black pt-1 pb-1 pl-6 pr-6 rounded-lg ">Shop Now</button>
            </div>
        </div>
    );
}
 
export default Home;