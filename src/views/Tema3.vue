<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de Puesta a Tierra - SPAT

    .row.mb-4
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Sistema de Puesta a Tierra - SPAT] 
        figure
          img(src='@/assets/curso/tema3/img01.svg')
      .col-lg-6.d-flex
        .cajon.color-acento-botones.p-4   
          p.mb-0 Un Sistema de Puesta a Tierra - SPAT, es el conjunto de conductores, electrodos y compuestos químicos reductores de la resistividad volumétrica del suelo circundante al electrodo, que se instalan como medio de descarga a tierra de la energía transitoria asociada a sobretensiones provocadas en la red por impulsos atmosféricos (rayos) o por impulsos de maniobras de cierre y/o apertura de interruptores. Bajo este contexto y de acuerdo a la ley de Ohm, se deduce que un bajo valor de la resistencia de puesta a tierra es siempre deseable para disminuir la máxima elevación de potencial o GPR (Ground Potential Rise), en caso de circulación de corrientes de falla.

    .row.mb-5
      .col-lg-6.d-flex
        .cajon.color-primario.p-4 
          p.mb-0 El propósito de la instalación de este sistema es que los valores máximos de las tensiones de paso (diferencia de potencial que durante una falla se presenta entre dos puntos de la superficie del terreno, separados por una distancia de un paso), de contacto (diferencia de potencial que durante una falla se presenta entre una estructura metálica puesta a tierra y un punto de la superficie del terreno a una distancia de un metro) y transferida (es un caso especial de tensión de contacto, donde un potencial es conducido hasta un punto remoto respecto a la subestación o a una puesta a tierra) a que puedan estar sometidos los seres humanos, no superen los umbrales de soportabilidad.
      .col-lg-6
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Diferencia de potencial] 
        figure
          img(src='@/assets/curso/tema3/img02.svg')

    p.mb-4 La construcción de un SPAT para instalaciones de uso final incluye típicamente la instalación de:
      
    TabsA.color-acento-botones.mb-5    
      .tarjeta.t2_div3.p-4(titulo="Electrodo de puesta a tierra")
        h4 Electrodo de puesta a tierra
        p.mb-5 Es un objeto conductor de material y dimensiones acorde a la tabla 15.2 del RETIE, generalmente una varilla de ⅝`` de diámetro por 2,4 metros de longitud de cobre puro o de acero recubierto por una chaqueta de cobre que se entierra de manera vertical hasta que el extremo superior sobresalga 15 cm sobre el nivel del suelo.
        .row
          .col-lg-3
          .col-lg-6
            figure
              img(src='@/assets/curso/tema3/img03.png')
          .col-lg-3
      .tarjeta.t2_div3.p-4(titulo="Conexiones bajo nivel de suelo")
        h4 Conexiones bajo nivel de suelo
        .row.mb-5
          .col-lg-1
          .col-lg-10
            figure
              img(src='@/assets/curso/tema3/img04.png')
          .col-lg-1
        p Los puntos de unión entre los electrodos de puesta a tierra y los conductores de conexión equipotencial del SPAT deben realizarse con soldadura exotérmica o conector certificado para instalación bajo suelo según norma NTC 2206 y deben ser apropiados para el calibre del conductor de conexión equipotencial establecido en la tabla 250-94 de la NTC 2050.

      .tarjeta.t2_div3.p-4(titulo="Cajas de inspección")
        h4 Cajas de inspección
        .row.mb-5
          .col-lg-2
          .col-lg-8
            figure
              img(src='@/assets/curso/tema3/img05.png')            
          .col-lg-2
        p Con fines de verificación y medición de la resistencia de la puesta en tierra se instala en la parte superior de algunos electrodos del SPAT una caja cuadrada de concreto o PVC de 30 x 30 cm o una sección de tubo de gres vitrificado o PVC de 12`` de diámetro con tapa removible.
      .tarjeta.t2_div3.p-4(titulo="Tratamiento químico del suelo")
        h4 Tratamiento químico del suelo
        .row.mb-4
          .col-lg-2
          .col-lg-8
            figure
              img(src='@/assets/curso/tema3/img06.png')            
          .col-lg-2
        .row.mb-5
          .col-lg-2
          .col-lg-8
            figure
              img(src='@/assets/curso/tema3/img07.png')            
          .col-lg-2
        p Cuando la resistividad del terreno es muy alta, la cantidad de conductor de cobre enterrado se incrementa al igual que el número de electrodos. En estos casos puede instalarse un tratamiento químico al suelo circundante, a los electrodos y conductores equipotenciales del SPAT tales como sales electrolíticas o cementos conductivos con la finalidad de mejorar la resistividad del terreno.
      .tarjeta.t2_div3.p-4(titulo="Nomenclatura")
        h4 Nomenclatura
        p De acuerdo a la nomenclatura adoptada en la norma IEC 61364-4 los tipos de sistemas de puesta a tierra se identifican mediante un código de dos o tres letras, en donde la primera especifica la forma en que el conductor neutro de la fuente se conecta a tierra (T = conectado a tierra, I = no conectado a tierra o conectado a través de una alta impedancia) y la combinación de segunda y tercera especifican el punto de conexión del conductor de protección (PE = protective earth) de las partes metálicas de los equipos (T = conectado a tierra, N-S = conectado al neutro de la fuente, N-C = conectado al neutro del equipo).

    #t_3_1.titulo-segundo.color-acento-botones
      h2 3.1 SPAT tipo TT

    .row.mb-5
      .col-lg-6.d-flex
        .cajon.color-primario.p-4  
          p.mb-4 En este esquema de conexión, el neutro de la fuente y las partes metálicas de los equipos se conectan directamente a un SPAT diferente cada uno de ellos. En caso de presentarse falla a tierra, circula una corriente a través del terreno hasta el punto neutro de la fuente, originando una peligrosa diferencia de potencial entre los conductores de neutro y tierra, que requiere ser despejada automáticamente por acción de una protección diferencial que debe estar integrada al interruptor principal, provocando la desconexión de la fuente.
          p.mb-0 Teniendo en cuenta que según criterio de la norma IEC-61000-5-2 adoptado por el RETIE en el numeral 15.1, cuando en un lugar existan varias puestas a tierra, todas ellas deben estar interconectadas eléctricamente; el uso de este esquema de protección está permitido siempre y cuando se interconectan todos los conductores de protección de las partes metálicas en el lado de la carga.
      .col-lg-6.d-flex.align-items-center
        figure
          img(src='@/assets/curso/tema3/img08.svg')

    #t_3_2.titulo-segundo.color-acento-botones
      h2 3.2 SPAT tipo TN

    .row.mb-4
      .col-lg-1
      .col-lg-10
        .cajon.color-primario.p-5
          p.mb-4 En este esquema de conexión, el neutro de la fuente se conecta directamente a un SPAT y las partes metálicas de los equipos se conectan directamente al neutro de la red, ya sea en el lado de los equipos (TN-C) o en el lado de la fuente (TN-S), en cuyo caso aparece un nuevo conductor (PE) que agrupa cada uno los conductores de protección de las partes metálicas de los equipos, con el neutro del sistema en el lado de la fuente.
          p.mb-0 El esquema TN-C tiene la desventaja de requerir el cálculo de la protección diferencial de forma individual para cada equipo y las ventajas de usar solo un SPAT y de no necesitar la protección diferencial, ya que la diferencia de potencial entre neutro y tierra es virtualmente cero. Aunque por estas razones su uso es apropiado para la conexión temporal de equipos únicos, el RETIE en el numeral 27.2 prohíbe expresamente el uso de esquemas de conexión que combinen en un solo conductor las funciones de neutro y tierra.
      .col-lg-1

    .row.mb-4
      .col-lg-2
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/img09.svg')
      .col-lg-2

    p.mb-5.px-5.mx-5 El esquema TN-S tiene la desventaja de requerir un conductor adicional y las ventajas de usar solo un SPAT y de no necesitar la protección diferencial, ya que la diferencia de potencial entre neutro y tierra será virtualmente cero. Por estas razones es el de mayor uso en Colombia.

    .row.mb-5
      .col-lg-2
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/img10.svg')
      .col-lg-2

    #t_3_3.titulo-segundo.color-acento-botones
      h2 3.3 SPAT tipo IT

    .row.mb-5
      .col-lg-1
      .col-lg-10
        .cajon.color-acento-botones.p-5  
          p.mb-0 En este esquema de conexión, el neutro de la fuente no se conecta a tierra o se hace a través de una resistencia de alta impedancia y las partes metálicas de los equipos se conectan directamente a un SPAT.
      .col-lg-1

    .row.mb-4
      .col-lg-2
      .col-lg-8
        figure
          img(src='@/assets/curso/tema3/img11.svg')
      .col-lg-2
      
    p.mb-5.px-5.mx-5 El esquema TN-S tiene la desventaja de aumentar el riesgo de exposición a sobretensiones eléctricas, al requerir la ocurrencia de dos fallas simultáneas para que actúe la protección de sobre corriente y las ventajas de usar solo un SPAT y de ofrecer una mayor continuidad del servicio. Por estas razones es el de mayor uso en aplicaciones donde la continuidad del servicio es un factor crítico, como en instalaciones hospitalarias, siempre y cuando se instale un esquema de detección de fallas a tierra y monitoreo de aislamiento.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    datosSlyder1: [
      {
        titulo: 'Capítulo 1 (artículos 1 al 8)',
        texto:
          'Disposiciones generales.<br>En este capítulo se establecen el campo de aplicación y excepciones del reglamento así como las definiciones, simbología y unidades usadas.<br><br>También se determinan los requisitos mínimos que deben incluir el plan de comunicaciones y el programa de seguridad y salud ocupacional de cualquier persona natural o jurídica que desarrolle actividades relacionadas con la construcción, operación y mantenimiento de instalaciones de energía eléctrica sin perjuicio de lo establecido en la resolución 5018 de 2019 expedida por el ministerio de trabajo posterior a la publicación del RETIE.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Capítulo 2 (artículos 9 al 19)',
        texto:
          'Requisitos técnicos esenciales.<br>En este capítulo se describe una metodología para evaluar los riesgos de origen eléctrico y las competencias laborales requeridas para intervenir instalaciones eléctricas, se clasifican por niveles las magnitudes de las tensiones de servicio, se establecen las distancias de seguridad de acuerdo a cada nivel, se especifican los valores límites de exposición a campos electromagnéticos y los componentes del sistema de protección contra rayos, se determina la organización y el procedimiento de trabajo tanto para redes energizadas y desenergizadas (Reglas de oro).',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Capítulo 3 (artículos 20.1 al 20.29)',
        texto:
          'Requisitos de productos<br>En este capítulo se establece el listado de productos objeto del RETIE, es decir los de mayor utilización en instalaciones eléctricas, y los criterios y requisitos que deben cumplir y demostrar cada uno de ellos mediante certificado de conformidad de producto expedido por un organismo de certificación acreditado.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Capítulo 4 (artículos 21.1 al 21.7)',
        texto:
          'Requisitos para el proceso de generación<br>En este capítulo se define Central o planta de generación como el conjunto de instalaciones que contienen máquinas, generadores, motores, aparatos de control, maniobra, protección y medida, que sirven para la producción de energía eléctrica, distintas a las consideradas como plantas de emergencia y se establecen los requisitos aplicables exclusivamente al proceso de generación propiamente dicho.<br><br>Sin embargo, al definirse de esta manera, una central de generación tiene implícitos los procesos de transmisión, transformación, distribución y uso final y por lo tanto debe cumplir adicionalmente con los requisitos de cada proceso que le sean aplicables.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: 'Capítulo 5 (artículos 22.1 al 22.13)',
        texto:
          'Requisitos para el proceso de transmisión<br>En este capítulo se establecen los requisitos que deben cumplir las líneas eléctricas aéreas de alta y extra alta tensión de corriente alterna trifásica a 60 Hz de frecuencia nominal.<br><br><h3>Capítulo 6 (artículos 23 al 24)</h3>Requisitos para el proceso de transformación (subestaciones)<br>En este capítulo se establecen los requisitos que deben cumplir las subestaciones con tensiones nominales superiores a 1 kV, entendiéndose por subestación a el conjunto de equipos utilizados para transferir el flujo de energía en un sistema de potencia, garantizar la seguridad del sistema por medio de dispositivos automáticos de protección y para redistribuir el flujo de energía a través de rutas alternas durante contingencias',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: 'Capítulo 7 (artículos 25 al 26)',
        texto:
          'Requisitos para el proceso de distribución<br>En este capítulo se establecen los requisitos que deben cumplir las redes de distribución definidas como todo conjunto de aparatos y de circuitos asociados para transporte y transformación de la energía eléctrica, cuyas tensiones nominales sean iguales o superiores a 120 V y menores a 57,5 kV.<br><br><h3>Capítulo 8 (artículos 27 al 30)</h3>Requisitos para instalaciones de uso final<br>En este capítulo se establecen los requisitos que deben cumplir las instalaciones eléctricas destinadas a la conexión de equipos o aparatos para el uso final de la electricidad y en todo tipo de construcciones, ya sean de carácter público o privado.',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
      {
        titulo: 'Capítulo 9 (artículos 31.1 al 31.4)',
        texto:
          'Prohibiciones<br>En este capítulo por considerarse contrario a los principios y objetivos del RETIE, se prohíbe la comercialización y uso de pararrayos radiactivos y productos que contengan compuestos orgánicos persistentes, el uso de materiales o artefactos reutilizados o remanufacturados en instalaciones de uso final y el uso de la tierra como único conductor de retorno.<br><br><h3>Capítulo 10 (artículos 32 al 35)</h3>Demostración de la conformidad<br>En este capítulo se establecen y describen los mecanismos de evaluación de conformidad de las instalaciones eléctricas con el RETIE ',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
      {
        titulo: 'Capítulo 11 (artículos 36 al 37)',
        texto:
          'Vigilancia, control y régimen sancionatorio<br>En este capítulo se establecen las entidades encargadas de la vigilancia y control del cumplimiento del RETIE y las sanciones aplicables en caso de incumplimiento<br><br><h3>Capítulo 12 (artículos 38.1 al 38.4)</h3>Disposiciones transitorias. Aquí, se establecen los periodos de tiempo a partir de la entrada en vigencia del RETIE para la exigencia del cumplimiento de algunos requisitos.<br><br><h3>Capítulo 13 (artículo 39)</h3>Revisión y actualización. Se establece que el Ministerio de Minas y Energía de Colombia es el órgano competente para la elaboración, revisión, actualización, interpretación y modificación del RETIE, lo cual lo podrá hacer de oficio o por solicitud de terceros .',
        imagen: require('@/assets/curso/tema1/img09.png'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
