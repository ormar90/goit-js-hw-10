export function tamplatesList(flag, country) {
    return `<li class="list-item">
                <img src="${flag}" alt="${country}"> 
                <p class="list-text">${country}</p>
            </li>`;
}

export function tamplatesCard(flag, country, capital, population, languages) {
    return `<div class="info" >
                <div class="info-header" >
                    <img src="${flag}" alt="${country}">
                    <p class="info-text">${country}</p>
                </div>            
                <ul class="info-list">
                    <li class="info-item">Capital: ${capital}</li>
                    <li class="info-item">Population: ${population}</li>
                    <li class="info-item">Languages: ${languages}</li>
                </ul>
            </div>`
}
