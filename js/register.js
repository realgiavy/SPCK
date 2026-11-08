let registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", function(event) {   
    event.preventDefault();

    // 1. lay thong tin tu giao dien
    let username = registerForm.username.value.trim();
    let email = registerForm.email.value.trim();
    let password = registerForm.password.value.trim();
    let confirmPassword = registerForm.confirmPassword.value.trim();
    console.log(username, email, password, confirmPassword);
    // 2. kiem tra thong tin va thong bao

    // 3. luu thong tin dang ky
    let user = {
        fullName: username,
        email: email,
        password: password
    }

    let accounts;
    if (localStorage.getItem("accounts") === null) {
        accounts = []
    }
    else {
        accounts = JSON.parse(localStorage.getItem("accounts"))
    }
// kiem tra co trung thong tin khong
    console.log(accounts)
  
// luu thong tin
    accounts.push(user);
    localStorage.setItem("accounts", JSON.stringify(accounts));

    // 4. thong bao dang ky thanh cong
    alert("Dang ki tai khoan thanh cong")
    // 5. chuyen sang trang dang nhap

})