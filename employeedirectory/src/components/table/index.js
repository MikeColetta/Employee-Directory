import React from "react";
import "./style.css";

const Table = (props) => {

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date Hired</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.state.filteredEmp.map((employee) => {

                        const hireDate = employee.registered.date.slice(0,10);

                        return (
                            <tr key={employee.login.uuid}>
                                <td>
                                    {hireDate}
                                </td>
                                <td>{employee.name.first}</td>
                                <td>{employee.name.last}</td>
                                <td>{employee.email}</td>
                                <td>{`+1-${employee.phone}`}</td>
                            </tr>
                        )
                    }
                    )}

                </tbody>
            </table>
        </div>

    );
}

export default Table;