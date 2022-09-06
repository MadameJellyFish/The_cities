(function () {
    const cities = {
        // name:'John',
        // init:function(){
        //     alert('hello');
        allCities: [],
        getDom: function () {
            // on fait une seul documentQuerySelector pour limiter la zone pour chercher que sera cities
            this.cityList = document.querySelector('#cityList')
            this.addCity = this.cityList.querySelector('.btn')
            this.city = this.cityList.querySelector('#city')
            this.cities = this.cityList.querySelector('#cities')

            // console.log(this.cityList);
        },

        init: function () {
            this.getDom();
            this.addEvent();
            // this.render();
        },

        addEvent: function () {
            // on rajoute bind pour que this fasse reference a l'objet cities, et poivour acceder
            // on crée une methode addCityToArray
            this.addCity.addEventListener('click', this.addCityToArray.bind(this))
            this.cities.addEventListener('click', this.deleteCity.bind(this))
        },

        addCityToArray: function () {
            // ajouter dans le tableau
            this.allCities.push(this.city.value);
            // on vide l'input apres d'avoir ajouté un élèment 
            this.city.value = '';
            // pour continuer avec le focus active sur l'input
            this.city.focus();
            // pour afficher les villes ajoutes je dois faire this.render()
            this.render();
        },

        deleteCity: function (e) {
            console.log(e)
            if (e.target.classList.contains('del')) {
                // pour recuperer l'element innerText, innerHTML, a condition de ne pas avoir des elements à l'interieur
                let city = e.target.previousElementSibling.innerHTML;
                console.log(city)
                

            }
        },

        // la fct rende permetre afficher les informations
        render: function () {
            this.cities.innerHTML = '';
            // city est une variable, alors je ne met pas de this
            for (let city of this.allCities) {
                // on recupere le parent, innerHTML pour ajouter le spam
                this.cities.innerHTML += '<span class="badge text-bg-light">' + city + '</span><i class="del fas-solid fa-x"> x </i>';
            }
        }
    }

    cities.init();
})();