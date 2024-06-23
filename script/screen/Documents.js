'use strict';

import AudioButton from "../audio/AudioButton.js";
import AudioLogo from "../audio/AudioLogo.js";
import AudioReturn from "../audio/AudioReturn.js";
import { index, circles, choiceDocuments  } from "../main.js";

export default class Documents {
    createScreen() {
        let main = document.getElementById("main");

        main.innerHTML = `
            <button id="documentsBtnReturn" class="btnReturnLeft" type="button">←</button>

            <div class="documents">

                <div class="flexColumnCenter">
                    <img id="documentsLogo" class="logo" src="image/logo.svg" alt="logo">
                </div>

                <div class="flexColumnCenter">
                    <details id="documentsDoc1">
                        <summary>Устав</summary>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f373_dd/%D0%A3%D1%81%D1%82%D0%B0%D0%B2%20%D0%9C%D0%9E%D0%A3%20%D0%9E%D0%9E%D0%A8%20%E2%84%964%20%D0%B3.%20%D0%9A%D0%B0%D1%82%D0%B0%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0.pdf">Устав МОУ ООШ №4 г. Катав-Ивановска.pdf (531 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f372_aa/%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D1%83%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D0%A3%D1%81%D1%82%D0%B0%D0%B2%20(2018%D0%B3).pdf">Постановление об утверждении изменений в Устав (2018г).pdf (327 КБ)</a>
                            </div>
                        </div>
                    </details>
                        
                    <details id="documentsDoc2">
                        <summary>Государственная аккредитация</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f381_6a/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BE%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8.jpg">Свидетельство о государственной аккредитации.jpg (585 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f379_ab/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83%20%D0%BE%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8.jpg">Приложение к свидетельству о государственной аккредитации.jpg (527 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f379_ab/%D0%9F%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BA%20%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D1%83%20%D0%BE%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9%20%D0%B0%D0%BA%D0%BA%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B0%D1%86%D0%B8%D0%B8.jpg">Приказ о переоформлении аккредитации.docx (631 КБ)</a>
                            </div>
                        </div>
                    </details>
                    
                    <details id="documentsDoc3">
                        <summary>Правила внутреннего распорядка обучающихся</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f395_71/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%B2%D0%BD%D1%83%D1%82%D1%80%D0%B5%D0%BD%D0%BD%D0%B5%D0%B3%D0%BE%20%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F.pdf">Правила внутреннего трудового распорядка для работников МОУ ООШ №4 г. Катав-Ивановска.pdf (743 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc4">
                        <summary>Отчет о результатах самообследования</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f399_38/%D0%9E%D0%A2%D0%A7%D0%95%D0%A2%20%D0%9E%20%D0%A1%D0%90%D0%9C%D0%9E%D0%9E%D0%91%D0%A1%D0%9B%D0%95%D0%94%D0%9E%D0%92%D0%90%D0%9D%D0%98%D0%98%20%D0%9E%D0%91%D0%A9%D0%95%D0%9E%D0%91%D0%A0%D0%90%D0%97%D0%9E%D0%92%D0%90%D0%A2%D0%95%D0%9B%D0%AC%D0%9D%D0%9E%D0%93%D0%9E%20%D0%A3%D0%A7%D0%A0%D0%95%D0%96%D0%94%D0%95%D0%9D%D0%98%D0%AF.doc">ОТЧЕТ О САМООБСЛЕДОВАНИИ ОБЩЕОБРАЗОВАТЕЛЬНОГО УЧРЕЖДЕНИЯ.doc (294 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f397_9e/%D0%9E%D1%82%D1%87%D0%B5%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202017%20%D0%B3%D0%BE%D0%B4.pdf">Отчет о самообследовании за 2017 год.pdf (641 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Отчёт о самообследовании за 2018 год.pdf (1,5 МБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Отчет о результатах самообследования за 2019г.pdf (1,8 МБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Отчёт о результатах самообследования за 2021 год.pdf (1,3 МБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Показатели деятельности МОУ ООШ №4 г. Катав-Ивановска, подлежащей самообследованию.pdf (200 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Показатели деятельности МОУ ООШ №4 г. Катав-Ивановска,подлежащей самообследованию за 2018г.pdf (263 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Результаты анализа показателей деятельности организации на 31.12.2020г.pdf (365 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f405_60/%D0%9E%D1%82%D1%87%D1%91%D1%82%20%D0%BE%20%D1%81%D0%B0%D0%BC%D0%BE%D0%BE%D0%B1%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%202018%20%D0%B3%D0%BE%D0%B4.pdf">Результаты анализа показателей деятельности организации на 31.12.2021г.pdf (373 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc5">
                        <summary>Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и обучающимися и (или) родителями (законными представителями) несовершеннолетних обучающихся</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f394_49/%D0%9F%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20%D0%BE%D1%84%D0%BE%D1%80%D0%BC%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B2%D0%BE%D0%B7%D0%BD%D0%B8%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%B8%D1%8F,%20%D0%BF%D1%80%D0%B8%D0%BE%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%BF%D1%80%D0%B5%D0%BA%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D1%82%D0%BD%D0%BE%D1%88%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B5%D0%B9%20%D0%B8%20(%D0%B8%D0%BB%D0%B8)%20%D1%80%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8%20(%D0%B7%D0%B0%D0%BA%D0%BE%D0%BD%D0%BD%D1%8B%D0%BC%D0%B8%20%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%D0%BC%D0%B8)%20%D0%BD%D0%B5%D1%81%D0%BE%D0%B2%D0%B5%D1%80%D1%88%D0%B5%D0%BD%D0%BD%D0%BE%D0%BB%D0%B5%D1%82%D0%BD%D0%B8%D1%85%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F..pdf">Порядок оформления возникновения, приостановления и прекращения отношений между образовательной организацией и (или) родителями (законными представителями) несовершеннолетних обучающихся..pdf (877 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc6">
                        <summary>Правила приёма обучающихся</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f386_46/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%B0%20%D0%BF%D1%80%D0%B8%D1%91%D0%BC%D0%B0%20%D0%B2%20%D1%88%D0%BA%D0%BE%D0%BB%D1%83.pdf">Правила приёма в школу.pdf (891 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f387_84/%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%B7%D0%B0%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F.docx">Форма заявления.docx (30 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f388_c9/%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B8.docx">Форма расписки.docx (28 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f389_f8/%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D0%BE%D1%82%D0%BA%D0%B0%D0%B7%D0%B0.docx">Форма отказа.docx (37 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f390_4b/%D1%84%D0%BE%D1%80%D0%BC%D0%B0%20%D1%81%D0%BE%D0%B3%D0%BB%D0%B0%D1%81%D0%B8%D1%8F.docx">Форма согласия.docx (30 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc7">
                        <summary>Режим занятий обучающихся</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f391_3e/%D0%A0%D0%B5%D0%B6%D0%B8%D0%BC%20%D0%B7%D0%B0%D0%BD%D1%8F%D1%82%D0%B8%D0%B9%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F.pdf">Режим занятий обучающихся.pdf (348 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc8">
                        <summary>Формы, периодичность и порядок текущего контроля успеваемости и промежуточной аттестации обучающихся</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f392_3e/%D0%9F%D0%9E%D0%9B%D0%9E%D0%96%D0%95%D0%9D%D0%98%D0%95%20%D0%BE%20%D1%82%D0%B5%D0%BA%D1%83%D1%89%D0%B5%D0%BC%20%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D0%BE%D0%BB%D0%B5%20%D1%83%D1%81%D0%BF%D0%B5%D0%B2%D0%B0%D0%B5%D0%BC%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D0%BF%D1%80%D0%BE%D0%BC%D0%B5%D0%B6%D1%83%D1%82%D0%BE%D1%87%D0%BD%D0%BE%D0%B9%20%D0%B0%D1%82%D1%82%D0%B5%D1%81%D1%82%D0%B0%D1%86%D0%B8%D0%B8%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F,%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F,%20%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D1%85%20%D1%84%D0%BE%D1%80%D0%BC,%20%D0%BF%D0%B5%D1%80%D0%B8%D0%BE%D0%B4%D0%B8%D1%87%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%B8%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B0%20%D0%BF%D1%80%D0%BE%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F.pdf">ПОЛОЖЕНИЕ о текущем контроле успеваемости и промежуточной аттестации обучающихся начального общего образования, основного общего образования, установление их форм, периодичности и порядка проведения.pdf (597 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc9">
                        <summary>Порядок и основания перевода, отчисления и восстановления обучающихся</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f393_8f/%D0%9F%D0%BE%D1%80%D1%8F%D0%B4%D0%BE%D0%BA%20%D0%B8%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B0,%20%D0%BE%D1%82%D1%87%D0%B8%D1%81%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%B8%20%D0%B2%D0%BE%D1%81%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F.pdf">Порядок и основания перевода, отчисления и восстановления обучающихся.pdf (836 КБ)</a>
                            </div>
                        </div>
                    </details>

                    <details id="documentsDoc10">
                        <summary>Локальные нормативные акты образовательной организации</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f406_f7/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B8%D0%B8%20%D0%BF%D0%BE%20%D1%83%D1%80%D0%B5%D0%B3%D1%83%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E%20%D1%81%D0%BF%D0%BE%D1%80%D0%BE%D0%B2%20%D0%BC%D0%B5%D0%B6%D0%B4%D1%83%20%D1%83%D1%87%D0%B0%D1%81%D1%82%D0%BD%D0%B8%D0%BA%D0%B0%D0%BC%D0%B8%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%B0.pdf">Положение о комиссии по урегулированию споров между участниками образовательного процесса.pdf (435 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f407_35/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B5%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D1%80%D0%B0%D0%B1%D0%BE%D1%87%D0%B8%D1%85%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%20%D0%BF%D0%BE%20%D1%83%D1%87%D0%B5%D0%B1%D0%BD%D1%8B%D0%BC%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BC%D0%B5%D1%82%D0%B0%D0%BC,%20%D0%BA%D1%83%D1%80%D1%81%D0%B0%D0%BC,%20%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D1%83%D1%8E%D1%89%D0%B8%D0%BC%20%D0%A4%D0%93%D0%9E%D0%A1%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F%20%D0%B2%20%D0%9C%D0%9E%D0%A3%20%D0%9E%D0%9E%D0%A8%20%E2%84%964%20%D0%B3.%D0%9A%D0%B0%D1%82%D0%B0%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0.pdf">Положение о порядке разработки рабочих программ по учебным предметам, курсам, реализующим ФГОС начального общего образования в МОУ ООШ №4 г.Катав-Ивановска.pdf (987 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f408_d8/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D0%BF%D0%BE%D1%80%D1%82%D1%84%D0%BE%D0%BB%D0%B8%D0%BE%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F%20%D0%9C%D0%9E%D0%A3%20%D0%9E%D0%9E%D0%A8%20%E2%84%964%20%D0%B3.%20%D0%9A%D0%B0%D1%82%D0%B0%D0%B2-%D0%98%D0%B2%D0%B0%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0.pdf">Положение о портфолио обучающихся МОУ ООШ №4 г. Катав-Ивановска.pdf (568 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f409_e5/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%20%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%82%D1%83%D1%80%D0%B5,%20%D0%BF%D0%BE%D1%80%D1%8F%D0%B4%D0%BA%D0%B5%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B8%20%D0%B8%20%D1%83%D1%82%D0%B2%D0%B5%D1%80%D0%B6%D0%B4%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B9%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B9%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%D0%BD%D0%B0%D1%87%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%B8%20%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%89%D0%B5%D0%B3%D0%BE%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.pdf">Положение о структуре, порядке разработки и утверждения основной образовательной программы начального общего и основного общего образования.pdf (618 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f410_54/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%83%D1%87%D1%91%D1%82%D0%B5%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%BE%D1%81%D0%B2%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D0%BC%D0%B8%D1%81%D1%8F%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%20%D0%B8%20%D0%BF%D0%BE%D0%BE%D1%89%D1%80%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F,%20%D0%B0%20%20%D1%82%D0%B0%D0%BA%D0%B6%D0%B5%20%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B0%D1%80%D1%85%D0%B8%D0%B2%D0%B5%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8%20%20%D0%BE%D0%B1%20%D0%B8%D1%85%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B0%D1%85%20%D0%BD%D0%B0%20%D0%B1%D1%83%D0%BC%D0%B0%D0%B6%D0%BD%D1%8B%D1%85%20%D0%B8%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%D1%85.pdf">Положение об индивидуальном учёте результатов освоения обучающимися образовательных программ и поощрений обучающихся, а также хранение в архиве информации об их результатах на бумажных и электронных носителях.pdf (637 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f410_54/%D0%9F%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%BE%D0%B1%20%D0%B8%D0%BD%D0%B4%D0%B8%D0%B2%D0%B8%D0%B4%D1%83%D0%B0%D0%BB%D1%8C%D0%BD%D0%BE%D0%BC%20%D1%83%D1%87%D1%91%D1%82%D0%B5%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%BE%D0%B2%20%D0%BE%D1%81%D0%B2%D0%BE%D0%B5%D0%BD%D0%B8%D1%8F%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D0%BC%D0%B8%D1%81%D1%8F%20%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D1%85%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%20%D0%B8%20%D0%BF%D0%BE%D0%BE%D1%89%D1%80%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%BE%D0%B1%D1%83%D1%87%D0%B0%D1%8E%D1%89%D0%B8%D1%85%D1%81%D1%8F,%20%D0%B0%20%20%D1%82%D0%B0%D0%BA%D0%B6%D0%B5%20%D1%85%D1%80%D0%B0%D0%BD%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B0%D1%80%D1%85%D0%B8%D0%B2%D0%B5%20%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B8%20%20%D0%BE%D0%B1%20%D0%B8%D1%85%20%D1%80%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D0%B0%D1%85%20%D0%BD%D0%B0%20%D0%B1%D1%83%D0%BC%D0%B0%D0%B6%D0%BD%D1%8B%D1%85%20%D0%B8%20%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BD%D0%BE%D1%81%D0%B8%D1%82%D0%B5%D0%BB%D1%8F%D1%85.pdf">Положение о сайте МОУ ООШ №4 г. Катав-Ивановска.pdf (513 КБ)</a>
                            </div>
                        </div>
                    </details>
                    
                    <details id="documentsDoc11">
                        <summary>Федеральные документы</summary>    
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f382_bc/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BE%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8%20%D0%B2%20%D0%95%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80%20%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D0%BB%D0%B8%D1%86%20(%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D1%83%D1%87%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B).jpg">Свидетельство о внесении записи в Единый государственный реестр юридических лиц ( внесение изменений в учредительные документы).jpg (23 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f382_bc/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BE%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8%20%D0%B2%20%D0%95%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80%20%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D0%BB%D0%B8%D1%86%20(%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D1%83%D1%87%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B).jpg">Свиделельство о постановке на учёт российской организации в налоговом органе в налоговом органе.jpg (205 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f382_bc/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BE%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8%20%D0%B2%20%D0%95%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80%20%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D0%BB%D0%B8%D1%86%20(%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D1%83%D1%87%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B).jpg">Свидетельство о внесении записи в ЕГРЮЛ.jpg (652 КБ)</a>
                            </div>
                        </div>
                        <div class="enrollmentDoc">
                            <div>
                                <img src="image/ico/ico_doc.png" alt="icon">
                            </div>
                            <div>
                                <a href="https://r1.nubex.ru/s139788-bcb/f382_bc/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C%D1%81%D1%82%D0%B2%D0%BE%20%D0%BE%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B8%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B8%20%D0%B2%20%D0%95%D0%B4%D0%B8%D0%BD%D1%8B%D0%B9%20%D0%B3%D0%BE%D1%81%D1%83%D0%B4%D0%B0%D1%80%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%80%D0%B5%D0%B5%D1%81%D1%82%D1%80%20%D1%8E%D1%80%D0%B8%D0%B4%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85%20%D0%BB%D0%B8%D1%86%20(%20%D0%B2%D0%BD%D0%B5%D1%81%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%B2%20%D1%83%D1%87%D1%80%D0%B5%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5%20%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D1%8B).jpg">Свидетельство о внесении записи в Единый государственный реестр юридических лиц о юридическом лице.jpg (25 КБ)</a>
                            </div>
                        </div>
                    </details>

                </div>

            </div>
        `;
    }

