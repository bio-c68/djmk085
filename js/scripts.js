const vid = document.getElementById('vv');

setTimeout(
    function () {
        vid.muted = false;
    }
, 1000);

/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '35px',
    duration: 1200,
    reset: true
  })
  
  scrollReveal.reveal(
    `.topo
    `,
    { interval: 200 }
  )

  const scrollRevealLeft = ScrollReveal({
    origin: 'left',
    distance: '35px',
    duration: 1200,
    reset: true
  })
  
  scrollRevealLeft.reveal(
    `.left
    `,
    { interval: 200 }
  )

  const scrollRevealRight = ScrollReveal({
    origin: 'right',
    distance: '35px',
    duration: 1200,
    reset: true
  })
  
  scrollRevealRight.reveal(
    `.right
    `,
    { interval: 200 }
  )