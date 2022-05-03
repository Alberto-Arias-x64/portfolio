import { useContext, useState } from "react"
import { file_extencion } from "../helpers/icons"
import { Context } from "../contex/store"


const Work_area = () => {

    const { state, active_item, hide_item } = useContext(Context)

    const handle_active = ({ target }) => {
        if(target.dataset.hide_name === undefined) active_item(target.dataset.name)
    }
    const handle_hide = ({ target }) =>{
        hide_item(target.dataset.hide_name)
    }

    function Print_files({ file }) {
        return file.map(element => {
            return (
                <div key={element.name} className={element.is_hide === true ? 'hide_element' : null} onClick={handle_active} >
                    <img data-name={element.name} src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p data-name={element.name}>{element.name}</p>
                    <button data-hide_name={element.name} className="windows_button" onClick={handle_hide}>X</button>
                </div>
            )
        })
    }
    const Print_data_files = ({file}) =>{
        return file.map(element => {
            if(element.is_active === true) return(
                <div>
                    {element.name}
                </div>
            )
        })
    }
    return (
        <div id="work">
            <div id="windows">
                <Print_files file={state} />
            </div>
            <div id="work_area">
                <Print_data_files file={state}/>
            </div>
        </div>
    )
}
export default Work_area