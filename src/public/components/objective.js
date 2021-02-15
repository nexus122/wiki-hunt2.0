var hunting = new Vue({
    el: '#objectivePanel',
    template: `
    <h1 v-if="objective != ''" class="title text-center">{{phrase[leng]}} {{objective}}</h1>
`,
    data: {
        objective: '',
        leng: ``,
        phrase: {es:'Estas Buscando a',en:'You are looking for'}        
    }
})
