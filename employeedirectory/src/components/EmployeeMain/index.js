import React, { Component } from "react";
import "./style.css";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";


class EmployeeMain extends Component {
    state = {
        employees: [],
    };

    componentDidMount() {
        API.getEmps()
        .then((res) => 
            this.setState({ 
                employees: res.data.results }))
        .catch(err => console.log(err));
      }
    render() {
        return (
            <div className="container">
                <Search />
                <Table 
                state={this.state}
                />                   
            </div>
        );
    }

}

export default EmployeeMain;