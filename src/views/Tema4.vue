<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Conformidad de las instalaciones eléctricas

    div.back-img.mb-5(:style="{'background-image': `url(${require('@/assets/curso/tema4/img01.png')})`}")
      .row
        .col-5.p-5
          p.texto-blanco.small.mb-3 Para garantizar el correcto funcionamiento y seguridad de las instalaciones, y asegurar la integridad de las personas y demás seres vivos, es necesario que exista un mecanismo de verificación del cumplimiento de todos los requisitos exigidos por los Reglamentos Técnicos. A continuación, mostraremos las generalidades del cumplimiento de requisitos para productos e instalaciones eléctricas.
          p.texto-blanco.small.mb-0 Como mecanismo de verificación del cumplimiento y de apoyo al control y vigilancia ejercida por el Estado, se recurre a los organismos de evaluación de la conformidad debidamente acreditados, con el fin de ejecutar la certificación de productos, la certificación de personas, la realización de pruebas y ensayos en laboratorios y la inspección de las instalaciones.
    
    p.mb-4 Un organismo de inspección es una entidad que realiza actividades de medición, ensayo o comparación con un patrón o documento de referencia de una instalación y confronta los resultados con unos requisitos especificados.
    p.mb-5 Le invitamos a leer el artículo 32 del RETIE para conocer más a detalle acerca del Mecanismo de Evaluación de la Conformidad.

    #t_4_1.titulo-segundo
      h2 4.1 Certificados de conformidad de producto

    .row.mb-5
      .col-lg-6
        .cajon-b.color-acento-botones.p-2.mb-3
          p.mb-0 Para que un producto pueda ser comercializado y utilizado en las instalaciones eléctricas, debe primero obtener una certificación que permitirá evidenciar que dicho producto está conforme a los requisitos mínimos exigidos por el RETIE. Todos los productos incluidos en el alcance del RETIE deben contar con el certificado de conformidad, por lo tanto, las instalaciones objeto del RETIE que no cumplan este requisito, deberán ser rechazadas y no podrán acceder al servicio de energía.

        .cajon.color-acento-botones.p-5   
          p.mb-4 El certificado de producto es un documento mediante el cual un organismo da constancia por escrito que un producto cumple con los requisitos establecidos en el RETIE. La certificación se fundamenta en la evaluación del producto de acuerdo con métodos de ensayo establecidos previamente.
          p.mb-0 Le invitamos a leer el artículo 33 del RETIE para conocer más detalles acerca de la certificación de conformidad de productos.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema4/img02.svg') 

    #t_4_2.titulo-segundo
      h2 4.2 Demostración de conformidad de las instalaciones eléctricas

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img03.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-4 Una vez construido el proyecto, para poder obtener el servicio de energía eléctrica se debe previamente demostrar la conformidad de la instalación. Para las instalaciones a las cuales se les aplica el RETIE, se hará exigible el certificado de conformidad.<br><br>Dependiendo del tipo de instalación eléctrica, el RETIE establece las condiciones que se deben cumplir para la demostración de la conformidad.<br><br>Le invitamos a leer el artículo 34 del RETIE para conocer más detalles acerca de la demostración de conformidad de las instalaciones eléctricas.

    #t_4_3.titulo-segundo
      h2 4.3 Dictamen de inspección

    .row.mb-5
      .col-lg-6.d-flex
        .cajon.color-primario.p-5         
          p.mb-4 Un dictamen de inspección es un documento emitido por un organismo de inspección que contiene a manera de lista de chequeo las características que comprueben el cumplimiento o no de los requisitos establecidos en el RETIE. El dictamen de la inspección es realizado una vez finalizado el proceso de inspección de las instalaciones eléctricas. La inspección debe ser realizada por una organización acreditada por el Organismo Nacional de Acreditación de Colombia.
          p.mb-0 Le invitamos a leer el artículo 34 del RETIE para conocer más detalles acerca del dictamen de inspección y los formatos utilizados.
      .col-lg-6.d-flex
        figure
          img(src='@/assets/curso/tema4/img04.png') 

    #t_4_4.titulo-segundo
      h2 4.4 Acciones de vigilancia y control

    p.mb-5 Con el fin de controlar el cumplimiento del RETIE, el Gobierno Nacional ha encargado a las siguientes entidades para su vigilancia y el control:

    .row.mb-4
      .col-lg-1
      .col-lg-3.d-flex
        div
          div.t4-div1.p-3(style="height:50%")
            p.texto.mb-0 <b>Superintendencia de Servicios Públicos Domiciliarios:</b> encargada de vigilar el cumplimiento del RETIE en lo relacionado con las instalaciones eléctricas para la prestación del servicio público de electricidad.
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img05.png')
      .col-lg-3.d-flex
        div
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img06.png')
          div.t4-div2.p-3(style="height:50%")
            p.texto <b>Superintendencia de Industria y Comercio:</b> encargada de supervisar vigilar y sancionar a los organismos de certificación e inspección, así como a los laboratorios de pruebas y ensayos y de metrología, que presten servicio de evaluación de la conformidad relacionados con el presente reglamento.
      .col-lg-3.d-flex
        div
          div.t4-div3.p-3(style="height:50%")
            p.texto.mb-0 <b>Alcaldías municipales o distritales:</b> los alcaldes ejercerán en sus respectivas jurisdicciones las mismas facultades administrativas de control y vigilancia que la Superintendencia de Industria y Comercio.
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img07.png')
      
    .row.mb-5
      .col-lg-1      
      .col-lg-3.d-flex
        div
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img08.png')
          div.t4-div4.p-3(style="height:50%")
            p.texto <b>Dirección de Impuestos y Aduanas Nacionales:</b> encargada de la revisión documental del registro o licencia de importación.        
      .col-lg-3.d-flex
        div
          div.t4-div5.p-3(style="height:50%")
            p.texto.mb-0 <b>Consejos Profesionales:</b> encargada de la vigilancia y control del ejercicio profesional de los ingenieros, tecnólogos y técnicos de la electrotecnia, que intervienen en dichas instalaciones.
          figure(style="height:50%")
            img(style="height:100%" src='@/assets/curso/tema4/img09.png')

    p Le invitamos a leer los artículos 36 y 37 del RETIE para conocer más detalles acerca de la vigilancia, control y régimen sancionatorio.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
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
