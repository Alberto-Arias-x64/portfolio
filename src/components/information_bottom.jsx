import { Branch, Sync, Error, Alert, Debug, Time, Notification, Share, Tweet } from '../svg/svg_components'

const Information = () => {
    const icon_style = {
        stroke: '#fff',
        height: '1.6ch',
        width: 'fit-content'
    }
    return (
        <div id="information_button" className='f_row'>
            <div id="information_left" className='info_float'>
                <div className='info_float'><Branch st={icon_style} /><p>master*</p></div>
                <Sync st={{ height: 'auto', width: '1.8ch' }} />
                <div className='info_float'><Error st={{ height: 'auto', width: '1.8ch' }} /><p>0</p><Alert st={{ height: 'auto', width: '1.6ch' }} /><p>0</p></div>
                <Debug st={icon_style} />
                <p>Git Graph</p>
                <div className="info_float"><Time st={{ height: 'auto', width: '1.8ch' }} /><p>45 mins</p></div>
            </div>
            <div id="information_rigt" className='info_float'>
                <p>Lin 1 col. 2</p>
                <p>Spaces:4</p>
                <p>UTF-8</p>
                <p>CRLF</p>
                <p>{`{}`} JavaScipt React</p>
                <div className="info_float"><Share st={{ height: 'auto', width: '1.9ch' }} /><p>Go Live</p></div>
                <Tweet st={{ height: 'auto', width: '1.9ch' }} />
                <Notification st={{ height: 'auto', width: '1.8ch' }} />
            </div>
        </div>
    )
}

export default Information