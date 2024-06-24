const regexEmail = /[^@]{2,64}@[^.]{2,253}\.[0-9a-z-.]{2,63}/g;
// https://script.google.com/macros/s/AKfycbxy80XRAWXSJPDhCqn07KjYsiufIgjPQx0pThGJhz0PmvWvyjZd-rQDmDMKGGgZjyQq/exec
const scriptURL = 'https://script.google.com/macros/s/AKfycbzTWgm9LxdN8ahp_jza-sbWfqXBhbITYLhQz5jnuyDh5DIMMOmZ8Ee09n1QbkfeVis/exec'

const form = document.getElementById('formContact');
form.onsubmit = (e) => {
    e.preventDefault();
    let name = document.getElementById("fullname");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    let errName = document.getElementById("errName");
    let errEmail = document.getElementById("errEmail");
    let errSubject = document.getElementById("errSubject");
    let errMessage = document.getElementById("errMessage");

    let name_val = name.value.trim();
    let email_val = email.value.trim();
    let subject_val = subject.value.trim();
    let message_val = message.value.trim();

    let error = false;

    let reEmail = regexEmail.test(email_val);
    if (name_val == "") {
        errName.innerHTML = "Full Name is required";
        errName.style.opacity = 1;
        error = true;
    } else {
        errName.style.opacity = 0;
        errName.innerHTML = "";
        error = false;

    }
    if (email_val == "") {
        errEmail.innerHTML = "Email is required";
        errEmail.style.opacity = 1;
        error = true;
    } else if (!reEmail) {
        errEmail.innerHTML = "Incorrect email format";
        errEmail.style.opacity = 1;
        error = true;
    } else {
        errEmail.style.opacity = 0;
        errEmail.innerHTML = "";
        error = false;
    }
    if (subject_val == "") {
        errSubject.innerHTML = "Subject is required";
        errSubject.style.opacity = 1;
        error = true;
    } else {
        errSubject.style.opacity = 0;
        errSubject.innerHTML = "";
        error = false;
    }
    if (message_val == "") {
        errMessage.innerHTML = "Message is required";
        errMessage.style.opacity = 1;
        error = true;
    } else {
        errMessage.style.opacity = 0;
        errMessage.innerHTML = "";
        error = false;
    }
    if (error == false) {
        var now = new Date(Date.now());
        var data = {
            "fullname": name_val,
            "email": email_val,
            "subject": subject_val,
            "message": message_val,
            "time": now.toUTCString()
        }
        $(".loading-state").show();
        $.ajax({
            type: "POST",
            url: scriptURL,
            dataType: "json",
            crossDomain: true,
            data: data,
            success: function(data) {
                $(".loading-state").hide();
                $("#success_subscribe").removeClass("text-danger");
                $("#success_subscribe").addClass("text-success");
                $("#success_subscribe").text("Thank you for subscribe !!! I will contact you soon.")
                $("#success_subscribe")
                    .fadeIn(1000)
                    .fadeTo(2000, 5)
                    .fadeOut(1000, function() {
                        $("#success_subscribe").fadeOut(1000);
                        $("#success_subscribe").removeClass("text-success");
                        $("#success_subscribe").text("");
                    });
            },
            error: function() {
                $("#success_subscribe").text("Something wrong !!! Please try again")
                $("#success_subscribe").addClass("text-danger");
                $("#success_subscribe").removeClass("text-success");
                $("#success_subscribe")
                    .fadeIn(1000)
                    .fadeTo(2000, 5)
                    .fadeOut(1000, function() {
                        $("#success_subscribe").fadeOut(1000);
                        $("#success_subscribe").removeClass("text-danger");
                        $("#success_subscribe").text("");
                    });
                $(".loading-state").hide();
            },
        });

    }

}