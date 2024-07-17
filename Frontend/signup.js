// script.js
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signupBtn = document.getElementById('signup-btn');
let Email='';

signupBtn.addEventListener('click', () => {
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    Email=email;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // TO DO: Send data to server for registration
    console.log(`Name: ${name}, Email: ${email}, Password: ${password}`);

    fetch("http://localhost:3000/smp/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({name, email, password})
    })
    .then(response => response.json())
    .then(message => {
        console.log(message);
        signup(email);
    })
    .catch((err) => {
        console.log(err);
        console.log("Error calling the api");
    })
});


function signup(email) {
    document.getElementById('admin').innerHTML = `
        <h1>Admin</h1>
        <p>Welcome, ${email}!</p>
        <input type="radio" id="active" name="status" value="active">
        <label for="active">Active</label>
        <input type="radio" id="deactive" name="status" value="deactive">
        <label for="deactive">Deactive</label>
        <button onclick="updateStatus(email)">Update Status</button>
    `;
}


function updateStatus(email) {
    const status = document.querySelector('input[name="status"]:checked').value;
    console.log(`Activation: ${email} is ${status}`);
    fetch("http://localhost:3000/smp/activate", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({email: Email, status})
    })
    .then(response => response.json())
    .then(message => {
        console.log(message);
        document.getElementById('admin').innerHTML += `<p>Activation: ${email} is ${status}</p>`;
    })
    .catch((err) => {
        console.log(err);
    })
}