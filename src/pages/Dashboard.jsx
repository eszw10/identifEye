import Nav from "../components/Nav";
const Dashboard = () => {
    return (
        <div className="">
            <Nav/>
            <div className="h-[90vh] flex flex-col items-center justify-center">
                <img src="/assets/images/success.svg" alt="" className="h-[60%]"/>
                <div className="text-5xl container p-14">
                    <p className=" text-light text-center font-bold mb-4">Identification Success!</p>
                    <p className="text-accent font-bold text-center text-4xl">Hello Username, Welcome to IdentifEye!</p>
                </div>
            </div>
        </div>
    );
}
 
export default Dashboard;