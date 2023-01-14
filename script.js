// element area

let circleEl = document.getElementById('circle');
let UserNameEl = document.getElementById('UserName');
let btnContainerEl = document.getElementById('btnContainer');

// url area
const url = 'https://api.github.com/users';

// Global variable
let current,next,previous

getData(0)

function getData(a) {

    fetch(url)
        .then(response => response.json())
        .then(response => {

            current = a;
            previous = a - 1;
            next = a + 1;
            if (current === response.length-1) {
                next = 0;
            }
            if (current === 0) {
                previous = response.length-1;
            }
            let oneUser = response[a];
            circleEl.style.backgroundImage = `url(${oneUser.avatar_url})`;
            UserNameEl.innerText = oneUser.login;

            btnContainerEl.innerHTML = null;

            let btn1 = document.createElement('div')
            btnContainerEl.appendChild(btn1)
            btn1.innerHTML = `<button class="btn" onclick='getData(${previous})'><i class="fa-solid fa-backward"></i></button>`

            let btn2 = document.createElement('div');
            btnContainerEl.appendChild(btn2);
            btn2.innerHTML = `<a class="btn" href='${oneUser.html_url}'>View Profile</a>`

            let btn3 = document.createElement('div')
            btnContainerEl.appendChild(btn3)
            btn3.innerHTML = `<button class="btn" onclick='getData(${next})'><i class="fa-solid fa-forward"></i></button>`
        })
}