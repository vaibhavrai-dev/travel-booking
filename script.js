
document.getElementById("searchForm")?.addEventListener("submit", function(e){
    e.preventDefault();

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;
    let guests = document.getElementById("guests").value;

    
    localStorage.setItem("searchData", JSON.stringify({from, to, date, guests}));

    
    window.location.href = "search.html";
});