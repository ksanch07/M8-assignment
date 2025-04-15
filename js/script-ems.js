// CREATE AN ARRAY OF EMPLOYEES
let employees = []

// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
if (localStorage.getItem('employees')) {
    // IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
    employees = JSON.parse(localStorage.getItem('employees'))
} else {
    employees = [
        { id: '12345678', name: 'Keoni Sanchez', extension: '1001', email: 'keoni@lumon.com', department: 'Engineering' },
        { id: '23456789', name: 'Joe Kuh', extension: '1002', email: 'joe@lumon.com', department: 'Marketing' },
        { id: '34567890', name: 'Carol Lina', extension: '1003', email: 'carol@lumon.com', department: 'Sales' },
        { id: '45678901', name: 'Ray Zyn', extension: '1004', email: 'ray@lumon.com', department: 'QA' },
        { id: '56789012', name: 'Eve Inly', extension: '1005', email: 'eve@lumon.com', department: 'Administrative' }
    ];
    localStorage.setItem('employees', JSON.stringify(employees))
}

// GET DOM ELEMENTS
let form     = document.getElementById('addForm')
let empTable = document.getElementById('empTable').getElementsByTagName('tbody')[0]
let empCount = document.getElementById('empCount')

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
document.addEventListener('DOMContentLoaded', buildGrid)


// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault()

    // GET THE VALUES FROM THE TEXT BOXES
    let id = document.getElementById('id').value.trim()
    let name = document.getElementById('name').value.trim()
    let extension = document.getElementById('extension').value.trim()
    let email = document.getElementById('email').value.trim()
    let department = document.getElementById('department').value

    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    let newEmployee = { id, name, extension, email, department }

    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY
    employees.push(newEmployee)

    // BUILD THE GRID
    buildGrid()

    // RESET THE FORM
    form.reset()

    // SET FOCUS BACK TO THE ID TEXT BOX
    document.getElementById('id').focus()
})

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure you want to delete this employee?')) {
            // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
            let index = e.target.closest('tr').rowIndex - 1

            // REMOVE EMPLOYEE FROM ARRAY
            employees.splice(index, 1)

            // BUILD THE GRID
            buildGrid()
        }
    }
});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    empTable.innerHTML = ''

    // REBUILD THE TBODY FROM SCRATCH
    let newBody = ''

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    for (let employee of employees) {
        // REBUILDING THE ROW STRUCTURE
        newBody += `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td>${employee.email}</td>
                <td>${employee.department}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
        `
    }

    // BIND THE TBODY TO THE EMPLOYEE TABLE
    empTable.innerHTML = newBody

    // UPDATE EMPLOYEE COUNT
    empCount.textContent = `(${employees.length})`

    // STORE THE ARRAY IN STORAGE
    localStorage.setItem('employees', JSON.stringify(employees))
}