import { useEffect } from 'react'
import imagen from '../../svg/photo.jpg'

const matrix = () => {
    const canvas = document.getElementById('matrix')
    const context = canvas.getContext('2d')

    const style = getComputedStyle(canvas)

    canvas.width = parseInt(style.width)
    canvas.heigth = parseInt(style.height)

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const nums = '0123456789'
    const aplhabet = katakana + latin + nums

    const font_size = 8
    const columns = canvas.width / font_size

    const rain_drops = []
    for (let index = 0; index < columns; index++) {
        rain_drops[index] = 1
    }

    const draw = () => {
        context.fillStyle = 'rgba(30, 30, 30, 0.2)'
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = '#0F0'
        context.font = font_size + 'px monospace'

        for (let index = 0; index < rain_drops.length; index++) {
            const text = aplhabet.charAt(Math.floor(Math.random() * aplhabet.length))
            context.fillText(text, index * font_size, rain_drops[index] * font_size)

            if (rain_drops[index] * font_size > canvas.heigth && Math.random() > 0.975) {
                rain_drops[index] = 0
            }
            rain_drops[index]++
        }
    }
    setInterval(draw, 40)
}

const About = () => {

    useEffect(() => {
        matrix()
    }, []);

    return (
        <section id="about">
            <div className='f_row'><h2>Function </h2><h2 className='function'>Descrive </h2><h2 className="simbol">{'({'}</h2><h2 className="var">info</h2><h2 className='simbol'>{'}){'}</h2></div>
            <div id='about_container'>
                <div id='about_contend'>
                    <div id='about_data'>
                        <div id='about_data_img'>
                            <h3>👨🏻‍💻 My skills</h3>
                            <img src={imagen} alt="alberto_arias_x64" />
                            <button onClick={() => window.open('https://drive.google.com/file/d/1894WsCmCQczVxnmx7xEwi3LWheEQq2Lt/view', '_blank')}> See my resumen</button>
                        </div>
                        <div id='about_data_contend'>
                            <div id="skills">
                                <p>Wordpress</p>
                                <p>Html</p>
                                <p>Css</p>
                                <p>Javascipt</p>
                                <p>React</p>
                                <p>Python</p>
                                <p>NodeJs</p>
                                <p>MySql</p>
                                <p>Typescript</p>
                                <p>C++</p>
                                <p>Figma</p>
                                <p>Photoshop</p>
                                <p>Fusion 360</p>

                            </div>
                            <div>
                                <h4>A touch of my 🖌️</h4>
                                <p>
                                    I love programming and everything related to the internet and new technologies, when I turned 16 years old I bought my first computer, with this computer I learned to design my first 3d models and then allowed me to get started in the world of programming, this experience pushed me to study industrial automation engineering. During the pandemic I have focused on improving my professional career in software development for the web, I'm almost completely self-taught, doing projects and improving day by day.
                                </p>
                            </div>
                            <div id='table'>
                                <div >
                                    <div>
                                        <p className='commentary'>Full Name:</p>
                                        <p>Nicolas Alberto Arias</p>
                                    </div>
                                    <div>
                                        <p className='commentary'>Date of bird:</p>
                                        <p>June 23, 1998</p>
                                    </div>
                                </div>
                                <div className='horizontal_center'>

                                    <div >
                                        <p className='commentary'>Email address:</p>
                                        <p>alberto_arias_x64@gmail.com</p>
                                    </div>
                                    <div>
                                        <p className='commentary'>Based in:</p>
                                        <p>Zipaquira,Cund,COL</p>
                                    </div>
                                </div>
                                <div>
                                    
                                    <div>
                                        <p className='commentary'>Phone:</p>
                                        <p>+57 321-498-7813</p>
                                    </div>
                                    <div>
                                        <p className='commentary'>Hire:</p>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id='matrix_placeholder'>
                    <canvas id="matrix"></canvas>
                </div>
            </div>
            <div>
                <h2 className='simbol'>{'}'}</h2>
                <div className='f_row'><h2 className='d_function'>Export default </h2><h2 className='function'>Descrive</h2></div>
            </div>
        </section>
    )
}
export default About