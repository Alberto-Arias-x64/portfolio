import imagen from '../../svg/imagen.jpeg'

const About = () => {
    return (
        <section id="about">
            <div className='f_row'><h2>Function </h2><h2 className='function'>Descrive </h2><h2 className="simbol">{'({'}</h2><h2 className="var">info</h2><h2 className='simbol'>{'}){'}</h2></div>
            <div id='about_container'>
                <div id='about_contend'>
                    <div id='about_data'>
                        <div id='about_data_img'>
                            <h3>My skills</h3>
                            <img src={imagen} alt="alberto_arias_x64" />
                            <button> See my resumen</button>
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
            </div>
            <div>
                <h2 className='simbol'>{'}'}</h2>
                <div className='f_row'><h2 className='d_function'>Export default </h2><h2 className='function'>Descrive</h2></div>
            </div>
        </section>
    )
}
export default About