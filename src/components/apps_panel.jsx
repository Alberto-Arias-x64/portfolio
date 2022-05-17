import {Copy,Search,Branch,Debug,Extencions,Linkeding,Mail,Instagram} from '../svg/svg_components' 

const Control_panel = () => {
    const redir = (event,url_dir) =>{
        if (url_dir !== '') window.open(url_dir, '_blank')
    }
    return (
        <div id="control">
            <div className='app active_icon'><Copy scale={0.65}/></div>
            <div onClick={event => redir(event,'https://www.linkedin.com/in/nicolas-alberto-arias-otalora-629128211/')} className='app'><Linkeding scale={0.85} /></div>
            <div onClick={event => redir(event,'https://github.com/Alberto-Arias-x64')} className='app'><Branch scale={0.65} /></div>
            <div onClick={event => redir(event,'https://alberto-arias-x64.github.io/Pagina-web/')} className='app'><Debug scale={0.62} /></div>
            <div onClick={event => redir(event,'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=alberto.arias.x64@gmail.com&tf=1')} className='app'  ><Mail scale={1} /></div>
            <div onClick={event => redir(event,'https://www.instagram.com/alberto_arias_x64/')} className='app'><Instagram scale={0.9} /></div>
        </div>
    )
}

export default Control_panel