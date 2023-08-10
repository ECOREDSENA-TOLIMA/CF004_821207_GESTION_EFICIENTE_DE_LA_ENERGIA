export default {
  global: {
    componenteFormativo: 'Procesos y normatividad del sector eléctrico',
    descripcionCurso:
      'Conocer la normatividad relacionada con los productos e instalaciones eléctricas y la caracterización del sector eléctrico colombiano, permite al estudiante observar la aplicación práctica de los conceptos básicos adquiridos en el área de la electricidad y electrónica. Adicionalmente acerca al estudiante a los conceptos básicos que se manejan para los Sistemas de Gestión de la Energía.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Normatividad eléctrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Reglamento Técnico de Instalaciones Eléctricas - RETIE',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Reglamento Técnico de Iluminación y Alumbrado Público - RETILAP',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Código Eléctrico Colombiano NTC 2050',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Lineamientos de SST para las actividades en el sector eléctrico (Resolución 5018 de 2019)',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Caracterización del sector eléctrico colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Organización del sector',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Agentes del mercado de la energía eléctrica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de Puesta a Tierra - SPAT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'SPAT tipo TT',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'SPAT tipo TN',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'SPAT tipo IT',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Conformidad de las instalaciones eléctricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Certificados de conformidad de producto',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo:
              'Demostración de conformidad de las instalaciones eléctricas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Dictamen de inspección',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Acciones de vigilancia y control',
            hash: 't_4_4',
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_04.pdf',
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
      tema: 'Normatividad eléctrica',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano.',
      tipo: 'Norma Técnica Colombiana',
      link:
        'https://www.icontec.org/lanzamiento-codigo-electrico-colombiano-ntc-2050/',
    },
    {
      tema: 'Normatividad eléctrica',
      referencia:
        'Ministerio de Minas y Energía de Colombia. Resolución Número 90708 de 2013 y anexos. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
      tipo: 'Documento legal',
      link:
        'https://www.minenergia.gov.co/es/misional/energia-electrica-2/reglamentos-tecnicos/reglamento-t%C3%A9cnico-de-instalaciones-el%C3%A9ctricas-retie/',
    },
    {
      tema: 'Normatividad eléctrica',
      referencia:
        'Ministerio de Minas y Energía de Colombia. Resolución Número 181331 de 2009 y anexo. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009.',
      tipo: 'Documento legal',
      link:
        'https://www.conte.org.co/wpfd_file/resolucion-no-181331-del-6-de-agosto-de-2009/',
    },
    {
      tema: 'Caracterización del sector eléctrico colombiano',
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano. Recuperado el 6 de julio del 2021 del repositorio SENA.',
      tipo: 'Publicación Oficial',
      link: 'https://repositorio.sena.edu.co/handle/11404/2138',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Resolución Número 5018 de 2019 y anexo. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019.',
      tipo: 'Documento legal',
      link:
        'https://camacol.co/sites/default/files/descargables/Resoluci%C3%B3n%205018%20del%2020112019%20SST%20en%20energ%C3%ADa%20el%C3%A9ctrica_0.pdf',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Ministerio de Minas y Energía de Colombia (2021). Funciones.',
      tipo: 'Página web',
      link:
        'https://www.minenergia.gov.co/es/ministerio/estructura-organizacional/funciones/#:~:text=Formular%2C%20adoptar%2C%20dirigir%20y%20coordinar,de%20minerales%2C%20hidrocarburos%20y%20biocombustibles',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Unidad de Planeación Minero Energética - UPME (2021). Funciones y deberes.',
      tipo: 'Página web',
      link:
        'https://www1.upme.gov.co/Entornoinstitucional/Documents/portafolio_de_servicios_upme.pdf',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Comisión de Regulación de Energía y Gas - CREG (2021). Funciones.',
      tipo: 'Página web',
      link: 'https://creg.gov.co/publicaciones/7812/funciones/',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios (2021). Funciones.',
      tipo: 'Página web',
      link:
        'https://www.superservicios.gov.co/nuestra-entidad/quienes-somos/funciones',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Superintendencia de Industria y Comercio (2021). Objetivos y funciones.',
      tipo: 'Página web',
      link: 'https://www.sic.gov.co/objetivos-y-funciones',
    },
    {
      tema: 'Organización del sector',
      referencia: 'XM (2021). Qué hacemos.',
      tipo: 'Página web',
      link: 'https://www.xm.com.co/nuestra-empresa/nosotros/quienes-somos',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Consejo Nacional de Operación del sector Eléctrico (2016). Quienes somos.',
      tipo: 'Página web',
      link: 'https://www.cno.org.co/content/quienes-somos',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Comité Asesor de Comercialización del sector eléctrico. Quiénes somos.',
      tipo: 'Página web',
      link: 'http://www.cac.org.co/2016/html/quienes.html',
    },
    {
      tema: 'Organización del sector',
      referencia: 'ISAGEN. (2012). Cómo se genera la energía [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YWEXLSjaYf0',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'CENS Grupo EPM. (2015). Clases de Redes Eléctricas - Aprende con CENS [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tlQNRJxpvxU',
    },
    {
      tema: 'Organización del sector',
      referencia:
        'Comisión CREG. (2014). Conoce la factura de energía eléctrica [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LriXlAKUd9A',
    },
  ],
  glosario: [
    {
      termino: 'CREG',
      significado: 'Comisión de Regulación de Energía y Gas.',
    },
    {
      termino: 'Normativa',
      significado:
        'norma o conjunto de normas que guían, dirigen y ajustan el comportamiento de un individuo, organización, materia y/o actividad.',
    },
    {
      termino: 'Partes energizadas',
      significado:
        'conductores, barras, terminales o componentes eléctricos sin aislar o expuestos, que crean riesgo de descarga eléctrica.',
    },
    {
      termino: 'Persona calificada',
      significado:
        'persona capacitada y familiarizada con la construcción y funcionamiento de los equipos y los riesgos que conllevan.',
    },
    {
      termino: 'Puesto a tierra',
      significado:
        'conectado a tierra o a cualquier cuerpo conductor que pueda actuar como tierra.',
    },
    {
      termino: 'Reglamento Técnico',
      significado:
        'según la Ley 170 de 1994, es un documento en el que se establecen las características de un producto, los procesos y métodos de producción con ellas relacionados, con inclusión de las disposiciones administrativas aplicables, y cuya observancia es obligatoria.',
    },
    {
      termino: 'Requisito',
      significado:
        'es una condición necesaria para tener acceso a algo, o para que una cosa suceda.',
    },
    {
      termino: 'RETIE',
      significado: 'Reglamento Técnico de Instalaciones Eléctricas.',
    },
    {
      termino: 'RETILAP',
      significado: 'Reglamento Técnico de Iluminación y Alumbrado Público.',
    },
    {
      termino: 'Tensión a tierra',
      significado:
        'en los circuitos puestos a tierra, es la tensión entre un conductor dado y  el punto del conductor del circuito que está puesto a tierra; en los circuitos no puestos a tierra, es la mayor diferencia de tensión entre un conductor dado y cualquier otro conductor del circuito.',
    },
    {
      termino: 'Tensión de contacto',
      significado:
        'diferencia de potencial que durante una falla se presenta entre una estructura metálica puesta a tierra y un punto de la superficie del terreno a una distancia de un metro. Esta distancia horizontal es equivalente a la máxima que se puede alcanzar al extender un brazo.',
    },
    {
      termino: 'Tensión de paso',
      significado:
        'diferencia de potencial que durante una falla se presenta entre dos puntos de la superficie del terreno, separados por una distancia de un paso.',
    },
    {
      termino: 'Tensión nominal',
      significado:
        'valor nominal asignado a un circuito o sistema para designar habitualmente su nivel de tensión (por ejemplo., 120 V/240 V, 480 V/277 V (sistema en estrella), 600 V). La tensión a la que funciona un circuito puede variar sobre la nominal dentro de un margen que permita el funcionamiento satisfactorio de los equipos.',
    },
    {
      termino: 'Tensión transferida',
      significado:
        'es un caso especial de tensión de contacto, donde un potencial es conducido hasta un punto remoto respecto a la subestación o a una puesta a tierra.',
    },
    {
      termino: 'UPME',
      significado: 'Unidad de Planeación Minero Energética.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA.',
    },
    {
      referencia:
        'Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
    },
    {
      referencia:
        'Resolución Número 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009.',
    },
    {
      referencia:
        'Resolución Número 5018 de 2019 y anexo. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019.',
    },
    {
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Javier González Cuevas',
          cargo: 'Experto Técnico',
          centro:
            'Regional Distrito Capital - Centro Electricidad Electrónica y Telecomunicaciones',
        },
        {
          nombre: 'Marlon Augusto Villamizar Morales',
          cargo: 'Experto Técnico',
          centro: 'Global Green Growth Institute (GGGI)',
        },
        {
          nombre: 'Leidy Carolina Arias Aguirre',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Juan Gilberto Giraldo Cortés',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'María Inés Machado López',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'José Yobani Penagos Mora',
          cargo: 'Diseñador Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastián Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard e Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco Javier Vásquez Suarez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
