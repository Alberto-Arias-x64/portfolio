import icon from './icons.json'

export function file_extencion(file_name = '') {
    if (file_name.includes('.html')) return icon.html
    if (file_name.includes('.css')) return icon.css
    if (file_name.includes('.django')) return icon.django
    if (file_name.includes('.mail')) return icon.email
    if (file_name.includes('.git')) return icon.git
    if (file_name.includes('.3d')) return icon['3d']
    if (file_name.includes('.png') || file_name.includes('.jpg') || file_name.includes('.jpge')) return icon.imagen
    if (file_name.includes('.jest')) return icon.jest
    if (file_name.includes('.jsx')) return icon.react
    if (file_name.includes('.js')) return icon.js
    if (file_name.includes('.py')) return icon.py
    if (file_name.includes('.redux')) return icon.redux
    if (file_name.includes('.test.')) return icon.test
    if (file_name.includes('.ts')) return icon.typescript
    if (file_name.includes('.wakatime')) return icon.wakatime
    return icon.file
}