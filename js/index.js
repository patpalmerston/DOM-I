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


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const newA = document.createElement('a');
newA.textContent = 'Funtime';


const newB = document.createElement('a');
newB.textContent = 'Happy Place';


const navigation = document.querySelector('nav');
navigation.append(newA);
navigation.append(newB);
// navigation.prepend(newB);
navigation.children[0].textContent = 'Services';
navigation.children[1].textContent = 'Product';
navigation.children[2].textContent = 'Vision';
navigation.children[3].textContent = 'Features';
navigation.children[4].textContent = 'About';
navigation.children[5].textContent = 'Contact';


const ctaHeader = document.querySelector('.cta-text h1')
ctaHeader.textContent = 'DOM Is Awesome';
const ctaBtn = document.querySelector('.cta-text button')
ctaBtn.textContent = "Get Started";

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', "img/header-img.png")

const myh4 = document.querySelectorAll('h4');
myh4[0].textContent = 'Features';
myh4[1].textContent = 'About';
myh4[2].textContent = 'Services';
myh4[3].textContent = 'Product';
myh4[4].textContent = 'Vision';
myh4[5].textContent = 'Contact';

const myP = document.querySelectorAll('p');
myP[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myP[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myP[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myP[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myP[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
myP[5].textContent = "123 Way 456 Street Somewhere, USA";
myP[6].textContent = "1 (888) 888-8888";
myP[7].textContent = "sales@greatidea.io";



let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', "img/mid-page-accent.jpg");



const myFooter = document.querySelector('footer')
myFooter.textContent = "Copyright Great Idea! 2018";

const newNav = document.querySelectorAll('a');
newNav.forEach( function( x ){
  x.style.color = 'green';
});

