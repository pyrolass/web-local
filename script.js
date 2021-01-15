const EmployeeForm = document.getElementById("AddEmployeeForm");
const EditEmployee = document.getElementById("EditEmployee");
let allEmployess = JSON.parse(window.localStorage.getItem('user')) || [];
let count =3;

allEmployess.forEach(el => {
    renderTemplates(el);
})
document.querySelector("#username").innerHTML=localStorage.getItem("username")
document.addEventListener('DOMContentLoaded', function () {

    
    $(document).ready(function () {
        // Activate tooltip
        $('[data-toggle="tooltip"]').tooltip();

        // Select/Deselect checkboxes
        var checkbox = $('table tbody input[type="checkbox"]');
        $("#selectAll").click(function () {
            if (this.checked) {
                checkbox.each(function () {
                    this.checked = true;
                });
            } else {
                checkbox.each(function () {
                    this.checked = false;
                });
            }
        });
        checkbox.click(function () {
            if (!this.checked) {
                $("#selectAll").prop("checked", false);
            }
        });
    });


    let addBtn = document.querySelector('#addBtn');

    let signOutBtn = document.querySelector('#signOutBtn');

    let nameInp = document.querySelector('#name');
    let emailInp = document.querySelector('#email');

    let phoneInp = document.querySelector('#phone');

    addBtn.addEventListener('click', () => {
        let name = nameInp.value;
        let email = emailInp.value;
        let phone = phoneInp.value;



        const employee = {
            name,
            email,
            phone
        }

        allEmployess.push(employee)
        localStorage.setItem('user', JSON.stringify(allEmployess));


        renderTemplates(employee)


    });

    signOutBtn.addEventListener('click', () => {
        localStorage.clear();

        });

});


function renderTemplates(employee) {
    let table = document.querySelector('table');

    let template = `
    <tr>
    <td>
        ${count}
    </td>
    <td>${employee.name}</td>
    <td>${employee.email}</td>
    <td>${employee.phone}</td>
    <td>
        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
     </td>

    </tr>

    `
    table.innerHTML += template;
}