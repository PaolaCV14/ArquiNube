let users;
var API_ENDPOINT = "https://ffgtvyepb9.execute-api.us-east-1.amazonaws.com/users";


function validateLog(userData){

let alreadySign = false;

    console.log("Users db");
    for(let x of users ){
        if(userData.email == x.email){
            alreadySign =true;
            alert("This user is already signed up, please log in");
            break;
        }
    }

    if(!alreadySign){

        sessionStorage.setItem('user', userData.name);
        fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('User registered successfully!');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Error registering user.');
        });
    }

}


function validate(email, pass){
    let alreadySign = false;

    console.log("Users db");
    console.log(users);
    for(let x of users ){
        console.log(x.email);
        console.log(email);
        if(x.email == email){
            if(x.password == pass){
                alert("Welcome back!");
                sessionStorage.setItem('user', email);
                sessionStorage.setItem('name', x.name);
                window.location.href = 'index.html';
                alreadySign = true;
            }
            else{
                alert("wrong password");
            }
            break;
        }
    }
    if(!alreadySign){
        alert("User not found");
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const signUpForm = document.getElementById('signUpForm');
    const logInForm = document.getElementById('logInForm');
    fetch(API_ENDPOINT, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
       users = data;
    })
    .catch((error) => {
        console.error('Error fetching users:', error);
    });

    
    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
    });

    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
    });



    



    signUpForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let userData = {
            userid: Date.now().toString(),
            name: name,
            email: email,
            password: password
        };


        validateLog(userData);
        console.log(userData);
    });

    logInForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let email = document.getElementById('emailL').value;
        let pass = document.getElementById('passwordL').value;
        console.log("email:");
        console.log(email);
        validate(email, pass);
    });
});
