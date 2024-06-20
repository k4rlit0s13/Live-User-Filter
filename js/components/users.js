// Aquí el mago actualiza la casa con los datos obtenidos
function displayUsers(users) {
    resultList.innerHTML = users.map(user => `
        <li>
            <h3>${user.name_full}</h3>
            <p>${user.description}</p>
            <img src="${user.avatar}" alt="${user.name_full}">
        </li>
    `).join('');
}