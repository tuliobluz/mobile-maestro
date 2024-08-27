function email() {
    const date = new Date().getTime().toString();
    return `test-user-${date}@test.com`;
}

output.email = email();