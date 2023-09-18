"use client"
import { useState } from 'react'
import { HeroeSinFoto } from '@/components/Heroe/HeroeSinFoto'
import swal from 'sweetalert';


export default function Contactenos() {

    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Sending')

        let data = {
            name,
            lastname,
            email,
            message
        }

        fetch('/api/message/contact', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => {
            console.log('Response received: ', res.status)
            setSubmitted(true)
            setName('')
            setEmail('')
            setMessage('')
            setLastName('')
            if (res.status === 200) {
                console.log('Response succeeded!')

                swal("!Mensaje Enviado!", "!Tu Mensaje se envio con exito!", "success");
            } else {
                swal("!Mensaje no Enviado!", "!Ocurrio un error!", "error");
            }
        })
    }

    return (
        <main>
            <section className="text-center container">


                <div className="">


                    <div className="container ">
                        <div className="row g-2">
                            <div className="col-sm-12 ">
                                <HeroeSinFoto title={'Contáctenos'} content={'Nuestras Oficinas'} />
                                <iframe
                                    className="w-100"
                                    style={{

                                        height: "300px"
                                    }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3839.390800461129!2d-86.76800758514518!3d15.783334489058172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f69a840ea152ccf%3A0xb1444c67788af673!2sC%C3%A1mara%20de%20Comercio%20e%20Industrias%20de%20Atl%C3%A1ntida!5e0!3m2!1ses!2shn!4v1688139013936!5m2!1ses!2shn"
                                ></iframe>
                            </div>
                            <div className="col-sm-12">
                                <HeroeSinFoto title={'Escríbenos'} content={'Cámara de Comercio e Industrias de Atlántida'} />
                                <div className="container lead">
                                    <form className="row g-3 mt-3">
                                        <div className="col-6">
                                            <label htmlFor="nameInput" className="form-label">
                                                Nombre
                                            </label>
                                            <input
                                                type="name"
                                                className="form-control"
                                                id="nameInput"
                                                value={name}
                                                onChange={(e) => { setName(e.target.value) }}
                                                placeholder="Escribe tu nombre"
                                            />
                                        </div>
                                        <div className="col-6 ">
                                            <label htmlFor="inputLastName" className="form-label">
                                                Apellido
                                            </label>
                                            <input
                                                type="last_name"
                                                className="form-control"
                                                id="inputLastName"
                                                value={lastname}
                                                onChange={(e) => { setLastName(e.target.value) }}
                                                placeholder="Escribe tu apellido"
                                            />
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="inputEmail" className="form-label">
                                                Correo Electrónico
                                            </label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="inputEmail"
                                                value={email}
                                                onChange={(e) => { setEmail(e.target.value) }}
                                                placeholder="Escribe tu correo electrónico"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="description" className="form-label">
                                                Descripción
                                            </label>
                                            <textarea
                                                type="description"
                                                className="form-control"
                                                id="description"
                                                value={message}
                                                onChange={(e) => { setMessage(e.target.value) }}
                                                placeholder="Por favor escriba una breve descripción"
                                            />
                                        </div>

                                        <div className="col-12">
                                            <button type="submit" onClick={(e) => { handleSubmit(e) }} className="btn btn-primary" style={{ width: 'auto' }}>
                                                Registrate
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <br />
                        </div>
                        <br />
                        <br />

                    </div>
                </div>

            </section>
        </main>
    )
}

