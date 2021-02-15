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
  

const election = new Vue({
    el: '#election',
    template: `
    <div class="pt-5 pb-5" v-if="loadGame">    
    <h1 class="title" v-html="idiomas.titulo[leng]"></h1>
    <h2 v-html="idiomas.subtitulo[leng]"></h2>
    <hr class="mt-5 mb-5">
    <h3 class="title mt-3" v-html="idiomas.objetivo[leng]">¿Quien será tu objetivo?</h3>
        <div class="input-group mb-3">
            <input v-model="objective" type="text" class="form-control" placeholder="ej: Freddie Mercury">
            <button v-scroll-to="'#top'" class="btn btn-dark" type="button" v-on:click="show(objective)">Jugar</button>
        </div>   

        <h3 class="title mt-5"> Para los indecisos hemos creado una lista</h3>
        <div class="contenedor">
        <div class="general mt-2" v-for="personaje in personajes">                                    
            <div class="row">
                    <div class="col col-12 col-sm-2">
                        <img v-bind:src="personaje.img" v-bind:alt="personaje.nombre" style="width: 100%">
                    </div>
                    <div class="col">
                    <h1 class="title">{{personaje.nombre}} <span class="load" v-if="load"><i class="fas fa-circle-notch fa-spin"></i></span></h1> 
                        <!--<div class="d-inline"><span v-for="categoria in personaje.categorias" class="badge rounded-pill bg-dark" style="margin-right: 1em;">{{categoria}}</span></div>-->
                        <div class="info mt-2">{{personaje.info.slice(0,400)}}...</div>                                      
                        <button v-scroll-to="'#top'" class="btn btn-dark d-block mt-3" v-on:click="show(personaje.nombre)">Jugar</button>                                
                    </div>
                </div>               
            </div>   
        </div>     
    </div>
`,
    data: {
        personajes: [
            {
                nombre: "Albert Einstein",
                info: "Albert Einstein (alemán: /ˈalbɛɐ̯t ˈʔaɪnʃtaɪn/; Ulm, Imperio alemán; 14 de marzo de 1879 - Princeton, Estados Unidos; 18 de abril de 1955) fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se le considera el científico más importante, conocido y popular del siglo XX.[1]​[2]​\nEn 1905, cuando era un joven físico desconocido, empleado en la Oficina de Patentes de Berna, publicó su teoría de la relatividad especial. En ella incorporó, en un marco teórico simple fundamentado en postulados físicos sencillos, conceptos y fenómenos estudiados antes por Henri Poincaré y por Hendrik Lorentz. Como una consecuencia lógica de esta teoría, dedujo la ecuación de la física más conocida a nivel popular: la equivalencia masa-energía, E=mc². Ese año publicó otros trabajos que sentarían algunas de las bases de la física estadística y de la mecánica cuántica.\nEn 1915, presentó la teoría de la relatividad general, en la que reformuló por completo el concepto de la gravedad.[3]​ Una de las consecuencias fue el surgimiento del estudio científico del origen y la evolución del Universo por la rama de la física denominada cosmología. En 1919, cuando las observaciones británicas de un eclipse solar confirmaron sus predicciones acerca de la curvatura de la luz, fue idolatrado por la prensa.[4]​ Einstein se convirtió en un icono popular de la ciencia mundialmente famoso, un privilegio al alcance de muy pocos científicos.[5]​\nPor sus explicaciones sobre el efecto fotoeléctrico y sus numerosas contribuciones a la física teórica, en 1921 obtuvo el Premio Nobel de Física y no por la Teoría de la Relatividad, pues el científico a quien se encomendó la tarea de evaluarla no la entendió, y temieron correr el riesgo de que luego se demostrase errónea.[6]​[7]​ En esa época era aún considerada un tanto controvertida.\nAnte el ascenso del nazismo, Einstein abandonó Alemania hacia diciembre de 1932 con destino a Estados Unidos, donde se dedicó a la docencia en el Institute for Advanced Study. Se nacionalizó estadounidense en 1940. Durante sus últimos años trabajó por integrar en una misma teoría la fuerza gravitatoria y la electromagnética.\nAunque es considerado por algunos como el «padre de la bomba atómica», abogó por el federalismo mundial, el internacionalismo, el pacifismo, el sionismo y el socialismo democrático, con una fuerte devoción por la libertad individual y la libertad de expresión.[8]​[9]​[10]​[11]​ Fue proclamado «personaje del siglo XX» y el más preeminente científico por la revista Time.[12]​",
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg",
                categorias: ["científico"],
                dificultad: 2    
            },
            {
                nombre: "Adolf Hitler",
                info: "Adolf Hitler, llamado también Adolfo Hitler[1]​ en algunos países hispanos (Braunau am Inn; 20 de abril de 1889 - Berlín; 30 de abril de 1945), fue un político, militar y dictador alemán de origen austrohúngaro. Canciller imperial desde 1933 y Führer —líder— de Alemania desde 1934 hasta su muerte, llevó al poder al Partido Nacionalsocialista Obrero Alemán o Partido Nazi,[b]​ estableciendo un régimen totalitario durante el período conocido como Tercer Reich o Alemania nazi.[2]​ Inició la Segunda Guerra Mundial al invadir Polonia el 1 de septiembre de 1939 y es una figura clave en la perpetración del Holocausto.[3]​\nHitler se afilió al Partido Obrero Alemán, precursor del Partido Nazi, en 1919, y se convirtió en su líder en 1921. En 1923, tras el pronunciamiento en la cervecería Bürgerbräukeller de Múnich, Hitler intentó tomar el poder mediante un golpe de Estado fallido por el que fue condenado a cinco años de prisión.[4]​ Durante su estancia en la cárcel redactó la primera parte de su libro Mi lucha (en alemán, Mein Kampf), en el que expone su ideología junto con elementos autobiográficos. Liberado ocho meses después, en 1924, Hitler obtuvo creciente apoyo popular mediante la exaltación del pangermanismo, el antisemitismo y el anticomunismo, sirviéndose de su talento oratorio apoyado por la eficiente propaganda nazi y las concentraciones de masas cargadas de simbolismo.\nFue nombrado canciller imperial (Reichskanzler) en enero de 1933 y, un año después, a la muerte del presidente Paul von Hindenburg, se autoproclamó líder y canciller imperial (Führer und Reichskanzler), asumiendo así el mando supremo del Estado germano. Transformó la República de Weimar en el Tercer Reich y gobernó con un partido único basado en el totalitarismo y la autocracia de la ideología nazi.\nEl objetivo de Hitler era establecer un Nuevo Orden basado en la absoluta hegemonía de la Alemania nazi en el continente europeo. Su política exterior e interior tenía el objetivo de apoderarse de Lebensraum (‘espacio vital’) para los pueblos germánicos. Promovió el rearme de Alemania y tras la invasión de Polonia por la Wehrmacht el 1 de septiembre de 1939, se inició la Segunda Guerra Mundial. Con estos actos, Hitler violó el Tratado de Versalles de 1919, que establecía las condiciones de la paz tras la Primera Guerra Mundial.[5]​\nBajo la dirección de Hitler, las fuerzas alemanas y sus aliados ocuparon en 1941 la mayor parte de Europa y África del Norte. Esas conquistas territoriales decrecieron paulatinamente después de la batalla de Stalingrado, hasta 1945, cuando los ejércitos aliados derrotaron al ejército alemán. Por motivos raciales, Hitler causó la muerte de diecisiete millones de personas,[6]​ incluyendo una cifra en torno a seis millones de judíos[7]​ y entre medio y millón y medio de gitanos, en lo que posteriormente se denominó «Holocausto».[8]​\nEn los últimos días de la guerra, durante la batalla de Berlín en 1945, Hitler se casó con su antigua amante, Eva Braun. El 30 de abril de 1945 los dos se suicidaron en el búnker de la Cancillería, para evitar ser capturados por el Ejército Rojo. Posteriormente, sus cadáveres fueron quemados.[9]",
                img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg",
                categorias: ["político","histórico","artista"],
                dificultad: 1    
            },
            {
                nombre: "Blas de Lezo",
                info: "Blas de Lezo y Olavarrieta (Pasajes, Guipúzcoa, 3 de febrero de 1689-Cartagena de Indias, Nueva Granada, 7 de septiembre de 1741) fue un almirante español —conocido por la singular estampa que le dieron sus numerosas heridas de guerra (un ojo tuerto, un brazo inmovilizado y una pierna arrancada)—,[1]​[nota 2]​ considerado uno de los mejores estrategas de la historia de la Armada Española[2]​ y conocido por dirigir, junto con el virrey Sebastián de Eslava, la defensa de Cartagena de Indias durante el asedio británico de 1741.",
                img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Don_Blas_de_Lezo_-Museo_Naval-.jpg",
                categorias: ["político","histórico","estratega militar"],
                dificultad: 5    
            },
            {
                nombre: "RuPaul",
                info:`RuPaul Andre Charles (San Diego, California; 17 de noviembre de 1960), más conocido como RuPaul, es un drag queen, modelo, actor, cantante, compositor y presentador estadounidense. Desde 2009 ha producido y presentado el programa de telerrealidad llamado RuPaul's Drag Race por el cual recibió premios Primetime Emmy en 2016, 2017, 2018, 2019 y 2020. Es considerado el Drag Queen más exitoso en la historia de Estados Unidos.`,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/RuPaul_at_Dragcon_by_dvsross_%28cropped%29.jpg/220px-RuPaul_at_Dragcon_by_dvsross_%28cropped%29.jpg',
                categorias: ["drag queen","artista","transformista","cantante"],
                dificultad: 4
            },
            {
                nombre: "Morgan Freeman",
                info:`Morgan Freeman​ (Memphis, 1 de junio de 1937) es un actor y director estadounidense, ganador del premio Óscar en 2005 por Million Dollar Baby. Además ha recibido otras nominaciones por sus actuaciones en El reportero de la calle 42 (1987), Paseando a Miss Daisy (1989), Cadena perpetua (1994) e Invictus (2009). También ha ganado los premios Globo de Oro y SAG.Su extensa carrera incluye otros éxitos de taquilla como Brubaker (1980), Sin perdón (1992), Tiempos de gloria (1989), Seven (1995), Deep Impact (1998), Pánico nuclear (2002), Bruce Almighty (2003), The Bucket List (2007), Wanted (2008), tres entregas de la saga de Batman (Batman Begins, 2005; The Dark Knight, 2008 y The Dark Knight Rises, 2012), Lucy (2014) y la comedia Ted 2 (2015). También se le recuerda como narrador de la serie documental de televisión Through the Wormhole.`,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Academy_Award-winning_actor_Morgan_Freeman_narrates_for_the_opening_ceremony_%2826904746425%29_%28cropped%29.jpg/220px-Academy_Award-winning_actor_Morgan_Freeman_narrates_for_the_opening_ceremony_%2826904746425%29_%28cropped%29.jpg',
                categorias: ["actor"],
                dificultad: 4
            },
            {
                nombre: "Donald Trump",
                info:`Donald John Trump Nueva York, 14 de junio de 1946 es un magnate, empresario, director ejecutivo, inversor en bienes raíces, personalidad televisiva y político estadounidense que ejerció como el 45.º presidente de los Estados Unidos de América desde el 20 de enero de 2017 hasta el 20 de enero de 2021.2​`,
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg',
                categorias: ["presidente","historico"],
                dificultad: 1
            }
        ],
        loadGame: true,
        objective: ``,
        leng: `en`,
        idiomas:{
            titulo: {es:`¿Serías capaz de encontrar a <u>Adolf Hitler</u> desde <u>un tiesto de petunias</u>?`, en: `Would you be able to find <u>Adolf Hitler</u> from <u>a pot of petunias</u>?` },
            subtitulo: {es:`Elige tu objetivo, y el azar decidirá desde donde tienes que buscarlo, encuéntralo en el menor número de pasos posibles y reta a tus amigos 😉`, en: `Choose your target, and chance will decide from where you have to look for it, find it in as few steps as possible and challenge your friends 😉.`},
            objetivo: {es: `¿Quien será tu objetivo?`, en: `Who will be your target?`} ,
            instruction1: {es: `Para los indecisos hemos creado una lista`, en: `For the undecided we have created a list` }
        }
    },methods: {
        show: function (nombre) {
            window.scrollTo(0, 0);
            console.log("Nombre: ", nombre);
            election.loadGame = false;
            election.objective = nombre;  
            hunting.objective = nombre;
            game.show = true;
            hilo.show = true;          
        }
      }
})

