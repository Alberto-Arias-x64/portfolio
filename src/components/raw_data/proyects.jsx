import { useState,useEffect } from 'react'

import img_pj1 from './expample_1.jpg'



const data = [
    {
        name: '🎓 Portfolio V3',
        graph: img_pj1,
        tecnologis: ['React','Jsx', 'Js', 'Css', 'Html'],
        description: 'Welcome to my portfolio, this is a project to show who I am and what knowledge I am acquiring over time, this includes my experience, personal projects, something about me, and a little gratitude to all my mentors along to my technological career.',
        data: {
            develop_time: '18 Days',
            contribuidors: 1,
            project_status: 'Online'
        },
        link: 'https://github.com/Alberto-Arias-x64/portfolio'
    },
    {
        name: '🔞 Note app',
        graph: img_pj1,
        tecnologis: ['React','Jsx', 'Js', 'Css', 'Html','Node', 'Express', 'Express validator', 'JWT', 'Socketio', 'Mysql'],
        description: 'This is the presentation of the final project of the full stack boocam of Midudev which consists of an app to post messages on a public board.',
        data: {
            develop_time: '2 Months',
            contribuidors: 1,
            project_status: 'Deploied'
        },
        link: 'https://note-app-x64.herokuapp.com'
    },
    {
        name: '🔑 Password manager',
        graph: img_pj1,
        tecnologis: ['Django', 'Python' , 'Html' , 'Css' , 'Js' , 'Mysql'],
        description: 'This is the presentation of the final project of the full stack boocam of pildorasinformaticas which consists of an application for encrypted storage of web site passwords.',
        data: {
            develop_time: '3 Months',
            contribuidors: 2,
            project_status: 'In Github'
        },
        link: 'https://github.com/Alberto-Arias-x64/Password_manager'
    },
    {
        name: '🏪 Tu pieza 3D (3D Froger)',
        graph: img_pj1,
        tecnologis: ['React','Jsx', 'Js', 'Css', 'Html','Node', 'Express', 'Express-sesion', 'JavaScript', 'MySql'],
        description: 'Personal project to increase the visibility of my 3D products',
        data: {
            develop_time: '3 Months',
            contribuidors: 1,
            project_status: 'In DEV'
        },
        link: 'https://github.com/Alberto-Arias-x64/Password_manager'
    },
    {
        name: '🔥 Rapid Fire',
        graph: img_pj1,
        tecnologis: ['Python'],
        description: 'Python script to shoot at a higher speed than any human can reach',
        data: {
            develop_time: '1 Day',
            contribuidors: 1,
            project_status: 'To download'
        },
        link: 'https://github.com/Alberto-Arias-x64/Rapid_fire'
    },
    {
        name: '📧 Live app message',
        graph: img_pj1,
        tecnologis: ['React','Jsx', 'Js', 'Css', 'Html','Node', 'Express', 'HTTP', 'Socket IO'],
        description: 'Application built with socket IO to distribute messages to anyone connected to the server.',
        data: {
            develop_time: '1 Day',
            contribuidors: 1,
            project_status: 'In Github'
        },
        link: 'https://github.com/Alberto-Arias-x64/Simple_message_app'
    },
    {
        name: '🎨 Color picker',
        graph: img_pj1,
        tecnologis: ['Python'],
        description: 'Application built in python to extract any color from an image.',
        data: {
            develop_time: '2 Days',
            contribuidors: 1,
            project_status: 'In Github'
        },
        link: 'https://github.com/Alberto-Arias-x64/Analizador_imagenes'
    }

]
const Card = (data) => {

    const [click,set_click] = useState('')

    function tecno(params) {
        return params.map(element => <p key={element}>{element}</p>)
    }
    const redir = (url) => {
        if (url !== '') window.open(url, '_blank')
    }
    const handle_click = (event) =>{
        //console.log(event.target.dataset.link)
        set_click(event.target.dataset.link)
    }
    useEffect(() => {
        redir(click)
    }, [click]);
    return (
        <div key={data.name} className="card">
            <div className='card_up'>
                <div className="card_title"><h4>{data.name}</h4></div>
                <button data-link={data.link} onClick={handle_click}>See Now</button>
            </div>
            <div className="card_contend">
                <img className='card_img' src={data.graph} alt="" />
                <div className="card_description">
                    {data.description}
                    <div id="skills">
                        {tecno(data.tecnologis)}
                    </div>
                </div>
                <div className="card_data">
                    <div className='card_data'>
                        <p className='card_data_higth'>{data.data.develop_time}</p>
                        <p className='commentary'>Develop Time</p>
                    </div>
                    <div className='card_data'>
                        <p className='card_data_higth'>{data.data.contribuidors}</p>
                        <p className='commentary'>Contribuidors</p>
                    </div>
                    <div className='card_data'>
                        <p className='card_data_higth'>{data.data.project_status}</p>
                        <p className='commentary'>Project Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Cards ({params=[]}) {
    return params.map(element => Card(element))
}

const Projects = () => {
    return (
        <section id="projects">
            <div className='f_row'><h2>Class </h2><h2 className='function'>Projects</h2><h2 className="simbol">{':'}</h2></div>
            <h2>{'      def __init__(self,project)'}</h2>
            <div id='intro_contend_2'>
                <Cards params={data} />
            </div>
        </section>
    )
}
export default Projects