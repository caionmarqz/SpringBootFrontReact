import React, { PureComponent } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends PureComponent {
    constructor(props) {
        super(props)

            
            this.state = {
                id: this.props.match.params.id,
                firstName: '',
                lastName: '',
                emailId: ''
            }
    
            this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
            this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        }

        componentDidMount() {
            EmployeeService.getEmployeeById(this.state.id).then( (res) => {
                let employee = res.data;
                this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId            
            })
            })
        }
    
        updateEmployee = (e) => {
            e.preventDefault();
            let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            })
        }
    
        changeFirstNameHandler = (e) => {
            this.setState({firstName: e.target.value})
        }
    
        changeLastNameHandler = (e) => {
            this.setState({lastName: e.target.value})
        }
    
        changeEmailHandler = (e) => {
            this.setState({emailId: e.target.value})
        }
    
        cancel(){
           this.props.history.push('/employees');
        }
    
        render() {
            return (
                <div>
                    <div className="container">
                        <div className="card col-md-6 offset-md-3 offset-md-3" style={{top: "70px"}}>
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                <div classname="form-group">
                                        <label>First name</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler}></input>
                                    </div>
                                    <div classname="form-group">
                                        <label>Last name</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                        value={this.state.lastName} onChange={this.changeLastNameHandler}></input>
                                    </div>
                                    <div classname="form-group">
                                        <label>Email address</label>
                                        <input placeholder="Email@server.com" name="emailId" className="form-control"
                                        value={this.state.emailId} onChange={this.changeEmailHandler}></input>
                                    </div>
                                    <button className="btn btn-primary" onClick={this.updateEmployee} style={{marginTop: "7px"}}>Save</button>
                                    <button className="btn btn-secondary" sonClick={this.cancel.bind(this)} style={{marginLeft: "10px", marginTop: "7px"}}>Cancel</button>   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
    

export default UpdateEmployeeComponent