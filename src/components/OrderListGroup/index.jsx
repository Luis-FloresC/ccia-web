"use client"
import React from 'react';



export function OrderListGroup({data}) {

    const listOpciones = data;

    return (
        <div className='container w-100'>
            {listOpciones.map((lista) => (
                <div className="d-flex flex-column  text-start w-full" key={lista.id}>
                    <div className="list-group">
                        <a  className="list-group-item list-group-item-action d-flex gap-3 py-3" aria-current="true">
                            <img src={lista.image} alt="twbs" height={32} className="rounded-circle flex-shrink-0" />
                            <div className="d-flex gap-2 w-100 justify-content-between">
                                <div>
                                    <h6 className="mb-0">{lista.description}</h6>
                                    <br />
                                    <ol className="list-group list-group-numbered">

                                        {lista.subOpciones.map((opcion, key) => (
                                            <li className="list-group-item" key={key}>
                                                {opcion}
                                            </li>


                                        ))}
                                    </ol>
                                </div>

                            </div>
                        </a>


                    </div>
                </div>
            ))}
        </div>
    )
}
