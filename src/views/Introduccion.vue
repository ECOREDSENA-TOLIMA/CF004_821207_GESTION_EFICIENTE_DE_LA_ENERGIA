<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.back-img(:style="{'background-image': `url(${require('@/assets/curso/img01.png')})`}")     
      .col-lg-4.p-3
        figure#introduccion_img
          img(src='@/assets/curso/img02.svg')      
      .col-lg-6.p-3.d-flex.align-items-center
        div
          p.mb-4.texto-blanco Apreciado aprendiz, bienvenido a esta experiencia de aprendizaje donde se estudiarán las normas básicas para las instalaciones y productos eléctricos, y la estructura del sector eléctrico colombiano. También se estudiará de manera general un tema muy importante para la seguridad de los equipos y las personas: las puestas a tierra. ¿Alguna vez ha sentido que una corriente pasa por el cuerpo cuando se toca una superficie metálica cerca de un poste de electricidad o la carcasa metálica de un computador o electrodoméstico? Pues bien, esto es un problema que se soluciona al cumplir las normativas dispuestas para las instalaciones eléctricas.
          p.texto-blanco Adicionalmente, es importante reconocer la caracterización del sector eléctrico colombiano para entender de qué forma llega el servicio de electricidad a los hogares, comercios, industrias, etc. y cómo está relacionado con la forma en que se factura el consumo de energía eléctrica.     
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
