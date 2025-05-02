export default {
  global: {
    Name: 'Muestreo de variables Ambientales en agroecosistemas',
    Description:
      'El  componente formativo sobre muestreo de variables ambientales en agroecosistemas, centrado en suelo, agua y comunidades hidrobiológicas. Expone planes de muestreo, técnicas, herramientas, protocolos y conservación de muestras. Además, proporciona ejemplos de formatos, equipos y normativas vigentes. Su objetivo es fortalecer habilidades para recolectar datos ambientales con criterios técnicos y normativos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Muestreo de variable ambientales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Consideraciones generales del plan de muestreo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Muestreo en suelos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Muestreo en aguas',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Muestreo en comunidades hidrobiológicas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Muestreo de macroinvertebrados acuáticos',
            hash: 't_1_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Muestreo de aguas',
      referencia:
        'IDEAM. (2021). Protocolo de monitoreo y seguimiento del agua.',
      tipo: 'Protocolo',
      link:
        'https://www.ideam.gov.co/sala-de-prensa/informes/publicacion-vie-23082024-1200-0 ',
    },
    {
      tema: 'Muestreo de aguas',
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Resolución 631 de 2015. Por la cual se establecen los parámetros y los valores límites permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.',
      tipo: 'Resolución',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/11/resolucion-631-de-2015.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Calidad del agua',
      significado:
        'resultado de comparar las características físicas, químicas y microbiológicas encontradas en el agua con el contenido de las normas que regulan la materia.',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'proceso por el cual se mantiene bajo posesión física o control bajo su ciclo de vida completo, es decir, desde que es tomada la muestra hasta que es desechada.',
    },
    {
      termino: 'Calidad del suelo',
      significado:
        'capacidad del suelo para funcionar dentro de los límites de un ecosistema natural o manejado, sostener la productividad de las plantas y los animales, mantener o mejorar la calidad del aire y del agua, y sostener la salud humana y el hábitat.',
    },
    {
      termino: 'Muestreo',
      significado:
        'proceso de toma de una pequeña parte de muestra cuya composición representa con exactitud a todo el material que se quiere estudiar.',
    },
    {
      termino: 'Muestra',
      significado:
        'cada pequeña cantidad representativa de una matriz que será sometida a análisis para conocer sus características y su calidad.',
    },
    {
      termino: 'Preservación',
      significado:
        'procedimiento para estabilizar los componentes de la muestra con el fin de retardar los cambios químicos y/o biológicos que pueden afectar la muestra a analizar.',
    },
    {
      termino: 'Variables ambientales',
      significado:
        'representación cualitativa o cuantitativa asignada a un aspecto ambiental, que permite observar algún tipo de variación al realizar la medición. el propósito de la medición es conocer la afectación o impacto de las actividades productivas del agroecosistema sobre el medio ambiente y cómo estas variables pueden afectar a otras con las que están relacionadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'ICONTEC. (1997). Norma Técnica Colombiana 4113-1. Gestión ambiental. Calidad de Suelo. Muestreo. Guía para el diseño de programas de muestreo.',
      link: '',
    },
    {
      referencia:
        'ICONTEC. (1997). Norma Técnica Colombiana NTC 4113-2. Gestión ambiental . Calidad del suelo. Muestreo. Guía sobre técnicas de muestreo.',
      link: '',
    },
    {
      referencia:
        'IDEAM. (2002). Guía de monitoreo de vertimientos, aguas superficiales y subterráneas.',
      link: '',
    },
    {
      referencia: 'IDEAM. (2018). Protocolo de monitoreo del agua. Obtenido de',
      link:
        'https://corpouraba.gov.co/wp-content/uploads/2.-PROTOCOLO_MONITOREO_AGUA_IDEAM.pdf',
    },
    {
      referencia:
        'IDEAM. (2021). Protocolo de monitoreo y seguimiento del agua.',
      link:
        'https://www.ideam.gov.co/sala-de-prensa/informes/publicacion-vie-23082024-1200-0 ',
    },
    {
      referencia:
        'Ministerio del Ambiente. (2014). Guía para el muestreo de suelos. Dirección General de Calidad Ambiental. Lima , Perú.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2015). Resolución 631 de 2015. Por la cual se establecen los parámetros y los valores límites permisibles en los vertimientos puntuales a cuerpos de aguas superficiales y a los sistemas de alcantarillado público y se dictan otras disposiciones.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/11/resolucion-631-de-2015.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
