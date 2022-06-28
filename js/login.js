
    let btn = document.getElementById('btn')
    btn.addEventListener('click',function(e){
        e.preventDefault();
        let logname = document.getElementById('namelog').value
        let logpassword = document.getElementById('passwordlog').value


        let basket = JSON.parse(localStorage.getItem('users'))
        let username = e.target.previousElementSibling.previousElementSibling.value
        let password = e.target.previousElementSibling.value

      
       let existUser = basket.find(x=> x.name == username && x.password == password);
        if(logname === "" || logpassword === "" || existUser === undefined){
            alert('Please Enter Info')
        }
        else{
            alert("Welcome")
        }
    })
  
