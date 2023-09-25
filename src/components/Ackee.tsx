import AckeeLogo from "../assets/Ackee_Logo.png";

function Ackee() {
    const openLinkOffSite = () => {
        const awesomeLink = "https://ackee.electerious.com/";
        window.open(awesomeLink, "_blank");
    };

    const openLinkOffDoc = () => {
        const awesomeLink =
            "https://docs.ackee.electerious.com/#/docs/Get%20started";
        window.open(awesomeLink, "_blank");
    };

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
                            src={AckeeLogo}
                            alt="Ackee Logo"
                            className="logos"
                        />
                    </div>

                    <div className="section">
                        <div className="row">
                            <div className="col s12 center">
                                <h4 className="header center gray-text txt my-header3"></h4>
                                <p className="center text-p">
                                    Ackee — это инструмент самоуправляемой
                                    веб-аналитики, который помогает отслеживать
                                    посещения сайта с уважением к приватности
                                    пользователей. Созданный как открытое
                                    программное обеспечение, Ackee активно
                                    развивается и предлагает альтернативу
                                    традиционным аналитическим платформам, таким
                                    как Google Analytics.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Основные характеристики:
                </h4>
                <div className="row">
                    <h5 className="center">1. Приватность</h5>

                    <p className="text-p center">
                        Ackee соответствует GDPR, не использует куки и собирает
                        минимум данных, сохраняя приватность посетителей.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">2. Самостоятельное Размещение</h5>

                    <p className="text-p center">
                        Ackee размещается на вашем собственном сервере,
                        предоставляя вам полный контроль над данными и
                        аналитикой.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        3. Простой и Минималистичный Интерфейс
                    </h5>

                    <p className="text-p center">
                        Интуитивный и современный интерфейс упрощает анализ
                        данных.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">4. API</h5>

                    <p className="text-p center">
                        Ackee предлагает API, что позволяет интегрировать его с
                        другими системами и инструментами.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Пример установки и использования:
                </h4>

                <div className="row">
                    <h5 className="center">Установка</h5>

                    <p className="text-p center">
                        Установите и настройте Ackee на вашем сервере, следуя{" "}
                        <b
                            className="blue-text"
                            onClick={openLinkOffDoc}
                            style={{
                                cursor: "pointer",
                            }}
                        >
                            официальной документации
                        </b>
                        .
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Интеграция с сайтом</h5>

                    <p className="text-p center">
                        Добавьте трекинговый код Ackee на ваш сайт для начала
                        сбора аналитических данных.
                    </p>
                </div>
                <div className="row">
                    <h5 className="center">Анализ данных</h5>

                    <p className="text-p center">
                        Используйте панель управления Ackee для просмотра и
                        анализа собранных данных.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Плагины
                </h4>
                <p className="text-p center">
                    Ackee сам по себе не предоставляет функциональности для
                    плагинов в том смысле, как это делают некоторые другие
                    платформы аналитики. Однако это не означает, что невозможно
                    интегрировать Ackee с другими системами или платформами. Вот
                    несколько примеров, как можно расширить функциональность
                    Ackee:
                </p>
                <div className="row">
                    <h5 className="center">API</h5>

                    <p className="text-p center">
                        Ackee предоставляет API, которое можно использовать для
                        интеграции с другими системами или для автоматизации
                        определенных задач. Это может включать в себя
                        автоматическую генерацию отчетов, интеграцию с другими
                        системами аналитики или с платформами управления
                        контентом.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Скрипты и Интеграция</h5>

                    <p className="text-p center">
                        можно создать собственные скрипты или инструменты,
                        которые используют данные Ackee для дополнительного
                        анализа или визуализации. Это может также включать в
                        себя интеграцию с другими инструментами аналитики или
                        мониторинга.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Вебхуки</h5>

                    <p className="text-p center">
                        Используйте вебхуки для отправки данных аналитики Ackee
                        в другие системы или инструменты в реальном времени. Это
                        может быть полезно для создания пользовательских
                        уведомлений или алертов на основе аналитических данных.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Интеграция с CMS</h5>

                    <p className="text-p center">
                        Некоторые системы управления контентом могут
                        предоставлять плагины или модули, которые облегчают
                        интеграцию с Ackee. Проверьте, существуют ли такие
                        плагины для вашей CMS.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Кастомизация Интерфейса</h5>

                    <p className="text-p center">
                        Можно кастомизировать интерфейс Ackee или создать
                        собственные дашборды, используя данные API.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Недостатки
                </h4>

                <div className="row">
                    <h5 className="center">Ограниченный Набор Функций</h5>

                    <p className="text-p center">
                        Ackee может предлагать менее разнообразные функции
                        аналитики по сравнению с крупными коммерческими
                        платформами.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Требования к Размещению</h5>

                    <p className="text-p center">
                        Требуется самостоятельное размещение, что может быть
                        сложным для некоторых пользователей.
                    </p>
                </div>
            </div>
        </>
    );
}

export default Ackee;
