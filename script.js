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

    let updateBtn = document.querySelector('#updateBtn');
    let addBtn = document.querySelector('#addBtn');
    let signOutBtn = document.querySelector('#signOutBtn');
    let deleteBtn = document.querySelector('.deleteBtn')

    let nameInp = document.querySelector('#name');
    let emailInp = document.querySelector('#email');
    let phoneInp = document.querySelector('#phone');

    let editName = document.querySelector('#editName');
    let editPhone = document.querySelector('#editPhone');
    let editEmail = document.querySelector('#editEmail');

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



    var table = document.querySelector('table'),rIndex;

    for(i=0; i<table.rows.length;i++){

        table.rows[i].onclick = function(){
            rIndex=this.rowIndex;
            index=rIndex;
            console.log(rIndex);
            document.querySelector('#editName').value = this.cells[1].innerHTML;
            document.querySelector('#editEmail').value = this.cells[2].innerHTML;
            document.querySelector('#editPhone').value = this.cells[3].innerHTML;
        }
    };

   
    function updateRow(){
    table.rows[rIndex].cells[1].innerHTML = document.querySelector('#editName').value;
    table.rows[rIndex].cells[2].innerHTML = document.querySelector('#editEmail').value;
    table.rows[rIndex].cells[3].innerHTML = document.querySelector('#editPhone').value;
}


    

    updateBtn.addEventListener('click', () => {
        updateRow();

        });    

    document.getElementById("editEmployeeModal").addEventListener("click", function(event){
  event.preventDefault()
});

    document.querySelector().addEventListener("click",function(event){

    });



    
   
});



function renderTemplates(employee) {
    let table = document.querySelector('table');
    count+=1
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





















