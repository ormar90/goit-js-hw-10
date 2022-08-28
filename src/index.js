import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from "lodash.debounce";
import { tamplatesCard, tamplatesList } from "./tamplates.js";
import { fetchCoutries } from './fetchCountries.js';

const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countriesListEl = document.querySelector('.country-list');
const countriesInfoEl = document.querySelector('.country-info');

inputEl.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(e) {
    const inputValue = e.target.value.trim();
    
    fetchCoutries(inputValue)
        .then(renderCounrtyList)
        .catch(onFetchError);
}

function onFetchError(error) {   
    countriesListEl.innerHTML = '';
    countriesInfoEl.innerHTML = '';
    Notify.failure('Oops, there is no country with that name.');    
}

function renderCounrtyList(countries) {
    if (countries.length > 10) {
        Notify.info('Too many matches found. Please enter a more specific name.');
        countriesListEl.innerHTML = '';
        countriesInfoEl.innerHTML = '';
        return;
    } else if (countries.length > 1) {
        const markupList = [];
        countries.forEach(country => {            
            markupList.push(tamplatesList(country.flags.svg, country.name.official));            
        });
        countriesListEl.innerHTML = `<div class="list-wraper">${markupList.join('')}</div>`
        countriesInfoEl.innerHTML = '';
        return;
    } else if (countries.length === 1) {
        const markupInfo = tamplatesCard(
                                    countries[0].flags.svg,
                                    countries[0].name.official,
                                    countries[0].capital,
                                    countries[0].population,
                                    Object.values(countries[0].languages)); 
                    
        countriesInfoEl.innerHTML = markupInfo; 
        countriesListEl.innerHTML = '';
    }
}