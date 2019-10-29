const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
/*
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
*/


//Task 2: Update the HTML with the JSON data
//NAV
const nav = document.querySelectorAll('nav a');
//console.log(nav[0].textContent);
/*
nav[0].textContent = siteContent.nav["nav-item-1"];
nav[1].textContent = siteContent.nav["nav-item-2"];
nav[2].textContent = siteContent.nav["nav-item-3"];
nav[3].textContent = siteContent.nav["nav-item-4"];
nav[4].textContent = siteContent.nav["nav-item-5"];
nav[5].textContent = siteContent.nav["nav-item-6"];
*/
const navobject = Object.values(siteContent.nav);
for (let i = 0; i < nav.length; i++) { // must loop over nav not array due to length
  nav[i].textContent = navobject[i];
};
// could probaly clean this up with a key == include(nav-item) test 

let logoImg = document.getElementById("logo-img");
logoImg.src = siteContent.nav["img-src"];

//CTA
const ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent.cta["h1"];

const ctaTextButton = document.querySelector('.cta-text button');
ctaTextButton.textContent = siteContent.cta["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.src = siteContent.cta["img-src"];

//MAIN CONTENT

const mainH4s = document.querySelectorAll('.text-content h4');
const mainPs = document.querySelectorAll('.text-content p');
//top
mainH4s[0].textContent = siteContent["main-content"]["features-h4"];
mainPs[0].textContent = siteContent["main-content"]["features-content"];
mainH4s[1].textContent = siteContent["main-content"]["about-h4"];
mainPs[1].textContent = siteContent["main-content"]["about-content"];

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

//bottom
mainH4s[2].textContent = siteContent["main-content"]["services-h4"];
mainPs[2].textContent = siteContent["main-content"]["services-content"];
mainH4s[3].textContent = siteContent["main-content"]["product-h4"];
mainPs[3].textContent = siteContent["main-content"]["product-content"];
mainH4s[4].textContent = siteContent["main-content"]["vision-h4"];
mainPs[4].textContent = siteContent["main-content"]["vision-content"];

//contact
const contactH4 = document.querySelector('.contact h4');
contactH4.textContent = siteContent.contact["contact-h4"];

const contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = siteContent.contact["address"];
contactPs[1].textContent = siteContent.contact["phone"];
contactPs[2].textContent = siteContent.contact["email"];

//footer
const footerP = document.querySelector('footer p');
footerP.textContent = siteContent.footer["copyright"];

// Task 3: Add new content
for (let i = 0; i < nav.length; i++) {
  nav[i].style.color = "green";
}

const preLink = document.createElement("a");
preLink.textContent = "Pre-Item";
preLink.href = "#";// there has got to be a btter way to do this?

const postLink = document.createElement("a");
postLink.textContent = "Post-Item";
postLink.href = "#";

const navApend = document.querySelector('nav');
navApend.appendChild(postLink);
navApend.prepend(preLink)

// Stretch Goals
let buttonVar = document.createElement('button');
buttonVar.textContent = "Click Me";
navApend.prepend(buttonVar);
let pageBody = document.querySelector('body');
buttonVar.addEventListener('click', () => {
  pageBody.style.backgroundColor = 'pink';
  buttonVar.style.display = 'none';
})
