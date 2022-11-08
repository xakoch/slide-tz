document.querySelector('#tel').addEventListener('blur', (event) => {
    let err = document.querySelector(".error-messg");
    err.innerText = "";
    try {
        //if field empty
        if(event.target.validity.valueMissing)
            throw event.target.validationMessage;
        
        else {
            event.target.style.borderColor  = 'green';
            err.innerText = "";
        }
    }

    catch(messg) {
        err.innerText = messg;
        event.target.style.borderColor = '#E30613';
    }
    
});

//adding to password field
document.querySelector("#password").addEventListener('blur', validatePassword);

//password validation
function validatePassword(event) {
    let error = event.target.nextElementSibling;
    // $('#parent').append('<span class="error-messg"></span>');
    error.innerText = "";
    event.target.style.border = "3px solid #E30613";

    try {
        console.log((event.target.value));
        if(event.target.validity.valueMissing)
            throw event.target.validationMessage;

        else if(!(/[0-9]{4,}/g).test(event.target.value)) {
            throw "Там должно быть не менее 4 цифр.";
            event.target.style.border = "3px solid #E30613";
        }

        else if(event.target.value.length < 4 || event.target.value.length > 12) {
            throw "Пароль должен быть от 4 до 12 символов.";
            event.target.style.border = "3px solid #E30613";
        }

        else {
            document.querySelector('[type="submit"]').removeAttribute('disabled');
            event.target.style.border = "3px solid green";
        }

    }
    catch(messg) {
        document.querySelector('[type="submit"]').setAttribute('disabled', "disabled");
        error.innerText = messg;
    }
}


///////////////////////////////////////////////////////////////////////////////////////
// /////////////////////////////   Countdown
let getDeadline = $("#countdown").getAttribute('data-time');
let deadline = getDeadline;

// time remaining
function time_remaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor( (t/1000) % 60 );
    let minutes = Math.floor( (t/1000/60) % 60 );
    let hours = Math.floor( (t/(1000*60*60)) % 24 );
    let days = Math.floor( t/(1000*60*60*24) );
    return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

// run
function run_clock(id, endtime) {
let clock = document.getElementById(id);

    // get spans where our clock numbers are held
    let days_span = clock.querySelector('.days');
    let hours_span = clock.querySelector('.hours');
    let minutes_span = clock.querySelector('.minutes');
    let seconds_span = clock.querySelector('.seconds');

    function update_clock() {
        let t = time_remaining(endtime);

        // update the numbers in each part of the clock
        days_span.innerHTML = t.days;
        hours_span.innerHTML = ('0' + t.hours).slice(-2);
        minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
        seconds_span.innerHTML = ('0' + t.seconds).slice(-2);

        if(t.total<=0){ clearInterval(timeinterval); }

    }
    update_clock();
    let timeinterval = setInterval(update_clock,1000);
}
run_clock('countdown', deadline);

function validatePhone(phoneVal) {
    var regex = /^((\+998)[\- ]?)?\(?\d{2}\)?[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}?$/;
    return regex.test(phoneVal);
}

$('[type="tel"]').inputmask({
    mask: "+\\9\\98 99 999 99 99",
    placeholder: "-",
});

//password show/hide functionality
document.querySelector('.passkey-icon').addEventListener('click', displayPassword);
document.querySelectorAll('.passkey-icon')[1].addEventListener('click', displayPassword);

function displayPassword(event) {
    if(event.target.parentNode.getAttribute('data-display-passkey') == 'off') {
        event.target.parentNode.setAttribute('data-display-passkey','on');
        $('.passkey-icon img').attr('src','img/eye-crossed.svg');
        event.target.parentElement.previousSibling.previousSibling.setAttribute('type','text');
        console.log(event.target.parentElement.previousSibling.previousSibling);
    }
    else {
        event.target.parentNode.setAttribute('data-display-passkey','off');
        $('.passkey-icon img').attr('src','img/eye.svg');
        event.target.parentElement.previousSibling.previousSibling.setAttribute('type','password');
    }
}