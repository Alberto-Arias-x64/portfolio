import { useState, useEffect } from 'react'
import { Branch, Sync, Error, Alert, Debug, Time, Notification, Share, Tweet } from '../svg/svg_components'

const Information = () => {
    const icon_style = {
        stroke: '#fff',
        height: '1.6ch',
        width: 'fit-content'
    }
    const [timer, set_timer] = useState(0)

    useEffect(() => {
        setInterval(() => {
            set_timer(last_timer => last_timer+1)
        }, 60000);
    }, []);
    return (
        <div id="information_button">
            <div id="information_left" className='info_float'>
                <div className='info_float bottom '><Branch st={icon_style} /><p>master*</p></div>
                <div className="bottom ups"><Sync st={{ height: 'auto', width: '1.8ch' }} /></div>
                <div className='info_float bottom'><Error st={{ height: 'auto', width: '1.8ch' }} /><p>0</p><Alert st={{ height: 'auto', width: '1.6ch' }} /><p>0</p></div>
                <div className="bottom ups"><Debug st={icon_style} /></div>
                <p className='bottom'>Git Graph</p>
                <div className="info_float bottom"><Time st={{ height: 'auto', width: '1.9ch' }} /><p>{timer} mins</p></div>
            </div>
            <div id="information_rigt" className='info_float'>
                <p className='bottom'>Lin 1 col. 2</p>
                <p className='bottom'>Spaces:4</p>
                <p className='bottom'>UTF-8</p>
                <p className='bottom'>CRLF</p>
                <p className='bottom'>{`{}`} JavaScipt React</p>
                <div className="info_float bottom"><Share st={{ height: 'auto', width: '1.9ch' }} /><p>Go Live</p></div>
                <div className="bottom"><Tweet st={{ height: 'auto', width: '1.9ch' }} /></div>
                <div className="bottom"><Notification st={{ height: 'auto', width: '1.8ch' }} /></div>
            </div>
        </div>
    )
}

export default Information