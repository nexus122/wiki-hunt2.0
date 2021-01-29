var hunting = new Vue({
    el: '#objectivePanel',
    template: `
    <h1 v-if="objective != ''" class="title text-center">{{objective}} 🎯</h1>
`,
    data: {
        objective: ''        
    }
})


