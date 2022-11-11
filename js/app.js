/*--- Variables ---*/
let theme = localStorage.getItem('theme')
let themeDots = document.getElementsByClassName('theme-dot');
let msgContainer = document.getElementById('container')
let homeBtn = document.querySelector('.home');

/*--- Default theme ---*/
if (theme == null) {
    setTheme('light')
} else {
    setTheme(theme)
}

/*--- Loop through themedots ---*/
for (var i = 0; themeDots.length > i; i++) {
    themeDots[i].addEventListener('click', function () {
        let mode = this.dataset.mode
        setTheme(mode);
        // this.classList.add('selected')
    })
}

/*--- Set theme function ---*/
function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme-style').href = "style.css"
    }

    if (mode == 'blue') {
        document.getElementById('theme-style').href = "blue.css"
    }

    if (mode == 'green') {
        document.getElementById('theme-style').href = "green.css"
    }

    if (mode == 'purple') {
        document.getElementById('theme-style').href = "purple.css"
    }

    localStorage.setItem('theme', mode)
}


/*--- Mobile menu toggle ---*/
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/*--- Home button ---*/
window.addEventListener('scroll', () => {


    if (window.pageYOffset > 150) {
        homeBtn.classList.add('active');
    } else {
        homeBtn.classList.remove('active');
    }

    // checkBoxes()
});

/*--- Theme setting notice ---*/
window.onload = setTimeout(notice, 1000);

function notice() {
    const msg = document.createElement('p');
    msg.classList.add('info');

    msg.textContent = ('Click below to customise theme.')

    msgContainer.insertBefore(msg, msgContainer.childNodes[0]);

    setTimeout(clearNotice, 10000)
}

/*--- Clear theme setting notice ---*/
function clearNotice() {
    document.querySelector('#container').remove();
}

/*--- Footer dynamic year ---*/
const date = new Date();
document.getElementById('copy-right').innerHTML = date.getFullYear();

/*--- Animation ---*/
const posts = document.querySelectorAll('#post');
const animate = document.querySelectorAll('.animate');

window.addEventListener('scroll', checkPosts);


checkPosts();

function checkPosts() {
    const triggerPoint = window.innerHeight / 5 * 4

    posts.forEach(post => {
        const postTop = post.getBoundingClientRect().top

        if (postTop < triggerPoint) {
            post.classList.add('show');
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden')
            post.classList.remove('show')
        }
    })

    animate.forEach(animate => {
        const animateTop = animate.getBoundingClientRect().top

        if (animateTop < triggerPoint) {
            animate.classList.add('show');
            animate.classList.remove('animate');
        } else {
            animate.classList.add('animate')
            animate.classList.remove('show')
        }
    })
}


