(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(198),i=t(197),c=t(205),m=(t(41),t(206),t(231),t(195)),s=t(196),o=t(232),d=t.n(o);t(233);var u=function(e){var a=e.to,t=e.text,l=(e.title,e.color);return n.a.createElement("div",{className:"custom-link",style:{color:l}},n.a.createElement("div",{className:"custom-link__lines"},n.a.createElement("div",{className:"one",style:{backgroundColor:l}}),n.a.createElement("div",{className:"two",style:{backgroundColor:l}})),n.a.createElement(m.a,{to:a},n.a.createElement("span",null,t)))};var E=function(e){var a,t;function l(){for(var a,t=arguments.length,l=new Array(t),n=0;n<t;n++)l[n]=arguments[n];return(a=e.call.apply(e,[this].concat(l))||this).state={currentIndex:0,modalIsVisible:!1},a.handleCurrentIndex=function(e){a.setState({currentIndex:e})},a.handleNext=function(){var e=a.state.currentIndex;e===a.props.data.length-1?a.setState({currentIndex:0}):a.setState({currentIndex:e+1})},a.handlePrev=function(){var e=a.state.currentIndex,t=a.props.data.length;0===e?a.setState({currentIndex:t-1}):a.setState({currentIndex:e-1})},a}return t=e,(a=l).prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t,l.prototype.render=function(){var e=this,a=this.props.data,t=this.props.otherImages,l=this.state,r=l.currentIndex,i=l.modalIsVisible;return n.a.createElement("section",{className:"index-intro"},n.a.createElement("div",{className:i?"index-modal":"index-modal--hidden"},n.a.createElement("div",{className:"index-modal__main"},n.a.createElement("div",{className:"index-modal__close",onClick:function(){return e.setState({modalIsVisible:!1})}},"закрыть"),n.a.createElement("div",{className:"index-modal__links"},n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:a[0].image}))),n.a.createElement(m.a,{to:"/services#weddings"},"Свадьбы")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:a[1].image}))),n.a.createElement(m.a,{to:"/services#corporate"},"Корпоративы")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:a[2].image}))),n.a.createElement(m.a,{to:"/services#kids"},"Детские праздники")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:a[3].image}))),n.a.createElement(m.a,{to:"/services#private"},"Частные праздники")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:t[0]}))),n.a.createElement(m.a,{to:"/services#birthday"},"Дни рождения")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:t[1]}))),n.a.createElement(m.a,{to:"/services#city"},"Городские праздники")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:t[2]}))),n.a.createElement(m.a,{to:"/services#promo"},"Промоакции")),n.a.createElement("div",{className:"index-modal__link"},n.a.createElement("div",{className:"modal-link__bg--wrapper"},n.a.createElement("div",{className:"modal-link__bg"},n.a.createElement(s.a,{image:t[3]}))),n.a.createElement(m.a,{to:"/reviews"},"Отзывы")))),n.a.createElement("div",{className:"index-modal__sider",onClick:function(){return e.setState({modalIsVisible:!1})}})),n.a.createElement("div",{className:"index-intro__title","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"500","data-aos-once":"true"},n.a.createElement("h2",null,a[r].subtitle)),n.a.createElement("div",{className:"index-intro__link"},n.a.createElement(u,{color:"black",to:a[r].link.to,text:"Подробнее"})),n.a.createElement("div",{className:"index-intro__current-image"},n.a.createElement(s.a,{image:a[r].image})),n.a.createElement("div",{className:"index-intro__gallery-control","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"500","data-aos-once":"true"},n.a.createElement("div",{className:"prev",onClick:this.handlePrev},n.a.createElement(d.a,null)),n.a.createElement("div",{className:"next",onClick:this.handleNext},n.a.createElement(d.a,null))),n.a.createElement("div",{className:"index-intro__gallery"},a.map(function(a,t){return n.a.createElement("div",{key:t,className:t===r?"index-intro__gallery-item--active":"index-intro__gallery-item",onClick:function(){return e.handleCurrentIndex(t)}},n.a.createElement("div",{className:"item__title"},n.a.createElement("span",null,a.title.split(" ")[0])),n.a.createElement("div",{className:"item__image"},n.a.createElement(s.a,{image:a.image})))}),n.a.createElement("div",{className:"index-intro__see-all",onClick:function(){return e.setState({modalIsVisible:!0})}},"всё")))},l}(n.a.Component);t(234);t.d(a,"indexPageImage",function(){return g}),t.d(a,"indexPageSmallImage",function(){return v}),t.d(a,"pageQuery",function(){return _});var g="844781690",v="4274620825",_="885608746";a.default=function(e){var a=[e.data.image5.childImageSharp.fluid,e.data.image6.childImageSharp.fluid,e.data.image7.childImageSharp.fluid,e.data.image8.childImageSharp.fluid],t=[{image:e.data.image1.childImageSharp.fluid,title:"Свадьбы",subtitle:"ведущий на свадьбу",link:{to:"/reviews#wedding",text:"подробнее",title:"подробнее"}},{image:e.data.image2.childImageSharp.fluid,title:"Корпоративы",subtitle:"ведущий на корпоратив",link:{to:"/reviews#corporate",text:"Подробнее",title:"свадьбы"}},{image:e.data.image3.childImageSharp.fluid,title:"детские праздники",subtitle:"ведущий на радость детям",link:{to:"/reviews#kids",text:"Подробнее",title:"корпоративы"}},{image:e.data.image4.childImageSharp.fluid,title:"частные праздники",subtitle:"юбилеи и не только",link:{to:"/reviews#private",text:"Подробнее",title:"детские праздники"}}];return n.a.createElement(r.a,null,n.a.createElement(i.a,{title:"Главная"}),n.a.createElement(c.a,null),n.a.createElement("div",{className:"page"},n.a.createElement(E,{data:t,otherImages:a}),n.a.createElement("section",{className:"about"},n.a.createElement("h1",null,"В разработке"))))}},196:function(e,a,t){"use strict";var l=t(0),n=t.n(l);t(207);a.a=function(e){var a=e.image;return n.a.createElement("div",{className:"image",style:{backgroundImage:"url("+a.src+")"}})}},205:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=(t(210),t(200)),i=t.n(r),c=t(201),m=t.n(c),s=t(202),o=t.n(s),d=t(203),u=t.n(d),E=t(204),g=t.n(E);a.a=function(){return n.a.createElement("div",{className:"social-links","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"1200","data-aos-once":"true"},n.a.createElement("div",{className:"social-link"},n.a.createElement("a",{href:"vk.com",title:"в контакте",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(g.a,null))),n.a.createElement("div",{className:"social-link"},n.a.createElement("a",{href:"https://www.facebook.com/alex.gorbunov.969",title:"facebook",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(m.a,null))),n.a.createElement("div",{className:"social-link"},n.a.createElement("a",{href:"https://www.instagram.com/",title:"instagram",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(i.a,null))),n.a.createElement("div",{className:"social-link"},n.a.createElement("a",{href:"https://www.youtube.com/watch?v=xkAQ6bhpwYw",title:"youtube",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(o.a,null))),n.a.createElement("div",{className:"social-link"},n.a.createElement("a",{href:"https://vimeo.com/",title:"vimeo",target:"_blank",rel:"noopener noreferrer"},n.a.createElement(u.a,null))))}},206:function(e,a,t){"use strict";t(199)("link",function(e){return function(a){return e(this,"a","href",a)}})},232:function(e,a,t){var l=t(0);function n(e){return l.createElement("svg",e,[l.createElement("path",{d:"M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40\r\n\tc0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20\r\n\tc0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z",key:0}),l.createElement("g",{key:1}),l.createElement("g",{key:2}),l.createElement("g",{key:3}),l.createElement("g",{key:4}),l.createElement("g",{key:5}),l.createElement("g",{key:6}),l.createElement("g",{key:7}),l.createElement("g",{key:8}),l.createElement("g",{key:9}),l.createElement("g",{key:10}),l.createElement("g",{key:11}),l.createElement("g",{key:12}),l.createElement("g",{key:13}),l.createElement("g",{key:14}),l.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 41.999 41.999",style:{enableBackground:"new 0 0 41.999 41.999"},xmlSpace:"preserve"},e.exports=n,n.default=n}}]);
//# sourceMappingURL=component---src-pages-index-js-8b73b7a7e7769cb9a462.js.map