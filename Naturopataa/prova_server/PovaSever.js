
document.addEventListener('DOMContentLoaded',function(){
    caricaEventi([])
})

function caricaEventi(data) {
    const table =  document.querySelector('table tbody');
    let tableHTML = '';
    if (data.lenght === 0){
        tableHTML = "<tr><td class = 'no-data-found'><td/><tr/>"
    }
}