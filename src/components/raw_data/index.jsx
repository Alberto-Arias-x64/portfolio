import { useEffect } from 'react'

const matrix = () => {
    const canvas = document.getElementById('matrix')
    const context = canvas.getContext('2d')

    const style = getComputedStyle(canvas)

    canvas.width = parseInt(style.width)
    canvas.heigth = parseInt(style.height)

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const nums = '0123456789'
    const aplhabet = katakana + latin + nums

    const font_size = 8
    const columns = canvas.width / font_size

    const rain_drops = []
    for (let index = 0; index < columns; index++) {
        rain_drops[index] = 1
    }

    const draw = () => {
        context.fillStyle = 'rgba(30, 30, 30, 0.2)'
        context.fillRect(0, 0, canvas.width, canvas.height)

        context.fillStyle = '#0F0'
        context.font = font_size + 'px monospace'

        for (let index = 0; index < rain_drops.length; index++) {
            const text = aplhabet.charAt(Math.floor(Math.random() * aplhabet.length))
            context.fillText(text, index * font_size, rain_drops[index] * font_size)

            if (rain_drops[index] * font_size > canvas.heigth && Math.random() > 0.975) {
                rain_drops[index] = 0
            }
            rain_drops[index]++
        }
    }
    setInterval(draw, 40)
}

const Data = () => {
    useEffect(() => {
        matrix()
    }, []);
    return (
        <section id="intro">
            <div className='f_row'><h2 className='simbol'>{'<'}</h2><h2>Title</h2><h2 className='simbol'>{'>'}</h2></div>
            <div id='intro_contend'>
                <div id='intro_data'>
                    <h1>HI, I’m Nicolas Arias | Web developer</h1>
                    <p>I like explore new tecnologies  ‍💻 I´m livelong learner ‍🎓 and lover of music, art and designe 🎨</p>
                </div>
                <div id='matrix_placeholder'>
                    <canvas id="matrix"></canvas>
                </div>
            </div>
            <div className='f_row'><h2 className='simbol'>{'</'}</h2><h2>Title</h2><h2 className='simbol'>{'>'}</h2></div>
        </section>
    )
}
export default Data