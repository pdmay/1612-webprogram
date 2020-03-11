
window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
	
}

function validateForm() {

    var pass1 = document.forms["myForm"]["password1"].value;
    var pass2 = document.forms["myForm"]["password2"].value;
    // alert(name);
    if (pass1 != pass2){
        var form = document.getElementById("errormsg");
        form.innerHTML = "password ไม่ตรงกัน"
        return false;
    
    }else{
        return true;
    }
        

    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}

