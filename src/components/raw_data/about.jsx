import imagen from '../../svg/imagen.jpeg'

const About = () => {
    return (
        <section id="about">
            <div className='f_row'><h2>Function </h2><h2 className='function'>Descrive </h2><h2 className="simbol">{'({'}</h2><h2 className="var">info</h2><h2 className='simbol'>{'}){'}</h2></div>
            <div id='about_contend'>
                <h3>My skills</h3>
                <div id='about_data'>
                    <img src={imagen} alt="" />
                    <div id='about_data_contend'>
                        <div id="skills">
                            <p>Javascipt</p>
                            <p>Python</p>
                            <p>Typescript</p>
                            <p>C++</p>
                            <p>React</p>
                            <p>NodeJs</p>
                            <p>Wordpress</p>
                            <p>Html</p>
                            <p>Css</p>
                            <p>MySql</p>
                            <p>Figma</p>
                            <p>Photoshop</p>
                            <p>Fusion 360</p>

                        </div>
                        <div>
                            <h4>A touch of my 🖌️</h4>
                            <p>
                                Since I was a child I disassembled everything that had electronics, when I turned 16 years old I bought my first computer,
                                with this computer I learned to design my first 3d models and then it allowed me to start in the world of programming,
                                this experience pushed me to study engineering in industrial automation.
                                thanks to the pandemic I have focused on software development for the web,
                                studying on my own and doing projects and learning day by day.
                            </p>
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