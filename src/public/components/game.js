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
var finalNombre = '';
var finalPasos = '';
var WhatsappUrl = '';
var TwitterUrl = '';

var game = new Vue({
  el: '#game',
  template: `
    <div class="general" v-if="show">   

      <h1 class="title">{{nombre}} <span class="load" v-if="load"><i class="fas fa-circle-notch fa-spin"></i></span></h1>    
      <div class="info" v-if="!win">{{info.slice(0,limit)}}<button v-if="info.length > limit" v-on:click="loadMore()" class="btn btn-sm btn-link">load more</button></div>       

      <hr class="my-3 mt-3" v-if="!win">      

      <div class="input-group mb-3" v-if="!win">
        <input v-model="term" type="text" class="form-control" placeholder="Link Search" v-on:keydown="filtrarLinks(term)">
        <!--<button class="btn btn-dark" type="button" v-on:click="filtrarLinks(term)"><i class="fas fa-search"></i></button>-->
        <!--<button class="btn btn-dark" type="button" v-on:click="filtrarLinks('')"><i class="fas fa-sync-alt"></i></button>-->
      </div>

      <div v-if="!win" class="links"><ul><li v-for="link in links" v-on:click="buscar(link, leng)" v-scroll-to="'#top'">{{link}}</li></ul></div>

      <div v-if="win">
        <p class="title fs-3" v-html="idiomas.victoria[leng]"></p>
        <p class="fs-4">{{idiomas.reto[leng]}}</p>
          <a class="btn btn-success d-block mt-1" v-bind:href="WhatsappUrl[leng]" target="_blank">{{idiomas.whatsapp[leng]}} <i class="fab fa-whatsapp"></i></a>
          <a class="btn btn-primary d-block mt-1" v-bind:href="TwitterUrl[leng]" target="_blank">{{idiomas.twitter[leng]}} <i class="fab fa-twitter"></i></a>
          <a class="btn btn-dark d-block mt-1" href="https://wiki-hunt.herokuapp.com" >{{idiomas.replay[leng]}}</a>
      </div>
    </div>`,
  data: {
    nombre: '',
    info: '',
    links: '',
    linksBack: '',
    term: '',
    load: true,
    leng: "en",
    show: false,
    limit: '700',
    win: false,
    pasos: '',
    primero: '',
    WhatsappUrl: '',
    TwitterUrl,
    idiomas:{
      victoria: {},
      reto:{es:"Ayúdame a que este juego llegue a más gente retando a un amigo a hacerlo mejor que tu 😉", en:"Help me get this game to reach more people by challenging a friend to do better than you 😉"},
      whatsapp:{es:"Reta a tus amigos en", en: "Challenge your friends in"},
      twitter:{es:"Reta a tus amigos en " , en:"Challenge your friends in"},
      replay:{es:"Volver a Jugar" , en:"Back to Play"}
    }
  },
  created() {
    
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
            game.pasos = hilo.caminos.length - 1;
            game.load = false;            
            
            if (response.win == true) {
              game.win = true;
              finalNombre = game.nombre;
              finalPasos = game.pasos;
              TwitterUrl = {es:"https://twitter.com/intent/tweet?text=No%20hay%20huevos%20a%20encontrar%20a%20" + finalNombre + "%20en%20menos%20de%20" + finalPasos + "%20pasos%20&url=https://wiki-hunt.herokuapp.com&hashtags=WikiHunt,Wikipedia,Reto,Juego",en:"https://twitter.com/intent/tweet?text=No%20balls%20to%20find%20" + finalNombre + "%20in%20less%20than%20" + finalPasos + "%20steps%20&url=https://wiki-hunt.herokuapp.com&hashtags=WikiHunt,Wikipedia,challenge,game"};
              game.TwitterUrl = TwitterUrl;
              WhatsappUrl = {es:"https://api.whatsapp.com/send?text=No%20hay%20huevos%20a%20encontrar%20a%20*" + finalNombre + "*%20en%20menos%20de%20*" + finalPasos + "*%20pasos%20en%20*https://wiki-hunt.herokuapp.com*",en:`https://api.whatsapp.com/send?text=No%20balls%20to%20find%20*" + finalNombre + "*%20in%20less%20than%20*" + finalPasos + "*%20steps%20on%20*https://wiki-hunt.herokuapp.com*`};
              game.WhatsappUrl = WhatsappUrl;

              primero = game.primero; nombre = game.nombre; pasos = game.pasos;
              var victoria = {es:"Has conseguido llegar desde <u>"+primero+"</u> a <u>"+nombre+"</u> en solo <u>"+pasos+"</u> pasos !",en:"You have made it from <u>"+primero+"</u> to <u>"+nombre+"</u> in just <u>"+pasos+"</u> steps!</u>"};
              game.idiomas["victoria"] = victoria;         
            }
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
    loadMore: function () {
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
        game.primero = game.nombre;
        game.load = false;        
      });
    }
  });
}