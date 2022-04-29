export const Copy = ({ color, scale = 1 }) => (
    <svg className="control_icon" width={37 * scale} height={44 * scale} viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 2V11H34" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
        <path d="M11 32V2H26.1304L35 10.5V22.3077V32H11Z" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
        <path d="M11 14H2V42H25V32H11V14Z" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
    </svg>
)

export const Search = ({ color, scale = 1 }) => (
    <svg className="control_icon" width={36 * scale} height={38 * scale} viewBox="0 0 36 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22.5" cy="13.5" r="12" /* stroke={color} */ strokeWidth="3" />
        <line x1="14.0607" y1="23.0607" x2="1.06066" y2="36.0607" /* stroke={color} */ strokeWidth="3" />
    </svg>
)

export const Branch = ({ color, scale = 1 }) => (
    <svg className="control_icon" width={35 * scale} height={45 * scale} viewBox="0 0 35 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="5.5" /* stroke={color} */ strokeWidth="3" />
        <circle cx="28" cy="14" r="5.5" /* stroke={color} */ strokeWidth="3" />
        <circle cx="7" cy="38" r="5.5" /* stroke={color} */ strokeWidth="3" />
        <path d="M7 13V32C7 26 10.2262 24.5 11.8394 24.5H21.5181C26.5 24.5 28 24.5 28 19" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
    </svg>
)

export const Debug = ({ color, scale = 1 }) => (
    <svg className="control_icon" width={43 * scale} height={46 * scale} viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 27V1.5L41 20L20.5 32" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
        <path d="M16 37C16 41.6667 13.0944 45 10 45C6.90561 45 4 41.6667 4 37C4 32.3333 6.90561 29 10 29C13.0944 29 16 32.3333 16 37Z" /* stroke={color} */ strokeWidth="2" />
        <path d="M5 33C9 36.6222 13.3333 34.5092 15 33" /* stroke={color} */ strokeWidth="2" strokeLinejoin="round" />
        <line x1="4.4453" y1="33.8321" x2="1.4453" y2="31.8321" /* stroke={color} */ strokeWidth="2" />
        <line x1="17.4453" y1="44.8321" x2="14.4453" y2="42.8321" /* stroke={color} */ strokeWidth="2" />
        <line x1="19" y1="38" x2="16" y2="38" /* stroke={color} */ strokeWidth="2" />
        <line x1="4" y1="38" x2="1" y2="38" /* stroke={color} */ strokeWidth="2" />
        <line x1="18.5547" y1="31.8321" x2="15.5547" y2="33.8321" /* stroke={color} */ strokeWidth="2" />
        <line x1="5.5547" y1="42.8321" x2="2.5547" y2="44.8321" /* stroke={color} */ strokeWidth="2" />
    </svg>
)

export const Extencions = ({ color, scale = 1 }) => (
    <svg className="control_icon" width={45 * scale} height={45 * scale} viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="11" width="16" height="16" /* stroke={color} */ strokeWidth="2" />
        <rect x="27" y="2" width="16" height="16" /* stroke={color} */ strokeWidth="2" />
        <rect x="18" y="27" width="16" height="16" /* stroke={color} */ strokeWidth="2" />
        <rect x="2" y="27" width="16" height="16" /* stroke={color} */ strokeWidth="2" />
        <path d="M18 11H2V43H34V27" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
        <path d="M26 2H43V19" /* stroke={color} */ strokeWidth="3" strokeLinejoin="round" />
    </svg>
)