let name = prompt("Hello Who are you?", '');
if (name === 'admin') {
    let password = prompt('Enter Password', '')
    if (password === 'TheMaster') {
        alert("Welcome!")
    } else if (password === '' || password == null) {
        alert('Cancelled')
    } else {
        alert('Wrong Password')
    }
} else if (name == '' || name == null) {
    alert('Canceled');
} else {
    alert("I don't know you");
}