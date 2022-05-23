import { useEffect, useState } from 'react'

const Icons_list = () => {
    return (
        <div>
            <i className="fa-solid fa-code"></i>
            <i className="fa-solid fa-code-branch"></i>
            <i className="fa-brands fa-css3"></i>
            <i className="fa-brands fa-free-code-camp"></i>
            <i className="fa-solid fa-bath"></i>
            <i className="fa-solid fa-mug-saucer"></i>
            <i className="fa-solid fa-microchip"></i>
            <i className="fa-solid fa-gears"></i>
            <i className="fa-solid fa-shield-halved"></i>
            <i className="fa-brands fa-node-js"></i>
            <i className="fa-solid fa-store"></i>
            <i className="fa-solid fa-network-wired"></i>
            <i className="fa-solid fa-keyboard"></i>
            <i className="fa-solid fa-folder"></i>
            <i className="fa-solid fa-bug"></i>
            <i className="fa-solid fa-file-lines"></i>
            <i className="fa-solid fa-terminal"></i>
            <i className="fa-solid fa-laptop-code"></i>
            <i className="fa-solid fa-gamepad"></i>
            <i className="fa-solid fa-camera"></i>
            <i className="fa-solid fa-database"></i>
            <i className="fa-solid fa-mobile-screen-button"></i>
        </div>
    )
}

const Matrix_icon = () => {
    const Row = () => {
        return (
            <div className="icon_row">
                <Icons_list />
                <Icons_list />
                <Icons_list />
            </div>
        )
    }
    let Rows = []
    for (let index = 0; index < 20; index++) {
        Rows.push(<Row key={Math.random()}/>)
    }
    return (
        <section className='icon_seccion'>
            {Rows}
        </section>
    )
}

const Data = () => {

    const [pulse, set_pulse] = useState(false)

    const write_machine = (text, target) => {
        let array = text.split('')
        let count = 0
        let inter = setInterval(() => {
            target.innerHTML += array[count]
            count++
            if (count === array.length) {
                clearInterval(inter)
                set_pulse(true)
            }
        }, 80)
    }

    useEffect(() => {
        const callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) observer.unobserve(entry.target)
                write_machine('HI, I’m Alberto Arias | Web Developer', entry.target)
            })
        }
        const options = {
            root: document.querySelector('#intro'),
            rootMargin: '0px',
            threshold: 1.0
        }
        const observer = new IntersectionObserver(callback, options)
        const target = document.querySelector('.write_machine')
        observer.observe(target)

    }, []);
    return (
        <section id="intro">
            <div className='f_row'><h2 className='simbol'>{'<'}</h2><h2>Title</h2><h2 className='simbol'>{'>'}</h2></div>
            <div id='intro_contend'>
                <div id='intro_data'>
                    <div>
                        <h1 className={pulse ? 'pulse' : 'write_machine'}></h1>
                        <p className='up'>I like explore new tecnologies  ‍💻 I´m livelong learner ‍🎓 and lover of music, art and designe 🎨</p>
                    </div>
                </div>
                <div id='icon_placeholder'>
                    <Matrix_icon />
                </div>
            </div>
            <div className='f_row'><h2 className='simbol'>{'</'}</h2><h2>Title</h2><h2 className='simbol'>{'>'}</h2></div>
        </section>
    )
}
export default Data