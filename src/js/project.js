var project_list = [{
        "name": "Brochure website about Packaging Technology",
        "time": "2021",
        "technology": "Wordpress, Javascript, CSS, mySQL",
        "work": [
            "Write WordPress hooks and customize theme for the page.",
            "Edit the user interface based on figma design using JavaScript and CSS.",
        ]
    },
    {
        "name": "Agency service provider website",
        "time": "2021",
        "technology": "Wordpress, Javascript, CSS, mySQL",
        "work": [
            "Write WordPress hooks and customize theme for the page.",
            "Edit the user interface based on figma design using JavaScript and CSS.",

        ]
    },
    {
        "name": "E-commerce website about selling seafood",
        "time": "2022",
        "technology": "Wordpress, Javascript, CSS, MariaDB",
        "work": [
            "Write WordPress hooks and customize theme for the page.",
            "Edit the user interface based on figma design using JavaScript and CSS.",
            "Optimize code and performance.",
        ]
    },
    {
        "name": "E-commerce webapp about selling and transport product",
        "time": "2022",
        "technology": "Laravel, VueJS, JS, SASS, MariaDB",
        "work": [
            "Analyze requirements, write APIs and backend code to retrieve and store data in the database.",
            "Code login and registration methods, shopping cart, and product payment.",
            "Write custom hooks, create helpers, and add the online payment method.",
            "Add animations using the Animate library."
        ]
    },
    {
        "name": "Real estate website",
        "time": "2022 - 2023",
        "technology": "CakePHP, JS, SASS, MariaDB, Docker",
        "work": [
            "Analyze requirements, write some custom hooks, create helpers.",
            "Write test cases, optimize code, and improve performance.",
            "Write documentation, user guides, and notes to support the use and maintenance of the software in the future."
        ]
    },
    {
        "name": "HRM system",
        "time": "2023 - 2024",
        "technology": "Codeigniter, JS, CSS, mySQL",
        "work": [
            "Analyze requirements, write some custom hooks, create helpers.",
            "Write test cases, optimize code, and improve performance.",
            "Manage employee time-in and time-out with an API and analyze statistical data from a database, integrate an API that tracks employee attendance, store and retrieve time data from a database, and use statistical tools or queries to analyze trends such as average work hours, attendance patterns, and overtime.",
            "Analyze and calculate an employee's salary, total hours worked, account for unpaid leave, and include any holiday pay or overtime, then adjust the base salary or hourly rate accordingly.",
            "Write recruitment flow involves using an API to post job openings, track applicants, and manage resumes, while leveraging a database to store data and analyze recruitment metrics for optimizing the hiring process.",
            "Write an API to track user locations during login/logout, and use a cron job to automatically check out users if they forget to do so."
        ]
    }
];

var data_project_list = project_list.slice().reverse();
var projectList = document.getElementById("project_list");
// append portfolio
if (projectList) {
    data_project_list.forEach(function(value, key) {
        let itemBox = document.createElement('div');
        let itemBoxP = document.createElement('div');
        let itemTitle = document.createElement('div');
        let itemTime = document.createElement('div');
        let itemJob = document.createElement('div');
        let jobList = document.createElement('ul');
        let itemTechUsed = document.createElement('div');

        itemTitle.setAttribute("class", "e-item-title");
        itemTitle.innerHTML = value.name

        itemTime.setAttribute("class", "e-item-time");
        itemTime.innerHTML = value.time

        itemTechUsed.setAttribute("class", "e-item-tech");
        itemTechUsed.innerHTML = "Technology used: " + value.technology

        let jobData = value.work;
        jobData.forEach(function(jDt) {
            let jobListItem = document.createElement('li');
            jobListItem.innerHTML = jDt;
            jobList.appendChild(jobListItem);
        })

        itemJob.setAttribute("class", "e-item-work-list");
        itemJob.appendChild(jobList);

        itemBoxP.setAttribute("class", "e-item-box-company");
        itemBoxP.appendChild(itemTitle);
        itemBoxP.appendChild(itemTime);


        itemBox.setAttribute("class", "project-item ");
        itemBox.appendChild(itemBoxP);
        itemBox.appendChild(itemTechUsed);
        itemBox.appendChild(itemJob);

        projectList.appendChild(itemBox)
    })
}