import { useContext, useState } from "react"
import { file_extencion } from "../helpers/icons"
import { Context } from "../contex/store"

const Work_area = ({ files }) => {

    const { state, set_item } = useContext(Context)
    const { selected_item } = state

    const [hide, set_hide] = useState(undefined)

    const handle_active = ({ target }) => {
        set_item(target.dataset.id)
    }
    const handle_hide = ({ target }) => {
        set_hide(target.dataset.id)
        set_item(undefined)
    }
    const handle_class = (element) => {
        if (hide === element) return 'hide_element'
        if (selected_item === element) return 'active_window'
    }
    function print_files(file = []) {
        return file.map(element => {
            return (
                <div key={element.name} data-id={element.name} className={handle_class(element.name)} onClick={handle_active} >
                    <img data-id={element.name} src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p data-id={element.name}>{element.name}</p>
                    <button data-id={element.name} className="windows_button" onClick={handle_hide}>X</button>
                </div>
            )
        })
    }
    return (
        <div id="work">
            <div id="windows">
                {print_files(files)}
            </div>
            <div id="work_area"></div>
        </div>
    )
}
export default Work_area