import { useState , useContext} from "react"
import { file_extencion } from "../helpers/icons"
import { Store } from "../contex/store"

const View_panel = ({files}) => {
    const store = useContext(Store)
    console.log(store)
    const [active, set_active] = useState('')
    const handle_active = ({ target }) => {
        set_active(target.id)
    }

    function print_files(file = []) {
        return file.map(element => {
            return (
                <li key={element.name} id={element.name} className={active === element.name ? 'active_item' : null} onClick={handle_active} >
                    <img src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p>{element.name}</p>
                </li>
            )
        })
    }

    return (
        <div id="view">
            <div id="view_top"><p>EXPLORADOR</p></div>
            <div className="folder">
                <div className="folder_title"><p>˅</p><p className="bold">PORTFOLIO</p></div>
                <div className="folder_contend">
                    <ul>{print_files(files)}</ul>
                </div>
            </div>
        </div>
    )
}
export default View_panel