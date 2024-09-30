//Grafico de Pizza
const ctxPizza = document.getElementById('grafico pizza').gerContext('2d');
conts graficoPizza = new Chart(ctxPizza, {
    type: 'pie' ,
    data: {
        labels:['Motorola','Samsung','Iphone','Xiaomi'],
        datasets: [{
            label: