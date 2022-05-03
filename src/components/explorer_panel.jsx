import { useContext} from "react"
import { file_extencion } from "../helpers/icons"
import { Context } from "../contex/store"

const View_panel = () => {
    const {state,active_item} = useContext(Context)
    
    const handle_active = ({target}) => {
        active_item(target.dataset.name)
    }

    function print_files(file = []) {
        return file.map(element => {
            return (
                <li key={element.name} data-name={element.name} className={element.is_active === true ? 'active_item' : null} onClick={handle_active} >
                    <img data-name={element.name} src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p data-name={element.name}>{element.name}</p>
                </li>
            )
        })
    }

    return (
        <div id="view">
            <div id="view_top"><p>EXPLORER</p></div>
            <div className="folder">
                <div className="folder_title"><p>˅</p><p className="bold">PORTFOLIO</p></div>
                <div className="folder_contend">
                    <ul>{print_files(state)}</ul>
                </div>
            </div>
        </div>
    )
}
export default View_panel