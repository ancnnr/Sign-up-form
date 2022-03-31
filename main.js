function check_pass() {
    if (document.getElementById('pass').value ==
            document.getElementById('confirm-pass').value) {
        document.getElementById('submit').disabled = false;
    } else {
        document.getElementById('submit').disabled = true;
    }
}