import { useState,useEffect } from "react"
import { motion } from "framer-motion"
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
        img: 'https://pbs.twimg.com/profile_images/1315033149055758336/hp-R2W_A_400x400.jpg',
        social: 'https://www.academia-x.com',
        description: 'Frontend Engineer at Amazon',
        tecs: ['Professional growing']
    },
    {
        nick: 'Hola Mundo',
        name: 'Nicolas Schurmann',
        img: 'https://pbs.twimg.com/profile_images/1497701062991437824/evabz349_400x400.jpg',
        social: 'https://www.nicolas-schurmann.com',
        description: 'Hago videos, música y creo cursos.',
        tecs: ['HTML', 'CSS', 'Professional growing']
    },
    {
        nick: 'Victor Robles WEB',
        name: 'Víctor Robles',
        img: 'https://pbs.twimg.com/profile_images/714360954507669504/N3RZeyjE_400x400.jpg',
        social: 'https://victorroblesweb.es/academy/',
        description: 'Soy desarrollador web, blogger técnico, formador online y también técnico superior en Administración de sistemas informáticos en red (ASIR).',
        tecs: ['JavaScrit', 'Python', 'Professional growing']
    },
    {
        nick: 'Fazt',
        name: 'Fazttech',
        img: 'https://pbs.twimg.com/profile_images/1403545185624203264/B80aezHw_400x400.jpg',
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
        img: 'https://pbs.twimg.com/profile_images/1447659190869180420/BDyEUuik_400x400.jpg',
        social: 'https://www.pildorasinformaticas.es',
        description: '🧑🏻‍💻Te enseñamos todo lo que necesitas saber sobre informática.',
        tecs: ['Python', 'Django', 'SQL']
    },
    {
        nick: 'freddier',
        name: 'Freddy Vega',
        img: 'https://freddyvega.com/content/images/2020/08/freddy-vega-2.jpg',
        social: 'https://freddyvega.com',
        description: 'Experto en Educación en línea. Cofundador y CEO de Platzi.',
        tecs: ['Professional growing', 'Git/Github']
    },
    {
        nick: 'facmartoni',
        name: 'Facundo García Martoni',
        img: 'https://d3v0px0pttie1i.cloudfront.net/uploads/user/avatar/4624216/ac34f065.jpg',
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
    const [charge,set_charge] = useState(false)
    const redir = ({ target }) => {
        //console.log(target.dataset.link)
        window.open(target.dataset.link, '_blank')
    }

    const teck = (teck = []) => {
        return teck.map(element => <p key={element}>{element}</p>)
    }

    useEffect(() => {
        setTimeout(()=>{
            set_charge(true)
        },3000)
    },[])
    const card = (data) => {
        let delay = 0
        return data.map(element => {
            delay += 0.2
            return (
                <motion.div initial={{y:-200, opacity:0}} animate={{y:0, opacity:1}} transition={{delay:charge?0:0.5+delay, velocity:charge?0.5:2}} whileHover={{scale:1.05}} key={element.nick} className="master_card" data-link={element.social} onClick={redir}>
                    <img data-link={element.social} src={element.img} alt="imagen" />
                    <div data-link={element.social} className='master_card_data'>
                        <div data-link={element.social} >
                            <h5 data-link={element.social} >{element.name}</h5>
                            <h6 data-link={element.social} >{element.nick}</h6>
                            <p data-link={element.social} >{element.description}</p>
                        </div>
                        <div data-link={element.social} className='master_card_tecs'>
                            {teck(element.tecs)}
                        </div>
                    </div>
                </motion.div>
            )
        })
    }
    return card(info)
}

const Masters = () => {
    return (
        <section id="masters">
            <div className="f_row"> <h2 className="simbol">~$</h2><h2>Git</h2> <h2 className="function">commit</h2> <h2 className="simbol">-m</h2> <h2 className="commentary">"Hello World!"</h2></div>
            <div id="master_grid">
                <Master_card info={masters} />
            </div>
        </section>
    )
}
export default Masters