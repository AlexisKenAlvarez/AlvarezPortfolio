

gsap.registerPlugin(ScrollTrigger);



var tl = gsap.timeline({ defaults: { opacity: 0, duration: 2, y: 1000, ease: 'Power4.easeInOut' } });
var iconTL = gsap.timeline({ defaults: { opacity: 0, duration: 2, y: 100, ease: 'circ.easeInOut' } });


var line = gsap.from('.whiteLine', { opacity: 0, duration: 2, y: 100, ease: 'circ.easeInOut' }, '-=6.6');
iconTL.add(line);

var headers = gsap.timeline({ defaults: { opacity: 0, duration: 1.3, y: -50, ease: 'circ.easeInOut' } });
headers.from('.alexis', {})
    .from('.myLogo', {}, "-=1")
    .from('.aspire', {}, "-=1")
    .from('.download', {}, "-=1")

gsap.from('.myImage', { opacity: -1, duration: 4, y: 100, ease: 'circ.easeInOut' }, "-=1");

document.querySelectorAll('.socLink').forEach(function (icon) {
    iconTL.from(icon, {}, '-=1.5')
})
tl.from('.div1', {})
    .from('.div2', {}, '-=1.7')
    .from('.div3', {}, '-=1.7')
    tl.add(headers)
    tl.add(iconTL);

var paws = document.querySelector('.paws');
var pawsLogo = document.querySelector('.pLogo');

paws.addEventListener('mouseover', ()=>{
    pawsLogo.style.transform = 'scale(1.3)';
})

paws.addEventListener('mouseout', ()=>{
    pawsLogo.style.transform = 'scale(1)';
})

var roblox = document.querySelector('.roblox');
var robloxLogo = document.querySelector('.rLogo');

roblox.addEventListener('mouseover', ()=>{
    robloxLogo.style.transform = 'scale(1.2)';
})

roblox.addEventListener('mouseout', ()=>{
    robloxLogo.style.transform = 'scale(1)';
})


var tic = document.querySelector('.tic');
var ticLogo = document.querySelector('.tLogo');

tic.addEventListener('mouseover', ()=>{
    ticLogo.style.transform = 'scale(1.3)';
})

tic.addEventListener('mouseout', ()=>{
    ticLogo.style.transform = 'scale(1)';
})


