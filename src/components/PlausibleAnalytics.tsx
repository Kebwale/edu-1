import { useState, useEffect, useRef } from "react";

import PlausibleAnalyticsLogo from "../assets/Plausible_Analytics_Logo.png";

function PlausibleAnalytics() {
    const [iframeHeight, setIframeHeight] = useState("500px");
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const openLinkOffSite = () => {
        const awesomeLink = "https://plausible.io/";
        window.open(awesomeLink, "_blank");
    };

    const adjustHeight = () => {
        if (iframeRef.current) {
            const ratio = 16 / 9;
            const width = iframeRef.current.offsetWidth;
            setIframeHeight(`${width / ratio}px`);
        }
    };

    const goToWordPress = () => {
        const awesomeLink = "https://wordpress.com/";
        window.open(awesomeLink, "_blank");
    };

    const goToNext = () => {
        const awesomeLink = "https://nextjs.org/";
        window.open(awesomeLink, "_blank");
    };

    const goToNuxt = () => {
        const awesomeLink = "https://nuxt.com/";
        window.open(awesomeLink, "_blank");
    };

    useEffect(() => {
        adjustHeight();

        window.addEventListener("resize", adjustHeight);

        return () => {
            window.removeEventListener("resize", adjustHeight);
        };
    }, []);

    return (
        <>
            <div id="index-banner">
                <div className="section no-pad-bot">
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            onClick={openLinkOffSite}
                            src={PlausibleAnalyticsLogo}
                            alt="Plausible Logo"
                            className="logos"
                        />
                    </div>

                    <div className="section">
                        <div className="row">
                            <div className="col s12 center">
                                <h4 className="header center gray-text txt my-header3"></h4>
                                <p className="center text-p">
                                    Plausible Analytics — это веб-аналитический
                                    сервис, предоставляющий подробную информацию
                                    о трафике на веб-сайте без использования
                                    кукис (cookies) и соблюдения приватности
                                    пользователей. Платформа была разработана с
                                    целью обеспечения прозрачности и защиты
                                    конфиденциальности данных, в отличие от
                                    других платформ аналитики веб-сайтов, таких
                                    как Google Analytics.
                                </p>
                            </div>
                        </div>
                    </div>

                    <iframe
                        ref={iframeRef}
                        height={iframeHeight}
                        width="100%"
                        src="https://www.youtube.com/embed/aFG7St-YnCY?si=9baPCkg9QKynBZm5"
                        allowFullScreen
                        style={{
                            maxHeight: "750px",
                        }}
                    />
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Основные характеристики:
                </h4>
                <div className="row">
                    <h5 className="center">1. Приватность</h5>

                    <p className="text-p center">
                        <ul>
                            <li>
                                Plausible не использует куки, поэтому вам не
                                нужно получать согласие посетителей на
                                использование кукис на вашем сайте.
                            </li>
                            <li>
                                Plausible совместим с GDPR, CCPA и другими
                                законами о защите данных.
                            </li>
                        </ul>
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">2. Легковесность</h5>

                    <p className="text-p center">
                        <ul>
                            <li>
                                Скрипт отслеживания очень маленький и быстро
                                загружается, минимизируя влияние на
                                производительность вашего сайта.
                            </li>
                        </ul>
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">3. Простота использования</h5>

                    <p className="text-p center">
                        Интерфейс пользователя является чистым и интуитивно
                        понятным, делая аналитику доступной даже для не
                        технически подкованных пользователей.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">4. Открытый исходный код</h5>

                    <p className="text-p center">
                        Plausible является программой с открытым исходным кодом,
                        что позволяет сообществу вносить свой вклад в развитие
                        продукта.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Пример установки и использования:
                </h4>
                <iframe
                    ref={iframeRef}
                    height={iframeHeight}
                    width="100%"
                    src="https://www.youtube.com/embed/nImTI8u5JLk?si=dAz5D2KV7uUoUvWw"
                    allowFullScreen
                    style={{
                        maxHeight: "750px",
                    }}
                />

                <div className="row">
                    <h5 className="center">Получение доступа</h5>

                    <p className="text-p center">
                        Зарегистрируйтесь на{" "}
                        <b
                            className="blue-text"
                            onClick={openLinkOffSite}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            сайте
                        </b>{" "}
                        Plausible.
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Интеграция с сайтом</h5>

                    <p className="text-p center">
                        Добавьте скрипт отслеживания на ваш веб-сайт.
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Настройка</h5>

                    <p className="text-p center">
                        Настройте цели и параметры отслеживания в соответствии с
                        вашими потребностями.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Плагины
                </h4>
                <p className="text-p center">
                    Plausible является частью плагинов для популярных
                    фреймворков для облегчения интеграции с ним:
                </p>
                <div className="row">
                    <h5 className="center">
                        <div
                            onClick={goToWordPress}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            WordPress
                        </div>
                    </h5>

                    <p className="text-p center">
                        Для пользователей WordPress существует плагин, который
                        облегчает интеграцию Plausible с вашим сайтом.
                    </p>
                </div>

                <div className="row">
                    <h5
                        className="center"
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <div
                            onClick={goToNext}
                            className="orange-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            Next.js
                        </div>
                        ,{" "}
                        <div
                            onClick={goToNuxt}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                                marginLeft: "10px",
                            }}
                        >
                            Nuxt.js
                        </div>
                    </h5>

                    <p className="text-p center">
                        Plausible также может быть интегрирован с современными
                        фреймворками для разработки веб-приложений.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Недостатки
                </h4>
                <p className="text-p center">
                    Как и у любого другого инструмента, у Plausible есть свои
                    недостатки:
                </p>
                <div className="row">
                    <h5 className="center">
                        Ограниченные функциональные возможности
                    </h5>

                    <p className="text-p center">
                        По сравнению с более крупными платформами аналитики,
                        такими как Google Analytics, функциональные возможности
                        Plausible могут быть ограничены. Например, они могут не
                        предоставлять такого же глубокого анализа поведения
                        пользователей или возможности сегментации.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        Отсутствие интеграции с некоторыми платформами
                    </h5>

                    <p className="text-p center">
                        Возможно, Plausible не предоставляет интеграции с
                        некоторыми платформами или инструментами, которые вы уже
                        используете.
                    </p>
                </div>
            </div>
        </>
    );
}

export default PlausibleAnalytics;
