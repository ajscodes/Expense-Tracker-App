import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <header id="head" className="bg-primary text-white text-center py-5">
        <br></br>
        <h1>Expense Management System</h1>
        <p className="lead">Manage your inventory, sales, and daily expenses with ease.</p>
      </header>


      <section id="features" className="container my-3">

      <div className="container mt-5">
      <table className="table table-bordered" style={{ border: 'solid', borderWidth: '1px' }}>
        <tbody>
          <tr>
            {/* First Partition */}
            <td>
              <div className="d-flex align-items-center justify-content-center">
                <span className=" ExpText me-3 ">Click here to go to MyExpense list:</span>
                <Link className="btn btn-primary" to="/expenses">Expense List</Link>
              </div>
            </td>

            {/* Second Partition */}
            <td>
              <div className="d-flex align-items-center justify-content-center">
                <span className=" AddExpText me-3">Click here to add expense:</span>
                <Link className="btn btn-primary" to="/expenses/add">Add Expense</Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

        <div className="mb-5 text-center">
          <div className="fs-1 effect fw-bold">
            <span>E</span>
            <span>x</span>
            <span>p</span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>e</span>
          </div>
          <div className="fs-2 fw-semibold">even a small one, is a great teacher when it shows us the true value of things</div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://media.istockphoto.com/id/1387975877/photo/picture-of-letter-blocks-arranged-as-gst.jpg?s=612x612&w=0&k=20&c=PFiGr2gKGIQltZ9Wib0PT0gqdOZW-lvaIKUq3j5qxaQ="
                className="card-img-top"
                alt="Stock Market-image"
                style={{height:"325px" }}
              />
              <div className="card-body">
                <h5 className="card-title">GST Calculator</h5>
                <p className="card-text">
                Get Instant and Accurate GST Calculations for Every Transaction
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202405/664c865cc7f08-the-income-tax-act-allows-deductions-for-investments--savings--and-expenses-in-a-financial-year-that-213242968-16x9.jpg?size=948:533"
                className="card-img-top"
                alt="Income Tax&TDS Calculator-image"
                style={{height : "325px"}}
              />
              <div className="card-body">
                <h5 className="card-title">Income Tax & TDS</h5>
                <p className="card-text">
                Accurate Income Tax & TDS: Simplifying Deductions for Individuals and Businesses
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card shadow-sm mb-4">
              <img
                src="https://i0.wp.com/meeseva.co.in/wp-content/uploads/2023/06/Screenshot_2023-06-26-14-24-04-945-edit_com.android.chrome.jpg"
                className="card-img-top"
                alt="PF Calculator-image"
                style={{height : "325px"}}
              />
              <div className="card-body">
                <h5 className="card-title">EPF & PPF Guidance</h5>
                <p className="card-text">
                A Complete Guide to Long-Term Financial Planning and Retirement Security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark text-white" id="footer">
      <p className="text-center py-3">&copy; 2024 Expense Management System | All Rights Reserved</p>
  
      <div className="bg-dark text-white p-3 mb-4">
      <span class="fw-bold">Name:</span> Ayush Jigneshbhai Maradia<br/>
      <span class="fw-bold">Unrollment no:</span> 23010101159<br/>
      <span class="fw-bold">Department:</span> B.Tech-CSE<br/>
      <span class="fw-bold">Batch:</span> A8<br/>
      <span class="fw-bold">Roll no:</span> 245
      </div>
      </footer>

    </div>
  );
}

export default Home;
