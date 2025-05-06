<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Muestreo de variable ambientales

    <!-- BLOQUE 0 -->
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5.ajuste___1(data-aos="fade-up")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La medición de variables ambientales en un agroecosistema debe partir de un ejercicio de planificación o plan de muestreo, en el que se consideren todos los aspectos asociados al estudio relacionados con las variables a analizar, el tipo de muestras y muestreo, los protocolos, los materiales y equipos requeridos, y consideraciones para analizar la información.

    .row.align-items-center
      .col-xl
        .bloque-texto-b.color-primario.mb-4(data-aos="fade-right")
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-0 Para el plan del muestreo, es necesario precisar los objetivos que permitan un óp¬timo proceso de recolección de la información necesaria para la representación del lugar de muestreo, precisando.
            i.fas.fa-quote-right
        .row.align-items-center.estilo__caja_3(data-aos="fade-right")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img2.svg", alt="" style="max-width: 300px").m-auto
          .col-xl
            <ul class="fa-ul estilo__li">
              <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span>El área o lugar donde se realizará el muestreo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Objetivos del plan de muestro.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Tipos de muestreo según los objetivos definidos.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Determinación de puntos de muestreo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Procedimientos de campo.</li>
              <li><span class="fa-li"><i class="fas fa-leaf"></i></span>Métodos de conservación de muestras.</li>
            </ul>
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img3.svg", alt="" style="max-width: 400px").m-auto

    Separador
    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Consideraciones generales del plan de muestreo

    p.mb-3 El plan de muestreo debe contener mínimo los siguientes aspectos: 

    .row.fondo_color_1
      .row.align-items-center
        .col-xl-1
        .col-xl-10
          .row.align-items-center.estilo__caja_4(data-aos="fade-up")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img4.png", alt="" style="max-width: 350px").m-auto
            .col-xl
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span a
                  | Información básica del sitio de muestreo: ubicación, tipo de agroecosistema y variable ambiental a recolectar (agua o suelo).
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span b
                  | Número de puntos de muestreo, tipo de muestreo y método a utilizar.
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span c
                  | Personal responsable y actividades asignadas para cada procedimiento.
              ol.lista-ol--cuadro
                li
                  .lista-ol--cuadro__vineta
                    span d
                  | Parámetros que se analizarán en las muestras.
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span e
                  | Técnicas, equipos e instrumentos que se emplearán para garantizar la homogeneidad y representatividad de las muestras.
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span f
                  | Tipo y características de los métodos de preservación y conservación que se aplicarán durante el transporte de las muestras al laboratorio.
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span g
                  | Número mínimo de puntos de muestreo requeridos según el tipo de muestreo.

      Separador
      <!-- BLOQUE 2 -->
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Muestreo en suelos

      .row.align-items-center.mb-5
        .col-xl-auto
          figure.d-none.d-xl-block(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img6.svg", alt="" style="max-width: 300px").m-auto
        .col-xl
          p.mb-0 El muestreo de suelos es una etapa crucial para obtener información representativa del terreno y tomar decisiones adecuadas en cuanto al manejo agrícola o ambiental. Existen diferentes métodos de muestreo, cada uno con características específicas que se adaptan según la homogeneidad del terreno, el objetivo del estudio y los recursos disponibles.
    
    p.mb-4.espacios__moviles A continuación, se presentan los principales tipos de muestreo utilizados en estudios de suelos:

    .row.fondo-slider.mb-5
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4 Muestreo simple
              p.mb-0 Se realiza en un único punto determinado por el productor o técnico, con base en necesidades específicas. Es útil en zonas heterogéneas de pequeña extensión, donde se identifican diferencias visibles como cambios en el relieve, textura, color superficial o vegetación.
            .col-lg-6
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img8.svg', alt='' style="max-width: 500px").m-auto

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4 Muestreo compuesto
              p.mb-0 Es el método más sencillo y común. Se toman varias submuestras en patrón aleatorio (en zig-zag), las cuales se mezclan completamente. Luego, mediante la técnica de cuarteo, se obtiene una muestra representativa de aproximadamente 1 kg. Ideal para representar uniformemente un área.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-2
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img9.svg', alt='' style="max-width: 500px").m-auto

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4 Muestreo sistemático
              p.mb-0 Las muestras se ubican siguiendo un patrón regular, a partir de un punto inicial seleccionado al azar. A partir de este se establece una distancia uniforme para los demás puntos. Se puede aplicar una rejilla rectangular o polar para su ejecución. Este método mejora la cobertura espacial.
            .col-lg-6
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img10.svg', alt='' style="max-width: 500px").m-auto

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4 Muestreo estratificado
              p.mb-0 Se basa en dividir el terreno en estratos con características similares, como topografía, horizontes del suelo, cambios de color o variaciones en el crecimiento del cultivo. Cada estrato se muestrea de forma independiente, lo cual mejora la precisión en terrenos heterogéneos. Es clave observar bien los atributos del perfil del suelo, ya que suele haber horizontes bien definidos.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-2
              figure.d-none.d-lg-block
                img(src='@/assets/curso/tema1/img11.svg', alt='' style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Localización puntos de muestreo en suelos

    .row.fondo_color_2
      .row.align-items-center.mb-4
        .col-xl
          p.espacios__moviles Para realizar la medición de variables ambientales, es fundamental definir con precisión la localización del área de estudio, estableciendo claramente sus límites y extensión. Esta etapa garantiza que los datos recolectados sean pertinentes y representativos.
          .row.align-items-center.estilo__caja_5(data-aos="fade-right")
            .col-lg-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img14.svg", alt="" style="max-width: 90px").m-auto 
            .col-lg
              p.mb-0 En el contexto del presente curso de formación, la medición se llevará a cabo en un <strong>agroecosistema</strong>, es decir, un ecosistema modificado por la intervención humana con fines agropecuarios. Esto puede incluir una finca, lote, terreno de un productor o de una asociación de productores agropecuarios, siempre que se practique manejo agroecológico o producción ecológica.
        .col-xl-auto
          figure.d-none.d-xl-block(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img15.svg", alt="" style="max-width: 300px").m-auto
      
      .row.align-items-center.mb-5
        .col-xl-auto
          figure.d-none.d-xl-block(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img16.svg", alt="" style="max-width: 400px").m-auto
        .col-xl
          p.mb-4 Es indispensable que el área seleccionada cumpla con dos criterios clave:
          .row.mb-4
            .col-lg-6(data-aos="fade-up")
              .tarjeta--boton.p-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/tema1/img17.svg', alt="" style="max-width: 90px").m-auto
                h3.text-center Representatividad
                p.mb-0 El lugar debe reflejar las condiciones típicas del sistema de producción que se desea estudiar.
            .col-lg-6.espacios__moviles_1(data-aos="fade-left")
              .tarjeta--boton.p-5.h-100
                .row.justify-content-center.mb-3
                  .col-7
                    figure.d-none.d-xl-block
                      img(src='@/assets/curso/tema1/img18.svg', alt="" style="max-width: 90px").m-auto
                h3.text-center Sensibilidad
                p.mb-0 Las variables ambientales en ese sitio deben responder de manera clara a las prácticas productivas implementadas.
          .row.align-items-center
            .col-lg-auto
              figure.d-none.d-xl-block(data-aos="fade-up")
                img(src="@/assets/curso/tema1/img19.svg", alt="" style="max-width: 85px").m-auto
            .col-lg
              p.mb-0 Además, se debe considerar la posibilidad de <strong>extrapolación de resultados</strong>. Esto implica formular hipótesis que permitan suponer que los resultados obtenidos podrían ser aplicables a otros agroecosistemas con características similares, ampliando así la validez del estudio más allá del sitio específico analizado.
              
      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo.ajuste__titulo_movil(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Ubicación puntos en muestreo aleatorio simple

      .row.align-items-center.mb-5
        .col-xl
          .bloque-texto-b.color-primario.mb-4.ajuste__cita.ajuste__cita_movil(data-aos="fade-right")
            .bloque-texto-b__texto
              i.fas.fa-quote-left
              h3.mb-0 Localizar los puntos de muestreo en un plano cartesiano (Xi, Yj) garantiza que cada individuo de la población tenga igual probabilidad de ser elegido. Este método resulta especialmente útil cuando se cuenta con información limitada sobre las características de la población y se requiere realizar un análisis estadístico, ya que permite explorar todas las combinaciones posibles de unidades de muestreo a seleccionar.
              i.fas.fa-quote-right
        .col-xl-auto
          figure.d-none.d-xl-block(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img20.png", alt="" style="max-width: 295px").m-auto

    .row.align-items-center.mb-5
      .col-xl-2
      .col-xl-8
        .row.espacios__moviles_2(data-aos="fade-up")
          .col-xl-6
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 1.
              span Ubicación puntos en muestreo aleatorio simple
            figure.mb-2
              img(src='@/assets/curso/tema1/img21.svg', alt='Para realizar este tipo de muestreo se requiere que el terreno esté delimitado, ya sea por cercas vivas o por el límite cultivos, lo cual facilita la ubicación de los puntos de muestreo.' style="max-width: 400px")
            figcaption.ajuste_nota_2.ajuste_nota_movil_2 <strong>Nota</strong>. Tomado de Ministerio del Ambiente (2014)
          .col-xl-6.estilo__caja_6.espacios__moviles_1
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img22.svg', alt='' style="max-width: 90px")
            p.mb-0 Se recomienda utilizar el muestreo aleatorio simple en <strong>áreas homogéneas</strong> que no superen las <strong>cinco hectáreas</strong>, y que estén <strong>delimitadas por referencias visibles</strong> a lo largo y ancho de la zona. Esta condición permite garantizar una distribución uniforme y representativa de los puntos de muestreo dentro del área seleccionada.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Muestreo aleatorio estratificado
    
    p.mb-4.espacios__moviles Para llevar a cabo un muestreo más <strong>preciso y representativo</strong>, es fundamental dividir previamente el área de estudio en <strong>subgrupos o estratos</strong> que presenten homogeneidad en sus características. En cada uno de estos estratos se aplica un <strong>muestreo aleatorio simple</strong>.

    .row.align-items-center.mb-5
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img23.svg", alt="" style="max-width: 450px").m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-lg-auto
            figure.d-none.d-xl-block(data-aos="fade-up")
              img(src="@/assets/curso/tema1/img24.svg", alt="" style="max-width: 85px").m-auto
          .col-lg
            p.mb-0 Este tipo de muestreo requiere contar con <strong>información previa</strong> que permita realizar una subdivisión adecuada del terreno. Dicha división puede basarse en criterios como:
        .row
          .col-lg-6
            .row.align-items-center.estilo__caja_7.m-0(data-aos="fade-up")
              .col-lg-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img25.svg", alt="" style="max-width: 85px").m-auto
              .col-lg
                h5.mb-0 Topografía
            .row.align-items-center.estilo__caja_7.m-0.mt-2(data-aos="fade-up")
              .col-lg-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img27.svg", alt="" style="max-width: 85px").m-auto
              .col-lg
                h5.mb-0 Distribución de contaminantes
            .row.align-items-center.estilo__caja_7.estilo__caja_7_ajuste.m-0.mt-2(data-aos="fade-up")
              .col-lg-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img29.svg", alt="" style="max-width: 85px").m-auto
              .col-lg
                h5.mb-0 Crecimiento irregular de la vegetación
          .col-lg-6
            .row.align-items-center.estilo__caja_7.m-0(data-aos="fade-left")
              .col-lg-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img26.svg", alt="" style="max-width: 85px").m-auto
              .col-lg
                h5.mb-0 Horizontes del suelo
            .row.align-items-center.estilo__caja_7.m-0.mt-2(data-aos="fade-left")
              .col-lg-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img28.svg", alt="" style="max-width: 85px").m-auto
              .col-lg
                h5.mb-0 Cambios de color en el suelo
    
    .row.align-items-center.mb-5.espacios__moviles
      .col-lg-1 
      .col-lg-10
        .row.estilo__caja_8(data-aos="fade-up")
          .col-lg-7
            .bloque-texto-b.color-primario.mb-4.ajuste__cita.ajuste__cita_movil_2
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h3.mb-0 El muestreo aleatorio estratificado permite que los puntos de muestreo se distribuyan de manera más uniforme en toda el área, considerando además el tamaño de cada estrato. De esta forma, se obtiene un conocimiento más detallado y específico sobre las características particulares de cada subgrupo.
                i.fas.fa-quote-right
          .col-lg-5.espacios__moviles_3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 2.
              span Ubicación puntos en muestreo aleatorio estratificado
            figure.mb-2
              img(src='@/assets/curso/tema1/img30.svg', alt='Este método es especialmente recomendable para extensiones superiores a diez hectáreas y en terrenos que no presentan homogeneidad' style="max-width: 400px").m-auto
            figcaption <strong>Nota</strong>. Tomado de Ministerio del Ambiente (2014)
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Muestreo sistemático (rejillas rectangulares)

    p.mb-4.espacios__moviles El muestreo sistemático mediante <strong>rejillas rectangulares</strong> consiste en <strong>colocar las muestras siguiendo un patrón regular</strong> en toda la zona de estudio. Este procedimiento comienza desde un <strong>punto aleatorio inicial</strong>, y a partir de él se determina una <strong>distancia específica</strong> para ubicar los demás puntos de muestreo, manteniendo así la <strong>uniformidad entre ellos</strong>.

    .row.align-items-center.mb-3
      .col-lg-1 
      .col-lg-10
        .row.estilo__caja_8(data-aos="fade-up")
          .col-lg-7
            .bloque-texto-b.color-primario.mb-4.ajuste__cita_1
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                h3.mb-0 Este método es aplicable a superficies de cualquier tamaño, ya que permite adaptar la ubicación de las muestras según las dimensiones y la forma del terreno. La separación entre puntos puede variar desde unos pocos centímetros hasta varios kilómetros, dependiendo del tipo de estudio a realizar.
                i.fas.fa-quote-right
          .col-lg-5.espacios__moviles_3
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 3.
              span Distribución regular de puntos de muestreo sistemático
            figure.mb-2
              img(src='@/assets/curso/tema1/img31.svg', alt='La imagen presenta un ejemplo de la posible distribución de los puntos en un área regular, por lo cual podría realizarse la ubicación de los puntos en áreas pequeñas o grandes extensiones de terreno.' style="max-width: 400px").m-auto
            figcaption <strong>Nota</strong>. Tomado de Ministerio del Ambiente (2014)
    
    .row.align-items-center.mb-5
      .col-lg-1 
      .col-lg-10
        .row.estilo__caja_9.align-items-center(data-aos="fade-up")
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img32.svg" style="max-width: 80px").m-auto
          .col-lg
            p.mb-0 En este sistema de muestreo, el tipo de muestra que se obtiene y se analiza es <strong>simple</strong>. No se recomienda el uso de muestras compuestas, ya que esto puede llevar a la <strong>pérdida de precisión en el procesamiento de los resultados</strong>.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Muestreo no sistemático en zig-zag

    p.mb-4.espacios__moviles Este método consiste en <strong>trazar una línea en zig-zag</strong> sobre el área de estudio, marcando sobre ella los <strong>puntos de muestreo</strong> de forma que se mantenga una cierta equidistancia entre ellos. Sin embargo, <strong>no se obtienen resultados completamente representativos</strong>, ya que el patrón deja <strong>espacios vacíos</strong> donde podrían existir <strong>contaminaciones puntuales</strong> no detectadas. En el caso específico de suelos agrícolas, se debe <strong>eliminar el efecto borde</strong> desplazando la línea de muestreo de manera imaginaria, evitando zonas cercanas a caminos, drenajes, linderos o lotes con distinto manejo.

    .row.mb-5(data-aos="fade-up")
      .col-xl-2 
      .col-xl-10
        .row.align-items-center
          .col-xl-5
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img33.png" style="max-width: 400px")
          .col-xl-5
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 4.
              span Patrón muestreo transversal en zig zag
            figure.mb-2
              img(src='@/assets/curso/tema1/img34.svg', alt='La imagen una posible distribución de los puntos en Zig zag, es importante tener en cuenta que si se hace en un área donde existan varios cultivos, este tipo de distribución de puntos podría generar ciertos vacíos de información.' style="max-width: 400px")
            figcaption.ajuste_nota_2.ajuste_nota_movil_2 <strong>Nota</strong>. Tomado de Ministerio del Ambiente (2014)

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Muestreo irregular en forma de N, S, X o W

    .row.align-items-center.mb-5
      .col-xl
        p En superficies con <strong>geometría cuadrada</strong>, se pueden trazar patrones en forma de <strong>letras como N, S, X o W</strong>, marcando los <strong>puntos de muestreo</strong> a lo largo de las líneas que forman dichas letras. Se debe procurar que estos puntos estén <strong>equidistantes</strong> entre sí. No obstante, <strong>estos patrones no garantizan una representatividad completa</strong>, ya que dejan <strong>espacios vacíos</strong> en el área de estudio. En dichos espacios podrían presentarse <strong>contaminaciones puntuales</strong> que no serían detectadas por el muestreo.
        .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-up")
          h5 Figura 5.
          span Muestreo irregular en forma de N, S, X, W, Zig Zag y Zig Zag traverso
        figure.mb-2(data-aos="fade-up")
          img(src='@/assets/curso/tema1/img35.svg', alt='Este tipo de muestreo se recomienda aplicar cuando las condiciones del terreno presentan cierta homogeneidad, evitando resultados erróneos.' style="max-width: 750px")
        figcaption.ajustar__width(data-aos="fade-up") <strong>Nota</strong>. Tomado de Ministerio del Ambiente (2014)
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img36.svg", alt="" style="max-width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipo de muestras en suelo 

    p.mb-4.espacios__moviles Para la toma de muestras de suelo, existen básicamente dos tipos de muestras principales (ICONTEC, 1997):

    TabsA.color-acento-botones.mb-5(data-aos="fade-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestras disturbadas")
        .row.align-items-center
          .col-lg
            h4 Muestras disturbadas
            p.mb-0 Son aquellas en las que <strong>no se preserva la estructura del suelo</strong>. Las partículas se recolectan sueltas y se <strong>mezclan entre sí</strong>, por lo que se pierde la organización natural del suelo. Este tipo de muestra es útil para análisis químicos y texturales generales.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img37.png", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestras no disturbadas")
        .row.align-items-center
          .col-lg
            h4 Muestras no disturbadas
            p.mb-0 En este caso, se garantiza la <strong>preservación de la estructura original</strong> del suelo. Se requiere el uso de equipos específicos de muestreo para evitar que las partículas cambien de posición o se mezclen, conservando así las condiciones naturales tal como se encuentran en el terreno. Estas muestras son fundamentales para estudios físicos del suelo, como porosidad, densidad o estructura.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img38.png", alt="" style="max-width: 350px").m-auto

    .row.fondo_img
      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo_1.ajuste__titulo_movil_1(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Técnicas de muestreo de suelo
      
      p.mb-4.espacios__moviles  Para llevar a cabo una <strong>toma de muestra de suelo adecuada</strong>, es fundamental seguir una serie de pasos técnicos que aseguren la representatividad y calidad de la muestra. A continuación, se detallan las etapas recomendadas:
      
      .row
        .col-xl-4(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src='@/assets/curso/tema1/img40.png', alt='' style="max-width: 300px").m-auto
        .col-xl-8(data-aos="fade-left")
          SlyderF(columnas="col-lg-6 col-xl-4")
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img41.svg' style="max-width: 90px").m-auto
              h5.mb-3 Delimitación del terreno
              p.mb-0 Definir claramente los límites del área que será muestreada.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img42.svg' style="max-width: 90px").m-auto
              h5.mb-3 Consideración de características del terreno
              p.mb-0 Tener en cuenta topografía, tipo de cultivo y color del suelo para identificar variabilidad.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img43.svg' style="max-width: 90px").m-auto
              h5.mb-3 Determinación de la metodología
              p.mb-0 Elegir el tipo de muestreo más adecuado según los objetivos y condiciones del terreno.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img44.svg' style="max-width: 90px").m-auto
              h5.mb-3 Limpieza superficial
              p.mb-0 Retirar residuos orgánicos y materiales superficiales del punto a muestrear.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img45.svg' style="max-width: 90px").m-auto
              h5.mb-3 Extracción de la muestra
              p.mb-0 Realizar excavación o calicata según la profundidad definida por el tipo de cultivo y los horizontes del suelo.
            
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img46.svg' style="max-width: 90px").m-auto
              h5.mb-3 Eliminación de impurezas
              p.mb-0 Quitar piedras, raíces u otros elementos que puedan alterar la muestra.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img47.svg' style="max-width: 90px").m-auto
              h5.mb-3 Homogeneización
              p.mb-0 Mezclar bien el material recolectado para obtener una muestra uniforme.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  <!--img(src='@/assets/curso/tema1/img48.svg' style="max-width: 90px").m-auto-->
              h5.mb-3 Técnica de cuarteo
              p.mb-0 Aplicar la técnica hasta obtener una muestra final de aproximadamente 1 kg.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img48.svg' style="max-width: 90px").m-auto
              h5.mb-3 Embolsado
              p.mb-0 Colocar la muestra en una bolsa plástica limpia, adecuada para su conservación.

            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/tema1/img49.svg' style="max-width: 90px").m-auto
              h5.mb-3 Rotulado
              p.mb-0 Identificar la muestra con etiqueta que incluya ubicación, fecha, profundidad y código.
    
    .row.fondo_color_3
      p.mb-4 La siguiente figura ilustra la técnica de cuarteo, un método utilizado para reducir de manera representativa el volumen de una muestra de residuos sólidos.
      .row.mb-5(data-aos="fade-up")
        .col-xl-2 
        .col-xl-10
          .row.align-items-center
            .col-xl-5
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img51.png" style="max-width: 300px")
            .col-xl-6.ajustar___marguen
              .titulo-sexto.color-acento-contenido.mb-2
                h5 Figura 6.
                span Técnica de cuarteo
              figure.mb-2
                img(src='@/assets/curso/tema1/img52.svg', alt='El método de cuarteo permite la cantidad de muestra representativa de suelo a partir de una mayor cantidad seleccionada del terreno.' style="max-width: 600px")
              figcaption.ajuste_nota_1 <strong>Nota</strong>. Tomado de Ministerio del Ambiente (2014)
              
      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo_1.ajuste__titulo_movil_1(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Manejo de muestras de suelo

      p.mb-4 El manejo adecuado de las muestras de suelo es fundamental para garantizar la validez de los resultados obtenidos en el laboratorio. Esto implica establecer una frecuencia adecuada de muestreo y seguir procedimientos específicos según el tipo de análisis a realizar.

      .row.align-items-center.mb-5
        .col-lg-1 
        .col-lg-10
          .row.estilo__caja_10(data-aos="fade-up")
            .col-lg-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img53.svg" style="max-width: 300px")
            .col-lg
              .bloque-texto-b.color-primario.mb-4.ajuste__cita_2
                .bloque-texto-b__texto
                  i.fas.fa-quote-left
                  h3.mb-0 Frecuencia de muestreo 
                  br
                  h3 En el caso del muestreo de suelos, se recomienda realizar al menos uno (1) al año, o más si el objetivo del estudio de variables ambientales así lo requiere.
                  i.fas.fa-quote-right

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Toma de la muestra de suelo

    p.mb-4.espacios__moviles Antes de la extracción, es necesario considerar <strong>qué variable o parámetro se va a medir</strong>, ya que esto determinará el tipo de muestra y la metodología a seguir:

    .bg--img_03.mb-5
      .row.h-100.align-items-center
        .col-lg
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
            .row(titulo="Para análisis químico").ajuste-cajaAcordion
              p.mb-0 Se debe eliminar la cobertura vegetal del área de muestreo para evitar la contaminación. Luego, se deben mezclar las submuestras adecuadamente para obtener una muestra homogénea representativa del sitio.
            .row(titulo="Para caracterización física").ajuste-cajaAcordion
              p.mb-0 La muestra debe tomarse manteniendo las condiciones físicas del suelo tal como se presentan en el campo, idealmente cuando el suelo tenga una humedad intermedia. La herramienta más recomendada es el barreno tipo Uhland con cilindros de aluminio. Los indicadores fisicoquímicos obtenidos permiten interpretar la relación entre el suelo y la planta, así como su capacidad de resiliencia y la disponibilidad de nutrientes y microorganismos.   
            .row(titulo="Para caracterización biológica").ajuste-cajaAcordion
              p.mb-0 El muestreo puede realizarse al azar, recolectando 10 submuestras de aproximadamente 100 g de suelo. Estas submuestras deben mezclarse para conformar una sola muestra de 1 kg.
        .col-lg-auto
          figure(data-aos="fade-left").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img54.png", alt="" style="width: 300px").m-auto
    
    .row.align-items-center.mb-5
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img55.svg", alt="" style="max-width: 300px").m-auto
      .col-xl
        .row.align-items-center.mb-3
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-up")
              img(src="@/assets/curso/tema1/img56.svg", alt="" style="max-width: 85px").m-auto
          .col-xl
            p.mb-0.espacios__moviles_7 Posteriormente, la muestra se debe <strong>empacar en una bolsa plástica estéril</strong> y conservar <strong>refrigerada</strong> dentro de un <strong>termo de icopor con hielo</strong>, por un máximo de <strong>24 horas</strong>, hasta su transporte al laboratorio.
        .row.align-items-center.estilo__caja_11(data-aos="fade-left")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img57.svg", alt="" style="max-width: 90px").m-auto
          .col-xl
            p.mb-0 Se recomienda <strong>acondicionar las muestras</strong>, desterronando el suelo y eliminando los materiales distintos a sus partículas, para asegurar la calidad del análisis.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Rotulado y transporte de la muestra de suelo

    p.mb-4.espacios__moviles Se debe rotular la muestra de suelo con el número o nombre del lote, el nombre del propietario, la fecha de muestreo y el nombre del responsable que realizó la toma, tal como se detalla en la figura siguiente.

    .row.align-items-center.mb-5
      .col-xl-1 
      .col-xl-10
        .row.align-items-center
          .col-xl-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 7.
              span Modelo de rótulo para muestra de suelo
            figure
              img(src='@/assets/curso/tema1/img58.svg', alt='La imagen presenta un ejemplo de rótulo que deben llevar las muestras, con el fin de que el laboratorio puede identificar la procedencia de la muestra y los datos relevantes de la misma.' style="max-width: 600px")
          .col-xl-4.espacio__1(data-aos="fade-left")
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img59.png", alt="" style="max-width: 300px").m-auto
    
    p.mb-4.espacios__moviles El técnico de campo o el encargado del laboratorio deberá diligenciar la cadena de custodia, la cual debe contener al menos:
    
    .row.align-items-center.mb-5
      .col-xl-1
      .col-xl-10
        .row.align-items-center.estilo__caja_3(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img60.svg", alt="" style="max-width: 300px").m-auto
          .col-xl
            <ul class="fa-ul estilo__li">
              <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span>El nombre de la empresa y del responsable del muestreo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Los datos de identificación del sitio (coordenadas).</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>La fecha y hora del muestreo.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Condiciones ambientales.</li>
              <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Observaciones.</li>
              <li><span class="fa-li"><i class="fas fa-leaf"></i></span>Identificación de las personas que entregan y reciben en cada una de las etapas de transporte, incluyendo fecha y hora.</li>
            </ul>
    
    .row.fondo_color_4.mb-5
      .col-lg-1
      .col-lg-10.mb-5(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido.mb-2
          h5 Figura 8.
          span Modelo de cadena de custodia para muestra de suelo
        figure.espacio__2
          img(src='@/assets/curso/tema1/img62.svg', alt='Tabla sobre cadena de custodia de suelos que incluye secciones para datos del sitio de muestreo, características de la muestra, condiciones ambientales, responsables del proceso y campos para firmas y observaciones.' style="max-width: 1000px")
      
      p.mb-4.espacios__moviles A continuación, se presenta la información organizada en una tabla de dos columnas que explica los aspectos clave sobre la cadena de custodia, el empaque y la preservación de las muestras de suelo:

      .bg--img_03.mb-4
        .row.h-100.align-items-center
          .col-lg
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-right")
              .row(titulo="Cadena de custodia").ajuste-cajaAcordion
                p.mb-0 Debe acompañar las muestras desde su obtención, durante su transporte y hasta su recepción en el laboratorio, garantizando la trazabilidad y la integridad del proceso.
              .row(titulo="Empaque de la muestra").ajuste-cajaAcordion
                p.mb-0 Utilizar bolsas plásticas nuevas, limpias y resistentes al transporte. Para suelos agrícolas, se recomienda empacar en doble bolsa para proteger el rótulo y evitar derrames.   
              .row(titulo="Preservación de la muestra").ajuste-cajaAcordion
                p.mb-0 Cuando el análisis requiere métodos específicos, como los microbiológicos, conservar la muestra entre 4ºC y 6ºC. En muestreos para determinación de minerales con fines agrícolas, no se requiere refrigeración.
          .col-lg-auto
            figure(data-aos="fade-left").d-none.d-xl-block
              img(src="@/assets/curso/tema1/img63.svg", alt="" style="width: 300px").m-auto

    .caja-titulos-tercer-nivel.mb-5.espacios__moviles_6(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Herramientas, materiales y equipos requeridos para la medición en suelo

    p.mb-4 Para asegurar que la <strong>toma de muestras de suelo</strong> se realice conforme al protocolo de muestreo, es fundamental contar con los <strong>materiales y equipos adecuados</strong> en el momento de la medición. Esto garantiza la precisión en los análisis y evita la contaminación de las muestras. Cuando se van a analizar las propiedades <strong>físicas, químicas y biológicas</strong> del suelo, se recomienda disponer, como mínimo, de los siguientes elementos:

    .row.fondo_color_5
      .row.align-items-center.mb-5
        .col-xl
          .row.align-items-center.estilo__caja_3(data-aos="fade-up")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img65.png", alt="" style="max-width: 300px").m-auto
            .col-xl
              <ul class="fa-ul estilo__li">
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Formatos de información</strong> para el registro de datos en campo.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Baldes</strong> para la recolección y mezcla de submuestras.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Bolsas de plástico limpias</strong> o el <strong>recipiente definido por el laboratorio</strong> encargado del análisis.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Recipientes de vidrio</strong> cuando se tomen muestras para análisis de <strong>indicadores biológicos</strong>.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Sacabocados, barreno, pala o garlancha</strong>, todos limpios, para la extracción del suelo.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Machete limpio</strong>, útil para remover o cortar capas superficiales si es necesario.</li>
                <li><span class="fa-li"><i class="fas fa-leaf"></i></span><strong>Mapa del agroecosistema</strong> objeto de la medición, que permita ubicar los puntos de muestreo y registrar observaciones.</li>
              </ul>
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img66.svg", alt="" style="max-width: 250px").m-auto
      
      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo_2(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Consideraciones adicionales para la toma y procesamiento de muestras de suelo

      .row.mb-5
        .col-xl-4
          p.mb-0 Cuando <strong>no se cuenta con un barreno</strong>, el muestreo puede realizarse utilizando una <strong>pala o palín</strong> junto con un <strong>balde</strong>, procurando siempre <strong>extraer cantidades similares de suelo en cada punto</strong> y mantener una <strong>profundidad constante</strong>. Este procedimiento permite obtener una muestra representativa, aunque con menor precisión que los equipos especializados.
        .col-xl-3
          figure.d-none.d-xl-block(data-aos="zoom-in")
            img(src="@/assets/curso/tema1/img67.png", alt="" style="max-width: 300px").m-auto
        .col-xl-5.estilo__caja_12.espacios__moviles_1(data-aos="fade-left")
          p.mb-0 Existen también <strong>equipos o kits portátiles</strong> que permiten realizar análisis <strong>químicos del suelo in situ</strong>. Estos dispositivos pueden procesar variables como el <strong>pH</strong>, la <strong>conductividad eléctrica</strong> y algunos <strong>nutrientes específicos</strong>, tales como <strong>iones nitrato (NO₃), calcio (Ca), potasio (K) y sodio (Na)</strong>. Sin embargo, se recomienda complementar estas mediciones con un <strong>análisis completo en laboratorio</strong>, que permita evaluar de forma integral las propiedades <strong>químicas, físicas y biológicas</strong> del suelo.
      
      .row.align-items-center.mb-5.estilo__caja_13(data-aos="zoom-in")
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img68.svg", alt="" style="max-width: 350px").m-auto
        .col-xl
          p.mb-0 Respecto al <strong>procesamiento de las muestras</strong>, tanto para análisis de <strong>calidad de suelo como de agua</strong>, lo más frecuente es que se realice en un <strong>laboratorio especializado en análisis de agua y suelos</strong>. Por esta razón, se recomienda <strong>consultar y seguir el protocolo de toma de muestras</strong> establecido por cada laboratorio, con el fin de asegurar la validez y comparabilidad de los resultados obtenidos.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Materiales y herramientas para la toma de muestras de suelo

    p.mb-4.espacios__moviles Para realizar adecuadamente la toma de muestras de suelo destinadas al análisis de <strong>propiedades físicas, químicas y biológicas</strong>, es recomendable contar, como mínimo, con los siguientes elementos:

    .row.mb-5.espacio__3
      .col-xl-4(data-aos="fade-right")
        .row.estilo__caja_14.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img69.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            h5.mb-0 Formatos de información
            p.mb-0 Para registrar datos relevantes durante el proceso de muestreo.
        .row.estilo__caja_14.align-items-center.estilo__caja_14_ajuste
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img72.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            h5.mb-0 Sacabocados, barreno, pala o garlancha
            p.mb-0 Todos en condiciones limpias, para la extracción del suelo.
      .col-xl-4(data-aos="zoom-in")
        .row.estilo__caja_14.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img70.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            h5.mb-0 Baldes
            p.mb-0 Útiles para recolectar y mezclar las submuestras.
        .row.estilo__caja_14.align-items-center.estilo__caja_14_ajuste
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img73.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            h5.mb-0 Machete limpio
            p.mb-0 Empleado para remover vegetación superficial o preparar el punto de muestreo.
      .col-xl-4(data-aos="fade-left")
        .row.estilo__caja_14.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img71.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            h5.mb-0 Bolsas de plástico limpias 
            p.mb-0 El <storng>recipiente definido por el laboratorio</storng> que realizará el análisis, para conservar y transportar las muestras.
        .row.estilo__caja_14.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img74.svg", alt="" style="max-width: 100px").m-auto
          .col-xl
            h5.mb-0 Mapa del agroecosistema objeto de la medición
            p.mb-0 Para ubicar los puntos de muestreo y orientar correctamente el trabajo en campo.
    
    p.mb-4 A continuación, se mencionan algunos laboratorios en los que se pueden realizar los análisis de aguas y suelos:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-up")
      h5 Tabla 1.
      span Laboratorios especializados en análisis de agua y suelos en Colombia

    .tabla-a.color-acento-contenido(data-aos="fade-up")
      table
        thead
          tr
            th Nombre del laboratorio
            th Enlace completo
        tbody
          tr
            td Red de Laboratorios de la Corporación Colombiana de Investigación Agropecuaria (AGROSAVIA)
            td <a href="https://www.agrosavia.co/media/3798/cata-logo-laboratorios-agrosavia.pdf" target="_blank">https://www.agrosavia.co/media/3798/cata-logo-laboratorios-agrosavia.pdf</a>
          tr
            td Laboratorio de Agua y Suelos de la Universidad Nacional de Colombia
            td <a href="https://cienciasagrarias.bogota.unal.edu.co/servicios/laboratorio-de-aguas-y-suelos" target="_blank">https://cienciasagrarias.bogota.unal.edu.co/servicios/laboratorio-de-aguas-y-suelos</a>
          tr
            td Laboratorio de Servicios Analíticos del Centro Internacional de Agricultura Tropical (CIAT)
            td <a href="https://ciat.cgiar.org/labs/laboratorio-de-servicios-analiticos/?lang=es" target="_blank">https://ciat.cgiar.org/labs/laboratorio-de-servicios-analiticos/?lang=es</a>
          tr
            td Laboratorio Nacional de Suelos del Instituto Geográfico Agustín Codazzi (IGAC)
            td <a href="https://www.igac.gov.co/index.php/el-igac/areas-estrategicas/direccion-de-gestion-deinformacion-geografica/laboratorio-nacional-de-suelos" target="_blank">https://www.igac.gov.co/index.php/el-igac/areas-estrategicas/direccion-de-gestion-deinformacion-geografica/laboratorio-nacional-de-suelos</a>
          tr
            td Laboratorio de Agua y Suelos de la Universidad del Valle
            td <a href="http://eidenar.univalle.edu.co/index.php/laboratorios/laboratorios-de-aguas-y-suelos-agricolas" target="_blank">http://eidenar.univalle.edu.co/index.php/laboratorios/laboratorios-de-aguas-y-suelos-agricolas</a>

    Separador
    <!-- BLOQUE 3 -->
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Muestreo en aguas

    p.mb-4 El muestreo en aguas puede realizarse de manera manual o automática, dependiendo del acceso al sitio y de los recursos disponibles.

    .row.fondo_color_6
      TabsA.color-acento-botones.mb-5(data-aos="fade-up")
        .tarjeta.color-acento-botones--borde.p-4(titulo="Muestreo manual")
          .row.align-items-center
            .col-lg
              h4 Muestreo manual
              p.mb-0 Este tipo de muestreo se realiza en <strong>lugares de fácil acceso</strong> o en aquellos que, con ciertas adaptaciones, permiten facilitar la recolección de muestras. Una de sus principales ventajas es que el personal responsable puede <strong>observar directamente las características del agua</strong>, como la <strong>presencia de sustancias flotantes, color, olor</strong> y <strong>variaciones en el caudal</strong> (IDEAM, 2002).
            .col-lg-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img76.png", alt="" style="max-width: 350px").m-auto
        .tarjeta.color-acento-botones--borde.p-4(titulo="Muestreo automático")
          .row.align-items-center
            .col-lg
              h4 Muestreo automático
              p.mb-0 Recomendado en sitios de <strong>difícil acceso</strong> o cuando se dispone del equipo adecuado, el muestreo automático ofrece <strong>mayor precisión</strong> en la recolección. Sin embargo, tiene como desventajas la <strong>complejidad de su montaje y calibración</strong>, además de requerir <strong>revisiones continuas</strong> para evitar atascamientos o fallas operativas (IDEAM, 2002).
            .col-lg-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img77.png", alt="" style="max-width: 350px").m-auto
      
      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo_3.ajuste__titulo_movil_3(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Localización de puntos de muestreo en aguas
      
      p.mb-4.espacios__moviles La ubicación estratégica de los puntos de muestreo es fundamental para evaluar la calidad del agua en función de su relación con el agroecosistema. Se recomienda ubicar los puntos en:

      .row.align-items-center.mb-5
        .col-xl
          .row.align-items-center.estilo__caja_3(data-aos="fade-up")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img78.svg", alt="" style="max-width: 300px").m-auto
            .col-xl
              <ul class="fa-ul estilo__li">
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span>Fuente superficial cerca del nacimiento, acuífero o manantial.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Fuente superficial aguas arriba del agroecosistema.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Fuente superficial aguas abajo del agroecosistema.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Principales tributarios antes de su desembocadura en la fuente superficial.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Fuente superficial aguas arriba de la desembocadura al mar.</li>
                <li class="mb-2"><span class="fa-li"><i class="fas fa-leaf"></i></span>Vertimientos del agroecosistema, si los hay.</li>
              </ul>
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img79.png", alt="" style="max-width: 300px").m-auto

      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo_4.ajuste__titulo_movil_4(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Tipos de muestras en agua
      
      p.mb-4.espacios__moviles Dependiendo del objetivo del estudio y la dinámica del cuerpo de agua, se pueden emplear distintos tipos de muestras:

      .row.mb-5
        .col-lg-4(data-aos="fade-right")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img80.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Muestra puntual
            p.mb-0 Corresponde a una muestra representativa <strong>tomada en un solo punto y momento</strong>, en la que el <strong>tiempo y lugar no influyen significativamente</strong> en los resultados.
        .col-lg-4.espacios__moviles_1(data-aos="fade-up")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img81.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Muestra compuesta
            p.mb-0 Está formada por <strong>varias muestras puntuales</strong> recolectadas en <strong>intervalos y periodos determinados</strong>, lo que permite obtener una visión más completa de los cambios en el tiempo.
        .col-lg-4.espacios__moviles_1(data-aos="fade-left")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src='@/assets/curso/tema1/img82.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Muestra integrada
            p.mb-0 Consiste en la <strong>mezcla de varias muestras tomadas simultáneamente en distintos puntos</strong>, con el objetivo de obtener un <strong>valor promedio representativo</strong> del área evaluada.

    .row.align-items-center.mb-5
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img83.svg", alt="" style="max-width: 300px").m-auto
      .col-xl
        p.mb-0 El muestreo de agua es una actividad fundamental para evaluar la calidad de los recursos hídricos en un agroecosistema. Involucra tanto la <strong>medición directa de parámetros en campo</strong>, como la <strong>recolección, conservación y análisis de muestras en laboratorio</strong>, siguiendo criterios técnicos y protocolos específicos.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Técnicas de muestreo en agua

    p.mb-4.espacios__moviles El muestreo de agua es una actividad fundamental para evaluar la calidad de los recursos hídricos en un agroecosistema. Involucra tanto la <strong>medición directa de parámetros en campo</strong>, como la <strong>recolección, conservación y análisis de muestras en laboratorio</strong>, siguiendo criterios técnicos y protocolos específicos.

    TabsA.color-acento-botones.mb-5(data-aos="fade-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Medición de parámetros en campo")
        .row.align-items-center
          .col-lg
            h4 Medición de parámetros en campo
            p.mb-0 Los parámetros como el <strong>pH, oxígeno disuelto, conductividad, turbiedad y temperatura</strong> se miden utilizando <strong>equipos portátiles</strong>, tales como <strong>sondas multiparamétricas, pHmetros y conductímetros</strong>. Estas herramientas permiten obtener valores inmediatos y confiables sobre las condiciones del agua en el lugar de muestreo.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img84.png", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Aguas superficiales y vertimientos")
        .row.align-items-center
          .col-lg
            h4 Aguas superficiales y vertimientos
            p.mb-0 En fuentes superficiales, el equipo se introduce directamente en la <strong>sección transversal</strong> del cuerpo de agua, evitando zonas con <strong>alta turbulencia</strong>. Si no es posible hacerlo de esta forma, se recoge el agua en un <strong>recipiente plástico purgado</strong> y se realiza la lectura <strong>inmediatamente</strong>. En el caso de vertimientos, la muestra se toma en un recipiente plástico y se mide con el equipo, procurando que este <strong>no toque el fondo</strong> para evitar alteraciones en la lectura.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img85.png", alt="" style="max-width: 350px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Manejo de muestras de agua

    p.mb-4.espacios__moviles El <strong>manejo adecuado de las muestras de agua</strong> es esencial para garantizar la representatividad y la confiabilidad de los análisis posteriores. Este manejo incluye tanto la definición de la frecuencia de muestreo como la correcta manipulación, rotulado, almacenamiento y transporte de las muestras hacia el laboratorio.

    .row.align-items-center.mb-5
      .col-xl
        .row.align-items-center.mb-3.estilo__caja_15(data-aos="fade-right")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img86.png", alt="" style="max-width: 400px").m-auto
          .col-xl
            h4.estilo___h4 Frecuencia de muestreo
            p La periodicidad del muestreo debe definirse según los <strong>objetivos del estudio de variables ambientales</strong> en el agroecosistema. Sin embargo, se recomienda realizar al menos <strong>cuatro (4) muestreos al año</strong>, distribuidos de la siguiente forma:
            <ul class="fa-ul">
              <li><span class="fa-li "><i class="fas fa-leaf"></i></span>Uno (1) durante la <strong>época de lluvias</strong>.</li>
              <li><span class="fa-li "><i class="fas fa-leaf"></i></span>Uno (1) en <strong>época seca</strong>.</li>
              <li><span class="fa-li "><i class="fas fa-leaf"></i></span>Dos (2) en <strong>épocas de transición</strong>.</li>
            </ul>
        .bloque-texto-b.color-primario.mb-4.ajuste__cita_3
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3 Para otros parámetros más específicos, como plaguicidas y metales pesados, se aconseja realizar dos (2) muestreos anuales en los puntos previamente establecidos para tal fin .
            i.fas.fa-quote-right
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img87.png", alt="" style="max-width: 300px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5.espacios__moviles_2(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Caudales

    p.mb-4.espacios__moviles El <strong>caudal</strong> es una variable ambiental que se refiere al <strong>volumen de agua que fluye a través de una sección transversal</strong> de un cuerpo de agua en un intervalo de tiempo determinado. Se expresa comúnmente en <strong>metros cúbicos por segundo (m³/s)</strong> o <strong>litros por segundo (L/s)</strong>.

    .row.align-items-center.mb-5
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-right")
          img(src="@/assets/curso/tema1/img88.svg", alt="" style="max-width: 500px").m-auto
      .col-xl.estilo__caja_16(data-aos="fade-left")
        p.mb-0 La medición del caudal es fundamental para caracterizar tanto <strong>fuentes hídricas naturales</strong> como <strong>puntos de captación (bocatomas)</strong> o <strong>vertimientos</strong> provenientes de actividades productivas dentro del agroecosistema. Para este fin, se emplean distintos tipos de <strong>aforos líquidos</strong>, dependiendo de las condiciones del sitio de muestreo.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Métodos de aforo

    p.mb-4.espacios__moviles Existen diversos <strong>métodos de aforo</strong>, cuya aplicación varía según las características de la <strong>fuente hídrica o el vertimiento</strong>. A continuación, se presentan los métodos más comunes y su principal aplicación:

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-up")
      h5 Tabla 2.
      span Recomendaciones de uso de los métodos de aforo

    .tabla-a.color-acento-contenido.mb-5(data-aos="fade-up")
      table
        caption Fuente: Protocolo de monitoreo y seguimiento del agua (IDEAM, 2021)
        thead
          tr
            th Método de aforo
            th Sección o condiciones de uso
            th Rango de velocidad o caudal recomendado
        tbody
          tr
            td.tabla__bold Método área-velocidad - Molinete hidrométrico
            td Por vadeo. Profundidad < 1 m
            td Velocidad entre 1 y 3 m/s
          tr
            td.tabla__bold Método área-velocidad - Molinete hidrométrico
            td Por suspensión. Profundidad < 1 m
            td Velocidad entre 1 y 3 m/s
          tr
            td.tabla__bold Método área-velocidad - Molinete hidrométrico
            td Angular. Grandes ríos donde se requiere apoyo topográfico para medir la posición del bote
            td Velocidad entre 1 y 3 m/s
          tr
            td.tabla__bold Método área-velocidad - Molinete hidrométrico
            td Bote cautivo. Ríos o canales medianos que permiten extender y alinearse con manila
            td Velocidad entre 1 y 3 m/s
          tr
            td.tabla__bold Método área-velocidad - Molinete hidrométrico
            td Lancha en movimiento. Ríos muy anchos y caudalosos
            td Velocidad entre 1 y 3 m/s
          tr
            td.tabla__bold Flotadores
            td Muy baja profundidad, presencia de material en suspensión o situaciones de riesgo para el aforador
            td No especificado. Baja precisión
          tr
            td.tabla__bold ADCP (Perfilador de corriente Doppler acústico)
            td Hasta 220 m de profundidad. Pequeños a grandes ríos
            td Velocidades hasta 9 m/s
          tr
            td.tabla__bold FlowTracker2
            td Flujo laminar en cuerpos de agua de flujo bajo y poca profundidad (mínimo 0.02 m)
            td Velocidad menor de 4 m/s
          tr
            td.tabla__bold Volumétrico
            td Secciones pequeñas (< 1 m²)
            td Caudal menor de 100 L/s
          tr
            td.tabla__bold Dilución con trazadores
            td Presencia de cantos rodados grandes, lechos inestables y flujo turbulento
            td Alta turbulencia, velocidades muy altas. Baja precisión
          tr
            td.tabla__bold Estructuras aforadoras - Vertederos
            td Secciones pequeñas (< 1 m²)
            td Velocidad menor de 0.15 m/s
          tr
            td.tabla__bold Estructuras aforadoras - Canaletas
            td Secciones pequeñas (preferiblemente < 2.5 m de ancho)
            td Caudal menor de 4 m³/s
        
    .row.fondo_color_6.mb-5
      .row.align-items-center.mb-3
        .col-xl-auto
          figure.d-none.d-xl-block(data-aos="fade-right")
            img(src="@/assets/curso/tema1/img56.svg", alt="" style="max-width: 85px").m-auto
        .col-xl
          p.mb-0.espacios__moviles Para el caso del método área velocidad, se requiere conocer inicialmente el ancho de la fuente hídrica y dependiendo de su longitud, se divide en varias secciones, además es necesario conocer las profundidades de cada sección, con estos datos se procede a calcular el área de la sección transversal. 

      .row.align-items-center.mb-5(data-aos="fade-up")
        .col-xl-2
        .col-xl-8
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 9.
            span Puntos de observación en la sección transversal de una fuente hídrica
          figure.mb-2
            img(src='@/assets/curso/tema1/img90.svg', alt='En la imagen presenta  un ejemplo de una sección transversal de un río o quebrada, en la cual para medir el caudal puede aplicarse el método de área velocidad.' style="max-width: 850px")
          figcaption <strong>Nota</strong>. Tomado de  IDEAM (2021)
      
      p.mb-4.espacios__moviles Para determinar la velocidad del agua, el equipo más utilizado es el molinete hidrométrico. Para profundidades reducidas se emplean micromolinetes, mientras que en mayores profundidades se requiere el uso del molinete convencional. Este equipo debe estar debidamente calibrado para garantizar un cálculo preciso de la velocidad del agua.
      
      .row.align-items-center.mb-5(data-aos="fade-up")
        .col-xl-2
        .col-xl-5
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 10.
            span Molinete para medición de velocidad del agua en fuentes hídricas
          figure.mb-2
            img(src='@/assets/curso/tema1/img91.svg', alt='La imagen presenta  un molinete, equipo usado para medir la velocidad del flujo de agua, este equipo por medio de la calibración arroja una única ecuación para el cálculo de la velocidad.' style="max-width: 500px")
          figcaption.ajuste_nota.ajuste_nota_movil <strong>Nota</strong>. Tomado de  IDEAM (2021)
        .col-xl-3
          figure.d-none.d-xl-block(data-aos="fade-left")
            img(src="@/assets/curso/tema1/img92.svg", alt="" style="max-width: 300px").m-auto
      
      .row.mb-5(data-aos="fade-up")
        .col-xl-1
        .col-xl-10
          .row.align-items-center.estilo__caja_17
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img93.svg", alt="" style="max-width: 67px").m-auto
            .col-xl
              p.mb-0 <strong>Estimado aprendiz</strong>: para profundizar en el tema y comprenderlo mejor, se sugiere consultar en el material complementario el Protocolo de monitoreo y seguimiento del agua del IDEAM.
    
    .caja-titulos-tercer-nivel.mb-5.espacios__moviles_7(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Procedimiento para la toma de muestras

    p.mb-4.espacios__moviles La toma de muestras de agua es un proceso que debe seguir un protocolo definido para asegurar la representatividad y confiabilidad de los análisis. El tipo de muestra a recolectar dependerá de los objetivos del estudio, las características del cuerpo de agua o del vertimiento, y los parámetros a analizar. Los métodos más comunes son las muestras puntuales y las muestras compuestas.

    TabsA.color-acento-botones.mb-5(data-aos="fade-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestras puntuales")
        .row.align-items-center
          .col-lg
            h4 Muestras puntuales
            p.mb-0 Para la recolección de muestras puntuales, puede emplearse un muestreador en el caso de aguas superficiales o subterráneas. Si la muestra proviene de agua superficial o de un vertimiento, también puede utilizarse un balde; en este caso, luego de ser recolectada, se transfiere al recipiente correspondiente (IDEAM, 2002). Los parámetros medidos in situ, así como las variables bacteriológicas y los Compuestos Orgánicos Volátiles (COV), deben analizarse a partir de muestras puntuales.
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img94.png", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestras compuestas")
        .row.align-items-center
          .col-lg
            h4 Muestras compuestas
            p.mb-0 La obtención de muestras compuestas implica la recolección de varias muestras puntuales tomadas en diferentes momentos. La frecuencia y duración de este proceso dependerá del plan de muestreo, del tipo de actividad, y de las características del cuerpo de agua o del vertimiento que se va a analizar. Este tipo de muestra se conforma al tomar y mezclar en un solo recipiente un volumen (alícuota) de muestra, calculado según los lineamientos establecidos por el IDEAM (2002).
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img95.png", alt="" style="max-width: 350px").m-auto

    .row.fondo_color_8.mb-5
      .row.mb-5(data-aos="fade-up")
        .col-xl-1
        .col-xl-10
          .row.align-items-center.estilo__caja_18
            .col-xl
              figure.mb-3
                img(src="@/assets/curso/tema1/img97.svg", alt="" style="max-width: 186px")
              p.mb-3 Dónde:
              p.mb-2.estilo__p <strong>Vi =</strong> Volumen de cada alícuota o porción de muestra
              p.mb-2.estilo__p <strong>V =</strong> Volumen total a componer.
              p.mb-2.estilo__p <strong>Qi =</strong> Caudal instantáneo de cada muestra.
              p.mb-2.estilo__p <strong>Qp =</strong> Caudal promedio durante el muestreo.
              p.mb-2.estilo__p <strong>n =</strong> Número de muestras tomadas.
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img98.svg", alt="" style="max-width: 480px").m-auto

      .caja-titulos-tercer-nivel.mb-5.ajuste__titulo_5.ajuste__titulo_movil_5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
        .col
          h3 Muestras integradas
      
      .row.align-items-center.mb-5
        .col-xl
          p.mb-3.espacios__moviles Las muestras integradas se utilizan cuando se requiere un resultado representativo promedio de distintos puntos de una sección de un cuerpo de agua. Son especialmente útiles en ríos con un ancho entre 10 y 100 metros, donde existen variaciones en las características del agua a lo largo de la sección transversal.
          .row.align-items-center.mb-3
            .col-xl-auto
              figure.d-none.d-xl-block(data-aos="fade-right")
                img(src="@/assets/curso/tema1/img83.svg", alt="" style="max-width: 300px").m-auto
            .col-xl
              p.mb-0 Para este tipo de muestreo se puede utilizar un balde limpio y previamente purgado, al igual que cualquier otro recipiente empleado (jarras, frascos, baldes, probetas, etc.).
          .row.align-items-center.estilo__caja_3(data-aos="fade-up")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img99.png", alt="" style="max-width: 275px").m-auto
            .col-xl
              p.mb-3 El procedimiento recomendado es el siguiente:
              <ul class="fa-ul estilo__li">
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span>Medir el ancho del río con una cinta métrica, ubicándose en el tramo aguas abajo del punto seleccionado.</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span>Tomar alícuotas (pequeñas porciones de muestra) de forma simultánea o en el menor tiempo posible en tres puntos: a ¼, a ½ y a ¾ del ancho del cauce.</li>
                <li><span class="fa-li "><i class="fas fa-leaf"></i></span>Aplicar el método de incrementos de ancho igual, lo que significa que cada alícuota representa un mismo porcentaje del ancho del cuerpo de agua.</li>
              </ul>
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img100.png", alt="" style="max-width: 295px").m-auto
      
      p.mb-4.espacios__moviles Este procedimiento garantiza una muestra compuesta que represente las condiciones medias del flujo en la sección seleccionada.

    .caja-titulos-tercer-nivel.mb-5.espacios__moviles_7(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Herramientas, materiales y equipos requeridos para el muestreo en agua

    p.mb-4.espacios__moviles Para realizar un muestreo de agua adecuado y conforme a los protocolos establecidos, es necesario contar con una <strong>dotación completa de herramientas</strong>, materiales y equipos. Estos elementos aseguran la correcta recolección, conservación y transporte de las muestras, así como la seguridad del personal en campo.

    p.mb-4 A continuación, se enumeran los materiales recomendados para el <strong>muestreo en aguas</strong>:

    .row.fondo_img_1.mb-5(data-aos="fade-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img102.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Mapas</strong> de la red de calidad del agua o de los <strong>puntos de monitoreo georreferenciados</strong> previamente seleccionados.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img103.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Libreta de campo</strong> para el registro de observaciones.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img104.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Marcadores o rotuladores</strong> y <strong>cinta de enmascarar</strong> para el rotulado de frascos y bolsas.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img105.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Bolsas</strong> para transporte o recolección de materiales auxiliares.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img106.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Documentos necesarios</strong>: formatos de captura de datos, etiquetas de identificación, y formatos de cadena de custodia.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img107.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Dotación personal de seguridad</strong>: guantes, botas, chalecos, gorros y cascos.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img108.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Botellas de plástico y de vidrio</strong>, según los requerimientos del análisis.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img109.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Reactivos para la preservación</strong> de las muestras recolectadas.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img110.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Reactivos para análisis in situ</strong>, en caso de mediciones inmediatas en campo.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img111.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Agua destilada</strong>, para enjuague y limpieza del material de muestreo.

        .tarjeta.color-acento-botones.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/tema1/img112.svg' style="max-width: 90px").m-auto
          p.mb-0 <strong>Nevera portátil</strong>, indispensable para conservar las muestras a bajas temperaturas hasta su llegada al laboratorio.
      
      .row.mb-5
        .col-xl-1
        .col-xl-10
          .row.align-items-center.estilo__caja_19(data-aos="fade-up")
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img113.png", alt="" style="max-width: 275px").m-auto
            .col-xl
              h5.mb-3 Importante
              p.mb-0 Si el muestreo se realiza sobre un <strong>vertimiento</strong>, deben tenerse en cuenta los <strong>parámetros específicos que deben analizarse</strong>, los cuales varían según el tipo de actividad productiva asociada. Para ello, es necesario consultar la <strong>Resolución 0631 de 2015</strong>, donde se establece el marco normativo para los vertimientos y los parámetros sujetos a control. Para mayor comprensión sobre este tema, se recomienda revisar dicha resolución en el <strong>material complementario</strong> proporcionado.
    
    .caja-titulos-tercer-nivel.mb-5.espacios__moviles_7(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Rotulado y transporte de la muestra de agua

    p.mb-4.espacios__moviles La muestra de agua debe estar debidamente rotulado con los datos de fecha de muestreo, fuente de donde se toma la muestra, lugar, destino o uso, responsable de muestreo, tal como se muestra en la siguiente figura:

    .row.fondo_color_9
      .col-xl-1 
      .col-xl-10
        .row.align-items-center.mb-5
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-right")
              img(src="@/assets/curso/tema1/img115.svg", alt="" style="max-width: 190px").m-auto
          .col-xl(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-2
              h5 Figura 11.
              span Modelo de rótulo para muestra de agua
            figure
              img(src='@/assets/curso/tema1/img116.svg', alt='La imagen presenta  un ejemplo del rótulo para muestras de agua, la información básica puede variar de un laboratorio a otro, sin embargo, este es un ejemplo con los datos básicos que debe contener una muestra de agua, ya sea de agua superficial, residual o de consumo humano.' style="max-width: 900px")
      
      .row.align-items-center.mb-5
        .col-xl
          p.mb-0 Para garantizar las condiciones adecuadas de <strong>transporte, preservación e integridad de la muestra</strong>, así como para contar con toda la <strong>información técnica y de trazabilidad</strong>, el responsable del muestreo debe <strong>diligenciar la cadena de custodia</strong>. Este documento es esencial para asegurar que la muestra recolectada no ha sido alterada, contaminada o manipulada inadecuadamente entre el punto de muestreo y el laboratorio de análisis. Cada laboratorio, como parte de su <strong>Sistema de Gestión de Calidad</strong>, cuenta con un <strong>formato propio</strong> de cadena de custodia. Sin embargo, a continuación se presenta un ejemplo general que ilustra los campos básicos que usualmente se deben registrar:
        .col-xl-auto
          figure.d-none.d-xl-block(data-aos="fade-left") 
            img(src="@/assets/curso/tema1/img117.svg", alt="" style="max-width: 500px").m-auto

      .row.mb-5.espacios__moviles
        .col-xl-1 
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 12.
            span Modelo de cadena de custodia para muestra de agua
          figure.espacio__2
            img(src='@/assets/curso/tema1/img118.svg', alt='Tabla sobre cadena de custodia de agua que organiza información del lugar de muestreo, tipo de agua, uso del recurso, coordenadas, observaciones, y datos de los responsables de toma, solicitud, transporte y recepción de la muestra. ' style="max-width: 1030px")

      .row.align-items-center.mb-5.estilo__caja_20(data-aos="fade-up")
        .col-xl-auto
          figure.d-none.d-xl-block
            img(src="@/assets/curso/tema1/img119.svg", alt="" style="max-width: 420px").m-auto
        .col-xl
          <ul class="fa-ul estilo__li">
            <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span>Empacar la muestra en el recipiente requerido (Plástico o Vidrio), y aplicar el reactivo conservante dependiendo del parámetro a analizar.</li>
            <li><span class="fa-li "><i class="fas fa-leaf"></i></span>Adicionalmente se debe realizar la preservación de la muestra con frío entre 4ºC y 6ºC, por lo cual en los muestreos se debe contar con nevera portátil, hielo o geles refrigerantes.</li>
          </ul>

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Equipos e instrumentos de medición de parámetros de calidad de agua

    .row.fondo_color_10
      p.mb-4.espacios__moviles El análisis de la calidad del agua requiere del uso de equipos e instrumentos especializados que permitan medir, con precisión, diferentes variables físico-químicas y biológicas. Aunque en la mayoría de los casos las muestras recolectadas son <strong>procesadas en laboratorio</strong>, es importante tener en cuenta que <strong>cada laboratorio puede definir su propio protocolo</strong> de toma y recepción de muestras. Por ello, se recomienda consultar con antelación dichos lineamientos para asegurar que los procedimientos de campo sean compatibles con los requerimientos del análisis. A continuación, se presentan algunos de los <strong>equipos más utilizados para la medición de parámetros de calidad de agua</strong>:

      .row.mb-3
        .col-xl-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/img121.png", alt="" style="max-width: 400px").m-auto
          p.mb-0.estilo__caja_21.ajuste___3.estilo__caja_21_ajuste Tester de pH y temperatura 
        .col-xl-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/img122.png", alt="" style="max-width: 400px").m-auto
          p.mb-0.estilo__caja_21.ajuste___3.estilo__caja_21_ajuste Medidor portátil de pH/temperatura 
        .col-xl-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/tema1/img123.png", alt="" style="max-width: 400px").m-auto
          p.mb-0.estilo__caja_21.estilo__caja_21_ajuste Medidor de conductividad eléctrica y sólidos totales disuelto
      
      .row
        .col-xl-2
        .col-xl-8
          .row
            .col-xl-6(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/tema1/img124.png", alt="" style="max-width: 400px").m-auto
              p.mb-0.estilo__caja_21.estilo__caja_21_ajuste Equipo multiparamétrico de aguas
            .col-xl-6(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/tema1/img125.png", alt="" style="max-width: 400px").m-auto
              p.mb-0.estilo__caja_21.estilo__caja_21_ajuste Espectrofotómetro 

      Separador.espacios__moviles
      <!-- BLOQUE 4 -->
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Muestreo en comunidades hidrobiológicas

    .row.align-items-center.mb-5
      .col-xl  
        p.mb-4 Como parte de las <strong>variables ambientales</strong> que pueden influir en un agroecosistema, las <strong>comunidades hidrobiológicas</strong> (como macroinvertebrados, fitoplancton o zooplancton) representan indicadores clave del estado ecológico del recurso hídrico.
        .bloque-texto-b.color-primario.mb-4.ajuste__cita_4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3 Para realizar este tipo de muestreo, es fundamental seguir una planificación adecuada y cumplir con criterios técnicos que garanticen la validez de los resultados. A continuación, se presentan las recomendaciones básicas.
            i.fas.fa-quote-right
      .col-xl-auto
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src="@/assets/curso/tema1/img126.svg", alt="" style="max-width: 400px").m-auto
    
    .bg--img_03.mb-5.espacios__moviles_8
      .row.h-100.align-items-center
        .col-lg-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema1/img127.svg", alt="" style="width: 300px").m-auto
        .col-lg
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Recomendaciones generales").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Establecer un plan de muestreo</strong>, que incluya objetivos, sitios, frecuencia y técnicas a utilizar.</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Conocer y aplicar el protocolo de muestreo</strong> correspondiente al tipo de comunidad hidrobiológica.</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Contar con personal idóneo y capacitado</strong> para la recolección, preservación y registro de muestras.</li>
                <li><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Llevar los formatos de campo</strong> para el registro sistemático de la información recolectada.</li>
              </ul>
            .row(titulo="Para el etiquetado de las muestras, se debe incluir la siguiente información").ajuste-cajaAcordion
              <ul class="fa-ul">
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Comunidad hidrobiológica</strong> muestreada (por ejemplo: macroinvertebrados, fitoplancton, etc.).</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Fecha de colecta</strong> (día, mes y año).</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Ubicación geográfica</strong> o nombre del sitio de muestreo.</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Tipo de muestra</strong> (agua, sedimento, red de arrastre, etc.).</li>
                <li class="mb-2"><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Modo de preservación</strong> (alcohol, formol, refrigeración, entre otros).</li>
                <li><span class="fa-li "><i class="fas fa-leaf"></i></span><strong>Nombre del colector</strong> o persona responsable de la toma de la muestra.</li>
              </ul>
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Organismos planctónicos

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img128.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Este tipo de organismos por lo general se encuentran suspendidos en la columna de agua, principalmente en aguas con poco movimiento, estos organismos son ampliamente usados como indicadores de calidad de agua, para el caso de agroecosistemas donde se usan fertilizantes, los residuos de éstos pueden llegar por escorrentía a las fuentes hídricas cercanas y causar algún tipo de impacto o cambio en la calidad del agua por la acumulación de nutrientes.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de muestras

    p.mb-4.espacios__moviles El muestreo de comunidades hidrobiológicas puede involucrar dos tipos principales de muestras: <strong>cualitativas</strong> y <strong>cuantitativas</strong>. Ambas cumplen funciones complementarias en el análisis ecológico.

    TabsA.color-acento-botones.mb-5(data-aos="fade-up")
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestras cualitativas")
        .row.align-items-center
          .col-lg
            h4 Muestras cualitativas
            p.mb-0 Se toman para identificar organismos, analizar la composición de la comunidad y complementar el inventario taxonómico obtenido con muestras cuantitativas. No requieren delimitación espacial. (IDEAM, 2021, p. 353)
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img129.png", alt="" style="max-width: 350px").m-auto
      .tarjeta.color-acento-botones--borde.p-4(titulo="Muestras cuantitativas")
        .row.align-items-center
          .col-lg
            h4 Muestras cuantitativas
            p.mb-0 Permiten estimar la densidad de organismos en un área definida. Pueden ser simples o integradas, tomadas en un punto y lugar determinado. Se recomienda usar la red Surber o dispositivos similares. (IDEAM, 2021, p. 353)
          .col-lg-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img130.png", alt="" style="max-width: 350px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Materiales y equipos para muestreo de comunidades hidrobiológicas

    p.mb-4.espacios__moviles Los materiales y herramientas se pueden organizar según su función en las distintas etapas del muestreo:

    .row.fondo_img_2
      .row.mb-5
        .col-xl-3(data-aos="fade-right")
          .estilo__caja_22.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img131.svg", alt="" style="max-width: 80px").m-auto
            h5.mb-3 Recolección y captura
            p.mb-0 Red de plancton (20-23 μm), botella muestreadora de profundidad tipo Van Dorn, pértiga telescópica, balde aforado de 10 L, decámetro.
        .col-xl-3.espacios__moviles_1(data-aos="zoom-in")
          .estilo__caja_22.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img132.svg", alt="" style="max-width: 80px").m-auto
            h5.mb-3 Fijación y conservación
            p.mb-0 Frascos plásticos de boca ancha (250 mL), reactivo fijador, cinta pegante transparente, etiquetas resistentes a la humedad, neveras de icopor o plásticas.
        .col-xl-3.espacios__moviles_1(data-aos="zoom-in")
          .estilo__caja_22.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img133.svg", alt="" style="max-width: 80px").m-auto
            h5.mb-3 Manipulación y separación
            p.mb-0 Pipetas Pasteur plásticas, tabla acrílica, balanza.
        .col-xl-3.espacios__moviles_1(data-aos="fade-left")
          .estilo__caja_22.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema1/img134.svg", alt="" style="max-width: 80px").m-auto
            h5.mb-3 Registro y documentación
            p.mb-0 Cámara fotográfica, bolígrafo o rotulador permanente, formatos de campo, cadena de custodia, GPS.

      .row.mb-5
        .col-xl-2
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2
            h5 Figura 13.
            span Ejemplos de lanzamiento de red y uso de pértiga telescópica
          figure.mb-2
            img(src='@/assets/curso/tema1/img136.png', alt='En la imagen se presentan formas de captura de organismos planctónicos, en esta caso se están usando una red y una pértiga telescópica.' style="max-width: 700px")
          figcaption.ajuste___4 <strong>Nota</strong>. Tomado de  IDEAM (2021)

      .row.espacios__moviles(data-aos="fade-up")
        .col-xl-1
        .col-xl-10
          .row.align-items-center.estilo__caja_17
            .col-xl-auto
              figure.d-none.d-xl-block
                img(src="@/assets/curso/tema1/img93.svg", alt="" style="max-width: 67px").m-auto
            .col-xl
              p.mb-0 <strong>Estimado aprendiz</strong>: si desea conocer sobre el procedimiento de las muestras de comunidades hidrobiológicas en laboratorio, puede consultar el Protocolo de monitoreo y seguimiento del agua del IDEAM, el cual se encuentra en el material complementario.

    Separador
    <!-- BLOQUE 5 -->
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Muestreo de macroinvertebrados acuáticos
    
    .fondo_img_3
      .px-2
        .row.align-items-center.mb-5
          .col-xl
            p.mb-4 Los macroinvertebrados acuáticos, en especial los bentónicos que habitan en sustratos de fondo y los que habitan en plantas macrófitas son organismos bioindicadores de calidad de agua, los cuales permiten determinar la calidad desde el punto de vista biológico, aplicando ciertos índices que indican si la calidad del agua es buena, regular o mala. Es por ello que estos indicadores o variables ambientales asociadas a condiciones hidrobiológicas le pueden brindar al productor herramientas útiles para la toma de decisiones respecto al manejo de los agroecosistemas.
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-up")
              h5 Figura 14.
              span Macroinvertebrados característicos de ríos y quebradas
            figure.mb-2(data-aos="fade-up")
              img(src='@/assets/curso/tema1/img139.png', alt='Ilustración de macroinvertebrados de ríos y quebradas que incluye un milpiés segmentado, un isópodo sobre musgo y un grupo de isópodos sobre material vegetal sumergido.' style="max-width: 700px")
          .col-xl-auto
            figure.d-none.d-xl-block(data-aos="fade-left")
              img(src="@/assets/curso/tema1/img140.svg", alt="" style="max-width: 340px").m-auto
          
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
          .col
            h3 Tipos de muestras

        p.mb-4.espacios__moviles Existen dos tipos principales de muestras utilizadas en el muestreo de macroinvertebrados acuáticos: <strong>cuantitativas y cualitativas</strong>. La siguiente tabla resume sus características principales:
    
    .row.fondo-slider.mb-5
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4 Muestra cuantitativa
              p.mb-0 Permite determinar la densidad de individuos por metro cuadrado. Para recolectarla, se capturan los macroinvertebrados en un área específica del cuerpo de agua, que debe ser de al menos un metro cuadrado. Se recomienda el uso de la <em>red Surber</em>.
            .col-lg-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img141.svg', alt='' style="max-width: 500px").m-auto

          .row.h-100.justify-content-center.align-items-center
            .col-lg-6.mb-4.col-xs-12
              h4 Muestra cualitativa
              p.mb-0 No se considera un área delimitada para la recolección. Tras la identificación, los resultados se reportan como <strong>presencia-ausencia</strong> de macroinvertebrados.
            .col-lg-6
              .titulo-sexto.color-acento-contenido.mb-2
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img142.svg', alt='' style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img12.svg" style="max-width: 60px").m-auto
      .col
        h3 Equipos y herramientas para muestreo de macroinvertebrados


    .row.align-items-center.mb-4
      .col-xl
        p.mb-4.espacios__moviles Para la recolección eficiente de macroinvertebrados, se requiere el uso de diversas herramientas especializadas, tanto para la captura como para la conservación y análisis de las muestras. A continuación se listan los equipos más utilizados:
        .row.align-items-center.estilo__caja_3(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema1/img143.png", alt="" style="max-width: 300px").m-auto
          .col-xl
            <ul class="fa-ul estilo__li">
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Cámara fotográfica</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>GPS</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Red tipo Surber</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Acorazonador (ideal para sustratos lodosos)</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Draga Peterson</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Pinceles de cerda suave y pinzas entomológicas</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Lupa</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Frascos de plástico de boca ancha (500 ml, doble rosca)</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Bolsas de cierre hermético</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Frasco lavador</li>
              <li class="mb-1"><span class="fa-li "><i class="fas fa-leaf"></i></span>Formatos de campo</li>
              <li><span class="fa-li "><i class="fas fa-leaf"></i></span>Formato de custodia</li>
            </ul>
      .col-xl-auto(data-aos="fade-left")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img144.svg", alt="" style="max-width: 300px").m-auto

    .row.align-items-center.estilo__caja_23(data-aos="fade-right")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img145.svg", alt="" style="max-width: 72px").m-auto
      .col-xl-9
        h5.mb-2 Preservación de las muestras de agua
        p.mb-0 Se invita a leer el documento <strong>Preservación de las muestras de agua</strong>, donde se aborda la importancia de aplicar métodos adecuados de conservación química y térmica en las muestras de agua tras su recolección.
      .col-xl-1
        a.boton.color-acento-botones(:href="obtenerLink('/downloads/Preservacion_muestras_agua.pdf')" target="_blank")
          span Descargar
          i.fas.fa-file-download

        
    
    
 

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
