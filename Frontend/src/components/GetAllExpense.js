import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

function GetAllExpense() {
    const [data, setData] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const apiUrl = "http://localhost:5001/product" ;
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                setData(res);
                calculateTotal(res);
            });
    }, []);

    const calculateTotal = (expenses) => {
        const total = expenses.reduce((total, exp) => total + exp.price, 0);
        setTotalPrice(total);
    };

    function handleDelete(id) {
        confirmAlert({
            title: 'Confirmation for delete!',
            message: 'Are you sure you want to delete this product?',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const apiUrl = `http://localhost:5001/product/${id}`;
                        fetch(apiUrl, { method: "DELETE" })
                            .then(res => {
                                if (res.ok) {
                                    const updatedData = data.filter(exp => exp.id !== id);
                                    setData(updatedData);
                                    calculateTotal(updatedData);
                                    toast.success("Deleted Successfully");
                                    window.location.reload();
                                } else {
                                    console.error("Delete failed");
                                    toast.error("Delete failed");
                                }
                            })
                            .catch(error => {
                                console.error("Error:", error);
                                toast.error("An error occurred while deleting");
                            });
                    }
                },
                {
                    label: 'No',
                    onClick: () => {} 
                }
            ]
        });
    }

    const formattedExpenses = data.map((exp) => {
        return (
            <tr key={exp.id}>
                <td>{exp.id}</td>
                <td>{exp.name}</td>
                <td>₹{exp.price}</td>
                <td>{exp.date}</td>
                <td style={{ width: "120px" }} align='center'>
                    <Link className="btn btn-info" to={`/expenses/${exp._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
                    </svg></Link>
                </td>
                <td style={{ width: "120px" }} align="center">
                    <Link className="btn btn-warning" to={`/expenses/edit/${exp._id}`}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg></Link>
                </td>
                <td style={{ width: "120px" }} align="center">
                    <button className="btn btn-danger" onClick={() => handleDelete(exp._id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                    </svg></button>
                </td>
            </tr>
        );
    });

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Expense List</h2>
            <div className="table-responsive">
                <table className="table table-light table-striped table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th>ProductID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Date</th>
                            <th colSpan="3" className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formattedExpenses}
                    </tbody>
                </table>
            </div>
            <h4 className="text-end">Total Price: ₹ {totalPrice}</h4>
            <div className='d-flex justify-content-center'>
                <Link className="btn btn-primary custom-btn m-2" to="/expenses/add">Add more</Link>
                <Link className="btn btn-primary custom-btn m-2" to="/">Back to Home</Link>
            </div>
        </div>
    );
}


export default GetAllExpense;
