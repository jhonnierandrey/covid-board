const handlers = {
    createCountryOptions : function(countries){
        let countryList = document.querySelector(".country-list");

        if (countryList.childElementCount > 1) {
            return;
        } else {
            for(let i = 0; i < countries.length; i++ ){
                countryList.innerHTML += `<option value="${i}">${countries[i].name}</option>`;
            }
        }
    }
}

export default handlers;