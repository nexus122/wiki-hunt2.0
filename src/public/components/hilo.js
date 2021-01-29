var hilo = new Vue({
    el: '#hilo',
    template: `
    <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" v-if="show">      
        <ol class="breadcrumb">
            <li><span class="badge badge-pill badge-dark" style="background-color: rgb(52, 58, 64); margin-right: 1em;">{{caminos.length}}</span></li>
            <li v-for="camino in caminos" class="breadcrumb-item"><a style="crusor:pointer" v-on:click="buscar(camino)">{{camino}}</a></li>            
        </ol>
    </nav>
`,
    data: {
        caminos: [],        
        show: false 
    },methods: {
        buscar: function (termino) {
          fetch("http://localhost:3000/api/buscar/"+leng+"/"+termino, {
            method: 'GET',
          }).then(response => {
            if (response.ok) {
              response.json().then(response => {
                console.log(response);
                game.nombre = response.nombre;
                game.info = response.info;
                game.links = response.links;
                game.img = response.img;
                hilo.caminos.push(game.nombre);              
              });
            }
          });
        }
      }
})


