import {AboutListInfo, EnterData, PartnersData, ValuesData} from "./types"

export class DataHelper {

    static teach(): [string, string[] | null][] {
        return [
            ["бакалавариат",
                ["энергоэффективность и возобновляемая энергетика",
                    "инжиниринг энергетических систем"]
            ],
            ["магистратура",
                ["технологии и системы преобразования энергии",
                    "информационные технологии в теплофизике",
                    "техника и технологии сжиженного природного газа",
                ]
            ]
        ]
    }

    static partners(): AboutListInfo<PartnersData> {
        return {
            titles: [
                ["ооо «рексам-всеволожск»", null],
                ["вко \"алмаз-антей\"", null],
                ["lg", null],
                ["ооо «охтинский хлебозавод»", null],
                ["цнии «электроприбор»", null],
                ["ао «корпорация комета»", null],
                ["оао «авангард»", null],
                ["ао «цниим»", null]
            ],
            content: [
                {
                    imageLeft: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "glebik8",
                    name: "1917",
                    text: "Частная собственность, классы и государство существовали не всегда, а возникли на определённой ступени экономического развития.",
                    siteUrl: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "v8tenko",
                    name: "1924",
                    text: "Государство в руках господствующих классов всегда является лишь орудием насилия, угнетения широких масс народа.",
                    siteUrl: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1619467170539-471df2183622?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1619467170539-471df2183622?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "i love anime",
                    name: "1962",
                    text: "Классы должны неизбежно исчезнуть так же, как неизбежно они в прошлом возникли. С исчезновением классов неизбежно исчезнет государство.",
                    siteUrl: "https://images.unsplash.com/photo-1619467170539-471df2183622?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "glebik8",
                    name: "1917",
                    text: "Частная собственность, классы и государство существовали не всегда, а возникли на определённой ступени экономического развития.",
                    siteUrl: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "v8tenko",
                    name: "1924",
                    text: "Государство в руках господствующих классов всегда является лишь орудием насилия, угнетения широких масс народа.",
                    siteUrl: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1619467170539-471df2183622?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1619467170539-471df2183622?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "i love anime",
                    name: "1962",
                    text: "Классы должны неизбежно исчезнуть так же, как неизбежно они в прошлом возникли. С исчезновением классов неизбежно исчезнет государство.",
                    siteUrl: "https://images.unsplash.com/photo-1619467170539-471df2183622?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "glebik8",
                    name: "1917",
                    text: "Частная собственность, классы и государство существовали не всегда, а возникли на определённой ступени экономического развития.",
                    siteUrl: "https://images.unsplash.com/photo-1619525837382-c7015c20e565?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
                {
                    imageLeft: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    imageTop: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                    title: "v8tenko",
                    name: "1924",
                    text: "Государство в руках господствующих классов всегда является лишь орудием насилия, угнетения широких масс народа.",
                    siteUrl: "https://images.unsplash.com/photo-1532344110095-8c22cdcfc71c?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                },
            ]
        }
    }

    static values(): AboutListInfo<ValuesData> {
        return {
            titles: [
                ["открытость", null],
                ["интеграция", null],
                ["личность", null],
                ["любовь", null]
            ],
            content: [
                {
                    number: 1,
                    title: "открытость",
                    text: "Буржуазный национализм и пролетарский интернационализм — вот два непримиримо-враждебные лозунга, соответствующие двум великим классовым лагерям всего капиталистического мира и выражающие две политики в национальном вопросе.",
                    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=663&q=80"
                },
                {
                    number: 2,
                    title: "интеграция",
                    text: "Буржуазный национализм и пролетарский интернационализм — вот два непримиримо-враждебные лозунга, соответствующие двум великим классовым лагерям всего капиталистического мира и выражающие две политики в национальном вопросе.",
                    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=663&q=80"
                },
                {
                    number: 3,
                    title: "личность",
                    text: "наша цель - создание активных, конкурентноспособных специалистов, которые могут применить свои знания в различных сферах во время обучения и после него.",
                    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=663&q=80"
                },
                {
                    number: 4,
                    title: "любовь",
                    text: "Буржуазный национализм и пролетарский интернационализм — вот два непримиримо-враждебные лозунга, соответствующие двум великим классовым лагерям всего капиталистического мира и выражающие две политики в национальном вопросе.",
                    image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=663&q=80"
                }
            ]
        }
    }

    static enter(): AboutListInfo<EnterData> {
        return {
            titles: [
                ["ознакомься с программами", null],
                ["собери необходимые документы", null],
                ["сдай вступительные испытания", null],
                ["отслеживай списки поступающих", null],
            ],
            content: [
                {
                    trials: {
                        "бакалавриат": "для поступления на образовательные программы бакалавриата необходимо сдать единый государственный экзамен по трем экзаменам. также можно получить до 10 баллов за личные достижения",
                        "магистратура": "для поступления на образовательные программы бакалавриата необходимо сдать единый государственный экзамен по трем экзаменам. также можно получить до 10 баллов за личные достижения",
                        "аспирантура": "для поступления на образовательные программы бакалавриата необходимо сдать единый государственный экзамен по трем экзаменам. также можно получить до 10 баллов за личные достижения",
                    }
                }
            ]
        }
    }
}
