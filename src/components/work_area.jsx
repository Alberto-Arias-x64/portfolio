import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { active_app, hide_app } from '../contex/central_store'
import { file_extencion } from '../helpers/icons'

const Work_area = () => {

    const { apps } = useSelector((state) => state)
    const dispatch = useDispatch()

    const handle_active = (target, element) => {
        if (target.dataset.hide_name === undefined) dispatch(active_app(element))
    }
    const handle_hide = (target, element) => {
        dispatch(hide_app(element))
    }

    function Print_files({ file }) {
        const handle_class = (element) =>{
            if (element.is_active === true) return 'windows_active'
            if (element.is_hide === true)  return 'hide_element'
            return ''
        }
        return file.map(element => {
            return (
                <div key={element.name} className={handle_class(element)} onClick={({ target }) => handle_active(target, element)} >
                    <img data-name={element.name} src={file_extencion(element.name)} alt="" className="folder_icon" />
                    <p data-name={element.name}>{element.name}</p>
                    <button data-hide_name={element.name} className="windows_button" onClick={({ target }) => handle_hide(target, element)}>x</button>
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
    const [dimensions, set_dimensions] = useState(0)
    const [resize, set_resize] = useState(0)

    useEffect(() =>{
        window.addEventListener("resize", function(){
            set_resize(Math.random())
        })
    },[])

    useEffect(() => {
        try {
            const side_numbers = document.documentElement.clientHeight
            const num_rows = (side_numbers - 55) / 20
            set_dimensions(num_rows)
        } catch (error) { }
    }, [apps, document.documentElement.clientHeight, resize]);

    return (
        <div id="work">
            <div id="windows">
                <Print_files file={apps} />
            </div>
            <div id="work_area">
                <div id="numbers">{side_numbers()}</div>
                <Print_data_files file={apps} />
            </div>
        </div>
    )
}
export default Work_area