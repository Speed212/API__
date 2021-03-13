const text = document.querySelector('.demo')
let html = ``
fetch('https://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then(name => {
        name.forEach(name => {
            html += `<div class = 'p1'><div><p>${name.name}</p> <p>${name.gender}</p></div>  <div><img style = 'width: 120px; height: 167.12px; float: right; border-radius: 10px;'  src='${name.image}'></div></div>`
        })
        text.innerHTML = html
    })