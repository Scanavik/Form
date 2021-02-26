function validate() {
    let uname = document.registration.name;
    let uphone = document.registration.phone;
    let uemail = document.registration.email;
    if(!allLetter(uname)){
        if(!allnumeric(uphone)){
            if(!ValidateEmail(uemail)){          
            }
        } 
        return false; 
    }
    else {
        return true;
    }
} 

function allLetter(uname) { 
    let letters = /^[а-яА-ЯёЁ -]+$/;
    if(uname.value.match(letters)) {
        return true;
    }
    else {
        alert('Имя должно содержать русские буквы');
        uname.focus();
        return false;
    }
}

function allnumeric(uphone) { 
    let numbers = /^[0-9 +-]+$/;
    if(uphone.value.match(numbers)) {
        return true;
    }
    else {
        alert('Телефон должен содержать только цифры');
        uphone.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    let mailformat = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;
    if(uemail.value.match(mailformat)) {
        return true;
    }
    else {
        alert("Вы ввели не корректный email адресс!");
        uemail.focus();
        return false;
    }
}