<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Caracterización del sector eléctrico colombiano
    
    figure.mb-5
      img(src='@/assets/curso/tema2/img01.png')  

    p.mb-4 La electricidad es parte fundamental en nuestro estilo de vida. Prácticamente en la mayoría de las actividades que realizamos, independientemente de nuestra edad y ocupación, necesitamos de este recurso tan valioso. Se ha preguntado alguna vez, ¿cómo llega a nuestros hogares la energía eléctrica que usamos para encender los teléfonos móviles, el computador, la nevera y los demás dispositivos eléctricos y electrónicos? Aunque parezca sencillo, todo hace parte de un proceso que ha tomado varios años en implementar y mejorar, y que involucra al Gobierno Nacional, a muchas entidades públicas y privadas, y en general a profesionales que se han unido para que podamos tener disponible este recurso con solo conectar un enchufe al tomacorriente y oprimir un botón.
    p.mb-5 A continuación, mostraremos cómo está organizado el sector eléctrico en Colombia y posteriormente, entraremos en detalle de los agentes del mercado de la electricidad.
        
    #t_2_1.titulo-segundo.color-acento-botones
      h2 2.1 Organización del sector

    p.mb-4 La Constitución Política de Colombia, como ley máxima del Estado, establece en el artículo 365 que los servicios públicos (agua, electricidad, gas) hacen parte de la finalidad social del Estado y, por lo tanto, su prestación y realización eficiente deben ser asegurados a todos los habitantes del territorio nacional.
    p.mb-5 En respuesta a este mandato constitucional, el Estado colombiano promulgó la Ley 142 de servicios públicos domiciliarios y la Ley 143, a través de las cuales se separaron las actividades del sector eléctrico y se adoptó la estructura organizacional mostrada en la siguiente figura.

    .mb-5
      .titulo-sexto.color-acento-contenido
        p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Estructura organizacional del sector eléctrico colombiano] 
      figure
        img(src='@/assets/curso/tema2/img02.svg')  
        figcaption Nota. Adaptada de documento SENA. Caracterización del sector eléctrico colombiano. 

    p.mb-4 A continuación, se relaciona las diferentes entidades colombianas que hacen parte de esta estructura organizacional: 
    
    hr

    .row.p-3.t2_div1
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img03.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4 Ministerio de Minas y Energía (MME)
          p.mb-4 Una de sus funciones principales es la formulación, adopción e implementación de la política pública del sector administrativo de minas y energía. En el siguiente enlace podrás encontrar las funciones completas.
          p.mb-0 
            a(href="https://www.minenergia.gov.co/es/ministerio/estructura-organizacional/funciones/#:~:text=Formular%2C adoptar%2C dirigir y coordinar,de minerales%2C hidrocarburos y biocombustibles" target="_blank") https://www.minenergia.gov.co/es/ministerio/estructura-organizacional/funciones/#:~:text=Formular%2C adoptar%2C dirigir y coordinar,de minerales%2C hidrocarburos y biocombustibles 

    hr

    .row.p-3.t2_div2
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img04.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4.texto Unidad de Planeación Minero Energética (UPME)
          p.texto.mb-4 Esta entidad está adscrita al MME y dentro de sus funciones principales está la planeación de manera coordinada con las entidades públicas y privadas del sector minero energético, para el avance y adaptación de los recursos del sector a las necesidades del país. En el siguiente enlace podrás encontrar las funciones completas.
          p.texto.mb-0 
            a(href="https://www1.upme.gov.co/Entornoinstitucional/Documents/portafolio_de_servicios_upme.pdf" target="_blank") https://www1.upme.gov.co/Entornoinstitucional/Documents/portafolio_de_servicios_upme.pdf

    hr

    .row.p-3.t2_div1
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img05.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4 Comisión de Regulación de Energía y Gas (CREG)
          p.mb-4 En una institución de carácter técnico que tiene como uno de los objetivos principales alcanzar la mayor cobertura a la población del país de los servicios de electricidad, gas natural y gas licuado de petróleo. Lo anterior garantizando la calidad al menor costo posible para el usuario, de tal manera que permita también un beneficio para las empresas que prestan este tipo de servicios. En el siguiente enlace podrás encontrar las funciones completas.
          p.mb-0 
            a(href="https://creg.gov.co/publicaciones/7812/funciones/" target="_blank") https://creg.gov.co/publicaciones/7812/funciones/

    hr

    .row.p-3.t2_div2
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img06.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4.texto Superintendencia de Servicios Públicos.
          p.texto.mb-4 Es una entidad facultada por el estado para ejercer funciones de inspección, vigilancia y control sobre las organizaciones y empresas que prestan los servicios públicos de energía, gas, acueducto, aseo y alcantarillado.<br>En el siguiente enlace podrás encontrar las funciones completas.
          p.texto.mb-0 
            a(href="https://www.superservicios.gov.co/nuestra-entidad/quienes-somos/funciones" target="_blank") https://www.superservicios.gov.co/nuestra-entidad/quienes-somos/funciones

    hr

    .row.p-3.t2_div1
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img07.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4 Superintendencia de Industria y Comercio.
          p.mb-4 Es la autoridad para la protección de la metrología legal, los derechos de los consumidores y la competencia en el país. En el siguiente enlace podrás encontrar las funciones completas.
          p.mb-0 
            a(href="https://www.sic.gov.co/objetivos-y-funciones" target="_blank") https://www.sic.gov.co/objetivos-y-funciones

    hr

    .row.p-3.t2_div2
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img08.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4.texto Compañía de Expertos en Mercados S.A. E.S.P. (XM)
          p.texto.mb-4 Es una empresa de servicios públicos mixta del orden nacional, encargada de la operación del sistema interconectado nacional (SIN) y la administración del mercado de energía mayorista (MEM). En el siguiente enlace podrás encontrar las funciones completas.
          p.texto.mb-0 
            a(href="https://www.xm.com.co/nuestra-empresa/nosotros/que-hacemos" target="_blank") https://www.xm.com.co/nuestra-empresa/nosotros/que-hacemos

    hr

    .row.p-3.t2_div1
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img09.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4 Centro Nacional de Despacho (CND) 
          p.mb-4 Se encarga de la planeación, la supervisión y el control de la operación integrada de los recursos de generación, interconexión y transmisión del Sistema Interconectado Nacional, teniendo como objetivo una operación segura, confiable y económica.          

    hr

    .row.p-3.t2_div2
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img10.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4.texto Administrador del Sistema de Intercambios Comerciales (ASIC)
          p.texto.mb-4 Se encarga del registro de las fronteras comerciales, de los contratos de energía a largo plazo; de la liquidación, facturación, cobro y pago de todas las transacciones que resulten en el Mercado de Energía Mayorista.         

    hr

    .row.p-3.t2_div1
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img11.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4 Consejo Nacional de Operación (CNO) 
          p.mb-4 Es un organismo privado que tiene como función principal acordar los aspectos técnicos para garantizar que la operación del Sistema Interconectado Nacional sea segura, confiable y económica y ser el ejecutor del Reglamento de Operación. En el siguiente enlace podrás encontrar las funciones completas.
          p.mb-0 
          a(href="https://www.cno.org.co/content/quienes-somos" target="_blank") <u>https://www.cno.org.co/content/quienes-somos</u>

    hr

    .row.p-3.t2_div2
      .col-lg-2
        figure
          img(src='@/assets/curso/tema2/img12.png') 
      .col-lg-10.d-flex.align-items-center
        div 
          h4.texto Comité Asesor de Comercialización (CAC)
          p.texto.mb-4 Es un Comité creado por la Comisión de Regulación de Energía y Gas (CREG), mediante la Resolución 68 de 1999, con el objetivo de asistir en el seguimiento y la revisión de los aspectos comerciales del Mercado de Energía Mayorista. En el siguiente enlace podrás encontrar las funciones completas.
          p.texto.mb-0 
            a(href="http://www.cac.org.co/2016/html/quienes.html" target="_blank") http://www.cac.org.co/2016/html/quienes.html

    hr

    #t_2_2.titulo-segundo.color-acento-botones
      h2 2.2 Agentes del mercado de la energía eléctrica

    .row.mb-4
      .col-12
        .bloque-texto-g.color-secundario.t2_img1.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img.t2_div1(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img13.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Seguramente ha escuchado hablar del término Mercado. Normalmente, cuando hablamos de mercado nos imaginamos un lugar con acceso público o puestos de venta donde podemos comprar todo tipo de productos. Pues bien, para la energía eléctrica existe un mercado en donde se hacen todas las compras y ventas de energía. 
            br 
            br 
            | La gran diferencia es que para la energía existen mayores regulaciones y controles al ser un bien de primera necesidad y también que el acceso a este mercado no es público, sino que se realiza a través de otras entidades. Es decir, para comprar la energía en nuestros hogares no es posible que vayamos al mercado de energía directamente, sino que debemos comprarla a un agente que en este caso se llama comercializador. Para entender mejor cómo funcionan los agentes en el mercado de energía eléctrica, miraremos con más detalle cada uno de ellos y sus funciones principales.
      .col-lg-1

    .row.mb-5
      .col-lg-4
      .col-lg-7        
          a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=YWEXLSjaYf0" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> En el siguiente vídeo descubrirá a manera de introducción los procesos involucrados para que la electricidad llegue a su hogar.
   
    TabsA.color-acento-botones.mb-5    
      .tarjeta.t2_div3.p-4(titulo="Generación")
        h4 Generación
        figure.mb-4
          img(src='@/assets/curso/tema2/img14.png') 
        p.mb-4 Los agentes generadores son aquellos que desarrollan la actividad de producción de energía eléctrica, que puede ser transada en la bolsa o mediante contratos bilaterales con otros generadores, comercializadores o directamente con grandes usuarios (usuarios no regulados).
        p.mb-4 La generación de energía eléctrica del país se encuentra concentrada principalmente en tres regiones: Antioquia, con una capacidad instalada soportada principalmente por recursos hidráulicos; Centro, también mayoritariamente por recursos hidráulicos y en segundo lugar generación con carbón; y en tercer lugar la Costa Atlántica donde la electricidad se produce en su mayor parte a partir de gas natural.
        p.mb-4 La estructura organizacional básica de las empresas de generación está conformada por una junta directiva, una gerencia general de la que dependen una subgerencia asociada directamente a la producción de energía.
      
      .tarjeta.t2_div3.p-4(titulo="Transmisión")
        h4 Transmisión
        figure.mb-4
          img(src='@/assets/curso/tema2/img15.png') 

        p.mb-4 Esta actividad consiste en el transporte de energía eléctrica a través del conjunto de líneas, con sus correspondientes módulos de conexión (Sistema de Transmisión Nacional – STN), que operan a tensiones iguales o superiores a 220 kV, o a través de redes regionales o interregionales de transmisión a tensiones inferiores. Es remunerada según una metodología de costos índices, independientemente de su uso. 
        p.mb-4 Los nuevos proyectos del STN desde 1999 se construyen por empresas que ganen al cumplir las condiciones técnicas, económicas y financieras al presentar el menor precio en las convocatorias públicas que adelante la Unidad de Planeación Minero Energética (UPME).
        p El Sistema de Transmisión Colombiano (STN) se divide en cinco subsistemas:

        ul.lista-ul--color
          li.ps-3 
            i.fas.fa-check            
            | Sistema Central, que alimenta la región de Bogotá, reconocido como el mayor mercado de energía del país.
          li.ps-3
            i.fas.fa-check            
            | Sistema Oeste, que alimenta el segundo mayor mercado conformado por la región de Antioquia.
          li.ps-3 
            i.fas.fa-check            
            | Sistema Sur. 
          li.ps-3 
            i.fas.fa-check            
            | Sistema Noroeste.
          li.ps-3 
            i.fas.fa-check            
            | Sistema Nordeste.

      .tarjeta.t2_div3.p-4(titulo="Distribución")
        h4 Distribución
        figure.mb-4
          img(src='@/assets/curso/tema2/img16.png') 

        p.mb-4 Esta actividad consiste en transportar energía eléctrica a través de un conjunto de líneas y subestaciones, con sus equipos asociados, que operan a tensiones menores de 220 kV, que no pertenecen a un sistema de transmisión regional por estar dedicadas al servicio de un sistema de distribución municipal, distrital o local.
        p.mb-4 La infraestructura asociada con la actividad de distribución consiste básicamente de líneas y subestaciones, clasificadas de acuerdo con los siguientes niveles de operación:

        p.mb-0 Nivel 4: sistemas con tensión nominal mayor o igual a 57,5 kV y menor a 220 kV.
        p.mb-0 Nivel 3: sistemas con tensión nominal mayor o igual a 30 kV y menor de 57,5 kV.
        p.mb-0 Nivel 2: sistemas con tensión nominal mayor o igual a 1 kV y menor de 30 kV.
        p.mb-4 Nivel 1: sistemas con tensión nominal menor a 1 kV.

        div.ps-5 
          a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=tlQNRJxpvxU" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> En el siguiente video podrás descubrir las diferencias entre una red de transmisión y distribución.

      .tarjeta.t2_div3.p-4(titulo="Comercialización")
        h4 Comercialización
        .row
          .col-lg-7
            p.mb-4 Esta actividad consiste en la compra de energía eléctrica en el mercado mayorista y su venta en el mismo mercado o a los usuarios finales, regulados o no regulados, bien sea que desarrolle esa actividad en forma exclusiva o combinada con otras actividades del sector eléctrico, diferente de transmisión.
            p.mb-4 Los comercializadores son aquellos agentes que básicamente prestan un servicio de intermediación entre los usuarios finales de energía y los agentes que generan, transmiten y distribuyen electricidad.
            p.mb-4 Si observas la factura de electricidad que llega a tu hogar, podrás descubrir el nombre de la empresa comercializadora que te vende la electricidad. 
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/img17.png')

      .tarjeta.t2_div3.p-4(titulo="Usuarios")
        h4 Usuarios
        p.mb-5 Son los consumidores finales del servicio de energía eléctrica. Los usuarios en Colombia son clasificados en dos grandes grupos, según los niveles de consumo que presenten:
         
        div.t2_div4.p-4.mb-5
          h4 Usuarios no regulados: 
          .row
            .col-lg-7
              p.mb-4 En esta categoría se encuentran por mencionar algunos, las industrias medianas y grandes, grandes clínicas y hospitales, grandes centros de educación, centros comerciales, grandes hoteles y en general todas las entidades que cumplen con la condición de consumo mayor a 55.000 kWh al mes o demanda máxima mayor a 100 kW. Estos valores límite pueden cambiar dependiendo de lo que determine la CREG. La ventaja de pertenecer a esta categoría es que estos usuarios pueden negociar parte de la tarifa de energía, permitiendo ser más competitivos.
              p ¿Sabía que varias de las sedes del SENA en el país están categorizadas como usuarios no regulados?
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img18.svg')

        div.t2_div4.p-4.mb-4
          h4 Usuarios regulados:  
          .row
            .col-lg-7.d-flex.align-items-center
              p En esta categoría se encuentran por mencionar algunos, los hogares, los pequeños y medianos comercios, la pequeña industria, y en general las entidades que no cumplen con las condiciones para pertenecer a la categoría de No Regulados. La tarifa de energía para esta categoría de usuarios es como su nombre lo dice “Regulada” por la CREG. Normalmente esta tarifa es más alta comparada con la tarifa de los No Regulados.
            .col-lg-5
              figure
                img(src='@/assets/curso/tema2/img19.svg')

        div.ps-5 
          a.anexo.mb-4.mb-lg-0(href="https://www.youtube.com/watch?v=LriXlAKUd9A" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b>  En el siguiente video podrá descubrir con más detalle cómo se relacionan los agentes con el valor de tu factura de energía.

</template>

<script>
export default {
  name: 'Tema2',
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
