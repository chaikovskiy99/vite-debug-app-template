import {useLoaderData} from "react-router-dom";

const Dashboard = () => {
    const data = useLoaderData()

    return (<div>
        <h1>Dashboard</h1>
        <p>{JSON.stringify((data))}</p>
    </div>)

}
export default Dashboard;