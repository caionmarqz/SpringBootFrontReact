import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService.js'

class ListEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);    
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
       })
    }

     addEmployee(){
         this.props.history.push('./add-employees');
     }

     editEmployee(id) {
        this.props.history.push(`/update-employee/${id}`)
     }

     deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then( res => {
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        })
     }

    render() {
        return (
            <div>
                <h2 className="text-center">Employees List</h2>
                <div className = "row">
                    <button className="btn btn-secondary" onClick={this.addEmployee}>Add Employee</button>
                    <table className="table table-stripped table-bordered">
                        <thead>
                            <tr>
                                <th>First name</th>
                                <th>Last name</th>
                                <th>Email</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key= {employee.id}>
                                    <td> {employee.firstName} </td>
                                    <td> {employee.lastName} </td>
                                    <td> {employee.emailId} </td>
                                    <td>
                                    <button onClick={() => this.editEmployee(employee.id)} className="btn btn-secondary">Update</button>
                                    <button onClick={() => this.deleteEmployee(employee.id)} className="btn btn-danger" style={{marginLeft:"7px"}}>Delete</button>
                                    
                                    </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
                
            </div>
            
        )
    }
}

export default ListEmployeeComponent