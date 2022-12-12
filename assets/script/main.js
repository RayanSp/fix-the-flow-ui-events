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