import img_pj1 from './expample_1.jpg'
const data = [
    {
        name: 'Portfolio V3',
        graph: img_pj1,
        tecnologis: ['Jsx', 'Js', 'Css', 'Html'],
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, mollitia dolores cupiditate aliquam fugit voluptatum. Vero sequi, reprehenderit exercitationem neque assumenda sit aspernatur repellat, incidunt, error blanditiis magnam doloremque vitae.',
        data: {
            develop_time: '15 Days',
            contribuidors: 1,
            project_status: 'Online'
        },
    }
]
const Card = ({ data }) => {
    function tecno(params) {
        return params.map(element => <p>{element}</p>)
    }
    return (
        <div className="card">
            <div className='card_up'>
                <div className="card_title"><h4>{data.name}</h4></div>
                <button>See Now</button>
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

const Projects = () => {
    return (
        <section id="projects">
            <div className='f_row'><h2>Class </h2><h2 className='function'>Projects</h2><h2 className="simbol">{':'}</h2></div>
            <h2>{'      def __init__(self,project)'}</h2>
            <div id='intro_contend'>
                <Card data={data[0]} />
            </div>
        </section>
    )
}
export default Projects