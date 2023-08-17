const observar = new IntersectionObserver(entries => {
    console.log(entries)
    entries[0].target.classList.add('aparecer-on') //adicona uma uma class nova
},{
    threshold: [0,0.5,1]
})

Array.from(document.querySelectorAll(".aparecer-off")).forEach(elemento => {
    observar.observe(elemento) //cada elemento da class sendo observado
})
