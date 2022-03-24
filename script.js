console.log('JS VUE OK!');





//Stampare a schermo un messaggio all’interno di un h1, utilizzando i data


const app = new Vue (
    {
    el: '#root',
    data: {
        titolo: 'Hello World!',
        paragrafo: 'La prima prova con VUE JS',
        mieClassi: 'text-property',
    }
    }
);