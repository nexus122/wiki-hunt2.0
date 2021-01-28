var game = new Vue({
  el: '#game',
  template: `
    <div class="general" v-if="show">            
      <!--<input v-model="term" type="text"><button v-on:click="buscar(term, leng)">Buscar</button>-->
      <h1 class="title">{{nombre}} <span class="load" v-if="load"><i class="fas fa-circle-notch fa-spin"></i></span></h1>    
      <div class="info">{{info}}</div>      
      <hr class="my-3 mt-3">
      <div class="links"><ul><li v-for="link in links" v-on:click="buscar(link, leng)">{{link}}</li></ul></div>
    </div>`,
  data: {
    nombre: '',
    info: '',
    links: '',
    term:'',
    load: true,
    leng: "es",
    show: false,
    url: 'https://wiki-hunt.herokuapp.com'    
  },
  created() {
    random(this.leng);
  },methods: {
    buscar: function (termino, leng) {
      game.load = true;
      fetch(`${url}/api/buscar/${leng}/${termino}/${election.objective}`, {
        method: 'GET',
      }).then(response => {
        if (response.ok) {
          response.json().then(response => {
            console.log(response);
            game.nombre = response.nombre;
            game.info = response.info;
            game.links = response.links;
            hilo.caminos.push(game.nombre)
            game.load = false;
          });
        }
      });
    }
  }
})

function random(leng) {  
  fetch(`${url}/api/random/${leng}`, {
    method: 'GET',
  }).then(response => {
    if (response.ok) {
      response.json().then(response => {
        console.log(response);
        game.nombre = response.nombre;
        game.info = response.info;
        game.links = response.links;
        hilo.caminos.push(game.nombre)
        game.load = false;
      });
    }
  });
}