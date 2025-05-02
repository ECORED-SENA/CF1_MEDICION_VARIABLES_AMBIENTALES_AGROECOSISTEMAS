<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Reconocimiento de aspectos asociados al muestreo de variables ambientales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Fortalecer las habilidades para realizar muestreo de variables ambientales que tienen incidencia en los agroecosistemas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Uno de los aspectos que debe contener un plan de muestreo es?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Información básica del lugar de muestreo: ubicación, tipo de agroecosistema, variable ambiental a muestrear (agua, suelo). ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El día que se entregarán los resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nombre del analista del laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cantidad de hectáreas que tiene la finca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: 'Una muestra puntual de agua se define como:',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Toma de varias muestras en la sección transversal de un río.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Toma de muestras de agua cada cierto tiempo en un mismo punto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Muestra representativa en la que el tiempo y lugar (espacio) no influyen significativamente en el resultado de la muestra. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Toma de muestras en el terreno dependiendo del cultivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿En un muestreo simple para suelos se tiene en cuenta el siguiente aspecto?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Se debe distribuir en el terreno y tomar diferentes submuestras de suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El productor o técnico distribuye el terreno en partes iguales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se debe tomar aproximadamente 9 muestras por hectárea.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El productor o el técnico de campo determina, de acuerdo con las necesidades, el punto donde se tomará la muestra constituida por una única muestra puntual. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Para la localización de los puntos de muestreo en suelos, en el muestreo aleatorio estratificado se debe...?',
          imagen: require('@/assets/actividad/imagen1.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Tomar una única muestra en cualquier punto del terreno.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Dividir el área en subgrupos que presenten homogeneidad en el terreno. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tomar las muestras siguiendo un patrón regular.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Separar los puntos cada 50 metros sin importar el área del terreno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto: '¿Los tipos de muestreo en suelos son...?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Irregular en forma de N, S, X o W; no sistemático zigzag, sistemático, aleatorio estratificado y aleatorio simple. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aleatorio simple, compuesto e integrado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'No sistemático zigzag, integrado y simple.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aleatorio simple.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Los tipos de muestreo en agua son...?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Muestreo puntual y de varias horas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Muestreo en zigzag y aleatorio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Muestreo manual y automático. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Muestreo para aguas superficiales y aguas residuales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Las muestras de agua se dividen en...?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disturbada y no disturbada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puntual, compuesta e integrada. ',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Simple e integrada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aleatoria, sistemática y por horas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Los métodos para medir el caudal en una fuente hídrica son...?',
          imagen: require('@/assets/actividad/imagen2.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Área-velocidad, volumétrico, flotadores, dilución con trazadores, estructuras aforadas. ',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Área-velocidad, volumétrico.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Por sección transversal del río o quebrada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cálculo de velocidad y profundidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Cuál es el objetivo de preservar una muestra?',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Garantizar que la muestra cambie sus propiedades al llegar al laboratorio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Mantener las condiciones 6 horas antes del análisis.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener las condiciones de la muestra hasta llegar al laboratorio para ser analizada. ',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambiar las propiedades fisicoquímicas de la muestra.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Estos muestreos pueden complementar el análisis de variables ambientales desde el punto de vista hidrobiológico?',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Muestreo de textura y estructura del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Muestreo de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Muestreo de trazadores y metales pesados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Muestreo en comunidades hidrobiológicas y de macroinvertebrados acuáticos. ',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'El muestreo compuesto consiste en tomar una única muestra puntual determinada por el técnico, sin mezclar submuestras.',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Las muestras no disturbadas de suelo deben conservar la estructura original del perfil edáfico.',
          imagen: require('@/assets/actividad/imagen3.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La cadena de custodia garantiza la trazabilidad y conservación de las muestras desde la recolección hasta su análisis en laboratorio.',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'El muestreo sistemático requiere dividir el terreno en estratos homogéneos antes de ubicar los puntos.',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El muestreo manual de agua permite al personal observar directamente características como color, olor y presencia de flotantes.',
          imagen: require('@/assets/actividad/imagen4.svg'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
