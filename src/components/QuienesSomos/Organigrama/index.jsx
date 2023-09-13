"use client"
import React, { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

export function Organigrama() {
    const [selection, setSelection] = useState([]);
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                image: '/images/iconos/icon-man.jpg',
                name: 'Jose Lanza',
                title: 'Presidente'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: '/images/iconos/icon-man.jpg',
                        name: 'Dennis Maradiaga',
                        title: 'Vice Presidente'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-man.jpg',
                                name: 'Jorge Kattan',
                                title: 'Secretario'
                            },
                            children: [{
                                expanded: true,
                                type: 'person',
                                data: {
                                    image: '/images/iconos/icon-man.jpg',
                                    name: 'Abdala Hilsaca',
                                    title: 'Pro Secretario'
                                },
                                children: [

                                ]
                            }

                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-man.jpg',
                                name: 'Francisco Jimenez',
                                title: 'Tesorero'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: '/images/iconos/icon-man.jpg',
                                        name: 'Ismael Regalado',
                                        title: 'Pro Tesorero'
                                    },
                                    children: [

                                    ]
                                }
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-man.jpg',
                                name: 'Mario Melgar',
                                title: 'Fiscal'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: '/images/iconos/icon-man.jpg',
                                        name: 'Marco T. Funez',
                                        title: 'Fiscal Suplente'
                                    },
                                    children: [

                                    ]
                                }
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-women.jpg',
                                name: 'Erlyn Quiñonez',
                                title: 'Vocal I'
                            },
                            children: [
                               
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-man.jpg',
                                name: 'Gerald Cole',
                                title: 'Vocal II'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: '/images/iconos/icon-man.jpg',
                                        name: 'Christian Kawas',
                                        title: 'Vocal II Suplente'
                                    },
                                    children: [

                                    ]
                                },
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-man.jpg',
                                name: 'Nelson Mejia',
                                title: 'Vocal III'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: '/images/iconos/icon-man.jpg',
                                        name: 'Harry Quezada',
                                        title: 'Vocal III Suplente'
                                    },
                                    children: [

                                    ]
                                },
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: '/images/iconos/icon-man.jpg',
                                name: 'Dennis Quezada',
                                title: 'Vocal IV'
                            },
                            children: [
                                {
                                    expanded: true,
                                    type: 'person',
                                    data: {
                                        image: '/images/iconos/icon-man.jpg',
                                        name: 'Juan Kawas',
                                        title: 'Vocal IV Suplente'
                                    },
                                    children: [

                                    ]
                                },
                            ]
                        },
                    ]
                },


            ]
        }
    ]);

    const nodeTemplate = (node) => {
        if (node.type === 'person') {
            return (
                <div className="">
                   
                    <h2 className="fw-bold" style={{ fontSize: "15px", width: "auto" }}>{node.data.name}</h2>
                    <p style={{ fontSize: "12px", width: "auto" }}>{node.data.title}</p>

                </div>


            );
        }

        return node.label;
    };

    return (
        <div className="row overflow-x-auto w-full" style={{ width: '100%',margin:'0 0 0 0' }}>
            <br />
            <div className="">
                <OrganizationChart className='p-organizationchart-lines	p-organizationchart	p-organizationchart-nodes w-100 table-responsive' value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
            </div>
        </div>
    )
}
