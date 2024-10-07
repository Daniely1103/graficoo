//Grafico de Pizza
const ctxPizza = document.getElementById('grafico pizza').gerContext('2d');
conts graficoPizza = new Chart(ctxPizza, {
    type: 'pie' ,
    data: {
        labels:['Motorola','Samsung','Iphone','Xiaomi'],
        datasets: [{
            label:''
            data:
            backgrondColor: [
                '#F05454', '#30475E' , '#DDDDDD' , '#222831'
                ],
                borderColor: '#DDDDDD' ,
                borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        },
                        title: {
                            display: true,
                            text: ''
                            }
                        }
                    }
                });
