function username() {
    const date = new Date().getTime().toString();
    return `test_user_${date}`;
}

function email() {
    const date = new Date().getTime().toString();
    return `test-user-${date}@test.com`;
}

function password() {
    const date = new Date().getTime().toString();
    return `test-user-password-${date}`;
}

output.credentials = {
    email: email(),
    password: password(),
    username: username(),
};