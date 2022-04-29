import copy from '../svg/image.svg'

const Control_panel = () => {
    return(
        <div id="control">
            {copy}
            <i className="fa-solid fa-magnifying-glass fa-2x control_icon"></i>
            <i className="fa-solid fa-code-branch fa-2x control_icon"></i>
            <i className="fa-solid fa-play fa-2x control_icon"></i>
            <i className="fa-solid fa-cubes fa-2x control_icon"></i>
        </div>
    )
}

export default Control_panel