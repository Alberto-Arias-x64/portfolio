import img_pj1 from './project1.svg'
const data = [
    {
        name: 'Portfolio V3',
        img: img_pj1,
        tecnologis: [{
            tec:'jsx',
            percent:'60%'
        },{
            tec:'js',
            percent:'7%'
        },{
            tec:'css',
            percent:'22%'
        },{
            tec:'html',
            percent:'11%'
        }],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, mollitia dolores cupiditate aliquam fugit voluptatum. Vero sequi, reprehenderit exercitationem neque assumenda sit aspernatur repellat, incidunt, error blanditiis magnam doloremque vitae.',
        data: {
            develop_time: '15 Days',
            contribuidors: 1,
            project_status: 'Online'
        }
    }
]

const Card = ({ data }) => {
    return (
        <div className="card">
            <div className="card_title"><h3>{data.name}</h3></div>
            <div className="card_contend">
                <div className="card_tecnologis">
                    <img className='card_pj_img' src={data.img} alt="" />
                    <ul>
                        <li><div className="tecno" /><p>{data.tecnologis[0].tec}</p><p className='tecno_persent'>{data.tecnologis[0].percent}</p></li>
                        <li><div className="tecno" /><p>{data.tecnologis[1].tec}</p><p className='tecno_persent'>{data.tecnologis[1].percent}</p></li>
                        <li><div className="tecno" /><p>{data.tecnologis[2].tec}</p><p className='tecno_persent'>{data.tecnologis[2].percent}</p></li>
                        <li><div className="tecno" /><p>{data.tecnologis[3].tec}</p><p className='tecno_persent'>{data.tecnologis[3].percent}</p></li>
                    </ul>
                </div>
                <div className="card_description">{data.description}</div>
                <div className="card_data">
                    <div>
                        <p>{data.data.develop_time}</p>
                        <p>Develop Time</p>
                    </div>
                    <div>
                        <p>{data.data.contribuidors}</p>
                        <p>Contribuidors</p>
                    </div>
                    <div>
                        <p>{data.data.project_status}</p>
                        <p>Project Status</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects">
            <h2>{'class Projects:'}</h2>
            <h2>{'  def __init__(self,project)'}</h2>
            <div id='intro_contend'>
                <Card data={data[0]} />
            </div>
        </section>
    )
}
export default Projects