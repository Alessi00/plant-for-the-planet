import styles from './../styles/anilloverdegranada.module.scss'

export default function FeaturesSection(){
    return(
        <div className={styles.featuresMainContainer}>
            <div className={styles.featuresContainerText}>
                <div>
                    <span>Un pulmón para una de las ciudades más bellas de España</span>
                    <h2>El Anillo verde de Granada</h2>
                
                    <p>En aras de reverdecer la ciudad de la Alhambra, este proyecto pretende crear un nuevo ecosistema formado por especies autóctonas.</p>
                    <p>Dicho ecosistema se llevará a cabo mediante la restauración de bosques y otros paisajes en una superficie aproximada de 800 hectáreas por un periodo de al menos 50 años, garantizando su exención de venta o explotación comercial y protegidas durante ese período.</p>
                    <p>La creación de este Anillo verde persigue, por un lado, mitigar el calentamiento global y, por otro, velar por la salud de las generaciones actuales y futuras, a través de la mejora de la calidad del aire, la promoción de la actividad física o los diversos beneficios para el sistema inmunológico y el metabolismo.</p>
                    <p>El proyecto se dividirá en varias etapas desde este año 2020 hasta 2030. </p>

                </div>
            </div>
            <div className={styles.featuresSection}>
                <div className={styles.singleFeature}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.9 332l.1 136c0 6.6-5.4 12-12 12l-136-.1c-6.6 0-12-5.4-12-12v-27.8c0-6.7 5.5-12.1 12.2-12l61.4 2.3 1.4-1.4-139-139L85 429l1.4 1.4 61.4-2.3c6.7-.1 12.2 5.3 12.2 12v27.8c0 6.6-5.4 12-12 12L12 480c-6.6 0-12-5.4-12-12l.1-136c0-6.6 5.4-12 12-12h27.8c6.7 0 12.1 5.5 12 12.2l-2.3 61.4L51 395l139-139L51 117l-1.4 1.4 2.3 61.4c.1 6.7-5.3 12.2-12 12.2H12.1c-6.6 0-12-5.4-12-12L0 44c0-6.6 5.4-12 12-12l136 .1c6.6 0 12 5.4 12 12v27.8c0 6.7-5.5 12.1-12.2 12l-61.4-2.3L85 83l139 139L363 83l-1.4-1.4-61.4 2.3c-6.7.1-12.2-5.3-12.2-12V44.1c0-6.6 5.4-12 12-12l136-.1c6.6 0 12 5.4 12 12l-.1 136c0 6.6-5.4 12-12 12h-27.8c-6.7 0-12.1-5.5-12-12.2l2.3-61.4-1.4-1.4-139 139 139 139 1.4-1.4-2.3-61.4c-.1-6.7 5.3-12.2 12-12.2h27.8c6.6 0 12 5.4 12 12z"/></svg>
                    <h2>El espacio</h2>
                    <p>800 hectáreas (Granada)</p>
                </div>

                <div className={styles.singleFeature}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm-32 50.8v11.3c0 11.9-12.5 19.6-23.2 14.3l-24-12c14.9-6.4 30.7-10.9 47.2-13.6zm32 369.8V456c-110.3 0-200-89.7-200-200 0-29.1 6.4-56.7 17.6-81.7 9.9 14.7 25.2 37.4 34.6 51.1 5.2 7.6 11.2 14.6 18.1 20.7l.8.7c9.5 8.6 20.2 16 31.6 21.8 14 7 34.4 18.2 48.8 26.1 10.2 5.6 16.5 16.3 16.5 28v32c0 8.5 3.4 16.6 9.4 22.6 15 15.1 24.3 38.7 22.6 51.3zm42.7 22.7l17.4-46.9c2-5.5 3.3-11.2 4.8-16.9 1.1-4 3.2-7.7 6.2-10.7l11.3-11.3c8.8-8.7 13.7-20.6 13.7-33 0-8.1-3.2-15.9-8.9-21.6l-13.7-13.7c-6-6-14.1-9.4-22.6-9.4H232c-9.4-4.7-21.5-32-32-32s-20.9-2.5-30.3-7.2l-11.1-5.5c-4-2-6.6-6.2-6.6-10.7 0-5.1 3.3-9.7 8.2-11.3l31.2-10.4c5.4-1.8 11.3-.6 15.5 3.1l9.3 8.1c1.5 1.3 3.3 2 5.2 2h5.6c6 0 9.8-6.3 7.2-11.6l-15.6-31.2c-1.6-3.1-.9-6.9 1.6-9.3l9.9-9.6c1.5-1.5 3.5-2.3 5.6-2.3h9c2.1 0 4.2-.8 5.7-2.3l8-8c3.1-3.1 3.1-8.2 0-11.3l-4.7-4.7c-3.1-3.1-3.1-8.2 0-11.3L264 112l4.7-4.7c6.2-6.2 6.2-16.4 0-22.6l-28.3-28.3c2.5-.1 5-.4 7.6-.4 78.2 0 145.8 45.2 178.7 110.7l-13 6.5c-3.7 1.9-6.9 4.7-9.2 8.1l-19.6 29.4c-5.4 8.1-5.4 18.6 0 26.6l18 27c3.3 5 8.4 8.5 14.1 10l29.2 7.3c-10.8 84-73.9 151.9-155.5 169.7z"/></svg>
                    <h2>Especies</h2>
                    <p>Pinos, encinas & especies mediterráneas</p>
                </div>

                <div className={styles.singleFeature}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M635.73 406.91l-194.04-297.6C435.9 100.44 425.95 96 416 96c-9.95 0-19.9 4.44-25.69 13.31l-52 79.76-70.79-110.55C261.32 68.84 250.66 64 240 64s-21.32 4.84-27.52 14.52L4.58 403.18C-7.99 422.81 6.81 448 30.92 448h580.22c22.5 0 36.32-23.09 24.59-41.09zM63.61 400L240 124.55 416.39 400H63.61zm409.78 0L366.71 233.4 416 157.8 573.92 400H473.39z"/></svg>
                    <h2>Monte público</h2>
                    <p>Monte público - Cesión por el Ayuntamiento de Granada</p>
                </div>

                <div className={styles.singleFeature}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M344 126c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 13.2 10.7 24 24 24s24-10.8 24-24zm-24 226c5 0 10-2 13.5-6.1 35.3-40 127.3-150.1 127.3-210.6C460.8 60.6 397.8 0 320 0S179.2 60.6 179.2 135.3c0 60.4 92 170.6 127.3 210.6C310 350 315 352 320 352zm0-304c51.2 0 92.8 39.2 92.8 87.3 0 21.4-31.8 79.1-92.8 152.6-61-73.5-92.8-131.2-92.8-152.6 0-48.1 41.6-87.3 92.8-87.3zm240 112c-2 0-4 .4-6 1.2l-73.5 27.2c-8.2 20.4-20.2 42-34.2 63.8L528 222v193l-128 44.5V316.3c-13.7 17.3-27.9 34.3-42.5 50.8-1.7 1.9-3.6 3.5-5.5 5.1v81.4l-128-45.2v-113c-18.1-24.1-34.8-48.8-48-72.8v180.2l-.6.2L48 450V257l123.6-43c-8-15.4-14.1-30.3-18.3-44.5L20.1 216C8 220.8 0 232.6 0 245.7V496c0 9.2 7.5 16 16 16 2 0 4-.4 6-1.2L192 448l172 60.7c13 4.3 27 4.4 40 .2L555.9 456c12.2-4.9 20.1-16.6 20.1-29.7V176c0-9.2-7.5-16-16-16z"/></svg>
                    <h2>Coordenadas</h2>
                    <p>37.203275, -3.588959</p>
                </div>
            </div>
        </div>
    )
}