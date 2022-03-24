console.log('JS VUE OK!');





//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data
//Aggiungere alla pagina un’immagine, presa anch’essa da un data. 

const app = new Vue (
    {
    el: '#root',
    data: {
        titolo: 'Boolean #57',
        sottotitolo: 'Emanuela Cifolelli',
        paragrafo: 'La prima prova con VUE JS',
        textProperty: 'text-property',
        textPropertySottotitolo: 'text-propriety-sottotitolo',
        image: 'https://michelenasti.com/images/vuejs.png'
    }
    }
);


