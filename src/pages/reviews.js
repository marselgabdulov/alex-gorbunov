import React from "react"
import { graphql } from "gatsby"
import "./styles/reviews.scss"
import Layout from "../components/layout"
import Review from "../components/Review/Review"
import SEO from "../components/seo"

function ReviewsPage(props) {
  const reviews = [
    {
      image: props.data.image_1.childImageSharp.fluid.src,
      id: "74234255",
      link: "https://vk.com/id74234255",
      name: "Марина",
      text:
        "Мы хотим выразить огромную благодарность за проведение нашей свадьбы 22.06.2019. Все были вовлечены и увлечены программой) Гостей не принуждали поздравлять 'по расписанию', благодаря чему все были не напряжены и наслаждались праздником) Вечер прошёл на одном дыхании. При подготовке оперативно отвечал на все вопросы, давал дельные советы, ко всем нашим пожеланиям прислушался. Лёша профессионал своего дела! Желаем дальнейшего процветания! Бударевы",
    },
    {
      image: props.data.image_2.childImageSharp.fluid.src,
      id: "490830271",
      link: "https://vk.com/id490830271",
      name: "Елена",
      text:
        "Алексей ,огромное Вам спасибо за незабываемый выпускной вечер 9 класса! Все гости (дети, родители и учителя) были просто в восторге от необычной, живой, современной,насыщенной программы с таким морем юмора и импровизаций!!! Вы обаятельный, интеллигентный, интеллектуальный ведущий, который с первых минут задал праздничный настрой для гостей. Это был именно тот вечер, о котором мы мечтали! Время пролетело очень быстро, весело, ярко!!! Нам было очень приятно работать с Вами!!!!!!!!!!!!Огромное спасибо за проделанную работу! Передаю восторженные отзывы от гостей!",
    },
    {
      image: props.data.image_3.childImageSharp.fluid.src,
      id: "milk_moon",
      link: "https://vk.com/milk_moon",
      name: "Мария",
      text:
        "Хочу сказать слова благодарности Алексею за проведённые 2 прекрасных вечера вместе с нами и нашими гостями. Все было замечательно!!! Все гости были в восторге от ведущего и от программы, которую Алексей подготовил. Мы с мужем хотим сказать отдельные слова благодарности за профессионализм и невероятную атмосферу, которую Алексей создаёт на празднике. Все было остроумно и позитивно!!!! Спасибо огромное!!! Следующий раз все мероприятия только с вами))))",
    },
    {
      image: props.data.image_4.childImageSharp.fluid.src,
      id: "vladislove925",
      link: "https://vk.com/vladislove925",
      name: "Владислав",
      text:
        "Алексей, от лица модельного агенства ICONIC, хочу выразить вам благодарность за невероятную атмосферу дня рождения нашего Ген. Директора! Искрометный юмор, интерактив, поздравление Владимира Владимировича для именинницы - сделали этот вечер незабываемым для всех приглашенных гостей. Отдельное спасибо Илье, DJ этого вечера, за всю подборку музыки! Ребят, это было незабываемо! Будем неоднократно с вами сотрудничать! :)",
    },
    {
      image: props.data.image_5.childImageSharp.fluid.src,
      id: "211890416",
      link: "https://vk.com/id211890416",
      name: "Дмитрий",
      text:
        "Хотим выразить в своем отзыве огромную благодарность ведущему нашей свадьбы Алексею.\nС его помощью такое важное событие как свадьба прошло легко, весело, увлекательно, незабываемо и интересно.\nАлексей показал себя также как отличный человек и во время нашей предсвадебной подготовки, отвечал на все возникающие у нас вопросы, помогал в планировании банкета, подсказывал по программе вечера, опираясь на свой большой опыт в ведении мероприятий.\nОчень понравилось проведение свадьбы всем нашим многочисленным гостям и родственникам.\nАлексей руководил торжеством, при этом, не напрягая и не занудствуя, мастерски обыгрывая все события вечера, сопровождая их трогательными и тёплыми словами или актуальной шуткой как того требовала, та или иная ситуация.\nТакже Алексей общался с сотрудниками ресторана, персоналом, организатором и фотографом свадьбы, в результате получилась слаженная и гармоничная работа всех, для того чтобы праздник прошел идеально.\n Открытая и уверенная подача произносимого текста, представление гостей и родственников, внутренняя харизма ведущего - все было на высшем уровне!\n Спасибо Алексею за то, что сделал первый важный день нашей семьи поистине запоминающимся. Желаем ему профессионального роста и успешного проведения мероприятий на самом высоком уровне! ",
    },
    {
      image: props.data.image_6.childImageSharp.fluid.src,
      id: "yupolyakova",
      link: "https://vk.com/yupolyakova",
      name: "Юлия",
      text:
        "Леша! Привет! И привет всем, кто читает этот отзыв! Хочу тебя поблагодарить за прекрасное настроение и веселье, которое ты создал на мой День Рождения!!! Спасибо, что взял и успешно выполнил одну из главных задач любого мероприятия-принес смех, сплотил гостей и избавил их от возможной скуки! Ты-большой профессионал, отличный мужчина, добрый, отзывчивый и ответственный ЧЕЛОВЕЧИЩЕ!!!! Огромное спасибо и до новых встреч!!!!",
    },
    {
      image: props.data.image_7.childImageSharp.fluid.src,
      id: "12137639",
      link: "https://vk.com/id12137639",
      name: "Алена",
      text:
        "Алексей! Мы безгранично счастливы и благодарны, что в этот день, 01.09.2018 с нами был именно ТЫ!!! Уверенны, лучшего ведущего вряд ли найти, ты ПРОФИ своего дела! Многие планируют свадьбы за пол года, но это конечно же не о нас 🤣. Мы подали заявление за три недели до свадьбы, хотели скромно посидеть с друзьями и близкими, и за неделю решили, что нам таки нужен ведущий! Встретились с Алексеем, он задал пару вопросов и сценарий для нашего мероприятия у него уже был готов))) В день свадьбы все гости были в восторге от того, как Лёша быстро нашёл со всеми контакт и насколько прекрасно провёл вечер, никого не принуждая к конкурсам и тостам!!! Всем советуем!!! И ещё раз, огромное СПАСИБО!!!😊 Андрияновы!",
    },
    {
      image: props.data.image_8.childImageSharp.fluid.src,
      id: "103168947",
      link: "https://vk.com/id103168947",
      name: "Настя",
      text:
        "Мы хотим выразить огромную благодарность Алексею за проведение нашей свадьбы 01.06.2018. Все прошло просто потрясающе! Гости сказали, что ведущий супер! Было весело и вместе с тем душевно. Алексей учел все наши пожелания, подготовил индивидуальный сценарий для нашего торжества. Каждому гостю уделил внимание. Кроме этого, хотим отметить его ответственность и префессионализм. Спасибо огромное за самый лучший праздник в наш счастливый день! Обязательно всем будем рекомендовать Алексея! Павел и Анастасия.",
    },
    {
      image: props.data.image_9.childImageSharp.fluid.src,
      id: "svetlaa",
      link: "https://vk.com/svetlaa",
      name: "Светлана",
      text:
        "Неделя прошла с нашей свадьбы,а эмоции до сих пор переполняют,при просмотре видео с конкурсами.Как же нам повезло с ведущим,говорили все!Алексей был первый и последний претендент на роль ведущего на нашу свадьбу.Он сразу услышал,что я хотела и предложил тот сценарий,который нас полностью устроил.И с ведущим,я определилась сразу ни на секунду не сомневаясь,что ему можно доверить наш праздник.Я, не ошиблась!Алексей,профессионально слышит публику,чувствует каждого и мне даже кажется читает мысли наперед)))Очень весело,легко и с огромным чувством юмора подбирал,он слова к каждому нашему гостю.Эмоции зашкаливали)))А,самые главные оценщики-это родители были в восторге!Благодарим,Вас Алексей за ваш профессианализм,и за умение сделать праздник,который мы будем вспоминать всю жизнь!Это был МЕГА ПРАЗДНИК!!!Вы,Алексей МЕГА ВЕДУЩИЙ!!!У-ра!",
    },
    {
      image: props.data.image_10.childImageSharp.fluid.src,
      id: "1706901",
      link: "https://vk.com/id1706901",
      name: "Ксения",
      text:
        "Итак, снова возвращаюсь на эту страницу с позитивным отзывом! В этот раз была крупнейшая конференция на 360 человек - вся Россия, все подразделения - настоящий challenge. И снова все прошло здорово! Леша - ты как всегда динамичный, открытый и круто выстраиваешь коммуникацию! все супер, до новых мероприятий! спасибо!!!",
    },
    {
      image: props.data.image_11.childImageSharp.fluid.src,
      id: "4916656",
      link: "https://vk.com/id4916656",
      name: "Дарья",
      text:
        "Вот уже не первый год новогодние корпоративы в нашей компании становятся все более колоритные, фееричные, дружные и по-настоящему веселыми!!! И это все дело рук Алексея!!! Точнее дело даже не рук) а его мастерства, харизмы, чувства такта и умения чувствовать публику!Хочу признаться, Алексей, в этом году не только директора, но и огромное количество сотрудников отметили тебя, как самого интересного и отличного ведущего за всю историю нашей компании! Спасибо за все! 👍🏻🙌",
    },
    {
      image: props.data.image_12.childImageSharp.fluid.src,
      id: "iamkrasnov21",
      link: "https://vk.com/iamkrasnov21",
      name: "Артём",
      text:
        "От лица нашего коллектива хотим выразить благодарность вам, Алексей, за проведенный корпоратив! Публика была в восторге, руководство довольно, гости - счастливы. Несмотря на специфику нашей деятельности, вам удалось очень ярко подмечать все фишки и детали, и искусно регулировать ход вечеринки! Большое спасибо за эмоции и настроение ! :)",
    },
    {
      image: props.data.image_13.childImageSharp.fluid.src,
      id: "320740657",
      link: "https://vk.com/id320740657",
      name: "Екатерина",
      text:
        "Aлексей! Хотим выразить вам свою искреннюю благодарность вы были великолепны, атмосфера созданная вами была чудесной ! Будем рекомендовать вас друзьям и знакомым, спасибо огромное за этот чудесный день!",
    },
    {
      image: props.data.image_14.childImageSharp.fluid.src,
      id: "4406075",
      link: "https://vk.com/id4406075",
      name: "Маргарита",
      text:
        "Алексей, хотим сказать огромное спасибо за прекрасный вечер! Нам очень понравилось, гости довольны. Общение с гостями, конкурсы - всё прошло здорово! Мы очень рады, что доверили вам наш праздник!",
    },

    {
      image: props.data.image_10.childImageSharp.fluid.src,
      id: "1706901",
      link: "https://vk.com/id1706901",
      name: "Ксения",
      text:
        "Добавлю еще один отзыв в копилку Алексея.\nПроводили мероприятие для клиентов 27 октября. Алексей, спасибо за отличную работу с аудиторией, интерактив, модерацию мероприятия и находчивость. Получили великолепные отзывы от участников и 'внутреннего клиента'. Прекрасно работать с профессионалом! Буду рада сотрудничеству в будущем.",
    },
    {
      image: props.data.image_15.childImageSharp.fluid.src,
      id: "levshinaliza",
      link: "https://vk.com/levshinaliza",
      name: "Лиза",
      text:
        "Алексей вел нашу свадьбу 7 октября. И провел праздник чудесно. Все гости в восторге. Все прошло легко и весело, как мы и хотели изначально. Огромное Вам спасибо, что благодаря Вам запомним этот день, как самый веселый и светлый.))) Денис и Лиза;)",
    },
    {
      image: props.data.image_16.childImageSharp.fluid.src,
      id: "62052287",
      link: "https://vk.com/id62052287",
      name: "Наталья",
      text:
        "Добрый день Алексей!!! Большое ограмное Вам спасибо!!! Нам и нашим гостям очень все понравилось!!! Особый гость мероприятия который очень переживал по поводу ведущего остался очень доволен!) Не замужние уже приметили себе ведущего!!! Вы супер!!!",
    },
    {
      image: props.data.image_17.childImageSharp.fluid.src,
      id: "445885929",
      link: "https://vk.com/id445885929",
      name: "Василий",
      text:
        "Алексей, привет!\nРади отзыва про твою шикарную работу зарегистрировался в VK. \nВ первую очередь скажу, что ты молодец во всем. Начиная от первой встречи, ты рассказал нам много интересного, о чем мы и не догадывались и не могли подумать, и заканчивая вечером, где ты вел наше мероприятие, можно сказать, до последнего клиента. \n Отлично организовал встречу гостей, и хотя мы собирались к одному времени, как ты и предупреждал, народ подтягивался постепенно и твои рекомендации по саксофону, фуршетному столу были очень кстати. И конечно спасибо за подсказку про прессволл. Очень много красивых фотографий, за них отдельное спасибо Дмитрию.\n Ну и конечно очень понравились твои песни (ммм. не знаю должен был ли я это писать), у тебя шикарный голос.Отдельное спасибо от Юли, для нее это мероприятие было не менее важно, чем для моей мамы.\n В общем все остались довольны, наш праздник удался. До встречи на новых мероприятиях!",
    },
    {
      image: props.data.image_18.childImageSharp.fluid.src,
      id: "anyuta555",
      link: "https://vk.com/anyuta555",
      name: "Анна",
      text:
        "Спасибо большое! Все на высшем уровне, и музыка, и организация, и программа. Не побоюсь этого слова: всё было идеально. Под вашей организацией мы полностью расслабились и ощутили всю прелесть нашего праздника. Спасибо ещё раз)) \n Иван и Анна.",
    },
    {
      image: props.data.image_19.childImageSharp.fluid.src,
      id: "petrova_lizaa",
      link: "https://vk.com/petrova_lizaa",
      name: "Елизавета",
      text:
        "Большое спасибо Вам,Леша и Илья!!!Вы профессионалы своего дела,все прошло просто супер! Нам и всем нашим гостям безумно понравился наш первый семейный праздник! Интересный и запоминающийся вечер, непередаваемые эмоции! \n Лёша,спасибо огромное за индивидуальный подход!Выкуп,лав стори,конкурсы, шутки,призы-все прошло круто благодаря тебе!Музыка,свет-на высшем уровне!Отдельная благодарность за вокальное исполнение песен,легкость в общении с гостями, искрометный юмор.Мы невероятно счастливы!Спасибо!❤🎆🥂",
    },
    {
      image: props.data.image_20.childImageSharp.fluid.src,
      id: "3680743",
      link: "https://vk.com/id3680743",
      name: "Александр",
      text:
        "Алексей, огромное спасибо тебе за проведение нашего самого счастливого дня, дня нашей свадьбы (22.07.2017).Благодарны тебе за помощь, которую ты проявлял во время подготовки к свадьбе, помогал своими советами и креативными мыслями по поводу той или иной ситуации. Порадовал твой современный и профессиональный подход к тому что ты делаешь. Гости остались все довольны, особенно 'Гроза ситуации' 😊 \nЖелаем тебе успехов, будем рады рекомендовать тебя, как ведущего на торжество любой сложности 😉Ура!!! 🤓🤗🕺🕺🕺✌💰🎈🎊🎉🎡",
    },
    {
      image: props.data.image_21.childImageSharp.fluid.src,
      id: "shmatovalenka",

      link: "https://vk.com/shmatovalenka",
      name: "Елена",
      text:
        "Алексей, большое спасибо за праздник, за День нашей свадьбы, который ты помог нам организовать! Было очень весело, непринужденно и легко! На банкете все прошло как по маслу) Спасибо за то, что учел все наши пожелания, что поддерживал нас советами во время подготовки. Из-за нехватки времени мы полностью доверили нашему ведущему подбор конкурсов и развлечений, и не пожалели) \nТакже большое спасибо его коллеге, диджею, Илье, который был с нами в этот вечер! Не смотря на то, что мы накануне сбросили ему музыкальные предпочтения и прямо перед банкетом песню для первого танца, он успел подготовиться и ничего не забыл) Также хочу отметить, что Алексей помог нам с поиском фотографа и порекомендовал Михаила Круглова, фото от которого мы с нетерпением ждем) \n Ещё раз спасибо, Лёш!)",
    },
    {
      image: props.data.image_22.childImageSharp.fluid.src,
      id: "6849237",

      link: "https://vk.com/id6849237",
      name: "Олеся",
      text:
        "Что тут сказать?! ПРОФЕССИОНАЛЫ!! Алексей и Илья громное спасибо за выпускной вечер 9В класса! С момента знакомства стало понятно, что за развлекательную программу беспокоится вообще не стоит. Все было просто на УРА! Ребята, родители и классный преподаватель были в восторге! Алексей держал внимание ребят весь вечер, все участвовали в конкурсах, отвечали на вопросы викторины, танцевали, дурачились и просто получали удовольствие от этого вечера! А как Алексей поет... как говорится талантливый человек- талантлив во всем! И конечно же отдельное спасибо Илье! Он отвечал за музыкальное сопровождение и музыка была на высоте! Еще раз хочу сказать, что очень все профессионально, четко, непринужденно и с огоньком! Было приятно с вами работать! До встречи в 11 классе!!!",
    },
    {
      image: props.data.image_23.childImageSharp.fluid.src,
      id: "193806",

      link: "https://vk.com/id193806",
      name: "Ксения",
      text:
        "От нашей семьи хотим поблагодарить Алексея за проведенную свадьбу. Для нас было важно, чтобы всем гостям на небольшой свадьбе было комфортно, уютно, не было обязательных тостов и неприличных конкурсов. Программа была отличной, нам всем понравилось, комфортно было и молодежи, и взрослому поколению, также были конкурсы для детей, которых у нас было много. В течение всего торжества гости не скучали, при этом спокойно могли кушать и отдыхать. Очень понравилась часть, где ненавязчиво была рассказана история знакомства жениха и невесты, краткие справки о родителях и родственниках. Большое спасибо!",
    },
    {
      image: props.data.image_24.childImageSharp.fluid.src,
      id: "2645348",

      link: "https://vk.com/id2645348",
      name: "Олеся",
      text:
        "Хотелось бы сказать огромнейшее спасибо Алексею за проведение нашей свадьбы 17 июня 2017 года. Ни на секунду за весь день не пожалели,что остановили свой выбор на нем. Конкурсы,шутки,общение с гостями-все было на высшем уровне.И конечно же пение вживую создало определенную атмосферу на нашем празднике!Гости были довольны и отдельно отметили,как им понравился наш ведущий! \nХотим также поблагодарить диджея Илью-были учтены все наши пожелания и пожелания гостей во время вечера.Одно удовольствие иметь дело с профессионалами!С удовольствием будем рекомендовать Вас другим парам!",
    },
    {
      image: props.data.image_25.childImageSharp.fluid.src,
      id: "121703400",

      link: "https://vk.com/id121703400",
      name: "Алина",
      text:
        "Алексей ,мы бы хотели выразить свою бесконечную благодарность за то ,что вы превратили этот день в незабываемое торжество 🎉🎈🎉🎈 \nВы делаете это так легко и непринужденно,что вашему таланту можно только позавидовать =))) \n Была замечательная,добрая и праздничная атмосфера ,были очень интересные конкурсы ,не похожие на остальные =))Мы и наши гости остались очень довольны подготовленной программой ,всем было весело и интересно.Отдельно хотим сказать Спасибо ,DJ Илье ,за музыкальное сопровождение ,который сумел подобрать именно то ,что мы хотели =)) \n Вы ,замечательная команда!!!Спасибо Вам !!!Нам очень повезло ,что именно Вы ,были нашими Ведущими =)) \nВы излучаете очень положительную энергию и дарите всем позитив =)) Желаем вам побольше таких великолепных мероприятий ,творческих успехов ,и нескончаемых побед !!!!!!!!!!!",
    },
    {
      image: props.data.image_26.childImageSharp.fluid.src,
      id: "18120412",

      link: "https://vk.com/id18120412",
      name: "Елена",
      text:
        "Спасибо Вам,Алексей,за прекрасный праздник!!!У всех гостей остались замечательные эмоции от нашей свадьбы,да и нам понравилось,что всё было душевно,приятно и радостно))Вы умеете находить подход к людям и на Вас можно положиться.Спасибо за профессионализм и ответственность)☺",
    },
    {
      image: props.data.image_27.childImageSharp.fluid.src,
      id: "7298282",

      link: "https://vk.com/id7298282",
      name: "Анастасия",
      text:
        "Огромная благодарность Алексею за проведение нашей свадьбы!!! Вы - настоящий профессионал. У всех остались только положительные эмоции)))) очень порадовали 'незаезжанные' конкурсы, каждый был с выдумкой и фантазией) Время пролетело незаметно. Все в полном восторге. Отдельный респект диджею за классное музыкальное сопровождение. Еще раз большое спасибо и творческих успехов))))))))))",
    },
    {
      image: props.data.image_28.childImageSharp.fluid.src,
      id: "28539478",

      link: "https://vk.com/id28539478",
      name: "Юлия",
      text:
        "Алексей, огромное СПАСИБО Вам за проведение нашей свадьбы!!!!! Мы очень долго искали ведущего...., но когда встретились с Вами, то поняли, что Вы- Профессионал с Большой Буквы!!!! Все прошло на высшем уровне!!! Всем все очень понравилось!!!! Еще раз большое СПАСИБО!",
    },
    {
      image: props.data.image_11.childImageSharp.fluid.src,
      id: "4916656",

      link: "https://vk.com/id4916656",
      name: "Дарья",
      text:
        "Алексей, я от лица всей нашей компании - выражаю тебе особенную благодарность за проведение искрометного новогоднего корпоратива! Лично от себя скажу, что это была МЕГА поддержка и супер профессионализм! Я сильно опаздывала, но Алексей не только взял на себя все заботы с приемом гостей, но ещё и меня успевал успокаивать пока я психовала в пробке! И во время всего мероприятия я ни на секунду не переживала за ведение развлекательной программы! В общем, Алексей - настоящий профи! Всем рекомендую!🙌",
    },
    {
      image: props.data.image_29.childImageSharp.fluid.src,
      id: "647548",

      link: "https://vk.com/id647548",
      name: "Елена",
      text:
        "Алексей, спасибо Вам за проведение нашей свадьбы (14.10.2016)!!! Все было очень здорово! Гости в восторге, нас закидали комплиментами по организации мероприятия и я от всей души передаю их Вам!!! спасибо за прекрасное настроение, отличный юмор (который пришелся по душе и молодому и старшему поколению), за атмосферу и, отдельно, за терпение при создании нашего мероприятия, за то, что Вы учли наши пожелания! Нам все понравилось, мы до сих пор в эйфории от того, что все получилось!!! Настоящий веселый праздник, который запомнится на всю жизнь!!! Рады, что Вы были с нами! Удачи Вам!!!",
    },
    {
      image: props.data.image_30.childImageSharp.fluid.src,
      id: "150438",

      link: "https://vk.com/id150438",
      name: "Imira",
      text:
        "Свадьба-это такое особенное событие в жизни каждого человека и безумно хочется, чтобы этот день прошёл безукоризненно и запомнился только лучшими моментами, поэтому выбор ведущего для данного мероприятия очень непростая задача! И я так рада, что для нас выбор был очевиден, ведь 8 лет назад Вы прекрасно провели свадьбу моей сестры! А теперь и у нас!!! Хотим сказать огромное спасибо от нашей молодой семьи! Все прошло великолепно, гости довольны! Так все слажено, легко, с прекрасным чувством юмора, легкими конкурсами, вечер пролетел как один счастливый миг!!! \n Спасииииииибооооо!!!!!",
    },
    {
      image: props.data.image_31.childImageSharp.fluid.src,
      id: "alexgrantshow",

      link: "https://vk.com/alexgrantshow",
      name: "Юлия",
      text:
        "Алексей, от всего коллектива компании Регион-50 хотим сказать бооооольшое спасибо за то, что помогли сделать наш праздник просто незабываемым!!!! Все было супер!!! Спасибо Вам огромное!!! Это второй наш с Вами совместный корпоратив, и думаю не последний!!!) спасибо!",
    },
    {
      image: props.data.image_32.childImageSharp.fluid.src,
      id: "hhhh92",

      link: "https://vk.com/hhhh92",
      name: "Юлия",
      text:
        "Алексей, спасибо Вам огромное за создание прекрасного настроения на нашей свадьбе. Переживала за то,что будут бональные конкурсы, но как оказалось у Вас таких нет)) Все прошло весело и задорно. Вы понравились всем нашим гостям) Теперь ждите приглашение к себе на свадьбу наших друзей. Еще раз спасибо, все прошло на УРА!!!",
    },
  ]
  return (
    <Layout>
      <SEO title="Отзывы | Алексей Горбунов. Ведущий. Шоумен. +7 985 644 64 89" />
      <div
        className="reviews-page"
        data-aos="fade"
        data-aos-delay="400"
        data-aos-duration="1200"
        data-aos-once="true"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="reviews-page__scroll">
          <div className="reviews-page__text">
            <h2 className="reviews__title">Отзывы</h2>
            <h3>Все отзывы &laquo;живые&raquo;. Кликайте на имена.</h3>
            {reviews.map((review, index) => (
              <Review
                link={review.link}
                name={review.name}
                image={review.image}
                text={review.text}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const reviewsPageImage = graphql`
  fragment reviewsPageImage on File {
    childImageSharp {
      fluid(maxWidth: 1200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const reviewsPageQuery = graphql`
  query {
    image_1: file(relativePath: { eq: "reviews/marina.jpg" }) {
      ...reviewsPageImage
    }
    image_2: file(relativePath: { eq: "reviews/elena.jpg" }) {
      ...reviewsPageImage
    }
    image_3: file(relativePath: { eq: "reviews/mariya.jpg" }) {
      ...reviewsPageImage
    }
    image_4: file(relativePath: { eq: "reviews/vladislav.jpg" }) {
      ...reviewsPageImage
    }
    image_5: file(relativePath: { eq: "reviews/dima.jpg" }) {
      ...reviewsPageImage
    }
    image_6: file(relativePath: { eq: "reviews/yulia.jpg" }) {
      ...reviewsPageImage
    }
    image_7: file(relativePath: { eq: "reviews/alena.jpg" }) {
      ...reviewsPageImage
    }
    image_8: file(relativePath: { eq: "reviews/nastya.jpg" }) {
      ...reviewsPageImage
    }
    image_9: file(relativePath: { eq: "reviews/sveta.jpg" }) {
      ...reviewsPageImage
    }
    image_10: file(relativePath: { eq: "reviews/kseniya.jpg" }) {
      ...reviewsPageImage
    }
    image_11: file(relativePath: { eq: "reviews/daria.jpg" }) {
      ...reviewsPageImage
    }
    image_12: file(relativePath: { eq: "reviews/artem.jpg" }) {
      ...reviewsPageImage
    }
    image_13: file(relativePath: { eq: "reviews/ekaterina.jpg" }) {
      ...reviewsPageImage
    }
    image_14: file(relativePath: { eq: "reviews/margarita.jpg" }) {
      ...reviewsPageImage
    }
    image_15: file(relativePath: { eq: "reviews/liza.jpg" }) {
      ...reviewsPageImage
    }
    image_16: file(relativePath: { eq: "reviews/natali.jpg" }) {
      ...reviewsPageImage
    }
    image_17: file(relativePath: { eq: "reviews/vasilij.jpg" }) {
      ...reviewsPageImage
    }
    image_18: file(relativePath: { eq: "reviews/anna.jpg" }) {
      ...reviewsPageImage
    }
    image_19: file(relativePath: { eq: "reviews/elizaveta.jpg" }) {
      ...reviewsPageImage
    }
    image_20: file(relativePath: { eq: "reviews/alexandr.jpg" }) {
      ...reviewsPageImage
    }
    image_21: file(relativePath: { eq: "reviews/lena.jpg" }) {
      ...reviewsPageImage
    }
    image_22: file(relativePath: { eq: "reviews/olesya.jpg" }) {
      ...reviewsPageImage
    }
    image_23: file(relativePath: { eq: "reviews/ksenija.jpg" }) {
      ...reviewsPageImage
    }
    image_24: file(relativePath: { eq: "reviews/olesya2.jpg" }) {
      ...reviewsPageImage
    }
    image_25: file(relativePath: { eq: "reviews/alina.jpg" }) {
      ...reviewsPageImage
    }
    image_26: file(relativePath: { eq: "reviews/elena2.jpg" }) {
      ...reviewsPageImage
    }
    image_27: file(relativePath: { eq: "reviews/anastasiya.jpg" }) {
      ...reviewsPageImage
    }
    image_28: file(relativePath: { eq: "reviews/yulia2.jpg" }) {
      ...reviewsPageImage
    }
    image_29: file(relativePath: { eq: "reviews/elena3.jpg" }) {
      ...reviewsPageImage
    }
    image_30: file(relativePath: { eq: "reviews/imira.jpg" }) {
      ...reviewsPageImage
    }
    image_31: file(relativePath: { eq: "reviews/yulia3.jpg" }) {
      ...reviewsPageImage
    }
    image_32: file(relativePath: { eq: "reviews/yulia4.jpg" }) {
      ...reviewsPageImage
    }
  }
`

export default ReviewsPage
