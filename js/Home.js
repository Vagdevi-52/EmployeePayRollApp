window.addEventListener("DOMContentLoaded", (event) => {
    createInnerHtml();
});
const createInnerHtml = () => {
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    const innerHtml = `${headerHtml}
    <tr>
        <td>
            <img class="profile" alt="" src="C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\ProfileImages\Ellipse -1.png">
        </td>
        <td>Vagdevi</td>
        <td>FeMale</td>
        <td>
            <div class="dept-label">Finance</div>
            <div class="dept-label">salary</div>
        </td>
        <td>8000000</td>
        <td>18 December 2016</td>
        <td>
            <img id="1" onclick="remove(this)" alt="delete" src="C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\Icon\delete-black-18dp.svg">
            <img id="1" onclick="update(this)" alt="update" src="C:\Users\MY PC\Desktop\EmployeePayRollApp\Asserts\Icon\create-black-18dp.svg">
        </td>
    </tr>`;
    document.querySelector('#display').innerHTML = innerHtml
}