    deleteScreen() {
        let main = document.getElementById('main');

        main.innerHTML = "";
    }

    eventBtn() {
        let logo = document.getElementById('documentsLogo');
        let btnReturn = document.getElementById('documentsBtnReturn');
        let documentsDoc1 = document.getElementById('documentsDoc1').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc2 = document.getElementById('documentsDoc2').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc3 = document.getElementById('documentsDoc3').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc4 = document.getElementById('documentsDoc4').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc5 = document.getElementById('documentsDoc5').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc6 = document.getElementById('documentsDoc6').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc7 = document.getElementById('documentsDoc7').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc8 = document.getElementById('documentsDoc8').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc9 = document.getElementById('documentsDoc9').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc10 = document.getElementById('documentsDoc10').onclick = () => {this.btnDocumentsDoc()};
        let documentsDoc11 = document.getElementById('documentsDoc11').onclick = () => {this.btnDocumentsDoc()};

        logo.onclick = this.Logo;
        btnReturn.onclick = this.Return;
    }

    Return() {
        new AudioReturn().start();
        choiceDocuments.createScreen();
        choiceDocuments.eventBtn();

        this.deleteScreen;
    }

    Logo() {
        new AudioLogo().start();
        index.createScreen();
        index.eventBtn();

        this.deleteScreen;
    }

    btnDocumentsDoc() {
        new AudioButton().start();
    }

}