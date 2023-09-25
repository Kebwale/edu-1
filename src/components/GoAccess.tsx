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

    const goToHeatMaps = () => {
        const awesomeLink = "https://matomo.org/guide/reports/heatmaps/";
        window.open(awesomeLink, "_blank");
    };

    const goToFunnels = () => {
        const awesomeLink = "https://matomo.org/guide/reports/Funnels/";
        window.open(awesomeLink, "_blank");
    };

    const goToWebVitals = () => {
        const awesomeLink = "https://matomo.org/guide/reports/seo-web-vitals/";
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
                                    Matomo, изначально известный как Piwik,
                                    является ведущим программным обеспечением
                                    для веб-аналитики с открытым исходным кодом.
                                    Он предоставляет детальную информацию о
                                    посещениях вашего сайта, такую как
                                    посещенные страницы, время на сайте,
                                    используемые устройства и многое другое.
                                    Главное преимущество Matomo заключается в
                                    том, что вы контролируете свои данные.
                                </p>
                            </div>
                        </div>
                    </div>

                    <iframe
                        ref={iframeRef}
                        height={iframeHeight}
                        width="100%"
                        src="https://www.youtube.com/embed/UK_VdcY480E"
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
                        Matomo уделяет особое внимание приватности данных. У вас
                        есть полный контроль над вашими данными, и они никогда
                        не передаются третьим сторонам.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">2. Гибкость</h5>

                    <p className="text-p center">
                        Matomo можно настраивать в соответствии с конкретными
                        потребностями вашего бизнеса.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">3. Расширяемость</h5>

                    <p className="text-p center">
                        Благодаря системе плагинов Matomo может быть дополнен
                        дополнительными функциями.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">4. Мобильный доступ</h5>

                    <p className="text-p center">
                        Matomo предоставляет приложения для iOS и Android для
                        мониторинга ваших данных на ходу.
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
                    src="https://www.youtube.com/embed/Ffq-gAvlwE0?si=MJPsareG7vhUIB1q"
                    allowFullScreen
                    style={{
                        maxHeight: "750px",
                    }}
                />

                <div className="row">
                    <h5 className="center">Установка</h5>

                    <p className="text-p center">
                        Скачайте последнюю версию с{" "}
                        <b
                            className="blue-text"
                            onClick={openLinkOffSite}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            официального сайта
                        </b>{" "}
                        и следуйте инструкциям по установке на вашем сервере.
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Интеграция с сайтом</h5>

                    <p className="text-p center">
                        После установки вам будет предоставлен код для вставки
                        на ваш сайт. Этот код необходимо добавить на каждую
                        страницу вашего сайта.
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Анализ данных</h5>

                    <p className="text-p center">
                        После интеграции кода начните анализировать трафик на
                        вашем сайте, используя интуитивно понятный интерфейс
                        Matomo.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Расширение функционала с помощью плагинов
                </h4>
                <p className="text-p center">
                    Matomo имеет богатую экосистему плагинов, позволяющую
                    добавить различные функции, такие как:
                </p>
                <div className="row">
                    <h5 className="center">
                        <div
                            onClick={goToHeatMaps}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            Heatmaps
                        </div>
                    </h5>

                    <p className="text-p center">
                        Heatmaps позволяет регистрировать щелчки, движения мыши
                        и прокрутку страниц посетителями вашего сайта. Heatmaps
                        позволяет определить, где, по мнению пользователей,
                        что-то можно нажать, но это не так, есть ли части
                        страницы, которые редко просматриваются или с которыми
                        редко взаимодействуют, что на самом деле ищут ваши
                        посетители, какая часть страницы видна, когда
                        пользователи просматривают вашу страницу, и многое
                        другое. Тепловые карты позволяют оптимизировать работу
                        сайта и добиться максимального успеха.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        <div
                            onClick={goToFunnels}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            Funnels
                        </div>
                    </h5>

                    <p className="text-p center">
                        Определяет ряд действий, которые должны совершить
                        посетители на пути к достижению цели. Установив
                        расширение, вы сможете повысить коэффициент конверсии,
                        продажи и доходы, так как сможете определить, где вы
                        теряете посетителей на пути к достижению цели..
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        <div
                            onClick={goToWebVitals}
                            className="blue-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            SEO Web Vitals
                        </div>
                    </h5>

                    <p className="text-p center">
                        Matomo позволяет отслеживать метрики для SEO Web
                        Vitals.Это такие показатели, как скорость страницы и
                        загрузка вашего сайта, которые могут помочь в поисковой
                        оптимизации. Поисковые системы не хотят направлять людей
                        на страницы, которые выглядят нестабильными и долго
                        загружаются, поскольку это отражается на их репутации.
                        Поэтому поисковые системы, такие как Google, все чаще
                        используют эти основные показатели для ранжирования
                        сайтов и обеспечения отличного восприятия страниц
                        пользователями, переходящими по ссылкам из их
                        результатов. Обратите внимание, что функция SEO Web
                        Vitals предназначена исключительно для Matomo On-Premise
                        и в настоящее время недоступна в Matomo Cloud.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Почему выбирают Matomo?
                </h4>
                <div className="row">
                    <h5 className="center">Контроль над данными</h5>

                    <p className="text-p center">
                        В отличие от других платформ веб-аналитики, Matomo
                        позволяет вам хранить данные на вашем собственном
                        сервере.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Полная прозрачность</h5>

                    <p className="text-p center">
                        Код Matomo открыт, что означает возможность проверки и
                        модификации его функционала.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Соблюдение законов о приватности</h5>

                    <p className="text-p center">
                        Matomo упрощает процесс соблюдения законов о
                        приватности, таких как GDPR.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Недостатки
                </h4>
                <p className="text-p center">
                    Как и у любого другого инструмента, у Matomo есть свои
                    недостатки:
                </p>
                <div className="row">
                    <h5 className="center">Требования к ресурсам</h5>

                    <p className="text-p center">
                        Matomo может требовать дополнительных ресурсов сервера
                        при высокой загрузке.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Сложный в настройке</h5>

                    <p className="text-p center">
                        Начальная настройка и кастомизация могут потребовать
                        времени и знаний.
                    </p>
                </div>
            </div>
        </>
    );
}
export default GoAccess;
