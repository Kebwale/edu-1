import { useState, useEffect, useRef } from "react";

import FanthomAnalyticsLogo from "../assets/Fathom_Logo.png";

function FathomAnalytics() {
    const [iframeHeight, setIframeHeight] = useState("500px");
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const openLinkOffSite = () => {
        const awesomeLink = "https://usefathom.com/";
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

    const goToGatsby = () => {
        const awesomeLink = "https://www.gatsbyjs.com/";
        window.open(awesomeLink, "_blank");
    };

    const goToWebHugo = () => {
        const awesomeLink = "https://gohugo.io/";
        window.open(awesomeLink, "_blank");
    };

    const goToWebJekyll = () => {
        const awesomeLink = "https://jekyllrb.com/";
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
                            src={FanthomAnalyticsLogo}
                            alt="Fathom Logo"
                            className="logos"
                        />
                    </div>

                    <div className="section">
                        <div className="row">
                            <div className="col s12 center">
                                <h4 className="header center gray-text txt my-header3"></h4>
                                <p className="center text-p">
                                    Fathom Analytics — это современный
                                    инструмент веб-аналитики, который
                                    предоставляет сведения о трафике на сайте,
                                    при этом сохраняя конфиденциальность
                                    посетителей. По аналогии с Plausible
                                    Analytics, Fathom предлагает альтернативу
                                    таким сервисам, как Google Analytics, не
                                    используя куки и не собирая личные данные
                                    пользователей.
                                </p>
                            </div>
                        </div>
                    </div>

                    <iframe
                        ref={iframeRef}
                        height={iframeHeight}
                        width="100%"
                        src="https://www.youtube.com/embed/K5lO7AMURA4?si=ib-DRqyidv_YZWOM"
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
                        Fathom собирает анонимные данные, не требует
                        использования кукис и соответствует требованиям GDPR,
                        CCPA и других законов о защите данных.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">2. Простота и Удобство</h5>

                    <p className="text-p center">
                        Платформа предлагает чистый и интуитивный интерфейс, что
                        делает ее простой в использовании даже для начинающих.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">3. Легковесный</h5>

                    <p className="text-p center">
                        Скрипт отслеживания компактен и быстро загружается, что
                        положительно сказывается на производительности вашего
                        сайта.
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
                    src="https://www.youtube.com/embed/w50IrwhzCEM?si=0Jz6r8nSUlwhZM0M"
                    allowFullScreen
                    style={{
                        maxHeight: "750px",
                    }}
                />

                <div className="row">
                    <h5 className="center">Установка</h5>

                    <p className="text-p center">
                        Добавьте скрипт отслеживания Fathom на ваш веб-сайт,
                        следуя инструкциям на{" "}
                        <b
                            className="blue-text"
                            onClick={openLinkOffSite}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            официальном сайте
                        </b>
                        .
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Аналитика</h5>

                    <p className="text-p center">
                        Войдите в свой аккаунт Fathom для просмотра
                        аналитических данных и настройки параметров
                        отслеживания.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Плагины
                </h4>
                <p className="text-p center">
                    Fathom Analytics предоставляет интеграцию с различными
                    платформами и CMS через плагины или интеграцию с API. Вот
                    несколько примеров:
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
                        Для WordPress доступен официальный плагин Fathom
                        Analytics, который можно легко установить и настроить,
                        чтобы начать отслеживание статистики вашего сайта.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Jamstack Frameworks</h5>

                    <p className="text-p center">
                        Fathom также можно интегрировать с фреймворками
                        Jamstack, такими как{" "}
                        <p
                            onClick={goToGatsby}
                            className="orange-text"
                            style={{
                                cursor: "pointer",
                                display: "inline",
                            }}
                        >
                            Gatsby
                        </p>{" "}
                        и{" "}
                        <p
                            onClick={goToNext}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                display: "inline",
                            }}
                        >
                            Next.js
                        </p>
                        , используя соответствующие плагины или модули.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Сайты на статическом генераторе</h5>

                    <p className="text-p center">
                        Если вы используете статический генератор сайтов, такой
                        как{" "}
                        <p
                            onClick={goToWebHugo}
                            className="orange-text"
                            style={{
                                cursor: "pointer",
                                display: "inline",
                            }}
                        >
                            Hugo
                        </p>{" "}
                        или{" "}
                        <p
                            onClick={goToWebJekyll}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                display: "inline",
                            }}
                        >
                            Jekyll
                        </p>
                        , вы также можете интегрировать Fathom, добавив скрипт
                        отслеживания в шаблоны своего сайта.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Недостатки
                </h4>

                <div className="row">
                    <h5 className="center">Ограниченные функции</h5>

                    <p className="text-p center">
                        Возможности Fathom могут быть менее обширными по
                        сравнению с более развитыми платформами аналитики.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Цена</h5>

                    <p className="text-p center">
                        Fathom является платной платформой, что может быть
                        барьером для мелких предприятий или индивидуальных
                        веб-сайтов.
                    </p>
                </div>
            </div>
        </>
    );
}

export default FathomAnalytics;
