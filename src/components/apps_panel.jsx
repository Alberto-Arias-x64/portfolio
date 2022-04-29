import {Copy,Search,Branch,Debug,Extencions} from '../svg/svg_components' 

const Control_panel = () => {
    return (
        <div id="control">
            <Copy scale={0.65}/>
            <Search scale={0.65} />
            <Branch scale={0.65} />
            <Debug scale={0.62} />
            <Extencions scale={0.6} />
        </div>
    )
}

export default Control_panel