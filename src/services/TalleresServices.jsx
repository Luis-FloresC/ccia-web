export async function getTalleres() {
    const data = [
        {
            nombre: "5S DE LA CALIDAD",
            horas: 8
        },
        {
            nombre: 'ADMINISTRACIÓN DE FINANZAS ANTE LA CRISIS',
            horas: 8
        },
        {
            nombre: 'ADMINISTRACIÓN DE LAS FINANZAS PERSONALES Y DE NEGOCIO',
            horas: 8
        },
        {
            nombre: 'ADMINISTRACION DE RECURSOS HUMANOS',
            horas: 8
        },
        {
            nombre: 'ADMINISTRACIÓN EFECTIVA DEL TIEMPO',
            horas: 8
        },
        {
            nombre: "ANÁLISIS DE LOS ESTADOS FINANCIEROS Y CONTABLES PARA LA TOMA DE DECISIONES",
            horas: 8
        },
        {
            nombre: 'ANÁLISIS E INTERPRETACION DE ESTADOS FINANCIEROS',
            horas: 8
        },
        {
            nombre: 'APRENDER A EMPRENDER',
            horas: 8
        },
        {
            nombre: 'ATENCION AL CLIENTE CON INTELIGENCIA EMOCIONAL',
            horas: 8
        },
        {
            nombre: 'AUTOMOTIVACIÓN',
            horas: 8
        },
        {
            nombre: "CAPITAL INICIAL REQUERIDO PARA EL NEGOCIO, TIPOS Y FUENTES DE CAPITAL",
            horas: 8
        },
        {
            nombre: 'CARACTERÍSTICAS POCO COMUNES DE LIDERES',
            horas: 8
        },
        {
            nombre: 'COACHING PERSONAL',
            horas: 8
        },
        {
            nombre: 'COMERCIALIZACIÒN',
            horas: 8
        },
        {
            nombre: 'COMERCIALIZACIÒN PRECIO Y PLAZA PROMOCIÓN',
            horas: 8
        },
        {
            nombre: "COMERCIO Y MERCADO DIGITAL PARA MICROEMPRESARIOS",
            horas: 8
        },
        {
            nombre: 'COMUNICACION EFECTIVA Y ORGANIZACIONAL',
            horas: 8
        },
        {
            nombre: 'CONFERENCIA DIGITALES EFECTIVAS',
            horas: 8
        },
        {
            nombre: 'CONSTRUCCIÓN DE EQUIPO EN ESPACIOS VIRTUALES',
            horas: 8
        },
        {
            nombre: 'CONTROL DE PROCESOS',
            horas: 8
        },


        {
            nombre: "CONTROL ESTADISTICO DE PROCESOS",
            horas: 8
        },
        {
            nombre: 'CONTROL Y MANEJO DE ESTRÉS',
            horas: 8
        },
        {
            nombre: 'DE JEFE A LIDER',
            horas: 8
        },
        {
            nombre: 'DISEÑO DE PLANES DE NEGOCIO',
            horas: 8
        },
        {
            nombre: 'EL CONFLICTO Y LA NEGOCIACIÓN',
            horas: 8
        },
        {
            nombre: "EL COSTEO DE COMERCIO",
            horas: 8
        },
        {
            nombre: 'EL COSTEO DE PRODUCTOS Y SERVICIOS',
            horas: 8
        },
        {
            nombre: 'EL IMPACTO DEL CAMBIO EN LAS ORGANIZACIONES',
            horas: 8
        },
        {
            nombre: 'ATENCION AL CLIENTE CON INTELIGENCIA EMOCIONAL',
            horas: 8
        },
        {
            nombre: 'EL PLAN DE COMERCIALIZACIÒN DE PROCESOS Y PRUEBA FISICAS            ',
            horas: 8
        },
        {
            nombre: 'ELABORACIÓN DE DIAGNÓSTICO DE NECESIDADES DE CAPACITACIÓN            ',
            horas: 8
        },
        {
            nombre: 'ELABORACIÓN DE ESTADOS FINANCIEROS PARA NO FINANCIEROS            ',
            horas: 8
        },
        {
            nombre: 'ELABORACION DEL PLAN OPERATIVO            ',
            horas: 8
        },
        {
            nombre: 'EMPRENDIMIENTO EN TIEMPOS DE CRISIS            ',
            horas: 8
        },
        {
            nombre: "EQUIPOS RESILIENTES            ",
            horas: 8
        },
       
        {
            nombre: "ESCALERA AL ÉXITO            ",
            horas: 8
        },
        {
            nombre: 'ESTÁ USTED LISTO PARA SER UN EMPRENDEDOR            ',
            horas: 8
        },
        {
            nombre: 'ESTRATEGIA DE RETENCIÓN DE CLIENTES            ',
            horas: 8
        },
        {
            nombre: 'ÉTICA PROFESIONAL            ',
            horas: 8
        },
        {
            nombre: 'ÉTICA Y VALORES HUMANOS            ',
            horas: 8
        },


        {
            nombre: "EVALUÉ SI ESTÁ LISTO PARA INICIAR SU NEGOCIO            ",
            horas: 8
        },
        {
            nombre: 'EXCELENCIA EN EL SERVICIO AL CLIENTE            ',
            horas: 8
        },
        {
            nombre: 'FINANZAS PERSONALES II            ',
            horas: 8
        },
        {
            nombre: 'FLEXIBILIDAD MENTAL            ',
            horas: 8
        },
        {
            nombre: 'GENERACIÓN DE TRABAJO EN EQUIPO            ',
            horas: 8
        },
        {
            nombre: "HERRAMIENTAS VIRTUALES PARA LA COMUNICACIÓN EFECTIVA            ",
            horas: 8
        },
        {
            nombre: 'HOJA DE VIDA Y ENTREVISTA DE TRABAJO            ',
            horas: 8
        },
        {
            nombre: 'IMAGEN CORPORATIVA            ',
            horas: 8
        },
        {
            nombre: 'INDICADORES DE PRODUCTIVIDAD PARA LAS MIPYMES            ',
            horas: 8
        },
        {
            nombre: 'INDICADORES FINANCIEROS Y CONTABLES            ',
            horas: 8
        },
        {
            nombre: "INTELIGENCIA EMOCIONAL            ",
            horas: 8
        },
        {
            nombre: 'INTELIGENCIA EMOCIONAL COMO HABILIDAD            ',
            horas: 8
        },
        {
            nombre: 'INTELIGENCIA EMOCIONAL Y MANEJO DE CONFLICTOS            ',
            horas: 8
        },
        {
            nombre: 'KAIZEN EN PLANTA (MEJORA CONTINUA)            ',
            horas: 8
        },
        {
            nombre: 'LIDERAZGO SITUACIONAL            ',
            horas: 8
        },
        {
            nombre: "LIDERAZGO Y TOMA DE DECISIONES            ",
            horas: 8
        },
        {
            nombre: 'MANEJO DE QUEJAS Y RECLAMOS            ',
            horas: 8
        },
        {
            nombre: 'MERCADEO PROMOCIONAL Y SERVICIO AL CLIENTE            ',
            horas: 8
        },
        {
            nombre: 'MICROSOFT EXCEL BÁSICO            ',
            horas: 8
        },
        {
            nombre: 'MICROSOFT EXCEL INTERMEDIO            ',
            horas: 8
        },

        {
            nombre: "MÓDULO RECURSOS HUMANOS            ",
            horas: 8
        },
        {
            nombre: 'NEGOCIACION EN EL AMBITO LABORAL COLECTIVOS Y EMPRESARIALES            ',
            horas: 8
        },
        {
            nombre: 'NEUROCIENCIA APLICADA A LA ADMINISTRACIÓN            ',
            horas: 8
        },
        {
            nombre: 'NORMAS DE BIOSEGURIDAD            ',
            horas: 8
        },
        {
            nombre: 'ORIENTACIÓN A METAS            ',
            horas: 8
        },
        {
            nombre: "ORIENTACIÓN SOCIOLABORAL            ",
            horas: 8
        },
        {
            nombre: 'PLANEACIÓN ESTRATÉGICO - ANÁLISIS Y DESCRIPCIÓN DE PUESTOS LABORALES            ',
            horas: 8
        },
        {
            nombre: 'PROCESO EFECTIVO DE LA VENTA            ',
            horas: 8
        },
        {
            nombre: 'PROCESOS ELEMENTALES DE LA EMPRESA            ',
            horas: 8
        },
        {
            nombre: 'RECUPERACIÓN DE CARTERA VENCIDA            ',
            horas: 8
        },
        {
            nombre: "REFORZAMIENTO IDEA DE NEGOCIO            ",
            horas: 8
        },
        {
            nombre: 'REGISTRO DE 9 FORMULARIOS DEL PLAN DE COMERCIALIZACIÒN            ',
            horas: 8
        },
        {
            nombre: 'RELACIONES INTERPERSONALES            ',
            horas: 8
        },
        {
            nombre: 'REVISIÓN DE CANVAS            ',
            horas: 8
        },
        {
            nombre: 'SERVICIO AL CLIENTE CON INTELIGENCIA EMOCIONAL            ',
            horas: 8
        },
        {
            nombre: "TÉCNICAS DE COMERCIALIZACIÓN DE PRODUCTOS PARA PYMES            ",
            horas: 8
        },
        {
            nombre: 'TÉCNICAS DE VENTA            ',
            horas: 8
        },
        {
            nombre: 'TÉCNICAS DE VENTA TELEFÓNICA            ',
            horas: 8
        },
        {
            nombre: 'TOMA DE DESICIONES Y SOLUCION DE CONFLICTOS            ',
            horas: 8
        },
        {
            nombre: 'VENTAS ASERTIVAS            ',
            horas: 8
        },
        {
            nombre: 'YO Y MIS FINANZAS PERSONALES (PARTE I)            ',
            horas: 8
        },
        {
            nombre: 'YO Y MIS FINANZAS PERSONALES (PARTE II)            ',
            horas: 8
        },

        

    ];
    return data;
}