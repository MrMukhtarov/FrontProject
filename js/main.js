if(localStorage.getItem('users') === null){
    localStorage.setItem('users',JSON.stringify([]))
}

function Click() {
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    if(name === "" || email === "" || password === ""){
        alert('false')
    }
    else{
        alert('add')
        let local = JSON.parse(localStorage.getItem('users'))
        local.push({
            name: name,
            email: email,
            password: password
        })
        localStorage.setItem('users',JSON.stringify(local))
        GetUsers();
    }
}
function GetUsers() {
    let basket = JSON.parse(localStorage.getItem('users'))
    let users = ""
    basket.forEach(x => {
        users+= `
            <ul>
               <li>Username: ${x.name}</li>
               <li>Email: ${x.email}</li>
            </ul>
        `
    });
    document.getElementById('list').innerHTML = users;
}
GetUsers();