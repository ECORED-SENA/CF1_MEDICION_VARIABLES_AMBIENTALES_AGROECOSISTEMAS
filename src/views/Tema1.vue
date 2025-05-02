<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Muestreo de variable ambientales

    <!-- BLOQUE 0 -->


    Separador
    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Consideraciones generales del plan de muestreo
    

    Separador
    <!-- BLOQUE 2 -->
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Muestreo en suelos


    Separador
    <!-- BLOQUE 3 -->
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Muestreo en aguas


    Separador
    <!-- BLOQUE 4 -->
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Muestreo en comunidades hidrobiológicas


    Separador
    <!-- BLOQUE 5 -->
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Muestreo de macroinvertebrados acuáticos

    
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
