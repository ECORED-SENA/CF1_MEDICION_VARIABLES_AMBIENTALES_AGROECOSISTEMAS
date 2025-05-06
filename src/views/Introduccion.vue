<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-center.mb-4
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/intro/img1.png", alt="" style="max-width: 300px").m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-up")
              img(src="@/assets/curso/intro/img2.svg", alt="" style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 El estudio de las variables ambientales en agroecosistemas es fundamental para comprender las interacciones entre las actividades productivas y el entorno natural. Este componente formativo introduce al aprendiz en los fundamentos del muestreo ambiental, permitiéndole desarrollar competencias para identificar, planificar y ejecutar procesos de recolección de muestras representativas de suelo, agua y comunidades biológicas.
        .row.align-items-center.estilo__caja_1(data-aos="fade-left")
          .col-xl
            p.mb-0 El enfoque propuesto abarca desde la formulación del plan de muestreo hasta la aplicación de técnicas específicas, incluyendo el uso de herramientas e instrumentos adecuados, la adopción de protocolos estandarizados y la correcta conservación y transporte de las muestras. Todo esto se realiza con base en lineamientos técnicos y normativos que garantizan la calidad y la validez de los resultados obtenidos.
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/intro/img3.svg", alt="" style="max-width: 300px").m-auto
    
    .row.align-items-center.estilo__caja_2(data-aos="fade-up")
      .col-xl
        p.mb-0 Con esta formación, se busca que el aprendiz comprenda el impacto de las variables ambientales en los agroecosistemas, y adquiera las habilidades necesarias para monitorearlas de forma rigurosa y sistemática. De este modo, se promueve una gestión ambiental más responsable, orientada a la sostenibilidad y al mejoramiento continuo de los procesos agropecuarios.
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src="@/assets/curso/intro/img4.png", alt="" style="max-width: 500px").m-auto

</template>

<script>
export default {
  name: 'Introduccion',
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
