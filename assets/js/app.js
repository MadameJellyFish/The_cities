(function () {

    // name:'John',
    // init:function(){
    //     alert('hello');
    allCities = []

    // on fait une seul documentQuerySelector pour limiter la zone pour chercher que sera cities
    let cityList = document.querySelector('#cityList')
    let addCity = cityList.querySelector('.btn')
    let city = cityList.querySelector('#city')
    let cities = cityList.querySelector('#cities')

    // console.log(this.cityList);


    // function init() {
    //     addEvent();
    //     // this.render();
    // },

    // function addEvent() {
    // on rajoute bind pour que this fasse reference a l'objet cities, et poivour acceder
    // on crée une methode addCityToArray
    addCity.addEventListener('click', addCityToArray)
    cities.addEventListener('click', deleteCity)
    // }

    function addCityToArray() {
        // ajouter dans le tableau
        allCities.push(city.value);
        // on vide l'input apres d'avoir ajouté un élèment 
        city.value = '';
        // pour continuer avec le focus active sur l'input
        city.focus();
        // pour afficher les villes ajoutes je dois faire this.render()
        render();
    }

    function deleteCity(e) {

        if (e.target.classList.contains('del')) {
            // pour recuperer l'element innerText, innerHTML, a condition de ne pas avoir des elements à l'interieur
            let city = e.target.previousElementSibling.innerHTML;
            // prendre le tableau pour eliminer une information dedans, 
            // filter est un function qui return mois des donnes qui avait dans le tableau, function ville est un callback, le nouveau 
            allCities = allCities.filter(function (ville) {
                return city !== ville;
            })
        }
        render();
    }

    // la fct rende permetre afficher les informations
    function render() {
        cities.innerHTML = '';
        // city est une variable, alors je ne met pas de this
        for (let city of allCities) {
            // on recupere le parent, innerHTML pour ajouter le spam
            cities.innerHTML += '<span class="badge badge text-bg-dark">' + city + '</span> <i class="del fa-solid fa-xmark"></i>';
        }
    }


    // cities();
})();