import { useState, useEffect, useRef } from "react";

import GoAccessLogo from "../assets/GoAccess_Logo.png";

function GoAccess() {
    const [iframeHeight, setIframeHeight] = useState("500px");
    const iframeRef = useRef<HTMLIFrameElement | null>(null);

    const openLinkOffSite = () => {
        const awesomeLink = "https://goaccess.io/";
        window.open(awesomeLink, "_blank");
    };

    const adjustHeight = () => {
        if (iframeRef.current) {
            const ratio = 16 / 9;
            const width = iframeRef.current.offsetWidth;
            setIframeHeight(`${width / ratio}px`);
        }
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
                            src={GoAccessLogo}
                            alt="GoAccess Logo"
                            className="logos"
                        />
                    </div>

                    <div className="section">
                        <div className="row">
                            <div className="col s12 center">
                                <h4 className="header center gray-text txt my-header3"></h4>
                                <p className="center text-p">
                                    GoAccess — это гибкий и визуальный
                                    инструмент для анализа лог-файлов
                                    веб-сервера в реальном времени. Он позволяет
                                    быстро анализировать и просматривать
                                    статистику веб-сайта на основе данных,
                                    записанных сервером, и предоставляет краткие
                                    и читаемые отчеты в различных форматах.
                                </p>
                            </div>
                        </div>
                    </div>

                    <iframe
                        ref={iframeRef}
                        height={iframeHeight}
                        width="100%"
                        src="https://www.youtube.com/embed/X0GSJVLAakU?si=AWdb9uOaWXsUpNm1"
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
                    <h5 className="center">1. Анализ в Реальном Времени</h5>

                    <p className="text-p center">
                        GoAccess предоставляет данные в реальном времени,
                        позволяя владельцам сайтов быстро отслеживать активность
                        и использование ресурса.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">2. Простота Использования</h5>

                    <p className="text-p center">
                        Это легковесное и простое в использовании программное
                        обеспечение с возможностью работы прямо из командной
                        строки.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">3. Визуализация Данных</h5>

                    <p className="text-p center">
                        Генерация визуальных отчетов, доступных в различных
                        форматах, включая HTML, JSON и CSV.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">4. Без кукисов и JavaScript</h5>

                    <p className="text-p center">
                        GoAccess анализирует логи сервера напрямую, и ему не
                        требуется внедрение JavaScript на ваш сайт или
                        использование куки.
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
                    src="https://www.youtube.com/embed/fHhBDY7EgZY?si=8Ua0_NmjLxCFGd_9"
                    allowFullScreen
                    style={{
                        maxHeight: "750px",
                    }}
                />

                <div className="row">
                    <h5 className="center">Установка</h5>

                    <p className="text-p center">
                        Установите GoAccess на ваш сервер, следуя инструкциям на{" "}
                        <b
                            className="blue-text"
                            onClick={openLinkOffSite}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            официальном сайте
                        </b>{" "}
                        .
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Конфигурация</h5>

                    <p className="text-p center">
                        Настройте GoAccess для анализа лог-файлов вашего
                        веб-сервера (Apache, Nginx и другие).
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Анализ данных</h5>

                    <p className="text-p center">
                        Запустите GoAccess для анализа лог-файлов и генерации
                        отчетов.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Плагины
                </h4>
                <p className="text-p center">
                    GoAccess, как правило, не использует плагины в том смысле, в
                    каком они применяются в других программных продуктах, таких
                    как веб-браузеры или CMS. Это автономное программное
                    обеспечение, которое анализирует лог-файлы веб-сервера, и
                    оно не предназначено для расширения с помощью сторонних
                    плагинов.
                </p>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Недостатки
                </h4>
                <div className="row">
                    <h5 className="center">Ограниченная Глубина Аналитики</h5>

                    <p className="text-p center">
                        GoAccess может предоставлять менее подробную аналитику
                        по сравнению с другими решениями, так как он анализирует
                        только лог-файлы сервера.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        Отсутствие Графического Интерфейса
                    </h5>

                    <p className="text-p center">
                        Хотя GoAccess может генерировать графические отчеты, сам
                        он работает из командной строки, что может быть неудобно
                        для некоторых пользователей.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">О Не Подходит для Всех Серверов</h5>

                    <p className="text-p center">
                        Не все серверы логируют нужную для анализа информацию по
                        умолчанию.
                    </p>
                </div>
            </div>
        </>
    );
}

export default GoAccess;
