document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que se envíe el formulario y se recargue la página
    var searchTerm = document.getElementById('searchInput').value;
    console.log('Término de búsqueda:', searchTerm);
});