function a() {
    b();
}

function b() {
    c();
}

function c() {
    throw new Error('Something went wrong!');
}

a();