Vue.use(VueScrollTo, {
  container: "body",
  duration: 200,
  easing: "linear",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

var game = new Vue({
  el: '#game',
  template: `
    <div class="general" v-if="show">   

      <h1 class="title">{{nombre}} <span class="load" v-if="load"><i class="fas fa-circle-notch fa-spin"></i></span></h1>    
      <div class="info">{{info.slice(0,limit)}}<button v-if="info.length > limit" v-on:click="loadMore()" class="btn btn-sm btn-link">load more</button></div>       

      <hr class="my-3 mt-3">      

      <div class="input-group mb-3">
        <input v-model="term" type="text" class="form-control" placeholder="Link Search" v-on:keydown="filtrarLinks(term)">
        <!--<button class="btn btn-dark" type="button" v-on:click="filtrarLinks(term)"><i class="fas fa-search"></i></button>-->
        <!--<button class="btn btn-dark" type="button" v-on:click="filtrarLinks('')"><i class="fas fa-sync-alt"></i></button>-->
      </div>

      <div class="links"><ul><li v-for="link in links" v-on:click="buscar(link, leng)" v-scroll-to="'#top'">{{link}}</li></ul></div>

    </div>`,
  data: {
    nombre: '',
    info: '',
    links: '',
    linksBack: '',
    term: '',
    load: true,
    leng: "es",
    show: false,
    limit: '700'
  },
  created() {
    random(this.leng);
  }, methods: {
    buscar: function (termino, leng) {
      game.load = true;
      game.term = '';
      game.limit = '700'
      fetch(`https://wiki-hunt.herokuapp.com/api/buscar/${leng}/${termino}/${election.objective}`, {
        method: 'GET',
      }).then(response => {
        if (response.ok) {
          response.json().then(response => {
            console.log(response);
            game.nombre = response.nombre;
            game.info = response.info;
            game.links = response.links;
            game.linksBack = response.links;
            hilo.caminos.push(game.nombre)
            game.load = false;
          });
        }
      });
    },
    filtrarLinks: function (termino) {
      console.log(termino);
      if (termino == '') {
        game.term = '';
      }
      var temp = [];
      game.linksBack.forEach(element => {
        if (element.toLowerCase().includes(termino.toLowerCase())) {
          temp.push(element);
        }
      });
      game.links = temp;

    },
    loadMore: function(){
      game.limit = game.info.length;
      game.info = game.info;
    }
  }
})

function random(leng) {
  fetch(`https://wiki-hunt.herokuapp.com/api/random/${leng}`, {
    method: 'GET',
  }).then(response => {
    if (response.ok) {
      response.json().then(response => {
        console.log(response);
        game.nombre = response.nombre;
        game.info = response.info;
        game.links = response.links;
        game.linksBack = response.links;
        hilo.caminos.push(game.nombre)
        game.load = false;
      });
    }
  });
}