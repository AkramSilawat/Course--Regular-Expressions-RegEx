// ======> Making RegEx <====== //

// var reg = /[a-z]/ig;

// var reg2 = new RegExp(/[a-z]/,'i');



const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: /^\d{11}$/,
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        slug: /^[a-z\d-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //             yourname @ domain   .  com          ( .uk )
};

// validation function
function validate(field, regex){

    if(regex.test(field.value)){
        field.className = 'valid';
    } else {
        field.className = 'invalid';
    }

}

// attach keyup events to inputs
inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        // console.log(patterns[e.target.attributes.name.value]);
        validate(e.target, patterns[e.target.attributes.name.value]);
    });
});