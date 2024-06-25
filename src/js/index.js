// main menu item 
const menu = [{
        "url": '#about',
        "icon": '<i class="fa-solid fa-user"></i>',
        "text": 'about',
    },
    {
        "url": '#resume',
        "icon": '<i class="fa-solid fa-file-lines"></i>',
        "text": 'resume',
    },
    // {
    //     "url": '#works',
    //     "icon": '<i class="fa-solid fa-briefcase"></i>',
    //     "text": 'work',
    // },
    {
        "url": '#blog',
        "icon": '<i class="fa-solid fa-newspaper"></i>',
        "text": 'blog',
    },
    {
        "url": '#contact',
        "icon": '<i class="fa-solid fa-address-book"></i>',
        "text": 'contact',
    },
    {
        "url": '#projects',
        "icon": '<i class="fa-solid fa-laptop-code"></i>',
        "text": 'projects',
    },
]

var mainMenu = document.getElementById("mainNavigationMenu");
var item, text, spanIcon, spanText, link;
var i = 0;
menu.forEach(function(value, key) {
    item = document.createElement("li");
    link = document.createElement("a");
    spanIcon = document.createElement("span");
    spanText = document.createElement("span");
    i += 1;
    link.setAttribute("href", value.url);
    link.setAttribute("data-target", value.text);
    link.setAttribute("data-index", i);
    link.setAttribute("class", "change-section " + value.text);

    if (i == 1) {
        link.classList.add("active");
    }
    item.setAttribute("data-id", "menu-item-" + i);
    item.setAttribute("class", "menu-item item-main-nav item-key-object")

    spanIcon.setAttribute("class", "menu-icon icon-item-" + value.text)
    spanIcon.innerHTML = value.icon;
    link.appendChild(spanIcon);

    spanText.setAttribute("class", "menu-text text-item-" + value.text)
    spanText.appendChild(document.createTextNode(value.text));
    link.appendChild(spanText);
    item.appendChild(link)
    mainMenu.appendChild(item);
})

// text writer for positions
const positions = [
    "Fullstack Web Developer",
    "Freelancer"
]
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="sub-title">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('type-writer');
    var period = 2000;
    for (var i = 0; i < elements.length; i++) {
        var toRotate = positions
        if (toRotate) {
            new TxtType(elements[i], toRotate, period);
        }
    }
};
// social media list 
const social = [{
        "name": 'facebook',
        "url": 'https://www.facebook.com/yukimikusan/',
        "icon": '<i class="fa-brands fa-facebook"></i>'
    },
    {
        "name": 'linkedin',
        "url": 'https://www.linkedin.com/in/tr%E1%BB%8Bnh-gia-kh%C3%A1nh-934bb9286/',
        "icon": '<i class="fa-brands fa-linkedin"></i>'
    },
    {
        "name": 'github',
        "url": 'https://github.com/giakhanh010200/',
        "icon": '<i class="fa-brands fa-github"></i>'
    },
    {
        "name": 'page',
        "url": 'https://github.com/giakhanh010200/',
        "icon": '<i class="fa-solid fa-globe"></i>'
    },
]
var mySocial = document.getElementById("social");
social.forEach(function(value, key) {
    var item = document.createElement("a");
    item.setAttribute("target", "_blank");
    item.setAttribute("href", value.url);
    item.setAttribute("class", "profile-" + value.name)
    item.innerHTML = value.icon;
    mySocial.appendChild(item);
})

var change_tab = document.querySelectorAll(".change-section");

change_tab.forEach(el => el.addEventListener('click', event => {
    let data = event.target.closest(".change-section");
    let tab = data.getAttribute("data-target");
    let newIndex = data.getAttribute("data-index");
    let currentIndex = document.querySelectorAll(".change-section.active")[0].getAttribute("data-index");
    console.log(newIndex, currentIndex);
    if (currentIndex < newIndex) {
        document.querySelectorAll(".card-inner.active")[0].classList.add("inactive", "fadeOutTop");
        document.querySelectorAll(".card-inner.active")[0].classList.remove("active", "fadeInTop", "fadeInBot");

        document.getElementById(tab).classList.add("active", "fadeInBot");
    }
    if (currentIndex > newIndex) {
        document.querySelectorAll(".card-inner.active")[0].classList.add("inactive", "fadeOutBot");
        document.querySelectorAll(".card-inner.active")[0].classList.remove("active", "fadeInTop", "fadeInBot");

        document.getElementById(tab).classList.add("active", "fadeInTop");
    }
    setTimeout(function() {
        document.querySelectorAll(".card-inner.inactive")[0].classList.remove("inactive", "fadeOutTop", "fadeOutBot");
    }, 2500)
    document.querySelectorAll(".change-section.active")[0].classList.remove("active");
    data.classList.add("active");
}));
document.getElementById("btnContact").addEventListener("click", function(e) {
        document.querySelectorAll(".change-section.contact")[0].click();
    })
    // EXPERIENCE
