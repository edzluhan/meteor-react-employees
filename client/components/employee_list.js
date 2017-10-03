import React from 'react';

const EmployeeList = () => {
    return (
        <div>
            <div className="employee-list">
                EmployeeList!
            </div>
        </div>
    );
};

export default createContainer(() => {
    Meteor.subscribe('employees');
    return { employees: Employees.find({}).fetch() }
}, EmployeeList);