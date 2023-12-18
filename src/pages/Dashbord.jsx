import { BiUser } from "react-icons/bi";
const Dashboard = () => {
  
  return (
    <div className="dashbord">
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex  align-items-center  row">
        <div className="col-4 mb-3">
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2>1</h2>
              <p className="desc"> Total Patients</p>
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2>1</h2>
              <p className="desc">total users</p>
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2>1</h2>
              <p className="desc">total users</p>
            </div>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="d-flex  justify-content-around gap-4 align-items-center flex-grow-1 bg-white p-3 roudned-3">
            <h2>
              <BiUser></BiUser>
            </h2>
            <div>
              <h2>1</h2>
              <p className="desc">total users</p>
            </div>
          </div>
        </div>

     
      </div>
      
    </div>
  );
};

export default Dashboard;
