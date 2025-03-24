const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
currentPage();
function validateEmail() {
    const input = document.getElementById('email').value;
    const ans = emailRegex.test(input);

    if(ans)
        return true;
    else
        return false;       
}

function currentPage() {
    switch(document.title) {
        case "CWA Home Page":
            const home = document.getElementById('home');
            home.setAttribute('style', 'text-decoration: none');
            break;
        case "About Us Page":
            const aboutUs = document.getElementById('aboutus');
            aboutUs.setAttribute('style', 'text-decoration: none');
            break;
        case "Contact Us Page":
            const contactUs = document.getElementById('contactus');
            contactUs.setAttribute('style', 'text-decoration: none');
            break;
        case "Service Page":
            const service = document.getElementById('service');
            service.setAttribute('style', 'text-decoration: none');
            break;
        default:
            console.log("something went wrong");
    }
}