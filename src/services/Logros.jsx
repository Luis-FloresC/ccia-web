export async function getLogros() {
    const data = [
        {
            id: '1',
            description: 'Centro de Educación Vocacional La Ceiba',
            image: '/images/iconos/medalla.png',
            subOpciones: []
        },
        {
            id: '2',
            description: 'Ejecución de Programa RISP-HO',
            image: '/images/iconos/medalla.png',
            subOpciones: []
        },
        {
            id: '3',
            description: 'Alianza con la Secretaria de Trabajo y Seguridad Social',
            image: '/images/iconos/medalla.png',
            subOpciones: []
        },
        {
            id: '4',
            description: 'Alianzas con Proyectos de Seguridad y Prevención de USAID.',
            image: '/images/iconos/medalla.png',
            subOpciones: []
        },
        {
            id: '5',
            description: 'Centro de Conciliación y Arbitraje',
            image: '/images/iconos/medalla.png',
            subOpciones: []
        },
        {
            id: '6',
            description: 'Integración a diferentes Comités como ser:',
            image: '/images/iconos/medalla.png',
            subOpciones: [
                'Fundación Parque Nacional Nombre de Dios.',
                'Red Ecológica Hondureña para el Desarrollo Sostenible.',
                'Comité de apoyo al Cuerpo de Bomberos',
                'Comité de Pro-Construcción del Hospital Regional de Atlántida',
                'Comité vial de La Ceiba',
                'Comité de apoyo del traspaso del sistema de agua potable a la Municipalidad de La Ceiba.',
                'Iniciativa en la constitución de la Empresa Mercantil "Corporación Portuaria y Desarrollo S.A de C. V", (CORPODESA).',
                'Comité de Prevención de Violencia La Ceiba Para Todos CREDIA'
            ]
        },


    ];
    return data;
}