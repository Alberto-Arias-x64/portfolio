export const Copy = ({ color, scale = 1 }) => (
    <svg className="control_icon active_app" width={37 * scale} height={44 * scale} viewBox="0 0 37 44" fill="none" xmlns="http://www.w3.org/2000/svg">
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

export const Mail = ({ color, scale = 1 }) => (
    <svg className="control_icon" width={26 * scale} height={21 * scale} viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 1.5V19.5H25V1.5M1.5 1.5H25M1.5 1.5L13 10.5L25 1.5" /* stroke={color} */ strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
)

export const Linkeding = ({ color, scale = 1 }) => (
    <svg className="control_icon_especial" width={28 * scale} height={28 * scale} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.08 7.28C10.08 7.61227 9.98147 7.93708 9.79687 8.21336C9.61227 8.48963 9.34989 8.70496 9.04291 8.83212C8.73593 8.95927 8.39814 8.99254 8.07225 8.92772C7.74636 8.8629 7.44701 8.70289 7.21206 8.46794C6.97711 8.23299 6.8171 7.93364 6.75228 7.60775C6.68746 7.28186 6.72073 6.94407 6.84788 6.63709C6.97504 6.33011 7.19037 6.06773 7.46664 5.88313C7.74292 5.69853 8.06773 5.6 8.4 5.6C8.84556 5.6 9.27288 5.777 9.58794 6.09206C9.903 6.40712 10.08 6.83444 10.08 7.28V7.28ZM28 2.24V25.76C28 26.3541 27.764 26.9238 27.3439 27.3439C26.9238 27.764 26.3541 28 25.76 28H2.24C1.64592 28 1.07616 27.764 0.656081 27.3439C0.235999 26.9238 0 26.3541 0 25.76V2.24C0 1.64592 0.235999 1.07616 0.656081 0.656081C1.07616 0.235999 1.64592 0 2.24 0H25.76C26.3541 0 26.9238 0.235999 27.3439 0.656081C27.764 1.07616 28 1.64592 28 2.24ZM25.76 25.76V2.24H2.24V25.76H25.76ZM8.4 10.64C8.10296 10.64 7.81808 10.758 7.60804 10.968C7.398 11.1781 7.28 11.463 7.28 11.76V20.72C7.28 21.017 7.398 21.3019 7.60804 21.512C7.81808 21.722 8.10296 21.84 8.4 21.84C8.69704 21.84 8.98192 21.722 9.19196 21.512C9.402 21.3019 9.52 21.017 9.52 20.72V11.76C9.52 11.463 9.402 11.1781 9.19196 10.968C8.98192 10.758 8.69704 10.64 8.4 10.64ZM16.8 10.64C15.7917 10.6399 14.8066 10.9423 13.972 11.508C13.9108 11.2393 13.7526 11.0025 13.5277 10.8431C13.3028 10.6837 13.0271 10.6128 12.7532 10.644C12.4794 10.6752 12.2266 10.8063 12.0434 11.0122C11.8601 11.2181 11.7592 11.4844 11.76 11.76V20.72C11.76 21.017 11.878 21.3019 12.088 21.512C12.2981 21.722 12.583 21.84 12.88 21.84C13.177 21.84 13.4619 21.722 13.672 21.512C13.882 21.3019 14 21.017 14 20.72V15.68C14 14.9374 14.295 14.2252 14.8201 13.7001C15.3452 13.175 16.0574 12.88 16.8 12.88C17.5426 12.88 18.2548 13.175 18.7799 13.7001C19.305 14.2252 19.6 14.9374 19.6 15.68V20.72C19.6 21.017 19.718 21.3019 19.928 21.512C20.1381 21.722 20.423 21.84 20.72 21.84C21.017 21.84 21.3019 21.722 21.512 21.512C21.722 21.3019 21.84 21.017 21.84 20.72V15.68C21.84 14.3433 21.309 13.0614 20.3638 12.1162C19.4186 11.171 18.1367 10.64 16.8 10.64V10.64Z" /* fill="#787878" */ />
    </svg>
)

export const Instagram = ({ color, scale = 1 }) => (
    <svg className="control_icon_especial" width={26 * scale} height={26 * scale} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M7.70917 0.243672C9.07767 0.180672 9.514 0.166672 13 0.166672C16.486 0.166672 16.9223 0.181838 18.2897 0.243672C19.657 0.305505 20.5903 0.523672 21.407 0.839838C22.2622 1.16301 23.038 1.66817 23.6797 2.3215C24.333 2.962 24.837 3.73667 25.159 4.59301C25.4763 5.40967 25.6933 6.34301 25.7563 7.70801C25.8193 9.07884 25.8333 9.51517 25.8333 13C25.8333 16.486 25.8182 16.9223 25.7563 18.2908C25.6945 19.6558 25.4763 20.5892 25.159 21.4058C24.837 22.2623 24.3322 23.0382 23.6797 23.6797C23.038 24.333 22.2622 24.837 21.407 25.159C20.5903 25.4763 19.657 25.6933 18.292 25.7563C16.9223 25.8193 16.486 25.8333 13 25.8333C9.514 25.8333 9.07767 25.8182 7.70917 25.7563C6.34417 25.6945 5.41084 25.4763 4.59417 25.159C3.73775 24.837 2.9618 24.3321 2.32034 23.6797C1.66745 23.0388 1.16221 22.2632 0.839838 21.407C0.523672 20.5903 0.306672 19.657 0.243672 18.292C0.180672 16.9212 0.166672 16.4848 0.166672 13C0.166672 9.514 0.181838 9.07767 0.243672 7.71034C0.305505 6.343 0.523672 5.40967 0.839838 4.59301C1.16268 3.73677 1.66831 2.9612 2.3215 2.32034C2.96205 1.66759 3.73722 1.16236 4.59301 0.839838C5.40967 0.523672 6.34301 0.306672 7.70801 0.243672H7.70917ZM18.1858 2.55367C16.8325 2.49184 16.4265 2.47901 13 2.47901C9.5735 2.47901 9.1675 2.49184 7.81417 2.55367C6.56234 2.61084 5.88334 2.81967 5.43067 2.99584C4.83217 3.22917 4.40401 3.50567 3.95484 3.95484C3.52906 4.36907 3.20138 4.87333 2.99584 5.43067C2.81967 5.88334 2.61084 6.56234 2.55367 7.81417C2.49184 9.1675 2.47901 9.5735 2.47901 13C2.47901 16.4265 2.49184 16.8325 2.55367 18.1858C2.61084 19.4377 2.81967 20.1167 2.99584 20.5693C3.20117 21.1258 3.52901 21.631 3.95484 22.0452C4.36901 22.471 4.87417 22.7988 5.43067 23.0042C5.88334 23.1803 6.56234 23.3892 7.81417 23.4463C9.1675 23.5082 9.57234 23.521 13 23.521C16.4277 23.521 16.8325 23.5082 18.1858 23.4463C19.4377 23.3892 20.1167 23.1803 20.5693 23.0042C21.1678 22.7708 21.596 22.4943 22.0452 22.0452C22.471 21.631 22.7988 21.1258 23.0042 20.5693C23.1803 20.1167 23.3892 19.4377 23.4463 18.1858C23.5082 16.8325 23.521 16.4265 23.521 13C23.521 9.5735 23.5082 9.1675 23.4463 7.81417C23.3892 6.56234 23.1803 5.88334 23.0042 5.43067C22.7708 4.83217 22.4943 4.40401 22.0452 3.95484C21.6309 3.52909 21.1267 3.20142 20.5693 2.99584C20.1167 2.81967 19.4377 2.61084 18.1858 2.55367V2.55367ZM11.3608 16.9562C12.2763 17.3372 13.2956 17.3887 14.2448 17.1017C15.1939 16.8147 16.014 16.2071 16.5649 15.3826C17.1158 14.5582 17.3634 13.568 17.2654 12.5813C17.1674 11.5946 16.7298 10.6725 16.0275 9.9725C15.5798 9.52506 15.0384 9.18245 14.4424 8.96934C13.8464 8.75623 13.2105 8.67793 12.5806 8.74006C11.9507 8.80219 11.3423 9.00321 10.7994 9.32866C10.2565 9.6541 9.79254 10.0959 9.44086 10.6222C9.08918 11.1485 8.85856 11.7462 8.76561 12.3723C8.67265 12.9984 8.71968 13.6373 8.9033 14.2431C9.08692 14.8489 9.40257 15.4064 9.82751 15.8755C10.2525 16.3446 10.7761 16.7137 11.3608 16.9562ZM8.33567 8.33567C8.9482 7.72314 9.67538 7.23726 10.4757 6.90576C11.276 6.57426 12.1338 6.40364 13 6.40364C13.8663 6.40364 14.724 6.57426 15.5243 6.90576C16.3246 7.23726 17.0518 7.72314 17.6643 8.33567C18.2769 8.9482 18.7628 9.67538 19.0942 10.4757C19.4257 11.276 19.5964 12.1338 19.5964 13C19.5964 13.8663 19.4257 14.724 19.0942 15.5243C18.7628 16.3246 18.2769 17.0518 17.6643 17.6643C16.4273 18.9014 14.7495 19.5964 13 19.5964C11.2505 19.5964 9.57273 18.9014 8.33567 17.6643C7.09861 16.4273 6.40364 14.7495 6.40364 13C6.40364 11.2505 7.09861 9.57273 8.33567 8.33567V8.33567ZM21.0593 7.38601C21.2111 7.24282 21.3326 7.07063 21.4167 6.87964C21.5007 6.68865 21.5456 6.48274 21.5487 6.27409C21.5517 6.06544 21.5128 5.85831 21.4344 5.66495C21.356 5.47159 21.2395 5.29593 21.092 5.14838C20.9444 5.00083 20.7688 4.88439 20.5754 4.80594C20.382 4.7275 20.1749 4.68864 19.9663 4.69169C19.7576 4.69473 19.5517 4.7396 19.3607 4.82365C19.1697 4.9077 18.9975 5.02922 18.8543 5.181C18.5759 5.47621 18.4234 5.86831 18.4293 6.27409C18.4352 6.67987 18.5991 7.06736 18.886 7.35432C19.173 7.64128 19.5605 7.8051 19.9663 7.81102C20.372 7.81694 20.7641 7.66448 21.0593 7.38601V7.38601Z" /* fill="white" */ />
    </svg>

)

export const Wakatime = ({ scale = 1 }) => (
    <svg className="control_icon_especial" width={24 * scale} height={24 * scale} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 2.824C13.205 2.824 14.3982 3.06134 15.5115 3.52248C16.6248 3.98362 17.6363 4.65952 18.4884 5.51159C19.3405 6.36366 20.0164 7.37521 20.4775 8.4885C20.9387 9.60178 21.176 10.795 21.176 12C21.176 13.205 20.9387 14.3982 20.4775 15.5115C20.0164 16.6248 19.3405 17.6363 18.4884 18.4884C17.6363 19.3405 16.6248 20.0164 15.5115 20.4775C14.3982 20.9387 13.205 21.176 12 21.176C9.56637 21.176 7.23242 20.2092 5.51159 18.4884C3.79075 16.7676 2.824 14.4336 2.824 12C2.824 9.56637 3.79075 7.23242 5.51159 5.51159C7.23242 3.79075 9.56637 2.824 12 2.824V2.824ZM17.097 7.882C16.77 7.882 16.487 8.072 16.333 8.332C15.308 9.795 14.123 11.494 13.045 13.038L12.658 12.402C12.5796 12.27 12.4687 12.1603 12.3358 12.0834C12.2029 12.0066 12.0525 11.9651 11.899 11.963C11.7354 11.9657 11.5755 12.0129 11.4367 12.0996C11.2979 12.1863 11.1853 12.3092 11.111 12.455L10.754 13.036L8.762 10.093C8.68432 9.9594 8.57344 9.84814 8.44011 9.77C8.30678 9.69186 8.15552 9.64949 8.001 9.647C7.487 9.647 7.098 10.099 7.098 10.607C7.09783 10.8276 7.17061 11.0421 7.305 11.217L10.024 15.177C10.176 15.449 10.464 15.647 10.8 15.647C10.9623 15.644 11.1209 15.5977 11.2593 15.5127C11.3977 15.4278 11.5108 15.3074 11.587 15.164C11.633 15.093 11.817 14.796 11.901 14.66L12.225 15.18C12.19 15.133 12.301 15.293 12.312 15.31C12.336 15.341 12.366 15.369 12.39 15.395C12.409 15.414 12.43 15.431 12.448 15.447C12.484 15.48 12.528 15.503 12.563 15.527C12.588 15.543 12.615 15.555 12.639 15.567C12.668 15.582 12.699 15.591 12.727 15.602C12.785 15.627 12.849 15.629 12.907 15.642C12.938 15.646 12.971 15.645 12.999 15.647C13.289 15.647 13.545 15.498 13.706 15.287C15.106 13.287 16.548 11.232 17.805 9.438C17.9325 9.26554 18.0009 9.05649 18 8.842C18 8.334 17.611 7.882 17.097 7.882" /* fill="#F78181" */ />
    </svg>
)