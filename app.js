
setInterval(getBitcoins , 3000);

function getBitcoins()
{
  let xhr  = new XMLHttpRequest();
  xhr.open('GET','https://api.coindesk.com/v1/bpi/currentprice.json',true);
  xhr.onload = function(){

    if(this.status===200)
    {
      console.log(this.response);
      var price = JSON.parse(this.response);
      console.log(price);
      console.log(price.bpi.USD.rate)
      var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['USD', 'GBP', 'EUR'],
        datasets: [{
            label: 'Price of Bitcoins',
            data: [`${price.bpi.USD.rate_float}`,`${price.bpi.GBP.rate_float}`,`${price.bpi.EUR.rate_float}`],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{ 
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
    }

  }



  xhr.send();
}
