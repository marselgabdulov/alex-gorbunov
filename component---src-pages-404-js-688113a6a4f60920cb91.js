(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{191:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(201),l=a(200);t.default=function(){return c.a.createElement(r.a,null,c.a.createElement(l.a,{title:"404: Not found"}),c.a.createElement("h1",null,"NOT FOUND"),c.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},199:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(66),l=a.n(r);a.d(t,"a",function(){return l.a});a(202),a(9).default.enqueue,c.a.createContext({})},200:function(e,t,a){"use strict";var n=a(211),c=a(0),r=a.n(c),l=a(227),o=a.n(l);function i(e){var t=e.description,a=e.lang,c=e.meta,l=e.title,i=n.data.site,s=t||i.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(c)})}i.defaultProps={lang:"ru",meta:[],description:""},t.a=i},201:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(217),l=a.n(r),o=(a(219),a(199));a(220);var i=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement("div",{className:"logo__link"},c.a.createElement(o.a,{to:"/",title:"вернуться на главную"},"Алексей Горбунов")))};a(221);var s=function(e){return c.a.createElement("div",{className:"menu-button",onClick:e.handleClick},c.a.createElement("span",{className:"menu-button__text",style:{color:e.color}},"меню"),c.a.createElement("div",{className:"menu-button__lines"},c.a.createElement("div",{className:"one",style:{backgroundColor:e.color}}),c.a.createElement("div",{className:"two",style:{backgroundColor:e.color}}),c.a.createElement("div",{className:"three",style:{backgroundColor:e.color}})))},m=a(203),u=a.n(m);var p=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))||this).state={prevScrollPosition:0,visible:!0,top:!1},t.handleScroll=function(){var e,a=t.state.prevScrollPosition;"undefined"!=typeof window&&(e=window.pageYOffset);var n=a>(e=0),c=e>0;t.setState({prevScrollPosition:e,visible:n,top:c})},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){return"undefined"!=typeof window&&(window.addEventListener("scroll",this.handleScroll),this.setState({prevScrollPosition:window.pagesYOffset})),null},r.componentWillUnmount=function(){return"undefined"!=typeof window&&window.removeEventListener("scroll",this.handleScroll),null},r.render=function(){return c.a.createElement("nav",{className:u()("navbar",{"navbar--hidden":!this.state.visible}),style:this.state.top?{background:"white"}:{background:"transparent"}},c.a.createElement(i,null),c.a.createElement("div",{className:"navbar__main"},c.a.createElement(o.a,{style:this.state.top?{color:"black"}:{color:"white"},to:"/"},"услуги"),c.a.createElement(o.a,{to:"/",style:this.state.top?{color:"black"}:{color:"white"}},"отзывы"),c.a.createElement(o.a,{to:"/",style:this.state.top?{color:"black"}:{color:"white"}},"контакты")),c.a.createElement(s,{handleClick:this.props.handleClick,color:this.state.top?"black":"white"}))},n}(c.a.Component);a(222);var v=function(e){return c.a.createElement("div",{className:"navbar-mobile"},c.a.createElement(i,null),c.a.createElement(s,{handleClick:e.handleClick,color:"black"}))},d=(a(223),a(204)),E=a.n(d),f=a(205),h=a.n(f),g=a(206),k=a.n(g),y=a(207),_=a.n(y),w=a(208),b=a.n(w),N=a(210),C=a.n(N),x=function(e){var t="nav-closed";return!0===e.show&&(t="nav-opened"),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"nav-pannel"},c.a.createElement("div",{className:t},c.a.createElement("button",{className:"nav-pannel__close-button",onClick:e.handleClick},c.a.createElement("div",{className:"button-text"},"закрыть"),c.a.createElement("div",{className:"button-icon"},c.a.createElement("div",{className:"one"}),c.a.createElement("div",{className:"two"}),c.a.createElement("div",{className:"three"}))),c.a.createElement("div",{className:"nav-pannel__wrapper"},c.a.createElement("div",{className:"nav-pannel__left"},c.a.createElement("div",{className:"nav-pannel__left--wrapper"},c.a.createElement("div",{className:"nav-pannel__logo"},c.a.createElement("div",{className:"nav-pannel__logo--name"},"Алексей Горбунов."),c.a.createElement("div",{className:"nav-pannel__logo--text"},"Ведущий. Москва.")),c.a.createElement("div",{className:"nav-pannel__phone"},c.a.createElement("a",{href:"tel:+79166228889"},"+7 916 622 88 89")),c.a.createElement("div",{className:"nav-pannel__phone--mobile"},c.a.createElement("a",{href:"tel:+79166228889"},c.a.createElement(C.a,null))),c.a.createElement("div",{className:"nav-pannel__email"},c.a.createElement("a",{href:"mailto:alex.gorbunov@gmail.com"},"alex.gorbunov@gmail.com")),c.a.createElement("div",{className:"nav-pannel__social"},c.a.createElement("div",{className:"nav-pannel__social-icon"},c.a.createElement("a",{href:"vk.com",title:"в контакте",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(b.a,null))),c.a.createElement("div",{className:"nav-pannel__social-icon"},c.a.createElement("a",{href:"https://www.facebook.com/alex.gorbunov.969",title:"facebook",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(h.a,null))),c.a.createElement("div",{className:"nav-pannel__social-icon"},c.a.createElement("a",{href:"https://www.instagram.com/",title:"instagram",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(E.a,null))),c.a.createElement("div",{className:"nav-pannel__social-icon"},c.a.createElement("a",{href:"https://www.youtube.com/watch?v=xkAQ6bhpwYw",title:"youtube",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(k.a,null))),c.a.createElement("div",{className:"nav-pannel__social-icon"},c.a.createElement("a",{href:"https://vimeo.com/",title:"vimeo",target:"_blank",rel:"noopener noreferrer"},c.a.createElement(_.a,null)))),c.a.createElement("div",{className:"nav-pannel__creator"},"Разработан"," ",c.a.createElement("a",{href:"https://marselgabdulov.github.io/personal/",target:"_blank",rel:"noopener noreferrer"},"MG")),c.a.createElement("div",{className:"nav-pannel__copy"},c.a.createElement("span",null,"© 2019. Алексей Горбунов.  "),c.a.createElement("span",null,"Все права защищены.")))),c.a.createElement("div",{className:"nav-pannel__wrapper--right"},c.a.createElement("div",{className:"nav-pannel__right-wrapper"},c.a.createElement(o.a,{to:"/",title:"Главная",activeStyle:{color:"#e82a6e"}},"Главная"),c.a.createElement(o.a,{to:"/responses",title:"Отзывы",activeStyle:{color:"#e82a6e"}},"Отзывы"),c.a.createElement(o.a,{to:"/weddings",title:"Свадьбы",activeStyle:{color:"#e82a6e"}},"Свадьбы"),c.a.createElement(o.a,{to:"/corporates",title:"Корпоративы",activeStyle:{color:"#e82a6e"}},"Корпоративы"),c.a.createElement(o.a,{to:"/children",title:"Детские праздники",activeStyle:{color:"#e82a6e"}},"Детские праздники"),c.a.createElement(o.a,{to:"/contacts",title:"Контакты",activeStyle:{color:"#e82a6e"}},"Контакты")))))))};a(224);var M=function(e){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"footer__copy"},"© ",(new Date).getFullYear(),", Алексей Горбунов"),c.a.createElement("div",{className:"footer__developer"},"Разработан"," ",c.a.createElement("a",{href:"https://marselgabdulov.github.io/personal/",target:"_blank",rel:"noopener noreferrer"},"MG")))};a(225);a(226);t.a=function(e){var t=e.children,a=Object(n.useState)(!1),r=a[0],o=a[1];function i(){o(!r)}return Object(n.useEffect)(function(){l.a.init()}),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"turn"},c.a.createElement("span",null,"Пожалуйста переверните")),c.a.createElement(p,{handleClick:i}),c.a.createElement(v,{handleClick:i}),c.a.createElement(x,{show:r,handleClick:i}),c.a.createElement("main",null,t),c.a.createElement("div",{className:"footer"},c.a.createElement(M,null)))}},202:function(e,t,a){var n;e.exports=(n=a(209))&&n.default||n},204:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Instagram icon"),n.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},205:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Facebook icon"),n.createElement("path",{d:"M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},206:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"YouTube icon"),n.createElement("path",{d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},207:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Vimeo icon"),n.createElement("path",{d:"M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},208:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"VK icon"),n.createElement("path",{d:"M11.701 18.771h1.437s.433-.047.654-.284c.21-.221.21-.63.21-.63s-.031-1.927.869-2.21c.887-.281 2.012 1.86 3.211 2.683.916.629 1.605.494 1.605.494l3.211-.044s1.682-.105.887-1.426c-.061-.105-.451-.975-2.371-2.76-2.012-1.861-1.742-1.561.676-4.787 1.469-1.965 2.07-3.166 1.875-3.676-.166-.48-1.26-.361-1.26-.361l-3.602.031s-.27-.031-.465.09c-.195.119-.314.391-.314.391s-.572 1.529-1.336 2.82c-1.623 2.729-2.268 2.879-2.523 2.699-.604-.391-.449-1.58-.449-2.432 0-2.641.404-3.75-.781-4.035-.39-.091-.681-.15-1.685-.166-1.29-.014-2.378.01-2.995.311-.405.203-.72.652-.539.675.24.03.779.146 1.064.537.375.506.359 1.636.359 1.636s.211 3.116-.494 3.503c-.495.262-1.155-.28-2.595-2.756-.735-1.26-1.291-2.67-1.291-2.67s-.105-.256-.299-.406c-.227-.165-.557-.225-.557-.225l-3.435.03s-.51.016-.689.24c-.166.195-.016.615-.016.615s2.686 6.287 5.732 9.453c2.79 2.902 5.956 2.715 5.956 2.715l-.05-.055z",key:1})])}c.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=c,c.default=c},209:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),c=a.n(n),r=a(94);t.default=function(e){var t=e.location,a=e.pageResources;return a?c.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}},210:function(e,t,a){var n=a(0);function c(e){return n.createElement("svg",e,[n.createElement("g",{transform:"translate(1 1)",key:0},n.createElement("g",null,n.createElement("g",null,[n.createElement("path",{d:"M254.948,39.96c5.973,4.267,11.093,5.12,26.453,5.973c45.227,2.56,73.387,12.8,104.96,35.84\r\n\t\t\t\tc39.253,28.16,64,68.267,72.533,117.76c2.56,12.8,3.413,23.893,4.267,40.107c0.853,11.947,0.853,16.213,3.413,20.48\r\n\t\t\t\tc4.267,6.827,11.093,11.093,18.773,11.947c0.853,0,1.707,0,2.56,0c6.827,0,13.653-3.413,17.067-9.387\r\n\t\t\t\tc5.973-6.827,5.973-12.8,5.12-26.453c-1.707-41.813-10.24-80.213-27.307-112.64c-11.947-23.04-23.04-38.4-43.52-58.027\r\n\t\t\t\tc-21.333-20.48-37.547-32.427-63.147-44.373c-26.453-12.8-45.227-17.067-73.387-20.48C297.615-0.147,287.375-1,279.695-1\r\n\t\t\t\tc-13.653,0-19.627,0-25.6,5.973c-5.12,4.267-7.68,11.093-7.68,17.92S249.828,35.693,254.948,39.96z M265.188,17.773\r\n\t\t\t\tc0.853-0.853,1.707-1.707,7.68-1.707c1.707,0,3.413,0,5.973,0c6.827,0,17.067,0.853,22.187,1.707\r\n\t\t\t\tc26.453,3.413,43.52,6.827,68.267,18.773c23.893,11.947,38.4,22.187,58.88,41.813c18.773,18.773,29.013,32.427,40.107,53.76\r\n\t\t\t\tc15.36,30.72,23.893,65.707,25.6,105.813c0,12.8,0,13.653-1.707,14.507c-0.853,1.707-3.413,1.707-5.12,1.707\r\n\t\t\t\ts-4.267-0.853-5.12-2.56c-0.853-0.853-0.853-2.56-1.707-12.8c-0.853-17.067-1.707-29.013-4.267-42.667\r\n\t\t\t\tc-10.24-54.613-36.693-98.133-79.36-128.853c-34.133-24.747-65.707-35.84-114.347-38.4c-14.507-0.853-15.36-1.707-17.067-2.56\r\n\t\t\t\tc-0.853-0.853-1.707-2.56-1.707-4.267S264.335,18.627,265.188,17.773z",key:0}),n.createElement("path",{d:"M394.895,223.427c0,11.947,0.853,23.04,12.8,29.013c3.413,1.707,7.68,2.56,11.947,2.56c3.413,0,7.68-0.853,10.24-2.56\r\n\t\t\t\tc4.267-1.707,9.387-7.68,11.093-11.947c2.56-5.973,1.707-28.16,0.853-34.133c-3.413-27.307-12.8-52.907-27.307-74.24\r\n\t\t\t\tc-27.307-39.253-67.413-62.293-119.467-69.973c-17.92-2.56-30.72-3.413-38.4,8.533c-5.973,8.533-5.12,20.48,1.707,28.16\r\n\t\t\t\tc5.973,6.827,13.653,7.68,21.333,8.533c20.48,1.707,43.52,8.533,58.88,17.067c17.92,10.24,32.427,25.6,42.667,43.52\r\n\t\t\t\tC389.775,184.173,394.895,203.8,394.895,223.427z M347.961,109.933c-17.92-10.24-43.52-17.067-68.267-18.773\r\n\t\t\t\tc-6.827,0-8.533-1.707-9.387-2.56c-1.707-2.56-1.707-5.12,0-7.68c1.707-1.707,2.56-3.413,22.187-0.853\r\n\t\t\t\tc47.787,6.827,83.627,27.307,107.52,62.293c13.653,18.773,22.187,41.813,24.747,66.56c1.707,8.533,0.853,23.04,0.853,25.6\r\n\t\t\t\tc-0.853,0.853-2.56,2.56-3.413,3.413c-0.853,0-5.12,0-5.973-0.853c-1.707-0.853-3.413-1.707-3.413-13.653\r\n\t\t\t\tc0-22.187-5.973-46.08-16.213-64C385.508,138.947,368.441,121.88,347.961,109.933z",key:1}),n.createElement("path",{d:"M347.961,150.893c-11.093-11.093-24.747-17.92-42.667-21.333c-4.267-0.853-11.093-1.707-15.36-1.707\r\n\t\t\t\tc-6.827,0-10.24,0-15.36,2.56c-5.973,3.413-10.24,9.387-11.947,16.213c-1.707,6.827,0.853,14.507,5.12,19.627\r\n\t\t\t\tc5.973,5.973,11.093,6.827,22.187,8.533c18.773,1.707,29.013,8.533,34.987,20.48c3.413,5.973,5.12,12.8,5.973,23.04\r\n\t\t\t\tc0.853,8.533,2.56,14.507,9.387,19.627c4.267,2.56,9.387,4.267,14.507,4.267c5.973,0,11.093-1.707,13.653-4.267\r\n\t\t\t\tc8.533-7.68,9.387-17.92,6.827-32.427C371.001,181.613,363.321,164.547,347.961,150.893z M358.201,224.28\r\n\t\t\t\tc-1.707,1.707-5.973,1.707-8.533,0c-0.853-0.853-1.707-0.853-2.56-7.68c-0.853-11.093-2.56-19.627-6.827-28.16\r\n\t\t\t\tc-8.533-17.92-23.893-28.16-47.787-30.72c-9.387-1.707-10.24-1.707-11.093-3.413c-0.853-1.707-0.853-3.413-0.853-5.12\r\n\t\t\t\tc0.853-1.707,1.707-3.413,3.413-4.267c0.853-0.853,0.853-0.853,2.56-0.853c0.853,0,2.56,0,3.413,0\r\n\t\t\t\tc4.267,0.853,10.24,0.853,12.8,1.707c14.507,3.413,25.6,8.533,34.987,17.067c11.947,11.093,18.773,24.747,21.333,44.373\r\n\t\t\t\tC361.615,220.867,359.908,222.573,358.201,224.28z",key:2}),n.createElement("path",{d:"M501.561,387.267c-5.973-6.827-42.667-35.84-58.88-46.933c-12.8-8.533-33.28-20.48-42.667-25.6\r\n\t\t\t\tc-13.653-6.827-28.16-7.68-41.813-3.413c-2.56,0.853-5.12,1.707-6.827,2.56c-6.827,3.413-11.947,9.387-22.187,21.333\r\n\t\t\t\tc-10.24,12.8-12.8,15.36-12.8,15.36c-0.853,0.853-2.56,1.707-4.267,2.56h-0.853c-7.68,4.267-20.48,0.853-41.813-9.387\r\n\t\t\t\tc-17.92-8.533-34.133-19.627-52.053-35.84c-15.36-13.653-30.72-31.573-39.253-45.227c-11.947-19.627-19.627-41.813-19.627-52.053\r\n\t\t\t\tc0-4.267,1.707-10.24,3.413-12.8l0.853-0.853c0,0,0.853-0.853,1.707-1.707c3.413-2.56,7.68-5.973,11.947-9.387\r\n\t\t\t\tc19.627-15.36,25.6-21.333,29.013-33.28c3.413-11.093,0.853-23.893-8.533-41.813c-13.653-26.453-58.027-82.773-75.947-94.72\r\n\t\t\t\tc-2.56-2.56-7.68-5.12-11.093-5.973c-7.68-3.413-17.92-4.267-24.747-2.56c-9.387,1.707-19.627,7.68-41.813,24.747\r\n\t\t\t\tc-12.8,8.533-31.573,26.453-36.693,34.987c-11.947,20.48-8.533,37.547,1.707,67.413c10.24,28.16,23.893,56.32,40.107,84.48\r\n\t\t\t\tl0.853,1.707c3.413,5.12,6.827,11.093,10.24,16.213l0.853,1.707c3.413,5.12,6.827,11.093,10.24,16.213l5.973,8.533\r\n\t\t\t\tc2.56,3.413,4.267,5.973,6.827,9.387c4.267,5.973,9.387,11.947,13.653,17.92c49.493,64,106.667,116.053,174.08,157.867\r\n\t\t\t\tl2.56,1.707c9.387,5.973,19.627,11.947,30.72,17.92l4.267,2.56c11.093,5.973,21.333,11.093,32.427,16.213l3.413,1.707\r\n\t\t\t\tc12.8,5.973,23.893,11.093,34.987,15.36c13.653,5.12,19.627,6.827,29.013,6.827c1.707,0,3.413,0,5.12,0\r\n\t\t\t\tc5.973,0,11.947-0.853,17.067-2.56c7.68-2.56,14.507-5.973,23.04-11.947c0.853-0.853,2.56-2.56,4.267-3.413\r\n\t\t\t\tc1.707-1.707,4.267-3.413,5.973-5.12c9.387-7.68,20.48-19.627,29.013-31.573c4.267-5.973,10.24-15.36,13.653-23.04\r\n\t\t\t\tc3.413-6.827,4.267-14.507,4.267-21.333C510.948,402.627,507.535,394.093,501.561,387.267z M491.321,427.373\r\n\t\t\t\tc-1.707,5.12-5.973,11.947-11.947,19.627c-7.68,11.093-17.92,21.333-26.453,29.013c-1.707,1.707-3.413,3.413-5.12,4.267\r\n\t\t\t\tc-1.707,0.853-2.56,1.707-4.267,2.56c-6.827,5.12-12.8,7.68-17.92,9.387c-4.267,0.853-8.533,1.707-12.8,1.707\r\n\t\t\t\tc-9.387,0-12.8,0-26.453-5.12c-10.24-5.12-21.333-9.387-34.133-15.36l-3.413-1.707c-10.24-5.12-21.333-10.24-31.573-16.213\r\n\t\t\t\tl-4.267-2.56c-10.24-5.12-20.48-11.093-29.867-17.067l-2.56-1.707c-66.56-40.96-122.027-91.307-169.813-153.6\r\n\t\t\t\tc-4.267-5.973-8.533-11.947-12.8-17.92c-2.56-3.413-5.12-5.973-6.827-9.387l-5.12-7.68c-4.267-5.12-7.68-10.24-11.093-16.213\r\n\t\t\t\tl-0.853-0.853c-3.413-5.12-5.973-11.093-9.387-16.213l-0.853-1.707c-16.213-26.453-29.013-54.613-39.253-81.92\r\n\t\t\t\tc-11.947-30.72-10.24-40.96-3.413-52.907c3.413-5.12,19.627-21.333,32.427-29.867C72.335,31.427,82.575,25.453,88.548,24.6\r\n\t\t\t\tc3.413-0.853,11.093,0,15.36,1.707c1.707,0.853,5.12,2.56,7.68,4.267c12.8,8.533,55.467,60.587,69.973,87.893\r\n\t\t\t\tc6.827,12.8,9.387,23.04,7.68,29.013c-1.707,5.973-3.413,9.387-23.04,24.747c-5.12,3.413-9.387,7.68-12.8,10.24\r\n\t\t\t\tc-0.853,0.853-1.707,1.707-2.56,2.56l-0.853,0.853c-0.853,0.853-1.707,0.853-1.707,1.707l-0.853,0.853\r\n\t\t\t\tc-4.267,5.12-6.827,15.36-6.827,23.04c0.853,15.36,9.387,40.107,22.187,60.587c9.387,14.507,26.453,34.133,42.667,48.64\r\n\t\t\t\tc18.773,17.067,35.84,29.013,55.467,38.4c25.6,11.947,41.813,15.36,55.467,10.24h0.853l1.707-0.853\r\n\t\t\t\tc1.707-0.853,4.267-1.707,5.12-2.56c0.853-0.853,1.707-0.853,2.56-1.707c0.853-0.853,1.707-1.707,15.36-17.92\r\n\t\t\t\tc10.24-11.947,13.653-15.36,17.067-17.067c0.853-0.853,2.56-0.853,4.267-1.707c9.387-3.413,18.773-2.56,29.013,2.56\r\n\t\t\t\tc8.533,5.12,28.16,16.213,40.107,24.747c17.92,11.947,52.053,39.253,55.467,43.52c4.267,4.267,5.973,8.533,5.973,14.507\r\n\t\t\t\tC493.881,417.133,493.028,422.253,491.321,427.373z",key:3})]))),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}c.defaultProps={version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512",style:{enableBackground:"new 0 0 512 512"},xmlSpace:"preserve"},e.exports=c,c.default=c},211:function(e){e.exports={data:{site:{siteMetadata:{title:"Алексей Горбунов. Ведущий мероприятий любой сложности в Москве и Москвоской области.",description:"Ведущий. Москва. Свадьба. Корпоратив. Детский праздник. Торжества.",author:"@marselgabdulov"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-688113a6a4f60920cb91.js.map