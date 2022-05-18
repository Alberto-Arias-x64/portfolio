import { useState, useEffect } from "react"
import { file_extencion } from "../helpers/icons"
import { useSelector, useDispatch } from 'react-redux'

const Work_area = () => {

    const { state, active_item, hide_item } = useSelector((state) => state)
    const dispatch = useDispatch()

    const handle_active = (target, element) => {
        if (target.dataset.hide_name === undefined) active_item(element)
    }
    const handle_hide = (target, element) => {
        hide_item(element)
    }

    function Print_files({ file }) {
        return file.map(element => {
            return (
                <div key={element.name} className={element.is_hide === true ? 'hide_element' : null} onClick={({ target }) => handle_active(target, element)} >
                    <img data-name={element.name} src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p data-name={element.name}>{element.name}</p>
                    <button data-hide_name={element.name} className="windows_button" onClick={({ target }) => handle_hide(target, element)}>X</button>
                </div>
            )
        })
    }
    function side_numbers() {
        let numbers = []
        for (let index = 1; index < dimensions; index++) {
            numbers.push(<p key={index}>{index}</p>)
        }
        return numbers
    }
    const Print_data_files = ({ file }) => {
        return file.map(element => {
            if (element.is_active === true) return (
                <div key={element} id="contend">{element.data}</div>
            )
        })
    }
    const [dimensions,set_dimensions] = useState(0)
    useEffect(() => {
        try {
            const side_numbers = document.documentElement.clientHeight
            const num_rows = (side_numbers-55)/ 20
            set_dimensions(num_rows)
        } catch (error) {}
    }, [state,document.documentElement.clientHeight]);

    return (
        <div id="work">
            <div id="windows">
                {/* <Print_files file={state} /> */}
            </div>
            <div id="work_area">
                <div id="numbers">{side_numbers()}</div>
                {/* <Print_data_files file={state} /> */}
            </div>
        </div>
    )
}
export default Work_area