document.writeln('<div class="card gap-2 p-5 bg-light d-flex flex-column justify-content-around h-50 ">' +
    '<h1 class="fw-bolder text-center"> Cookie </h1>' +
    '<button class="btn btn-primary fw-bolder set ">Set cookie</button>' +
    '<button class="btn btn-primary fw-bolder get">Get cookie</button>' +
    '<button class="btn btn-primary fw-bolder getAll">Get All cookies</button>' +
    '<button class="btn btn-danger fw-bolder del">Delete cookie</button>' +
    '<button class="btn btn-danger fw-bolder delAll">Delete All cookie</button>' +
    '</div>'
);
document.title = 'Cookie';


//alert(document.cookie || 'No cookies found.');

document.querySelector('.set').addEventListener('click', function () {
    let cookieName = prompt('Enter cookie name:');
    let cookieValue = prompt('Enter cookie value:');
    let cookieExpiry = prompt('Enter cookie expiry in seconds:');
    
    if (cookieName && cookieValue && cookieExpiry) {
        document.cookie = `${cookieName}=${cookieValue}; max-age=${cookieExpiry}; path=/`;
        alert('Cookie set successfully!');
    } else {
        alert('Please provide valid inputs.');
    }
});

document.querySelector('.get').addEventListener('click', function () {
    let cookieName = prompt('Enter cookie name to retrieve:');
    let cookies = document.cookie.split('; ');
    let cookieValue = cookies.find(cookie => cookie.startsWith(cookieName + '='));
    
    if (cookieValue) {
        alert(`Cookie value: ${cookieValue.split('=')[1]}`);
    } else {
        alert('Cookie not found.');
    }
});
document.querySelector('.getAll').addEventListener('click', function () {
    let cookies = document.cookie.split('; ');
    if (cookies.length > 0) {
        alert('Cookies: ' + cookies.join('\n'));
    } else {
        alert('No cookies found.');
    }
});
document.querySelector('.del').addEventListener('click', function () {
    let cookieName = prompt('Enter cookie name to delete:');
    if (cookieName) {
        document.cookie = `${cookieName}=; max-age=0; path=/`;
        alert('Cookie deleted successfully!');
    } else {
        alert('Please provide a valid cookie name.');
    }
});
document.querySelector('.delAll').addEventListener('click', function () {
    let cookies = document.cookie.split('; ');
    if (cookies.length > 0) {
        cookies.forEach(cookie => {
            let cookieName = cookie.split('=')[0];
            document.cookie = `${cookieName}=; max-age=0; path=/`;
        });
        alert('All cookies deleted successfully!');
    }
});



