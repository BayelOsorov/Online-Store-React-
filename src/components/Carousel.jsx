
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MyCarousel = () => {

    return (
        <Carousel autoPlay>
            <div>
                <img alt="" src="https://static.tildacdn.com/tild6263-3364-4839-b035-393531663838/custom-1600.jpg" />
                <h1 className="slider-h2"  >iPhone 11 Pro Max Camouflage Purple </h1>
                <p className="slider-text" >Высокие технологии, неповторимый дизайн, ювелирная точность</p>
            </div>
            <div>
                <img alt="" src="https://static.tildacdn.com/tild6235-3337-4465-b866-373130653338/321.jpg" />
                <h1 className="slider-h2"  >JUMELEON SLING BAG</h1>
                <p className="slider-text">Новая линейка поясных сумок с элементами из рефлективной ткани</p>
            </div>
            <div>
                <img alt="" src="https://static.tildacdn.com/tild6230-3036-4563-b966-326437366534/_MG_9292.jpg" />
                <h1 className="slider-h2"  >SYMMETRIC sling holster bag</h1>
                <p className="slider-text">Новая функциональная слинг-сумка для городского образа жизни.</p>
            </div>
            <div>
                <img alt="" src="https://static.tildacdn.com/tild3132-3336-4339-b561-396533303635/3.jpg" />
                <h1 className="slider-h2"  >WALLETS & CLUTCH BAGS</h1>
                <p className="slider-text">Решения для мелких деталей и наличных</p>
            </div>
            <div>
                <img alt="" src="https://static.tildacdn.com/tild3735-3461-4435-b639-333538656166/tshirt-jumeleon-1600.jpg"
                />
                <h1 className="slider-h2"  >JUMELEON T-SHIRT</h1>
                <p className="slider-text">Концептуальная коллекция футболок, меняющаяся под тебя</p>
            </div>
            <div>
                <img alt="" src="https://static.tildacdn.com/tild3731-3130-4666-a437-616439626431/_MG_8508.jpg" />
                <h1 className="slider-h2"  >CARBON PROTECT 2020</h1>
                <p className="slider-text">Совершенно новые чехлы с карбоновым 3D орнаментом</p>
            </div>

            <div>
                <img alt="" src="https://static.tildacdn.com/tild3531-6633-4163-b434-323261313534/photo.jpg" />
                <h1 className="slider-h2"  >VOSKHOD/ВОСХОД</h1>
                <p className="slider-text">Бизнес-портфель для высокого уровня вашей деловой жизни</p>
            </div>


        </Carousel>

    );
};

export default MyCarousel;