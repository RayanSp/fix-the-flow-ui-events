let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}

// animatie kleurverandering

let kleurverandering = document.querySelector('a:nth-of-type(1)')

kleurverandering.addEventListener('click', colorchange)
kleurverandering.addEventListener('animationend', colorchange)

function colorchange() {
  kleurverandering.classList.toggle('colorchange')
}

// lettergrootte aanpassen 

let lettergrootte = document.querySelector('a:nth-of-type(2)')

lettergrootte.addEventListener('click', fontsize)

function fontsize() {
  lettergrootte.classList.toggle('fontsize')
}

// spin 

let draaielement = document.querySelector('a:nth-of-type(3)')

draaielement.addEventListener('click', spin)
draaielement.addEventListener('animationend', spin)

function spin() {
  draaielement.classList.toggle('spin')
}

// shake

let shakeelement = document.querySelector('a:nth-of-type(4)')

shakeelement.addEventListener('click', shake)
shakeelement.addEventListener('animationend', shake)

function shake() {
  shakeelement.classList.toggle('shake')
}
