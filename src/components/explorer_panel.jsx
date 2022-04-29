import { useContext} from "react"
import { file_extencion } from "../helpers/icons"
import { Context } from "../contex/store"

const View_panel = ({files}) => {
    const {state,set_item} = useContext(Context)
    const {selected_item} = state

    const handle_active = ({target}) => {
        set_item(target.dataset.id)
    }

    function print_files(file = []) {
        return file.map(element => {
            return (
                <li key={element.name} data-id={element.name} className={selected_item === element.name ? 'active_item' : null} onClick={handle_active} >
                    <img data-id={element.name} src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p data-id={element.name}>{element.name}</p>
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
                    <ul>{print_files(files)}</ul>
                </div>
            </div>
        </div>
    )
}
export default View_panel