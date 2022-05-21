import { useState } from 'react'

const masters = [
    {
        nick: 'Midudev',
        name: 'Miguel Ángel Durán',
        img: 'https://avatars.githubusercontent.com/u/1561955?v=4',
        social: 'https://midu.dev/',
        description: 'Software Engineer GitHub Star 🌟 Google Developer Expert 👨‍💻',
        tecs: ['JavaScrit', 'React', 'Typescrit']
    },
    {
        nick: 'Programador X',
        name: 'Xavier Reyes Ochoa',
        img: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/themes/2147839398/settings_images/F5R8yTlSJmhaw532yNYM_file.jpg',
        social: 'https://www.academia-x.com',
        description: 'Frontend Engineer at Amazon',
        tecs: ['Professional growing']
    },
    {
        nick: 'Hola Mundo',
        name: 'Nicolas Schurmann',
        img: 'https://yt3.ggpht.com/Z69fhRL9_OaXsDz-XsCUe2sGIqU7G1F5Mwl0PwlBsx_ll13K0nLb47q7_RMen7NHvzMVDgd2=s88-c-k-c0x00ffffff-no-rj',
        social: 'https://www.nicolas-schurmann.com',
        description: 'Hago videos, música y creo cursos.',
        tecs: ['HTML', 'CSS', 'Professional growing']
    },
    {
        nick: 'Victor Robles WEB',
        name: 'Víctor Robles',
        img: 'https://yt3.ggpht.com/ytc/AKedOLSfiETwDHzMxdgkF7dcqWjlQygdzJ2JyVj3u0o3Jw=s88-c-k-c0x00ffffff-no-rj',
        social: 'https://victorroblesweb.es/academy/',
        description: 'Soy desarrollador web, blogger técnico, formador online y también técnico superior en Administración de sistemas informáticos en red (ASIR).',
        tecs: ['JavaScrit', 'Python', 'Professional growing']
    },
    {
        nick: 'Fazt',
        name: 'Fazttech',
        img: 'https://yt3.ggpht.com/ytc/AKedOLSggvA4usmC3lIDdqORkmsje78sxwaSPsQ3gefNYw=s88-c-k-c0x00ffffff-no-rj',
        social: 'https://www.faztweb.com',
        description: "I'm Fazt. and in this Channel you can FInd Everything about Programmig, Web Development. From doing your own Brand Logo to upload your site and aplicattion to the web, with the best practices.",
        tecs: ['JavaScrit', 'React', 'Python']
    },
    {
        nick: 'PedroTech',
        name: 'Pedro Machado',
        img: 'https://avatars.githubusercontent.com/u/63262246?v=4',
        social: 'https://github.com/machadop1407',
        description: 'Videos about Web Development! ReactJS, NodeJS, MySQL, Express, MongoDB, GraphQL and much more!',
        tecs: ['React']
    },
    {
        nick: 'pildorasinformaticas',
        name: 'Juan Díaz',
        img: 'https://yt3.ggpht.com/ytc/AKedOLSmCOW8jpsP2NlIU0KekcExsSteZLYsXLBP1Uvv=s88-c-k-c0x00ffffff-no-rj',
        social: 'https://www.pildorasinformaticas.es',
        description: '🧑🏻‍💻Te enseñamos todo lo que necesitas saber sobre informática.',
        tecs: ['Python', 'Django', 'SQL']
    },
    {
        nick: 'freddier',
        name: 'Freddy Vega',
        img: 'https://pbs.twimg.com/profile_images/1496885672627556362/jkvPwUuT_400x400.jpg',
        social: 'https://freddyvega.com',
        description: 'Experto en Educación en línea. Cofundador y CEO de Platzi.',
        tecs: ['Professional growing', 'Git/Github']
    },
    {
        nick: 'facmartoni',
        name: 'Facundo García Martoni',
        img: 'https://pbs.twimg.com/profile_images/1507496532899254283/0oHSR0Pd_400x400.jpg',
        social: 'https://calendly.com/facmartoni',
        description: '👨🏼‍💻 Tech Creator  || 🕹️ Streamer || 🏋️‍♂️ Weightlifter || 🎖️ Army || 🥋 Kaizen',
        tecs: ['Python']
    },
    {
        nick: 'teffcode',
        name: 'Estefany Aguilar',
        img: 'https://avatars.githubusercontent.com/u/25943655?v=4',
        social: 'http://teffcode.co',
        description: 'Friend of CSS • Sr. Frontend Dev at http://lahaus.com • Telecommunications Engineer • Teacher at platzi',
        tecs: ['CSS']
    },
    {
        nick: 'degranda',
        name: 'Diego De Granda',
        img: 'https://avatars.githubusercontent.com/u/7483714?v=4',
        social: 'https://platzi.com/profes/degranda/',
        description: 'I stand with 🇺🇦 google GDE | Engineering Managers Lead at platzi',
        tecs: ['HTML', 'CSS']
    },
    {
        nick: 'juandc',
        name: 'Juan David Castro',
        img: 'https://avatars.githubusercontent.com/u/15987317?v=4',
        social: 'https://github.com/juandc',
        description: '📚🍏 The Eternal Student 👨‍🏫 Course Director and Teacher in platzi ✍️ Computer Science and Programming',
        tecs: ['JavaScrit']
    },
    {
        nick: 'gndx',
        name: 'Oscar Barajas Tavares',
        img: 'https://arepa.s3.amazonaws.com/oscar-barajas-gndx.png',
        social: 'https://gndx.dev',
        description: 'Foundation Layer at Platzi - Microsoft MVP - Lead at Developer Circles from Meta, I teach React & Svelte',
        tecs: ['JavaScrit', 'Professional growing']
    },
    {
        nick: 'jdaroesti',
        name: 'David Aroesti',
        img: 'https://avatars.githubusercontent.com/u/6578215?v=4',
        social: 'https://platzi.com/profes/jdaroesti/',
        description: "Computer Scientist and Jurist. I'm passionate about AI/ML, Quantum Computing, and Synthetic Biology.",
        tecs: ['Python']
    },
    {
        nick: 'Alejolamilla',
        name: 'Alejandro Tovar Lamilla',
        img: 'https://avatars.githubusercontent.com/u/65451713?v=4',
        social: 'https://github.com/Alejolamilla',
        description: "Ing. Mecatrónico",
        tecs: ['Personal growing', 'Professional growing']
    }
]

const Master_card = ({ info }) => {
    const [hover_item, set_hover_item] = useState('')

    const teck = (teck = []) => {
        return teck.map(element => <p key={element}>{element}</p>)
    }
    const card = (data) => {
        return data.map(element => {
            return (
                <div key={element.nick} className="master_card" onMouseOver={() => set_hover_item(element.name)} onMouseLeave={() => set_hover_item('')}>
                    <img src={element.img} alt="imagen" />
                    <div className='master_card_data'>
                        <div>
                            <h5>{element.name}</h5>
                            <h6>{element.nick}</h6>
                            <p>{element.description}</p>
                        </div>
                        <div className='master_card_tecs'>
                            {teck(element.tecs)}
                        </div>
                    </div>
                </div>
            )
        })
    }
    return card(info)
}

const Masters = () => {
    return (
        <section id="master_grid">
            <Master_card info={masters} />
        </section>
    )
}
export default Masters