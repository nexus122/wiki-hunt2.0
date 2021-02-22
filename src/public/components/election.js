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
    
    <div class="btn-group mb-3" role="group" aria-label="Basic example">
        <button type="button" class="en btn btn-dark" v-on:click="leng='en'; lengEn()">English</button>        
        <button type="button" class="es btn btn-secondary" v-on:click="leng='es'; lengEs()">Español</button>        
    </div>
    
    <h1 class="title" v-html="idiomas.titulo[leng]"></h1>
    <h2 v-html="idiomas.subtitulo[leng]"></h2>
    <hr class="mt-5 mb-5">
    <h3 class="title mt-3" v-html="idiomas.objetivo[leng]"></h3>
        <div class="input-group mb-3">
            <input v-model="objective" type="text" class="form-control" placeholder="ej: Freddie Mercury">
            <button v-scroll-to="'#top'" class="btn btn-dark" type="button" v-on:click="show(objective)">{{idiomas.jugar[leng]}}</button>
        </div>   

        <h3 class="title mt-5" v-html="idiomas.instruction1[leng]"></h3>
        <div class="contenedor">
        <div class="general mt-2" v-for="personaje in personajes">                                    
            <div class="row">
                    <div class="col col-12 col-sm-2">
                        <img v-bind:src="personaje.img" v-bind:alt="personaje.nombre" style="width: 100%">
                    </div>
                    <div class="col">
                    <h1 class="title">{{personaje.nombre}} <span class="load" v-if="load"><i class="fas fa-circle-notch fa-spin"></i></span></h1> 
                        <!--<div class="d-inline"><span v-for="categoria in personaje.categorias" class="badge rounded-pill bg-dark" style="margin-right: 1em;">{{categoria}}</span></div>-->
                        <div class="info mt-2">{{personaje.info[leng].slice(0,400)}}...</div>                                      
                        <button v-scroll-to="'#top'" class="btn btn-dark d-block mt-3" v-on:click="show(personaje.nombre)">{{idiomas.jugar[leng]}}</button>                                
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
                info: {es: "Albert Einstein (alemán: /ˈalbɛɐ̯t ˈʔaɪnʃtaɪn/; Ulm, Imperio alemán; 14 de marzo de 1879 - Princeton, Estados Unidos; 18 de abril de 1955) fue un físico alemán de origen judío, nacionalizado después suizo, austriaco y estadounidense. Se le considera el científico más importante, conocido y popular del siglo XX.[1]​[2]​\nEn 1905, cuando era un joven físico desconocido, empleado en la Oficina de Patentes de Berna, publicó su teoría de la relatividad especial. En ella incorporó, en un marco teórico simple fundamentado en postulados físicos sencillos, conceptos y fenómenos estudiados antes por Henri Poincaré y por Hendrik Lorentz. Como una consecuencia lógica de esta teoría, dedujo la ecuación de la física más conocida a nivel popular: la equivalencia masa-energía, E=mc². Ese año publicó otros trabajos que sentarían algunas de las bases de la física estadística y de la mecánica cuántica.\nEn 1915, presentó la teoría de la relatividad general, en la que reformuló por completo el concepto de la gravedad.[3]​ Una de las consecuencias fue el surgimiento del estudio científico del origen y la evolución del Universo por la rama de la física denominada cosmología. En 1919, cuando las observaciones británicas de un eclipse solar confirmaron sus predicciones acerca de la curvatura de la luz, fue idolatrado por la prensa.[4]​ Einstein se convirtió en un icono popular de la ciencia mundialmente famoso, un privilegio al alcance de muy pocos científicos.[5]​\nPor sus explicaciones sobre el efecto fotoeléctrico y sus numerosas contribuciones a la física teórica, en 1921 obtuvo el Premio Nobel de Física y no por la Teoría de la Relatividad, pues el científico a quien se encomendó la tarea de evaluarla no la entendió, y temieron correr el riesgo de que luego se demostrase errónea.[6]​[7]​ En esa época era aún considerada un tanto controvertida.\nAnte el ascenso del nazismo, Einstein abandonó Alemania hacia diciembre de 1932 con destino a Estados Unidos, donde se dedicó a la docencia en el Institute for Advanced Study. Se nacionalizó estadounidense en 1940. Durante sus últimos años trabajó por integrar en una misma teoría la fuerza gravitatoria y la electromagnética.\nAunque es considerado por algunos como el «padre de la bomba atómica», abogó por el federalismo mundial, el internacionalismo, el pacifismo, el sionismo y el socialismo democrático, con una fuerte devoción por la libertad individual y la libertad de expresión.[8]​[9]​[10]​[11]​ Fue proclamado «personaje del siglo XX» y el más preeminente científico por la revista Time.[12]​", en: `Albert Einstein (German: /ˈalbɛɐ̯t ˈʔaɪnʃtaɪn/; Ulm, German Empire; March 14, 1879 - Princeton, United States; April 18, 1955) was a German physicist of Jewish origin, later naturalized Swiss, Austrian and American. He is considered the most important, well-known and popular scientist of the 20th century.[1][2]In 1905, as a young, unknown physicist employed at the Bern Patent Office, he published his theory of special relativity. In it he incorporated, in a simple theoretical framework based on simple physical postulates, concepts and phenomena studied earlier by Henri Poincaré and Hendrik Lorentz. As a logical consequence of this theory, he derived the most popularly known equation of physics: the mass-energy equivalence, E=mc². In 1915, he presented the theory of general relativity, in which he completely reformulated the concept of gravity.[3] One of the consequences was the emergence of the scientific study of the origin and evolution of the Universe by the branch of physics called cosmology. In 1919, when British observations of a solar eclipse confirmed his predictions about the curvature of light, he was idolized by the press.[4] Einstein became a world-famous popular icon of science, a privilege available to very few scientists. [5] For his explanations of the photoelectric effect and his numerous contributions to theoretical physics, he won the Nobel Prize in Physics in 1921, but not for the Theory of Relativity, because the scientist entrusted with the task of evaluating it did not understand it, and they were afraid of running the risk that it would later be proved wrong. 6][7] At that time it was still considered somewhat controversial. Before the rise of Nazism, Einstein left Germany around December 1932 for the United States, where he taught at the Institute for Advanced Study. He became a naturalized American citizen in 1940. During his later years he worked to integrate gravitational and electromagnetic forces into a single theory. Although considered by some as the "father of the atomic bomb", he advocated world federalism, internationalism, pacifism, Zionism and democratic socialism, with a strong devotion to individual liberty and freedom of expression.[8][9][10][11] He was proclaimed "figure of the 20th century" and the most preeminent scientist by Time magazine.[12]`},                
                img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Albert_Einstein_Head.jpg/800px-Albert_Einstein_Head.jpg",
                categorias: ["científico"],
                dificultad: 2    
            },
            {
                nombre: "Adolf Hitler",
                info: {es: "Adolf Hitler, llamado también Adolfo Hitler[1]​ en algunos países hispanos (Braunau am Inn; 20 de abril de 1889 - Berlín; 30 de abril de 1945), fue un político, militar y dictador alemán de origen austrohúngaro. Canciller imperial desde 1933 y Führer —líder— de Alemania desde 1934 hasta su muerte, llevó al poder al Partido Nacionalsocialista Obrero Alemán o Partido Nazi,[b]​ estableciendo un régimen totalitario durante el período conocido como Tercer Reich o Alemania nazi.[2]​ Inició la Segunda Guerra Mundial al invadir Polonia el 1 de septiembre de 1939 y es una figura clave en la perpetración del Holocausto.[3]​\nHitler se afilió al Partido Obrero Alemán, precursor del Partido Nazi, en 1919, y se convirtió en su líder en 1921. En 1923, tras el pronunciamiento en la cervecería Bürgerbräukeller de Múnich, Hitler intentó tomar el poder mediante un golpe de Estado fallido por el que fue condenado a cinco años de prisión.[4]​ Durante su estancia en la cárcel redactó la primera parte de su libro Mi lucha (en alemán, Mein Kampf), en el que expone su ideología junto con elementos autobiográficos. Liberado ocho meses después, en 1924, Hitler obtuvo creciente apoyo popular mediante la exaltación del pangermanismo, el antisemitismo y el anticomunismo, sirviéndose de su talento oratorio apoyado por la eficiente propaganda nazi y las concentraciones de masas cargadas de simbolismo.\nFue nombrado canciller imperial (Reichskanzler) en enero de 1933 y, un año después, a la muerte del presidente Paul von Hindenburg, se autoproclamó líder y canciller imperial (Führer und Reichskanzler), asumiendo así el mando supremo del Estado germano. Transformó la República de Weimar en el Tercer Reich y gobernó con un partido único basado en el totalitarismo y la autocracia de la ideología nazi.\nEl objetivo de Hitler era establecer un Nuevo Orden basado en la absoluta hegemonía de la Alemania nazi en el continente europeo. Su política exterior e interior tenía el objetivo de apoderarse de Lebensraum (‘espacio vital’) para los pueblos germánicos. Promovió el rearme de Alemania y tras la invasión de Polonia por la Wehrmacht el 1 de septiembre de 1939, se inició la Segunda Guerra Mundial. Con estos actos, Hitler violó el Tratado de Versalles de 1919, que establecía las condiciones de la paz tras la Primera Guerra Mundial.[5]​\nBajo la dirección de Hitler, las fuerzas alemanas y sus aliados ocuparon en 1941 la mayor parte de Europa y África del Norte. Esas conquistas territoriales decrecieron paulatinamente después de la batalla de Stalingrado, hasta 1945, cuando los ejércitos aliados derrotaron al ejército alemán. Por motivos raciales, Hitler causó la muerte de diecisiete millones de personas,[6]​ incluyendo una cifra en torno a seis millones de judíos[7]​ y entre medio y millón y medio de gitanos, en lo que posteriormente se denominó «Holocausto».[8]​\nEn los últimos días de la guerra, durante la batalla de Berlín en 1945, Hitler se casó con su antigua amante, Eva Braun. El 30 de abril de 1945 los dos se suicidaron en el búnker de la Cancillería, para evitar ser capturados por el Ejército Rojo. Posteriormente, sus cadáveres fueron quemados.[9]", en:`Adolf Hitler, also called Adolf Hitler[1] in some Hispanic countries (Braunau am Inn; April 20, 1889 - Berlin; April 30, 1945), was a German politician, military and dictator of Austro-Hungarian origin. Imperial Chancellor from 1933 and Führer -leader- of Germany from 1934 until his death, he led the National Socialist German Workers' Party or Nazi Party to power,[b] establishing a totalitarian regime during the period known as the Third Reich or Nazi Germany. 2] He initiated World War II by invading Poland on September 1, 1939, and is a key figure in the perpetration of the Holocaust.[3] Hitler joined the German Workers' Party, the forerunner of the Nazi Party, in 1919, and became its leader in 1921. In 1923, after the uprising at the Bürgerbräukeller brewery in Munich, Hitler attempted to seize power in a failed coup for which he was sentenced to five years in prison.[4] While in prison he wrote the first part of his book My Struggle (in German, Mein Kampf), in which he sets out his ideology along with autobiographical elements. Released eight months later, in 1924, Hitler gained growing popular support through the exaltation of pan-Germanism, anti-Semitism and anti-Communism, using his oratorical talent supported by efficient Nazi propaganda and symbolically charged mass rallies. \He was appointed Imperial Chancellor (Reichskanzler) in January 1933 and, a year later, upon the death of President Paul von Hindenburg, he proclaimed himself Imperial Leader and Chancellor (Führer und Reichskanzler), thus assuming supreme command of the German state. He transformed the Weimar Republic into the Third Reich and ruled with a single party based on the totalitarianism and autocracy of Nazi ideology. Hitler's aim was to establish a New Order based on the absolute hegemony of Nazi Germany on the European continent. His foreign and domestic policies were aimed at seizing Lebensraum ('living space') for the Germanic peoples. He promoted the rearmament of Germany and after the invasion of Poland by the Wehrmacht on September 1, 1939, World War II began. By these actions, Hitler violated the 1919 Treaty of Versailles, which established the terms of peace after World War I.[5] Under Hitler's leadership, German forces and their allies occupied most of Europe and North Africa in 1941. These territorial gains gradually declined after the Battle of Stalingrad until 1945, when the Allied armies defeated the German army. Hitler caused the racially motivated deaths of seventeen million people,[6] including an estimated six million Jews[7] and between half a million and a million and a half Gypsies, in what later became known as the "Holocaust".[8] In the last days of the war, during the Battle of Berlin in 1945, Hitler married his former mistress, Eva Braun. On April 30, 1945, the two committed suicide in the Chancellery bunker to avoid capture by the Red Army. Their corpses were subsequently burned.[9] The two men were killed.`},
                img: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Bundesarchiv_Bild_183-H1216-0500-002%2C_Adolf_Hitler.jpg",
                categorias: ["político","histórico","artista"],
                dificultad: 1    
            },
            {
                nombre: "Blas de Lezo",
                info: {es:"Blas de Lezo y Olavarrieta (Pasajes, Guipúzcoa, 3 de febrero de 1689-Cartagena de Indias, Nueva Granada, 7 de septiembre de 1741) fue un almirante español —conocido por la singular estampa que le dieron sus numerosas heridas de guerra (un ojo tuerto, un brazo inmovilizado y una pierna arrancada)—,[1]​[nota 2]​ considerado uno de los mejores estrategas de la historia de la Armada Española[2]​ y conocido por dirigir, junto con el virrey Sebastián de Eslava, la defensa de Cartagena de Indias durante el asedio británico de 1741.",en:`Blas de Lezo y Olavarrieta (Pasajes, Guipúzcoa, February 3, 1689-Cartagena de Indias, New Granada, September 7, 1741) was a Spanish admiral -known for the singular stamp given to him by his numerous war wounds (a one-eyed, one arm immobilized and one leg torn off),[1][note 2] considered one of the best strategists in the history of the Spanish Navy[2] and known for leading, together with Viceroy Sebastián de Eslava, the defense of Cartagena de Indias during the British siege of 1741.`},
                img: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Don_Blas_de_Lezo_-Museo_Naval-.jpg",
                categorias: ["político","histórico","estratega militar"],
                dificultad: 5    
            },
            {
                nombre: "RuPaul",
                info:{es:`RuPaul Andre Charles (San Diego, California; 17 de noviembre de 1960), más conocido como RuPaul, es un drag queen, modelo, actor, cantante, compositor y presentador estadounidense. Desde 2009 ha producido y presentado el programa de telerrealidad llamado RuPaul's Drag Race por el cual recibió premios Primetime Emmy en 2016, 2017, 2018, 2019 y 2020. Es considerado el Drag Queen más exitoso en la historia de Estados Unidos.`, en:`RuPaul Andre Charles (San Diego, California; November 17, 1960), better known as RuPaul, is an American drag queen, model, actor, singer, songwriter and host. Since 2009 he has produced and hosted the reality show called RuPaul's Drag Race for which he received Primetime Emmy awards in 2016, 2017, 2018, 2019 and 2020. He is considered the most successful Drag Queen in the history of the United States.`},
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/RuPaul_at_Dragcon_by_dvsross_%28cropped%29.jpg/220px-RuPaul_at_Dragcon_by_dvsross_%28cropped%29.jpg',
                categorias: ["drag queen","artista","transformista","cantante"],
                dificultad: 4
            },
            {
                nombre: "Morgan Freeman",
                info:{es:`Morgan Freeman​ (Memphis, 1 de junio de 1937) es un actor y director estadounidense, ganador del premio Óscar en 2005 por Million Dollar Baby. Además ha recibido otras nominaciones por sus actuaciones en El reportero de la calle 42 (1987), Paseando a Miss Daisy (1989), Cadena perpetua (1994) e Invictus (2009). También ha ganado los premios Globo de Oro y SAG.Su extensa carrera incluye otros éxitos de taquilla como Brubaker (1980), Sin perdón (1992), Tiempos de gloria (1989), Seven (1995), Deep Impact (1998), Pánico nuclear (2002), Bruce Almighty (2003), The Bucket List (2007), Wanted (2008), tres entregas de la saga de Batman (Batman Begins, 2005; The Dark Knight, 2008 y The Dark Knight Rises, 2012), Lucy (2014) y la comedia Ted 2 (2015). También se le recuerda como narrador de la serie documental de televisión Through the Wormhole.`,en:`Morgan Freeman (Memphis, June 1, 1937) is an American actor and director, winner of the 2005 Academy Award for Million Dollar Baby. He has also received other nominations for his performances in The 42nd Street Reporter (1987), Strolling Miss Daisy (1989), Lifetime (1994) and Invictus (2009). He has also won Golden Globe and SAG awards. His extensive career includes other blockbusters such as Brubaker (1980), Unforgiven (1992), Glory Times (1989), Seven (1995), Deep Impact (1998), Nuclear Panic (2002), Bruce Almighty (2003), The Bucket List (2007), Wanted (2008), three installments of the Batman saga (Batman Begins, 2005; The Dark Knight, 2008 and The Dark Knight Rises, 2012), Lucy (2014) and the comedy Ted 2 (2015). He is also remembered as the narrator of the television documentary series Through the Wormhole.`},
                img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Academy_Award-winning_actor_Morgan_Freeman_narrates_for_the_opening_ceremony_%2826904746425%29_%28cropped%29.jpg/220px-Academy_Award-winning_actor_Morgan_Freeman_narrates_for_the_opening_ceremony_%2826904746425%29_%28cropped%29.jpg',
                categorias: ["actor"],
                dificultad: 4
            },
            {
                nombre: "Donald Trump",
                info:{es:`Donald John Trump Nueva York, 14 de junio de 1946 es un magnate, empresario, director ejecutivo, inversor en bienes raíces, personalidad televisiva y político estadounidense que ejerció como el 45.º presidente de los Estados Unidos de América desde el 20 de enero de 2017 hasta el 20 de enero de 2021.2​`,en:`Donald John Trump New York, June 14, 1946 is an American tycoon, businessman, CEO, real estate investor, television personality and politician who served as the 45th President of the United States of America from January 20, 2017 to January 20, 2021.2`},
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
            instruction1: {es: `Para los indecisos hemos creado una lista`, en: `For the undecided we have created a list` },
            jugar: {es:`Jugar`,en:`Play`}
        }
    },methods: {
        show: function (nombre) {
            window.scrollTo(0, 0);            

            election.loadGame = false;
            election.objective = nombre;

            hunting.leng = election.leng;    

            game.leng = election.leng;  
            hunting.objective = nombre;

            game.show = true;
            hilo.show = true;          
            random(this.leng);
        },
        lengEs(){
            $(".es").removeClass("btn-secondary").addClass("btn-dark");
            $(".en").removeClass("btn-dark").addClass("btn-secondary");
        },lengEn(){
            $(".en").removeClass("btn-secondary").addClass("btn-dark");
            $(".es").removeClass("btn-dark").addClass("btn-secondary");
        }
      }
})

