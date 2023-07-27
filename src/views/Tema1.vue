<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Normatividad eléctrica

    .row.mb-5
      .col-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El principio de la conservación de la energía establece que esta no se crea ni se destruye, solo se transforma y este proceso ocurre de forma natural. La forma de energía que presenta más procesos de conversión directa a otras formas de energía es la eléctrica y por esta razón el desarrollo tecnológico de nuestra civilización ha estado ligado al descubrimiento de las leyes físicas que gobiernan dichas transformaciones. 
              br
              | Resulta contradictorio que en la misma medida que hemos mejorado nuestra calidad de vida al incorporar al uso cotidiano los aparatos desarrollados con las nuevas tecnologías, también hemos aumentado los riesgos de ocasionar daños a la vida y al medio ambiente por exposición a magnitudes de tensión y corriente eléctrica superiores a las normales en los procesos biológicos.
      .col-lg-1

    .row.mb-5
      .col-lg-1
      .col-lg-10
        .cajon.color-primario.p-4         
          p.mb-0 Y como la protección de la vida es un deber del Estado consagrado en el artículo 2 de la Constitución Política de Colombia, el Ministerio de Minas y Energía como máxima autoridad en materia energética, adoptó los reglamentos técnicos orientados a garantizar la protección de la vida de las personas contra los riesgos que puedan provenir de los bienes y servicios relacionados con el sector a su cargo.
      .col-lg-1

    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1  Reglamento Técnico de Instalaciones Eléctricas - RETIE
    
    p.mb-4 Es un documento donde se establecen los requisitos técnicos que deben cumplir las instalaciones eléctricas para garantizar la seguridad de las personas, de la vida tanto animal como vegetal y la preservación del medio ambiente contra los riesgos de origen eléctrico. Adicionalmente, señala las exigencias y especificaciones que garantizan la seguridad de las instalaciones eléctricas con base en su buen funcionamiento; la confiabilidad, calidad y adecuada utilización de los productos y equipos.
    p.mb-4 Está organizado en capítulos y artículos así:

    SlyderB.mb-5(:datos="datosSlyder1")

    .row.mb-5
      .col-lg-1
      .col-lg-10
        .cajon.color-acento-botones.p-4
          .h5 Requisitos para instalaciones de uso final 
          p Mayor detalle del capítulo 8 (Artículos 27 al 30) de RETIE donde se establecen los requisitos que deben cumplir las instalaciones eléctricas destinadas a la conexión de equipos o aparatos para el uso final de la electricidad y en todo tipo de construcciones, ya sean de carácter público o privado.
      .col-lg-1      


    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')         

      .tarjeta.t1-div1.p-3(x="38%" y="45%" numero="+")        
        p <b>27.1.</b> Debido al alto número de incendios ocasionados por deficiencias en la instalación, en especial lo relacionado con dimensionamiento de conductores y protecciones, malas conexiones, daños de aislamiento de conductores y empalmes, uso de equipos, aparatos y materiales inapropiados, uso de lámparas y luminarias sin espacio para evacuación del calor, se debe dar especial atención al cumplimiento de los requisitos de instalación y de producto, y se establece el carácter de obligatorio para los capítulos 1 a 7 y 10 de la NTC 2050.
    
      .tarjeta.t1-div1.p-3(x="46%" y="61%" numero="+")        
        p <b>27.2.</b> En este numeral se establecen los regímenes de conexión a tierra aceptados, pero este asunto será desarrollado con mayor detalle en el tema 3 de este contenido.

      .tarjeta.t1-div1.p-3(x="21%" y="55%" numero="+")        
        p <b>27.3.</b> En este numeral se establecen los requisitos de instalación de acometidas, adicionales a los definidos en las secciones 220 y 230 de la NTC 2050,  tales como los requeridos para cruces de vía, que los conductores aéreos deben ser de tipo antifraude concéntrico o trenzado, que la regulación de tensión no supere el 3%, se prohíbe el uso de conductores a la vista o incrustados directamente en fachadas, a menos que sean de cubierta XLPE o HDPE y que no contravengan normas de planeación municipal.

      .tarjeta.t1-div1.p-3(x="50%" y="20%" numero="+")        
        p <b>27.4.</b> En este numeral se establecen los requisitos de protección y medida de las instalaciones para uso final.

      .tarjeta.t1-div1.p-3(x="17%" y="22%" numero="+")        
        p <b>27.5.</b> En este numeral se establecen los requisitos de mantenimiento y conservación de instalaciones para uso final.

      .tarjeta.t1-div1.p-3(x="56.3%" y="36%" numero="+")        
        p <b>27.6.</b> En este numeral se clasifican las instalaciones de uso final en <i><u><b>básicas, provisionales y especiales.</b></u></i>

      .tarjeta.t1-div1.p-3(x="70%" y="7%" numero="+")        
        p Se definen las <b>instalaciones básicas</b> (aplican capítulos 1 a 4 de la NTC 2050) como aquellas de baja complejidad y riesgo, las redes externas de baja tensión particulares y públicas. Los requisitos adicionales aplicables a este tipo de instalaciones se establecen en el numeral 28.1.

      .tarjeta.t1-div1.p-3(x="69%" y="27%" numero="+")
        p Se definen las <b>instalaciones provisionales</b> (aplica sección 305 de la NTC 2050) como aquellas que se construyen para suministrar el servicio de energía a un proyecto en construcción, con un tiempo de vigencia hasta la energización definitiva, la terminación de la construcción, o para el suministro temporal de energía a instalaciones transitorias como ferias o espectáculos, montajes de equipos, demoliciones y proyectos de investigación, tales como pruebas sísmicas o perforaciones exploratorias. 
        p.mb-0 La Condición de provisionalidad se otorgará para periodos no mayores a seis meses, prorrogables según el criterio del operador de red (OR) o quien preste el servicio, previa solicitud del usuario. Los requisitos adicionales aplicables a este tipo de instalaciones se establecen en el numeral 28.2.

      .tarjeta.t1-div1.p-3(x="61.5%" y="51.5%" numero="+")        
        p Se definen las <b>instalaciones especiales</b> (aplica sección 305 de la NTC 2050) como aquellas que por estar localizadas en ambientes clasificados como peligrosos o por alimentar equipos o sistemas complejos, presentan mayor probabilidad de riesgo que una instalación básica y, por tanto, requieren de medidas especiales, para mitigar o eliminar tales riesgos. 
        p.mb-0 Los requisitos adicionales aplicables a este tipo de instalaciones se establecen en el numeral 28.3.1 para instalaciones en lugares clasificados como peligrosos, en el numeral 28.3.2 para instalaciones e instituciones de asistencia médica, en el numeral 28.3.3 para lugares con alta concentración de personas, en el numeral 28.3.4 a 28.3.10  para edificaciones prefabricadas, de uso agrícola, viviendas móviles, casas flotantes, equipos especiales, piscinas y sistemas solares fotovoltaicos, en el numeral 28.3.11 para sistemas contra incendio, en el numeral 28.3.12 para sistemas de emergencia, en el numeral 28.3.13 para otros sistemas de suministro, en el artículo 29 para instalaciones en minas y finalmente en el artículo 30 para instalaciones en minas subterráneas.
    .row.mb-5
      .col-lg-5
      .col-lg-7        
          a.anexo.mb-4.mb-lg-0(:href="obtenerLink('downloads/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> Para profundizar en el tema, en el siguiente enlace podrá descargar la última versión vigente del RETIE (30 de agosto de 2013 + ajustes a 2015)

    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2  Reglamento Técnico de Iluminación y Alumbrado Público - RETILAP

    p.mb-4 Es un documento donde se establecen los requisitos y medidas que deben cumplir los sistemas de iluminación y alumbrado público, tendientes a garantizar los niveles y calidades de la energía lumínica requerida en la actividad visual, la seguridad en el abastecimiento energético, la protección del consumidor y la preservación del medio ambiente; previniendo, minimizando o eliminando los riesgos originados por la instalación y uso de sistemas de iluminación. Adicionalmente, señala las exigencias y especificaciones mínimas para que las instalaciones de iluminación garanticen la seguridad y confort con base en su buen diseño y desempeño operativo, así como los requisitos de los productos empleados en las mismas.
    p.mb-5 Está organizado en capítulos y secciones así:

    SlyderC.mb-4(:datos="datosSlyder2")

    .row.mb-5
      .col-lg-5
      .col-lg-7        
          a.anexo.mb-4.mb-lg-0(:href="obtenerLink('downloads/RES180540_2010.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> Para profundizar en el tema, en el siguiente enlace podrá descargar la última versión vigente del RETILAP (30 de marzo de 2010 sin ajustes)

    #t_1_3.titulo-segundo.color-acento-botones
      h2 1.3  Código Eléctrico Colombiano NTC 2050

    p.mb-4 Es un documento de carácter técnico elaborado por el Instituto Colombiano de Normas Técnicas y Certificación (ICONTEC) y cuyo objetivo es la salvaguardia de las personas y de los bienes contra los riesgos que pueden surgir por el uso de la electricidad y que no pretende marcar especificaciones de diseño ni de ser un manual de instrucciones para personal no calificado. Antes de la entrada en vigencia del RETIE, era el marco normativo de referencia para los organismos con jurisdicción legal sobre las instalaciones eléctricas. Cuando el Gobierno Nacional permitió a las empresas de derecho privado acceder a la propiedad de infraestructura del sector eléctrico, se eliminó la obligatoriedad de cumplimiento de las normas técnicas y se adoptó el concepto de reglamento técnico, donde por definición no se pueden crear obstáculos innecesarios al comercio y cualquier restricción debe referirse sólo a objetivos legítimos como la protección de la vida y salud humana, de la vida animal y vegetal y del medio ambiente. Sin embargo, como ya se mencionó, el RETIE en el numeral 27.1 establece el contenido de los capítulos uno al siete y el del diez de la NTC 2050, primera actualización (1998), como de obligatorio cumplimiento.
    p.mb-5 Está organizado en capítulos y artículos así:

    SlyderB.mb-5(:datos="datosSlyder3")

    #t_1_4.titulo-segundo.color-acento-botones
      h2 1.4 Lineamientos de SST para las actividades en el sector eléctrico (Resolución 5018 de 2019)

    p.mb-5 Está organizado en títulos y capítulos así:

    SlyderB.mb-4(:datos="datosSlyder4")

    .row.mb-5
      .col-lg-5
      .col-lg-7        
          a.anexo.mb-4.mb-lg-0(:href="obtenerLink('downloads/Resolucion_5018_del_20112019_SST_en_energia_electrica.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p <b>Enlace web.</b> Profundice consultando la norma completa. En el siguiente enlace podrá descargar el anexo de la Resolución 5018 de 2019 (22 de noviembre de 2019)
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
    datosSlyder1: [
      {
        titulo: 'Capítulo 1 (artículos 1 al 8)',
        texto:
          '<b>Disposiciones generales.</b><br>En este capítulo se establecen el campo de aplicación y excepciones del reglamento así como las definiciones, simbología y unidades usadas.<br><br>También se determinan los requisitos mínimos que deben incluir el plan de comunicaciones y el programa de seguridad y salud ocupacional de cualquier persona natural o jurídica que desarrolle actividades relacionadas con la construcción, operación y mantenimiento de instalaciones de energía eléctrica sin perjuicio de lo establecido en la Resolución 5018 de 2019 expedida por el Ministerio de Trabajo posterior a la publicación del RETIE.',
        imagen: require('@/assets/curso/tema1/img02.png'),
      },
      {
        titulo: 'Capítulo 2 (artículos 9 al 19)',
        texto:
          '<b>Requisitos técnicos esenciales.</b><br>En este capítulo se describe una metodología para evaluar los riesgos de origen eléctrico y las competencias laborales requeridas para intervenir instalaciones eléctricas, se clasifican por niveles las magnitudes de las tensiones de servicio, se establecen las distancias de seguridad de acuerdo a cada nivel, se especifican los valores límites de exposición a campos electromagnéticos y los componentes del sistema de protección contra rayos, se determina la organización y el procedimiento de trabajo tanto para redes energizadas y desenergizadas (Reglas de oro).',
        imagen: require('@/assets/curso/tema1/img03.png'),
      },
      {
        titulo: 'Capítulo 3 (artículos 20.1 al 20.29)',
        texto:
          '<b>Requisitos de productos.</b><br>En este capítulo se establece el listado de productos objeto del RETIE, es decir los de mayor utilización en instalaciones eléctricas, y los criterios y requisitos que deben cumplir y demostrar cada uno de ellos mediante certificado de conformidad de producto expedido por un organismo de certificación acreditado.',
        imagen: require('@/assets/curso/tema1/img04.png'),
      },
      {
        titulo: 'Capítulo 4 (artículos 21.1 al 21.7)',
        texto:
          '<b>Requisitos para el proceso de generación.</b><br>En este capítulo se define Central o planta de generación como el conjunto de instalaciones que contienen máquinas, generadores, motores, aparatos de control, maniobra, protección y medida, que sirven para la producción de energía eléctrica, distintas a las consideradas como plantas de emergencia y se establecen los requisitos aplicables exclusivamente al proceso de generación propiamente dicho.<br><br>Sin embargo, al definirse de esta manera, una central de generación tiene implícitos los procesos de transmisión, transformación, distribución y uso final y por lo tanto debe cumplir adicionalmente con los requisitos de cada proceso que le sean aplicables.',
        imagen: require('@/assets/curso/tema1/img05.png'),
      },
      {
        titulo: 'Capítulo 5 (artículos 22.1 al 22.13)',
        texto:
          '<b>Requisitos para el proceso de transmisión.</b><br>En este capítulo se establecen los requisitos que deben cumplir las líneas eléctricas aéreas de alta y extra alta tensión de corriente alterna trifásica a 60 Hz de frecuencia nominal.<br><br><h3>Capítulo 6 (artículos 23 al 24)</h3><b>Requisitos para el proceso de transformación (subestaciones).</b><br>En este capítulo se establecen los requisitos que deben cumplir las subestaciones con tensiones nominales superiores a 1 kV, entendiéndose por subestación al conjunto de equipos utilizados para transferir el flujo de energía en un sistema de potencia, garantizar la seguridad del sistema por medio de dispositivos automáticos de protección y para redistribuir el flujo de energía a través de rutas alternas durante contingencias.',
        imagen: require('@/assets/curso/tema1/img06.png'),
      },
      {
        titulo: 'Capítulo 7 (artículos 25 al 26)',
        texto:
          '<b>Requisitos para el proceso de distribución.</b><br>En este capítulo se establecen los requisitos que deben cumplir las redes de distribución definidas como todo conjunto de aparatos y de circuitos asociados para transporte y transformación de la energía eléctrica, cuyas tensiones nominales sean iguales o superiores a 120 V y menores a 57,5 kV.<br><br><h3>Capítulo 8 (artículos 27 al 30)</h3><b>Requisitos para instalaciones de uso final.</b><br>En este capítulo se establecen los requisitos que deben cumplir las instalaciones eléctricas destinadas a la conexión de equipos o aparatos para el uso final de la electricidad y en todo tipo de construcciones, ya sean de carácter público o privado.',
        imagen: require('@/assets/curso/tema1/img07.png'),
      },
      {
        titulo: 'Capítulo 9 (artículos 31.1 al 31.4)',
        texto:
          '<b>Prohibiciones.</b><br>En este capítulo por considerarse contrario a los principios y objetivos del RETIE, se prohíbe la comercialización y uso de pararrayos radiactivos y productos que contengan compuestos orgánicos persistentes, el uso de materiales o artefactos reutilizados o remanufacturados en instalaciones de uso final y el uso de la tierra como único conductor de retorno.<br><br><h3>Capítulo 10 (artículos 32 al 35)</h3><b>Demostración de la conformidad.</b><br>En este capítulo se establecen y describen los mecanismos de evaluación de conformidad de las instalaciones eléctricas con el RETIE ',
        imagen: require('@/assets/curso/tema1/img08.png'),
      },
      {
        titulo: 'Capítulo 11 (artículos 36 al 37)',
        texto:
          '<b>Vigilancia, control y régimen sancionatorio.</b><br>En este capítulo se establecen las entidades encargadas de la vigilancia y control del cumplimiento del RETIE y las sanciones aplicables en caso de incumplimiento<br><br><h3>Capítulo 12 (artículos 38.1 al 38.4)</h3><b>Disposiciones transitorias.</b><br>Aquí, se establecen los periodos de tiempo a partir de la entrada en vigencia del RETIE para la exigencia del cumplimiento de algunos requisitos.<br><br><h3>Capítulo 13 (artículo 39)</h3><b>Revisión y actualización.</b><br>Se establece que el Ministerio de Minas y Energía de Colombia es el órgano competente para la elaboración, revisión, actualización, interpretación y modificación del RETIE, lo cual lo podrá hacer de oficio o por solicitud de terceros.',
        imagen: require('@/assets/curso/tema1/img09.png'),
      },
    ],
    datosSlyder2: [
      {
        titulo: 'Capítulo 1 (secciones 100 al 120)',
        texto:
          '<b>Introducción</b><br><br>En este capítulo se establece el alcance y excepciones del reglamento así como las definiciones relativas al alumbrado público, al servicio público, a tránsito, al espacio público y a planes de ordenamiento, las abreviaturas, los acrónimos y las siglas usadas.<br><br>También se establece el listado de productos objeto del RETILAP, es decir los de mayor utilización en iluminación y alumbrado público, los cuales deben demostrar su conformidad con el RETILAP mediante un certificado de producto.',
        imagen: require('@/assets/curso/tema1/img11.png'),
      },
      {
        titulo: 'Capítulo 2 (secciones 200 a 230)',
        texto:
          '<b>Requisitos generales para un sistema de iluminación.</b><br>En este capítulo se establecen los requerimientos de iluminación según las actividades y objetivos de uso de los espacios a iluminar para seleccionar las luminarias y fuentes luminosas acorde a los criterios fotométricos, reproducción cromática, temperatura de color y vida util establecidos.<br>También se especifican las condiciones bajo las cuales es obligatorio realizar un diseño detallado y la documentación mínima que debe incluir dicho diseño.<br>Adicionalmente se requiere que todos los proyectos de iluminación y alumbrado público deben incorporar y aplicar conceptos de uso racional y eficiente de energía, medir las variables fotométricas e incluir un análisis de los riesgos generados por las características propias del sistema de iluminación.',
        imagen: require('@/assets/curso/tema1/img12.png'),
      },
      {
        titulo: 'Capítulo 3 (secciones 300 a 395)',
        texto:
          '<b>Requisitos de producto para iluminación y alumbrado público.</b><br>En este capítulo se establecen los requisitos y características de instalación y de producto que deben cumplir los equipos listados en el capítulo 1, en términos de las especificaciones técnicas que garantizan las características de desempeño, durabilidad y calidad para satisfacer las condiciones de iluminación requeridas y de uso racional de energía.',
        imagen: require('@/assets/curso/tema1/img13.png'),
      },
      {
        titulo: 'Capítulo 4 (secciones 410 a 490)',
        texto:
          '<b>Diseños y cálculos de iluminación interior.</b><br>En este capítulo se establecen los niveles de iluminación mínimo, medio y máximo por tipo de recinto y actividad y los criterios para aprovechamiento de la luz natural, control de deslumbramiento, parpadeo y efecto estroboscópico. Se describen lineamientos específicos para alumbrado de espacios interiores de uso típico como oficinas, instituciones educativas, establecimientos comerciales e industriales, métodos de cálculo como el del factor de utilización de la instalación y el de cavidades zonales y de proyección y control de la eficiencia energética de las instalaciones mediante domótica y dimerizado de lámparas.<br>Finalmente se especifican las condiciones para las cuales es obligatoria la instalación de alumbrado de emergencia y señalización de los medios de evacuación, sus características y localización, así como también se describen los procedimientos para las mediciones fotométricas en iluminación interior.',
        imagen: require('@/assets/curso/tema1/img14.png'),
      },
      {
        titulo: 'Capítulo 5 (secciones 500 a 580).',
        texto:
          '<b>Alumbrado público e iluminación exterior.</b><br>En este capítulo se establecen las consideraciones técnicas del diseño de alumbrado público según las características de las vías, los niveles exigidos de luminancia e iluminancia para cada una de ellas y las restricciones al uso de fuentes lumínicas según URE. Se describen métodos de cálculos fotométricos como el puntual, el promedio, el europeo de 9 puntos, el del coeficiente de utilización y usando software y métodos de evaluación y medición de luminancia<br>También se hacen consideraciones para el diseño de alumbrado de fachadas de edificios y monumentos públicos, escenarios deportivos y túneles y se establecen los requisitos de operación y mantenimiento de los sistemas de alumbrado público.',
        imagen: require('@/assets/curso/tema1/img15.png'),
      },
      {
        titulo: 'Capítulo 6 (sección 610)',
        texto:
          '<b>Proyectos de alumbrado público.</b><br>En este capítulo se describe el procedimiento para realizar un proyecto de alumbrado público que cumpla con lo establecido en el Artículo 5 del Decreto 2424 de 2006 y demás normatividad legal o reglamentaria referente a la obligación de los municipios y distritos de elaborar un plan anual del servicio de alumbrado público que contemple, entre otros, la expansión del mismo, a nivel de factibilidad e ingeniería de detalle, armonizado con el plan de ordenamiento territorial y con los planes de expansión de otros servicios públicos, cumpliendo con las normas técnicas y de uso eficiente de energía que para tal efecto expida el Ministerio de Minas y Energía.<br><br><h3>Capítulo 7 (sección 700)</h3><b>Interventoría del servicio de alumbrado público.</b><br>En este capítulo se establecen los requisitos que debe cumplir la interventoría de los contratos de alumbrado público acorde al contenido del Decreto 2424 de 2006',
        imagen: require('@/assets/curso/tema1/img16.png'),
      },
      {
        titulo: 'Capítulo 8 (secciones 810 a 830)',
        texto:
          '<b>Vigilancia, control, demostración de la conformidad y regímenes sancionatorios.</b><br>En este capítulo se establecen y describen los mecanismos de evaluación de conformidad de las instalaciones de iluminación y alumbrado público con el RETILAP, las entidades encargadas de la vigilancia y control del cumplimiento del RETILAP y las sanciones aplicables en caso de incumplimiento<br><br><h3>Capítulo 9 (secciones 900 a 910)</h3><b>Disposiciones transitorias.</b><br>En este capítulo se establecen los periodos de tiempo a partir de la entrada en vigencia del RETILAP para la exigencia del cumplimiento de algunos requisitos, la equivalencia de certificados de conformidad expedidos en el exterior, la certificación mediante declaración del proveedor y la realización de inspección de instalaciones con fines de certificación para instalaciones que lo requieran',
        imagen: require('@/assets/curso/tema1/img17.png'),
      },
      {
        titulo: 'Capítulo 10 (secciones 1000 a 1020)',
        texto:
          '<b>Interpretación, revisión, actualización y vigencia del reglamento.</b><br>En este capítulo se establece que el Ministerio de Minas y Energía de Colombia es el órgano competente para la elaboración, revisión, actualización, interpretación y modificación del RETILAP, lo cual lo podrá hacer de oficio o por solicitud de terceros.',
        imagen: require('@/assets/curso/tema1/img18.png'),
      },
      // {
      //   titulo: '',
      //   texto:
      //     '',
      //   imagen: require('@/assets/curso/tema1/img02.png'),
      // },
    ],
    datosSlyder3: [
      {
        titulo: 'Capítulo 1 (secciones 100 al 110)',
        texto:
          '<b>Generalidades.</b><br> Se definen los términos esenciales para la aplicación apropiada del código y se describe la metodología general usada para establecer los requisitos de las instalaciones eléctricas.',
        imagen: require('@/assets/curso/tema1/img19.png'),
      },
      {
        titulo: 'Capítulo 2 (secciones 200 a 280)',
        texto:
          '<b>Alambrado y protección de las instalaciones eléctricas.</b><br> Se establecen los requisitos y métodos de cálculo aplicables para el dimensionamiento de los conductores puestos a tierra y de los circuitos alimentadores, ramales y acometidas, de la protección de sobrecorriente, de los dispositivos de protección contra sobretensiones (DPS) y de los sistemas de puesta a tierra.',
        imagen: require('@/assets/curso/tema1/img20.png'),
      },
      {
        titulo: 'Capítulo 3 (secciones 300 a 384)',
        texto:
          '<b>Métodos y materiales de las instalaciones.</b><br>En este capítulo se establecen los requisitos en la especificación de los materiales usados en las instalaciones eléctricas, así como también los métodos y esquemas de instalación de los mismos.<br><br><h3>Capítulo 4 (secciones 400 a 480)</h3><b>Equipos para uso general.</b><br>En este capítulo se establecen los requisitos en la especificación de los equipos y artefactos generales usados en las instalaciones eléctricas, así como también los métodos y esquemas de instalación de los mismos. ',
        imagen: require('@/assets/curso/tema1/img21.png'),
      },
      {
        titulo: 'Capítulo 5 (secciones 500 a 555)',
        texto:
          '<b>Ambientes especiales.</b><br>En este capítulo se establecen los requisitos del alambrado y equipos eléctricos y electrónicos a cualquier tensión, instalados en áreas clasificadas, instituciones de asistencia médica, sitios de reuniones públicas, remolques, casas flotantes, puertos y embarcaderos.',
        imagen: require('@/assets/curso/tema1/img22.png'),
      },
      {
        titulo: 'Capítulo 6 (secciones 600 a 695)',
        texto:
          '<b>Equipos especiales.</b><br>En este capítulo se establecen los requisitos de instalación y alambrado de equipos especiales para avisos luminosos, oficinas modulares, grúas, ascensores, montacargas, soldadores, equipos de rayos X, equipos de calentamiento por inducción, celdas electrolíticas y de galvanoplastia, máquinas industriales y de riego, piscinas, sistemas solares fotovoltaicos y bombas contra incendios.',
        imagen: require('@/assets/curso/tema1/img23.png'),
      },
      {
        titulo: 'Capítulo 7 (secciones 700 a 780)',
        texto:
          '<b>Condiciones especiales.</b><br>En este capítulo se establecen los requisitos de instalación y alambrado de equipos asociados a condiciones operativas especiales como sistemas de emergencia y reserva, de más de 600 V y menos de 50 V nominales, de instrumentación, control remoto y señalización, sistemas de alarma contra incendios y fibra óptica.',
        imagen: require('@/assets/curso/tema1/img24.png'),
      },
      {
        titulo: 'Capítulo 8 (secciones 800 a 820)',
        texto:
          '<b>Sistemas de comunicaciones.</b><br>En este capítulo se establecen los requisitos de instalación y alambrado de equipos de comunicaciones, de radio y televisión y de antenas comunales',
        imagen: require('@/assets/curso/tema1/img25.png'),
      },
      {
        titulo: 'Capítulo 9 (secciones A y B)',
        texto:
          '<b>Tablas y ejemplos.</b><br>En este capítulo se suministran diversas tablas de características eléctricas y mecánicas de los conductores y canalizaciones usados en las instalaciones eléctricas y ejemplos de aplicación de los métodos expuestos para la elaboración de diseños.',
        imagen: require('@/assets/curso/tema1/img26.png'),
      },
    ],
    datosSlyder4: [
      {
        titulo: 'Título 1 (capítulos 1 a 9, artículos 1 al 34)',
        texto:
          '<b>De la seguridad y salud en el trabajo en el sector eléctrico y actividades relacionadas.</b><br>En este título se establecen las obligaciones generales en seguridad y salud en el trabajo que deben cumplir las empresas y entidades que laboran en cualquiera de los procesos del sector eléctrico y las obligaciones específicas para el proceso de transformación, como distancias de seguridad, trabajo en alturas, transporte y atención de emergencias.',
        imagen: require('@/assets/curso/tema1/img27.png'),
      },
      {
        titulo: 'Título 2 (capítulos 1 a 3, artículos 35 al 50)',
        texto:
          '<b>De la generación.</b><br> En este título se establecen las obligaciones específicas en seguridad y salud en el trabajo que deben cumplir las empresas y entidades que laboran en el proceso de generación de energía eléctrica a partir de fuentes térmicas e hidráulicas',
        imagen: require('@/assets/curso/tema1/img28.png'),
      },
      {
        titulo: 'Título 3 (capítulos 1 a 5, artículos 51 al 60).',
        texto:
          '<b>Líneas de transmisión.</b><br>En este título se establecen las obligaciones específicas en seguridad y salud en el trabajo que deben cumplir las empresas y entidades que laboran en el proceso de trasmisión en actividades sin tensión y de línea viva.',
        imagen: require('@/assets/curso/tema1/img29.png'),
      },
      {
        titulo: 'Título 4 (capítulos 1 a 3, artículos 61 a 80)',
        texto:
          '<b>Redes de distribución.</b><br>En este título se establecen las obligaciones específicas en seguridad y salud en el trabajo que deben cumplir las empresas y entidades que laboran en el proceso de distribución en actividades sin tensión, de línea viva y de alumbrado público. ',
        imagen: require('@/assets/curso/tema1/img30.png'),
      },
      {
        titulo: 'Título 5 (capítulos 1 a 4, artículos 81 a 91)',
        texto:
          '<b>Comercialización.</b><br>En este título se establecen las obligaciones específicas en seguridad y salud en el trabajo que deben cumplir las empresas y entidades que laboran en el proceso de comercialización en actividades de lectura, revisión, suspensión y reconexión de medidores de energía eléctrica.',
        imagen: require('@/assets/curso/tema1/img31.png'),
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
