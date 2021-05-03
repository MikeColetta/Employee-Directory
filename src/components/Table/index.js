import React from "react";
import "./style.css";
import moment from "moment";

const Table = (props) => {

    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Date Hired</th>
                        <th scope="col" onClick={props.sortEmpFirst} className="sort">First Name</th>
                        <th scope="col" onClick={props.sortEmpLast} className="sort">Last Name</th>
                        <th scope="col">Email Address</th>
                        <th scope="col">Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {props.state.filteredEmp.map((employee) => {

                        
                        const hireDate = moment(employee.registered.date).format("MM/DD/YYYY")
                        

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