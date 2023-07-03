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
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Normatividad eléctrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Reglamento Técnico de Instalaciones Eléctricas - RETIE',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Reglamento Técnico de Iluminación y Alumbrado Público - RETILAP',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Código Eléctrico Colombiano NTC 2050',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Lineamientos de SST para las actividades en el sector eléctrico (Resolución 5018 de 2019)',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Caracterización del sector eléctrico colombiano',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Organización del sector',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Agentes del mercado de la energía eléctrica',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de Puesta a Tierra - SPAT',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'SPAT tipo TT',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'SPAT tipo TN',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'SPAT tipo IT',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Conformidad de las instalaciones eléctricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Certificados de conformidad de producto',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Demostración de conformidad de las instalaciones eléctricas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Dictamen de inspección',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
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
      tema:
        'CENS Grupo EPM. (2015). Clases de Redes Eléctricas - Aprende con CENS [Video]. Youtube.',
      referencia:
        'CENS Grupo EPM. (2015). Clases de Redes Eléctricas - Aprende con CENS [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=tlQNRJxpvxU&t=63s',
    },
    {
      tema:
        'Comisión CREG. (2014). Conoce la factura de energía eléctrica [Video]. Youtube.',
      referencia:
        'Comisión CREG. (2014). Conoce la factura de energía eléctrica [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LriXlAKUd9A&t=25s',
    },
    {
      tema: 'Comisión de Regulación de Energía y Gas - CREG (2021). Funciones.',
      referencia:
        'Comisión de Regulación de Energía y Gas - CREG (2021). Funciones.',
      tipo: 'Página web de la Comisión de Regulación de Energía y Gas.',
      link: 'https://www.creg.gov.co/creg/quienes-somos/funciones',
    },
    {
      tema:
        'Comité Asesor de Comercialización del sector eléctrico. Quiénes somos.',
      referencia:
        'Comité Asesor de Comercialización del sector eléctrico. Quiénes somos.',
      tipo:
        'Página web del Comité Asesor de Comercialización del sector eléctrico.',
      link: 'http://www.cac.org.co/2016/html/quienes.html',
    },
    {
      tema:
        'Consejo Nacional de Operación del sector Eléctrico (2016). Quienes somos.',
      referencia:
        'Consejo Nacional de Operación del sector Eléctrico (2016). Quienes somos.',
      tipo:
        'Página web del Consejo Nacional de Operación del sector Eléctrico.',
      link: 'https://www.cno.org.co/content/quienes-somos',
    },
    {
      tema:
        'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA.',
      referencia:
        'Instituto Colombiano de Normas Técnicas y Certificación - ICONTEC. (1998). Norma Técnica Colombiana NTC 2050 Código Eléctrico Colombiano. Recuperado el 6 de julio del 2021 de la base de datos biblioteca SENA.',
      tipo: 'Norma Técnica Colombiana Código Eléctrico Colombiano.',
      link:
        'https://login.bdigital.sena.edu.co/login?url=https://e-collection.icontec.org/pdfview/viewer.aspx?locale=es-419&Q=C195B9DF4FA291EC9E5470A4AD574D93312408EA304CDFA9&Req=',
    },
    {
      tema: 'ISAGEN. (2012). Cómo se genera la energía [Video]. Youtube.',
      referencia: 'ISAGEN. (2012). Cómo se genera la energía [Video]. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YWEXLSjaYf0&t=178s',
    },
    {
      tema: 'Ministerio de Minas y Energía de Colombia (2021). Funciones.',
      referencia:
        'Ministerio de Minas y Energía de Colombia (2021). Funciones.',
      tipo: 'Página web del Ministerio de Minas y Energía de Colombia.',
      link: 'https://www.minenergia.gov.co/funciones-y-deberes',
    },
    {
      tema:
        'Resolución Número 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009.',
      referencia:
        'Resolución Número 181331 de 2009 y anexo. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Iluminación y Alumbrado Público RETILAP y se dictan otras disposiciones. Agosto 6 de 2009.',
      tipo:
        'Resolución Reglamento Técnico de Iluminación y Alumbrado Público RETILAP.',
      link: 'downloads/RES180540_2010.pdf',
    },
    {
      tema:
        'Resolución Número 5018 de 2019 y anexo. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019.',
      referencia:
        'Resolución Número 5018 de 2019 y anexo. [Ministerio del Trabajo]. Por la cual se establecen lineamientos en Seguridad y Salud en el Trabajo en los procesos de Generación, Transmisión, Distribución y Comercialización de la Energía Eléctrica. Noviembre 20 de 2019.',
      tipo: 'Resolución de Lineamientos en Seguridad y Salud en el Trabajo.',
      link:
        'downloads/Resolucion_5018_del_20112019_SST_en_energia_electrica.pdf',
    },
    {
      tema:
        'Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
      referencia:
        'Resolución Número 90708 de 2013 y anexos. [Ministerio de Minas y Energía de Colombia]. Por la cual se expide el Reglamento Técnico de Instalaciones Eléctricas - RETIE, que fija las condiciones técnicas que garanticen la seguridad en los procesos de Generación, Transmisión, Transformación, Distribución y Utilización de la energía eléctrica en la República de Colombia y se dictan otras disposiciones. Agosto 30 de 2013.',
      tipo: 'Resolución Reglamento Técnico de Instalaciones Eléctricas RETIE.',
      link:
        'downloads/Anexo_General_del_RETIE_vigente_actualizado_a_2015-1.pdf',
    },
    {
      tema:
        'Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano. Recuperado el 6 de julio del 2021 del repositorio SENA.',
      referencia:
        'Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano. Recuperado el 6 de julio del 2021 del repositorio SENA.',
      tipo: 'Publicación Oficial.',
      link: 'https://hdl.handle.net/11404/2138',
    },
    {
      tema:
        'Superintendencia de Industria y Comercio (2021). Objetivos y funciones.',
      referencia:
        'Superintendencia de Industria y Comercio (2021). Objetivos y funciones.',
      tipo: 'Página web de la Superintendencia de Industria y Comercio.',
      link: 'https://www.sic.gov.co/objetivos-y-funciones',
    },
    {
      tema:
        'Superintendencia de Servicios Públicos Domiciliarios (2021). Funciones.',
      referencia:
        'Superintendencia de Servicios Públicos Domiciliarios (2021). Funciones.',
      tipo:
        'Página web de la Superintendencia de Servicios Públicos Domiciliarios.',
      link:
        'https://www.superservicios.gov.co/nuestra-entidad/quienes-somos/funciones',
    },
    {
      tema:
        'Unidad de Planeación Minero Energética - UPME (2021). Funciones y deberes.',
      referencia:
        'Unidad de Planeación Minero Energética - UPME (2021). Funciones y deberes.',
      tipo: 'Página web de la Unidad de Planeación Minero Energética.',
      link:
        'https://www1.upme.gov.co/Entornoinstitucional/NuestraEntidad/Paginas/Funciones-y-deberes.aspx',
    },
    {
      tema: 'XM (2021). Qué hacemos.',
      referencia: 'XM (2021). Qué hacemos.',
      tipo: 'Página web de XM.',
      link: 'https://www.xm.com.co/nuestra-empresa/nosotros/que-hacemos',
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
        'Servicio Nacional de Aprendizaje - SENA. (2013). Caracterización del sector eléctrico colombiano. Recuperado el 6 de julio del 2021 del repositorio SENA.',
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
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador web',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Nombre centro de formación',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Nombre centro de formación',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre validador',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Nombre centro formación',
        },
        {
          nombre: 'Nombre validador',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Nombre centro formación',
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
