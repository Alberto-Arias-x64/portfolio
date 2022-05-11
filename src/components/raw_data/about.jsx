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
                            <h4>Una pincelada de mi 🖌️</h4>
                            <p>
                                Desde pequeño me desarmava todo lo que tenia electonica, cuando cumpli 16 años compre mi primer computador,
                                con este aprendi a diseñar mis primeos modelos en 3d y despues me permitio emprezar en el mundo de la programacion,
                                esta expreriencia me impulso a estudiar ingenieria en automatizacion industrial.
                                gracais a la pandemia me he enfocado en el desarrollo de software para la web,
                                estudiando por mi cuenta y realizano proyectos y aprendiendo dia a dia.
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