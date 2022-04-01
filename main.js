function check_pass() {
    if (document.getElementById('pass').value ==
            document.getElementById('confirm-pass').value) {
        document.getElementById('submit').disabled = false;
        document.getElementById('error-pw-match').textContent=""
    } else {
        document.getElementById('submit').disabled = true;
        document.getElementById('error-pw-match').textContent="Passwords do not match!"
    }

    if(document.getElementById('pass').value.length>7)
    {
        document.getElementById('submit').disabled = false;
        document.getElementById('error-pw-len').textContent=""
    }
    else {
        document.getElementById('submit').disabled = true;
        document.getElementById('error-pw-len').textContent="Too Short! Passwords must be at least 8 characters long."     
    }
}