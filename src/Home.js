import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/30/AudibleES/es_ES/homestead/Gateway/ES-Amazon_GRD_DesktopHero_Template_1500x600b._CB402894930_.jpg" alt="amazon banner"/>

                <div className="home_row">
                    <Product 
                        id={12341234}
                        title='TP-Link TL-WA855RE Amplificador Señal de WiFi Repetidor 300 Mbps Extensor de Red WiFi Enrutador Inalámbrico' 
                        price={19.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71mPVeYK8aL._AC_SX466_.jpg' 
                        rating={5}/>

                    <Product 
                        id={12376312}
                        title='Echo Dot (3.ª generación) - Altavoz inteligente con Alexa, tela de color antracita' 
                        price={39.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61u48FEs0rL._AC_SX425_.jpg' 
                        rating={4}/> 
                </div>

                <div className="home_row">
                    <Product 
                        id={35462781}
                        title='Poco X3 NFC - Smartphone 6+128GB, 6,67” FHD+ cámara Frontal' 
                        price={249.00} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61N15BcBrrL._AC_SY355_.jpg' 
                        rating={5}/>

                    <Product 
                        id={23478213}
                        title='BIC Kids Kid Couleur rotuladores punta media - colores Surtidos, Estuche de 12 unidades' 
                        price={15.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/7113--xNXbL._AC_SL1500_.jpg' 
                        rating={3}/>

                    <Product 
                        id={35472921}
                        title='Bedsure Juego de Sábanas 90x190/200 cm - 3 Piezas - Sábana ' 
                        price={22.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/712%2B0ZRC5SL._AC_SY450_.jpg' 
                        rating={5}/>

                </div>
                
                <div className="home_row">
                    <Product 
                        id="23123890" 
                        title='Samsung Crystal UHD 2020 43TU7005- Smart TV de 43", Resolución 4K, HDR 10+, Crystal Display, Procesador 4K, Función One Remote Control y Compatible con Asistente de Voz [Clase de eficiencia energética A]' 
                        price={349.99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/71SKmQSLWaL._AC_SX425_.jpg' 
                        rating={5}/>

                </div>
                </div>
        </div>
    )
}

export default Home
