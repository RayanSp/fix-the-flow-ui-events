let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jump)
interaction.addEventListener('animationend', jump)

function jump() {
  interaction.classList.toggle('jump')
}

// animatie kleurverandering

let kleurverandering = document.querySelector('a:nth-of-type(1)')

kleurverandering.addEventListener('click', colorchange)
kleurverandering.addEventListener('transitionend', colorchange)

function colorchange() {
  kleurverandering.classList.toggle('colorchange')
}

// lettergrootte aanpassen 

let lettergrootte = document.querySelector('a:nth-of-type(2)')

lettergrootte.addEventListener('click', fontsize)
lettergrootte.addEventListener('transitionend', fontsize)

function fontsize() {
  lettergrootte.classList.toggle('fontsize')
}

// spin 

let draaielement = document.querySelector('a:nth-of-type(3)')

draaielement.addEventListener('click', spinelement)
draaielement.addEventListener('transitionend', spinelement)

function spinelement() {
  draaielement.classList.toggle('spin')
}

// shake

let shakeelement = document.querySelector('a:nth-of-type(4)')

shakeelement.addEventListener('click', shake)
shakeelement.addEventListener('animationend', shake)

function shake() {
  shakeelement.classList.toggle('shake')
}


// flip

let flipelement = document.querySelector('a:nth-of-type(5)')

flipelement.addEventListener('click', flip)
flipelement.addEventListener('transitionend', flip)

function flip() {
  flipelement.classList.toggle('flip')
}


// fontbold

let fontelement = document.querySelector('a:nth-of-type(6)')

fontelement.addEventListener('click', fontbold)
fontelement.addEventListener('transitionend', fontbold)

function fontbold() {
  fontelement.classList.toggle('fontbold')
}

// shrink

let shrinkelement = document.querySelector('a:nth-of-type(7)')

shrinkelement.addEventListener('click', shrink)
shrinkelement.addEventListener('animationend', shrink)

function shrink() {
  shrinkelement.classList.toggle('shrink')
}


// frontflip

let frontflipelement = document.querySelector('a:nth-of-type(8)')

frontflipelement.addEventListener('click', frontflip)
frontflipelement.addEventListener('transitionend', frontflip)

function frontflip() {
  frontflipelement.classList.toggle('frontflip')
}

// freestyle

let freestyleelement = document.querySelector('a:nth-of-type(9)')

freestyleelement.addEventListener('click', freestyle)
freestyleelement.addEventListener('animationend', freestyle)

function freestyle() {
  freestyleelement.classList.toggle('freestyle')
}


// jumping 

let jumpingelement = document.querySelector('a:nth-of-type(10)')

jumpingelement.addEventListener('click', jumping)
jumpingelement.addEventListener('animationend', jumping)

function jumping() {
  jumpingelement.classList.toggle('jumping')
}