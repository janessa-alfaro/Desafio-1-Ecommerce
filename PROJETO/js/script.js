const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
e.preventDefault();
alert('Obrigadx por ser cadastrar! Em breve você receberá nossas novidades e promoções! \uD83E\uDDC1')
let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let data = {
    nome,
    email,
}
let convertData = JSON.stringify(data);
localStorage.setItem('lead', convertData)


})
