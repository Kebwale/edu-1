import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    const goToMatomo = () => {
        navigate("/edu-1/matomo");
    };

    return (
        <>
            <div id="index-banner">
                <div className="section no-pad-bot">
                    <div>
                        <br />
                        <h2 className="header center gray-text txt my-header">
                            Self-Hosted решения для аналитики
                            <br />
                            Web-проектов
                        </h2>
                        <div className="row center">
                            <h5 className="header gray-text txt my-header5">
                                Self-Hosted (или "самохостинговые") решения для
                                аналитики веб-проектов - это программные
                                решения, которые устанавливаются и запускаются
                                на сервере или инфраструктуре, принадлежащей вам
                                или вашей компании, в отличие от решений на базе
                                облачных сервисов.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Примеры:
                </h4>
                <div className="row">
                    <h5 className="center">
                        <div
                            onClick={goToMatomo}
                            className="red-text"
                            style={{
                                cursor: "pointer",
                                fontSize: "30px",
                            }}
                        >
                            Matomo
                        </div>
                        (ранее известный как Piwik)
                    </h5>

                    <p className="text-p center">
                        Является одним из наиболее популярных открытых решений
                        для веб-аналитики. Он предлагает множество функций,
                        таких как отслеживание посетителей в реальном времени,
                        анализ поведения, целевые страницы, геолокацию, отчеты
                        по электронной почте и многое другое. Система уважает
                        приватность пользователей, предоставляя возможности
                        анонимизации данных и отказа от отслеживания.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Plausible Analytics</h5>

                    <p className="text-p center">
                        Легковесное решение для веб-аналитики с открытым
                        исходным кодом. Оно фокусируется на простоте и
                        приватности, предоставляя основные метрики без
                        использования кукисов или сбора личных данных
                        посетителей. Панель управления интуитивно понятна и
                        показывает основную информацию на одной странице.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Fathom Analytics</h5>

                    <p className="text-p center">
                        Современное решение для веб-аналитики, которое не
                        требует использования кукисов и фокусируется на
                        приватности. Оно предоставляет чистую и простую панель
                        управления, где можно увидеть основные метрики
                        активности на вашем сайте. Весь код Fathom является
                        открытым, что позволяет настроить и адаптировать его под
                        свои нужды.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">GoAccess</h5>

                    <p className="text-p center">
                        Утилита анализа логов в реальном времени с интерфейсом
                        командной строки. Он предоставляет детальный отчет о
                        трафике вашего сайта, анализируя логи сервера. Вы можете
                        видеть отчеты в терминале или через веб-интерфейс.
                        GoAccess уделяет внимание скорости и эффективности,
                        обрабатывая большие логи очень быстро.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">Ackee</h5>

                    <p className="text-p center">
                        Инструмент веб-аналитики с акцентом на приватность и
                        минималистичный дизайн. Он не собирает личную информацию
                        посетителей, вместо этого фокусируясь на агрегированных
                        и анонимных статистических данных. Интерфейс Ackee
                        простой и элегантный, позволяя быстро получить
                        представление о том, как ваши сайты или приложения
                        используются.
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Преимущества:
                </h4>
                <div className="row">
                    <h5 className="center">
                        1. Приватность и безопасность данных
                    </h5>

                    <p className="text-p center">
                        Данные хранятся на локальном сервере, что дает полный
                        контроль над ними.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">2. Гибкость</h5>

                    <p className="text-p center">
                        Можно настраивать и расширять функционал в соответствии
                        со своими потребностями.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        3. Отсутствие регулярных платежей
                    </h5>

                    <p className="text-p center">
                        Нет необходимости платить месячные или годовые сборы за
                        использование программного обеспечения (хотя могут
                        возникать затраты на сервер и обслуживание).
                    </p>
                </div>
            </div>

            <div className="section">
                <h4 className="header center gray-text txt my-header3">
                    Недостатки:
                </h4>
                <div className="row">
                    <h5 className="center">
                        1. Требования к техническим ресурсам
                    </h5>

                    <p className="text-p center">
                        Необходим сервер и определенные навыки для установки,
                        настройки и поддержания работы решения.
                    </p>
                </div>

                <div className="row">
                    <h5 className="center">
                        2. Отсутствие постоянной поддержки
                    </h5>

                    <p className="text-p center">
                        В отличие от коммерческих продуктов, где команда
                        постоянно работает над обновлениями и исправлениями, в
                        open-source решениях это может быть не так очевидно.
                    </p>
                </div>
            </div>

            <div className="section">
                <div className="row">
                    <div className="col s12 center">
                        <h4 className="header center gray-text txt my-header3">
                            Для кого подходят такие решения?
                        </h4>
                        <p className="center text-p">
                            Self-Hosted решения идеально подходят для компаний и
                            организаций, которые ценят приватность данных и
                            готовы инвестировать в собственную инфраструктуру и
                            обслуживание. Также они могут быть полезны для тех,
                            кто хочет иметь возможность настройки и расширения
                            функционала аналитического решения.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default MainPage;
