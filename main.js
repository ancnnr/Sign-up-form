function check_pass() {
    if (document.getElementById('pass').value ==
            document.getElementById('confirm-pass').value) {
        document.getElementById('submit').disabled = false;
        document.getElementById('error-pw').style.display='none';
    } else {
        document.getElementById('submit').disabled = true;
        document.getElementById('error-pw').style.display='block';
    }
}

function submitForm() {
    
}