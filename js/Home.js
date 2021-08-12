window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`;
    let employeePayrollList = createEmployeePayrollJSON();
    for (const employeePayrollData of employeePayrollList) {
        innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" alt="" src="${employeePayrollData._profile}"></td>
            <td>${employeePayrollData._name}</td>
            <td>${employeePayrollData._gender}</td>
            <td>${getDeptHtml(employeePayrollData._department)}</td>
            <td>${employeePayrollData._salary}</td>
            <td>${employeePayrollData._startDate}</td>
            <td>
                <img name="${employeePayrollData._id}" onclick="remove(this)" alt="delete" src="C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\Icon\delete-black-18dp.svg">
                <img name="${employeePayrollData._id}" alt="edit" onclick="update(this)" src="C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\Icon\create-black-18dp.svg">
            </td>
        </tr>
        `;
    }
    document.querySelector('#display').innerHTML = innerHtml
}
const createEmployeePayrollJSON = () => {
    let employeePayrollListLocal = [{
            _id: new Date().getTime(),
            _name: "vagdevi",
            _salary: "$ 200000",
            _gender: "Female",
            _department: ["Finance"],
            _notes: "very good Employee",
            _profile: "C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\ProfileImages\Ellipse -3.png",
            _startDate: "18/09/2020, 12:00:00 AM"
        },
        {
            _id: new Date().getTime() + 1,
            _name: "prabhas",
            _salary: "$ 80000",
            _gender: "male",
            _department: ["Finance", "Sales"],
            _notes: null,
            _profile: "C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\ProfileImages\Ellipse -8.png",
            _startDate: "18/12/2016, 12:00:00 AM"
        }
    ];
    return employeePayrollListLocal;
}
const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}