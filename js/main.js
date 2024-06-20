// Vamos a desglosar las instrucciones del mago (JavaScript) paso a paso para entender qué está haciendo en la casa (HTML):

// 1. Esperar a que la casa esté lista:
document.addEventListener('DOMContentLoaded', () => { 
    // El mago se asegura de que toda la casa (documento HTML) esté construida antes de comenzar a hacer sus trucos.
    // Usa DOMContentLoaded para saber cuándo puede empezar.

    // 2. Buscar los elementos en la casa:
    const resultList = document.getElementById('result'); // El mago encuentra la lista (resultList) donde mostrará los resultados
    const filterInput = document.getElementById('filter'); // y el cuadro de búsqueda (filterInput) donde el usuario puede escribir.

    // 3. Hacer una llamada mágica para obtener datos:
    fetch('https://6674179975872d0e0a950e53.mockapi.io/user') // El mago usa fetch para hacer una llamada mágica a una URL donde viven los datos de los usuarios
        .then(response => response.json()) // Una vez que obtiene la respuesta, la convierte a formato que entiende (JSON)
        .then(data => {  
            displayUsers(data);  // y pasa esos datos a la función displayUsers.

    // 4. Escuchar las búsquedas del usuario:
            filterInput.addEventListener('input', (e) => {           
                // El mago está atento a lo que el usuario escribe en el cuadro de búsqueda
                const searchTerm = e.target.value.toLowerCase();     
                // Cada vez que se escribe algo, convierte el término de búsqueda a minúsculas.
                const filteredUsers = data.filter(user =>                
                    // Filtra los usuarios que coinciden con el término de búsqueda:
                    user.name_full.toLowerCase().includes(searchTerm) ||     
                    // Comprueba si el nombre completo o la descripción del usuario incluyen el término de búsqueda (también en minúsculas).
                    user.description.toLowerCase().includes(searchTerm)
                );
                displayUsers(filteredUsers);  
                // Actualiza la lista de resultados con esos usuarios filtrados.
            });
        });
});


