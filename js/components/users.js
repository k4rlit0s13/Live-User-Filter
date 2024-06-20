const resultList = document.getElementById('result'); // El mago encuentra la lista (resultList) donde mostrará los resultados(esto va para user.js)

// Aquí el mago actualiza la casa con los datos obtenidos
export const getUsers=(users)=>{            
// El mago usa los datos de usuarios recibidos para construir una lista de elementos HTML
    resultList.innerHTML = users.map(user =>   
    `  
        <li>
            <h3>${user.name_full}</h3>                         
            <p>${user.description}</p>                         
            <img src="${user.avatar}" alt="${user.name_full}"> 
        </li>
    `
        // Cada usuario tiene un nombre completo que se muestra como título
        // También se muestra una descripción del usuario
        // Se muestra una imagen del usuario con su nombre como texto alternativo
    ).join(''); // Une todos los elementos de la lista en un solo string para ser insertado en el HTML
}