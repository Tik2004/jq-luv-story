particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});


Swal.fire({
    title: 'Դու ունես ընկեր կամ սիրած տղա ?',
    showDenyButton: true,
    text: 'Խնդրում եմ անկեղծ պատասխանի, որովհետև եթե դու ունես ընկեր, կամ ուրիշի ես սիրում, այս կայքը քեզ դժվար հետաքրքիր լինի։',
    confirmButtonText: `Չունեմ`,
    denyButtonText: `Ունեմ`,
  }).then((result) => {
    if (result.isConfirmed) {

      Swal.fire('Լավ, կարող ես շարունակել.', '', 'success')
      $('.content').css('display','block')
      $('.content').append('<audio loop autoplay preload src="songM.mp3"></audio>');
    } else if (result.isDenied) {
      Swal.fire('Լավ, հաջողություն!', '', 'info')
    }
})



const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2018 Sep', '2018 Nov','2018 Dec','2019 Feb' ,'2019 May','2019 Jul','2019 Aug', '2019 Oct', '2020 Feb'],
        datasets: [{
            label: 'Մեր հարաբերությունները %',
            data: [10,20,21,15,50,20,0,1,-10],
            backgroundColor: [
                'rgba(41, 182, 246, 0.5)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(41, 182, 246, 0.5)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 5
        }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 10
    }
});