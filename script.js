const EmployeeForm = document.getElementById("AddEmployeeForm");
const EditEmployee = document.getElementById("EditEmployee");
let allEmployess = JSON.parse(window.localStorage.getItem('user')) || [];

console.log(allEmployess)

allEmployess.forEach(el => {
    renderTemplates(el);
})


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

    let nameInp = document.querySelector('#name');
    let emailInp = document.querySelector('#email');
    let addressInp = document.querySelector('#address');
    let phoneInp = document.querySelector('#phone');

    addBtn.addEventListener('click', () => {
        let name = nameInp.value;
        let email = emailInp.value;
        let address = addressInp.value;
        let phone = phoneInp.value;



        const employee = {
            name,
            email,
            address,
            phone
        }

        allEmployess.push(employee)
        window.localStorage.setItem('user', JSON.stringify(allEmployess));


        renderTemplates(employee)


    });

});


function renderTemplates(employee) {
    let table = document.querySelector('table');

    let template = `
    <tr>
    <td>
        <span class="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="options[]" value="1">
                <label for="checkbox1"></label>
        </span>
    </td>
    <td>${employee.name}</td>
    <td>${employee.email}</td>
    <td>${employee.address}</td>
    <td>${employee.phone}</td>
    <td>
        <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i></a>
        <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i></a>
     </td>

    </tr>

    `
    table.innerHTML += template;
}