const experience = [{
        "company": "DIGITYZE ASIA COMPANY LIMITED",
        "title": "Junior Web Developer",
        "time": "09/2023-present",
        "active": "active",
        "job": [
            "Developed a MySQL database schema that allowed for efficient data storage and retrieval.",
            "Improved application performance by 10% through optimization of code and implementation of caching techniques.",
            "Fixed broken links and other web page issues that improved the user experience.",
            "Used webpack to bundle JavaScript modules for faster loading and improved user experience.",
            "Created a secure authentication system that allowed users to access the application with minimal security risks.",
            "Successfully integrated websites with powerful backend services such as databases, APIs, and other services.",
            "Developed prototypes and mockups for new features, enhancing UX and UI design."
        ]
    },
    {
        "company": "GIAO HANG TIET KIEM JOINT STOCK COMPANY",
        "title": "Security Engineer Internship",
        "time": "10/2022 - 05/2023",
        "active": "",
        "job": [
            "Performed information security assessments of large. complex, or multi-platform applications.",
            "Built a security guideline by understanding the platform, technology, and available documents",
            "'Oday' research, new vulnerability exploitation techniques, new technologies, and announcements were shared through seminars at the company and blog; Information Security community activities.",
        ]
    },
    {
        "company": "ALVASKY TECHNOLOGY AND MEDIA JOINT STOCK COMPANY",
        "title": "Fresher Web Developer",
        "time": "09/2021 - 04/2022",
        "active": "",
        "job": [
            "Used PHP, Laravel, JavaScript, CSS, SASS, and HTML to construct a CMS site for the company under the leader's guidance.",
            "Used WordPress, Elementor, and other plugins to build and edit custom themes, contributing to increase in website performance.",
            "Debugged software and hardware issues and created bug reports for software development teams",
            "Improved application performance by 15% through optimization of code and implementation of caching techniques.",
        ]
    },
    {
        "company": "ALVASKY TECHNOLOGY AND MEDIA JOINT STOCK COMPANY",
        "title": "Internship Software Engineer",
        "time": "06/2021 - 09/2021",
        "active": "",
        "job": [
            "Utilized CRM software to track customer data, interactions, and activity, resulting ni improved customer service.",
            "Debugged software, identified root causes, and proposed solutions to software issues.",
            "Developed a software prototype that successfully demonstrated the potential of a new research concept.",
            "Developed and maintained code for 4 client websites primarily using HTML, CSS, JavaScript, and PHP (Wordpress, Laravel, CakePHP).",
            "Created multiple responsive websites for mobile and desktop devices using HTML and CSS, as well as third-party libraries such as jQuery and VueJS.",
        ]
    },
]
var experienceList = document.getElementById("experienceList");
experience.forEach(function(value, key) {
    let itemBox = document.createElement('div');

    let itemBoxC = document.createElement('div');

    let itemTitle = document.createElement('div');
    let itemTime = document.createElement('div');
    let itemCompany = document.createElement('div');
    let itemJob = document.createElement('div');

    let jobList = document.createElement('ul');

    itemBox.setAttribute("class", "experience-item " + value.active);

    itemTime.setAttribute("class", "e-item-time");
    itemTime.innerHTML = value.time

    itemTitle.setAttribute("class", "e-item-title");
    itemTitle.innerHTML = value.title;

    itemCompany.setAttribute("class", "e-item-company");
    itemCompany.innerHTML = value.company;

    let jobData = value.job;
    jobData.forEach(function(jDt) {
        let jobListItem = document.createElement('li');
        jobListItem.innerHTML = jDt;
        jobList.appendChild(jobListItem);
    })
    itemJob.setAttribute("class", "e-item-work-list");
    itemJob.appendChild(jobList);

    itemBoxC.setAttribute("class", "e-item-box-company");
    itemBoxC.appendChild(itemCompany)
    itemBoxC.appendChild(itemTime)

    itemBox.appendChild(itemBoxC);
    itemBox.appendChild(itemTitle)
    itemBox.appendChild(itemJob)

    experienceList.appendChild(itemBox)
});

// education
var educationList = document.getElementById("educationList");

const education = [{
    "place": "HaNoi University of Science andTechnology",
    "time": "09/2018 - 07/2023",
    "major_graduation": "Bachelor of Global Information and Communication Technologies",
}]
education.forEach(function(value, key) {
    let itemBox = document.createElement('div');

    let itemCompany = document.createElement('div');
    let itemTime = document.createElement('div');
    let itemMajor = document.createElement('div');

    itemCompany.setAttribute("class", "edu-item-company");
    itemCompany.innerHTML = value.place

    itemTime.setAttribute("class", "edu-item-time");
    itemTime.innerHTML = value.time

    itemMajor.setAttribute("class", "edu-item-major");
    itemMajor.innerHTML = value.major_graduation

    itemBox.setAttribute("class", "experience-item");

    itemBox.appendChild(itemCompany);
    itemBox.appendChild(itemTime);
    itemBox.appendChild(itemMajor);
    educationList.appendChild(itemBox);
})

// change theme
document.getElementsByClassName("switch-dark-mode")[0].addEventListener("click", function(e) {
    const root_theme = document.querySelector(':root');
    console.log(root_theme);
    root_theme.style.setProperty('--bg-color', '#222');
    root_theme.style.setProperty('--bg-revert-color', '#fff');
    root_theme.style.setProperty('--font-color', '#fff');
    document.querySelector(".switch-light-mode").classList.remove("hidden");
    document.querySelector(".switch-dark-mode").classList.add("hidden");
})
document.getElementsByClassName("switch-light-mode")[0].addEventListener("click", function(e) {
    const root_theme = document.querySelector(':root');
    console.log(root_theme);
    root_theme.style.setProperty('--bg-color', '#fff');
    root_theme.style.setProperty('--bg-revert-color', '#222');
    root_theme.style.setProperty('--font-color', '#000');
    document.querySelector(".switch-dark-mode").classList.remove("hidden");
    document.querySelector(".switch-light-mode").classList.add("hidden");
})