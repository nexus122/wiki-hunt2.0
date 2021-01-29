var hunting = new Vue({
    el: '#objectivePanel',
    template: `
    <h1 v-if="objective != ''" class="title text-center">{{phrase}} {{objective}}</h1>
`,
    data: {
        objective: '',
        phrase: 'Estas Buscando a'        
    }
})


