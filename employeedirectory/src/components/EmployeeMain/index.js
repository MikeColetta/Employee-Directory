import React, { Component } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";


class EmployeeMain extends Component {
    state = {
        search: "",
        employees: [],
        filteredEmp: [],
    };

    componentDidMount() {
        API.getEmps()
            .then((res) =>
                this.setState({
                    employees: res.data.results,
                    filteredEmp: res.data.results
                })
            )
            .catch(err => console.log(err));
    }

    handleInputChange = (e) => {
        const value = e.target.value;
        this.setState({ search: value });
        this.filterEmp(value.toLowerCase().trim());
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    filterEmp = (input) => {
        if (input) {
            this.setState({
                filteredEmp: this.state.employees.filter((employee) => {
                    return (
                        employee.name.first.includes(input) ||
                        employee.name.last.includes(input) ||
                        employee.phone.includes(input) ||
                        employee.email.includes(input)
                    );
                }),
            });
        } else {
            this.setState({ filteredEmp: this.state.employees });
        }
    };

    render() {
        return (
            <div className="container">
                <Search
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <Table
                    state={this.state}
                    filterEmp={this.filterEmp}
                />
            </div>
        );
    }

}

export default EmployeeMain;