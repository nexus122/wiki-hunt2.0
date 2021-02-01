var footer = new Vue({
    el: '#footerInfo',
    template: `
    <footer class="footer">
      <div class="container">
        <span class="text-white align-right">
            <a class="btn btn-dark" target="_blank" v-bind:href="linkedin"><i class="fab fa-linkedin-in"></i></a>
            <a class="btn btn-dark" target="_blank" v-bind:href="codepen"><i class="fab fa-codepen"></i></i></a>
            <a class="btn btn-dark" target="_blank" v-bind:href="twitter"><i class="fab fa-twitter"></i></a>
            <a class="btn btn-dark" target="_blank" v-bind:href="wordpress"><i class="fab fa-wordpress"></i></a>
            <br>
            ©{{autor}} {{year}}            
        </span>
      </div>
    </footer>
`,
    data: {
        autor: "Jromero",
        year: "2021",
        linkedin: "https://www.linkedin.com/in/lord-juan-pablo-romero-pereira-de-sealand-523996101/",
        codepen: "https://codepen.io/Nexus122",
        twitter: "https://twitter.com/Necros122",        
        wordpress: "https://pandemoniumsingluten.com"
    }
})


