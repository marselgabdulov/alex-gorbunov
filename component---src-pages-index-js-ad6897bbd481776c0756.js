(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{264:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(159),c=(a(257),a(279),a(258),a(277));var o=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={translateValue:0,currentIndex:0,prevDisabled:!0,nextDisabled:!1},t.handlePrev=function(){t.setState({currentIndex:t.state.currentIndex-1,nextDisabled:!1})},t.handleNext=function(){t.setState({currentIndex:t.state.currentIndex+1,prevDisabled:!1})},t.handleLink=function(e){t.setState(function(t){return{currentIndex:t.currentIndex===e?t.currentIndex:e}}),console.log(e,t.state.currentIndex)},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e,t=this,a=this.state.currentIndex,n=[this.props.data[0].link,this.props.data[1].link,this.props.data[2].link];return 0===a&&(e=0),1===a&&(e=-22.5),2===a&&(e=-45),l.a.createElement("div",{className:"index-gallery"},l.a.createElement("div",{className:"gallery__links"},n.map(function(e,a){return l.a.createElement("div",{className:a===t.state.currentIndex?"gallery__link--active":"gallery__link",key:a,onMouseEnter:function(){return t.handleLink(a)}},l.a.createElement(r.Link,{to:e.to},e.title))})),l.a.createElement("div",{className:"gallery-bg"}),l.a.createElement("div",{className:"images-separator"}),l.a.createElement("div",{className:"border"},l.a.createElement("div",{className:"images-wrapper",style:{transition:"all 0.75s ease-in-out",transform:"translateX("+(this.state.translateValue+e)+"%)"},"data-aos":"fade"},this.props.data.map(function(e,t){return l.a.createElement("div",{className:"image-container",key:t},l.a.createElement(c.a,{image:e.image}))}))),l.a.createElement("div",{className:"counter"},l.a.createElement("div",{className:"current"},"0"+(this.state.currentIndex+1)),l.a.createElement("div",{className:"all"},"0"+(this.props.data.length-1))),l.a.createElement("div",{className:"control"},l.a.createElement("button",{className:"control-button",disabled:0===this.state.currentIndex,onClick:this.handlePrev},l.a.createElement("span",null,"←")),l.a.createElement("button",{className:"control-button",onClick:this.handleNext,disabled:2===this.state.currentIndex},l.a.createElement("span",null,"→"))))},n}(l.a.Component),i=a(329),s=a.n(i),m=a(274),d=a.n(m),u=a(335),v=a.n(u);a(259);var E=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={visible:!1,playing:!1,muted:!1},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this;return l.a.createElement("div",{className:"video-cover","data-aos":"fade","data-aos-delay":"200","data-aos-duration":"1000","data-aos-once":"false","data-aos-anchor-placement":"center-bottom"},l.a.createElement("div",{className:"cover__wrapper"},l.a.createElement(c.a,{image:this.props.cover})),l.a.createElement("div",{className:"cover__button",onClick:function(){e.setState({visible:!0,playing:!0,muted:!1})}},l.a.createElement(d.a,null)),l.a.createElement("div",{className:"video-name"},"Relieve Your Stress"),l.a.createElement("div",{className:this.state.visible?"video__full--visible":"video-full--hidden"},l.a.createElement("div",{className:"close-full",onClick:function(){e.setState({visible:!1,playing:!1,muted:!0})}},l.a.createElement(v.a,null)),l.a.createElement("div",{className:"full__wrapper"},l.a.createElement(s.a,{url:"https://www.youtube.com/watch?v=tNs3exn6PKk",width:"100%",height:"100%",playing:this.state.playing,muted:this.state.muted,controls:!0,volume:.2}))))},n}(l.a.Component),p=a(278),f=a(275);a.d(t,"testPageImage",function(){return k}),a.d(t,"pageQuery",function(){return g});var k="2694262901",g="2128914840";t.default=function(e){var t=[{image:e.data.image1.childImageSharp.fluid,link:{to:"/services#wedding",title:"Свадьбы"}},{image:e.data.image2.childImageSharp.fluid,link:{to:"/services#corporate",title:"Корпоративы"}},{image:e.data.image3.childImageSharp.fluid,link:{to:"/services#kids",title:"Праздники"}},{image:e.data.image1.childImageSharp.fluid}];return l.a.createElement(p.a,null,l.a.createElement(f.a,{title:"Главная"}),l.a.createElement("div",{className:"index-page"},l.a.createElement("section",{className:"intro"},l.a.createElement(o,{data:t})),l.a.createElement("section",{className:"about"},l.a.createElement("h2",{className:"about__title","data-aos":"fade","data-aos-delay":"200","data-aos-duration":"1000"},"Обо мне"),l.a.createElement("div",{className:"about__skills"},l.a.createElement("div",{className:"skill","data-aos":"fade","data-aos-delay":"250","data-aos-duration":"1000"},l.a.createElement("div",{className:"skill__title"},"Я люблю праздники"),l.a.createElement("div",{className:"skill__body"},"Каждый праздник можно сравнить с полнометражным фильмом с уникальной идеей и своим сюжетом. Здесь главные герои вы – наши друзья-клиенты.")),l.a.createElement("div",{className:"skill","data-aos":"fade","data-aos-delay":"300","data-aos-duration":"1000"},l.a.createElement("div",{className:"skill__title"},"Я надежный и мне не все равно"),l.a.createElement("div",{className:"skill__body"},"Мои услуги прошли настоящее испытание качеством. Мои клиенты всегда требовательны. И Ч постоянно двигаюсь вперед.")),l.a.createElement("div",{className:"skill","data-aos":"fade","data-aos-delay":"350","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1000"},l.a.createElement("div",{className:"skill__title"},"Профессиональная команда"),l.a.createElement("div",{className:"skill__body"},"Я много учусь, путешествую и вдохновляюсь идеями по всему миру, чтобы проекты, организуемые мною для вас, были актуальными. Это очень важно.")),l.a.createElement("div",{className:"skill","data-aos":"fade","data-aos-delay":"400","data-aos-anchor-placement":"center-bottom","data-aos-duration":"1000"},l.a.createElement("div",{className:"skill__title"},"Я - Ваша уверенность"),l.a.createElement("div",{className:"skill__body"},"Со мной Вы узнаете, что процесс подготовки к празднику может быть исключительно приятным. А на своем празднике вы забудете обо всех организационных вопросах"))),l.a.createElement("div",{className:"about__image","data-aos":"fade-left","data-aos-delay":"200","data-aos-duration":"500","data-aos-once":"true"},l.a.createElement(c.a,{image:e.data.image4.childImageSharp.fluid}))),l.a.createElement("section",{className:"video"},l.a.createElement("h2",{className:"video__title","data-aos":"fade","data-aos-delay":"200","data-aos-duration":"1000","data-aos-anchor-placement":"center-bottom"},"Видео"),l.a.createElement(E,{videoId:"tNs3exn6PKk",cover:e.data.image3.childImageSharp.fluid}))))}},267:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Instagram icon"),n.createElement("path",{d:"M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",key:1})])}l.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=l,l.default=l},268:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Facebook icon"),n.createElement("path",{d:"M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z",key:1})])}l.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=l,l.default=l},269:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"YouTube icon"),n.createElement("path",{d:"M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",key:1})])}l.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=l,l.default=l},270:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"Vimeo icon"),n.createElement("path",{d:"M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z",key:1})])}l.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=l,l.default=l},271:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"VK icon"),n.createElement("path",{d:"M11.701 18.771h1.437s.433-.047.654-.284c.21-.221.21-.63.21-.63s-.031-1.927.869-2.21c.887-.281 2.012 1.86 3.211 2.683.916.629 1.605.494 1.605.494l3.211-.044s1.682-.105.887-1.426c-.061-.105-.451-.975-2.371-2.76-2.012-1.861-1.742-1.561.676-4.787 1.469-1.965 2.07-3.166 1.875-3.676-.166-.48-1.26-.361-1.26-.361l-3.602.031s-.27-.031-.465.09c-.195.119-.314.391-.314.391s-.572 1.529-1.336 2.82c-1.623 2.729-2.268 2.879-2.523 2.699-.604-.391-.449-1.58-.449-2.432 0-2.641.404-3.75-.781-4.035-.39-.091-.681-.15-1.685-.166-1.29-.014-2.378.01-2.995.311-.405.203-.72.652-.539.675.24.03.779.146 1.064.537.375.506.359 1.636.359 1.636s.211 3.116-.494 3.503c-.495.262-1.155-.28-2.595-2.756-.735-1.26-1.291-2.67-1.291-2.67s-.105-.256-.299-.406c-.227-.165-.557-.225-.557-.225l-3.435.03s-.51.016-.689.24c-.166.195-.016.615-.016.615s2.686 6.287 5.732 9.453c2.79 2.902 5.956 2.715 5.956 2.715l-.05-.055z",key:1})])}l.defaultProps={role:"img",viewBox:"0 0 24 24"},e.exports=l,l.default=l},274:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("path",{d:"M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40\r\n\tc0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20\r\n\tc0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z",key:0}),n.createElement("g",{key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15})])}l.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 41.999 41.999",style:{enableBackground:"new 0 0 41.999 41.999"},xmlSpace:"preserve"},e.exports=l,l.default=l},275:function(e,t,a){"use strict";var n=a(276),l=a(0),r=a.n(l),c=a(282),o=a.n(c);function i(e){var t=e.description,a=e.lang,l=e.meta,c=e.title,i=n.data.site,s=t||i.siteMetadata.description;return r.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:c},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:s}].concat(l)})}i.defaultProps={lang:"ru",meta:[],description:""},t.a=i},276:function(e){e.exports={data:{site:{siteMetadata:{title:"Алексей Горбунов. Ведущий мероприятий любой сложности в Москве и Москоской области.",description:"Ведущий. Москва. Свадьба. Корпоратив. Детский праздник. Торжества.",author:"@marselgabdulov"}}}}},277:function(e,t,a){"use strict";var n=a(0),l=a.n(n);a(255);t.a=function(e){var t=e.image;return l.a.createElement("div",{className:"image",style:{backgroundImage:"url("+t.src+")"}})}},278:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(280),c=a.n(r),o=(a(247),a(159));a(248);var i=function(){return l.a.createElement("div",{className:"logo","data-aos":"fade","data-aos-delay":"100","data-aos-duration":"500","data-aos-once":"true"},l.a.createElement(o.Link,{to:"/",title:"вернуться на главную"},"Алексей Горбунов"))},s=a(161);a(249);var m=Object(s.connect)(function(e){return{isNavPannelVisible:e.isNavPannelVisible}},function(e){return{toggleNavPannel:function(){return e({type:"TOGGLE_NAVPANNEL"})}}})(function(e){var t=e.toggleNavPannel;return e.isNavPannelVisible,e.color,l.a.createElement("div",{className:"menu-button",onClick:t},l.a.createElement("span",{className:"menu-button__text",style:{color:"black"}},"меню"),l.a.createElement("div",{className:"menu-button__lines"},l.a.createElement("div",{className:"one",style:{backgroundColor:"black"}}),l.a.createElement("div",{className:"two",style:{backgroundColor:"black"}}),l.a.createElement("div",{className:"three",style:{backgroundColor:"black"}})))}),d=(a(36),a(279),a(273)),u=a.n(d),v=(a(250),[{link:"/services#wedding",name:"свадьбы"},{link:"/services#corporate",name:"корпоративы"},{link:"/services#kids",name:"детские праздники"},{link:"/services#birthday",name:"дни рождения"},{link:"/services#private",name:"частные праздники"},{link:"/services#city",name:"городские праздники"},{link:"/services#promo",name:"промоакции"}]);var E=function(e){var t=e.visible,a=e.handleClick;return l.a.createElement("div",{className:t?"submenu--visible":"submenu--hidden"},v.map(function(e,t){return l.a.createElement("div",{className:"submenu__link",key:t},l.a.createElement(u.a,{to:e.link,onClick:a,exit:{length:.5},entry:{delay:1}},e.name))}))},p=a(274),f=a.n(p);a(281);var k=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),l=0;l<a;l++)n[l]=arguments[l];return(t=e.call.apply(e,[this].concat(n))||this).state={submenuVisible:!1},t.scrollToBottom=function(){window.scroll({behavior:"smooth",left:0,top:document.body.scrollHeight})},t.handleSubmenu=function(){t.setState({submenuVisible:!1})},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll)},r.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},r.render=function(){var e=this;return l.a.createElement("nav",{className:"navbar",style:{backgroundColor:"white"}},l.a.createElement(i,null),l.a.createElement("div",{className:"navbar__main"},l.a.createElement("div",{className:"services__list",style:{color:"black"},onMouseEnter:function(){return e.setState({submenuVisible:!0})},onMouseLeave:function(){return e.setState({submenuVisible:!1})},onClick:function(){e.setState({submenuVisible:!e.state.submenuVisible})}},l.a.createElement("div",{className:"link__wrapper"},l.a.createElement("span",null,"Я веду"),l.a.createElement("div",{className:"icon"},l.a.createElement(f.a,{style:{color:"black"}}))),l.a.createElement(E,{visible:this.state.submenuVisible})),l.a.createElement(o.Link,{to:"/reviews",style:{color:"black"},activeStyle:{color:"#e82a6e"}},"отзывы"),l.a.createElement("div",{className:"contacts-link",onClick:this.scrollToBottom},"контакты")),l.a.createElement(m,{handleClick:this.props.handleClick,style:{color:"black"}}))},n}(l.a.Component);a(251);var g=function(e){return l.a.createElement("div",{className:"navbar-mobile"},l.a.createElement(i,null),l.a.createElement(m,{handleClick:e.handleClick,color:"black"}))},y=(a(252),a(267)),b=a.n(y),h=a(268),N=a.n(h),_=a(269),w=a.n(_),x=a(270),C=a.n(x),V=a(271),P=a.n(V),S=[{to:"/",name:"Главная"},{to:"/wedding",name:"Свадьбы"},{to:"/corporate",name:"Корпоративы"},{to:"/celebration",name:"Праздники"},{to:"/reviews",name:"Отзывы"}];var I=Object(s.connect)(function(e){return{isNavPannelVisible:e.isNavPannelVisible}},function(e){return{toggleNavPannel:function(){return e({type:"TOGGLE_NAVPANNEL"})}}})(function(e){var t=e.toggleNavPannel,a=e.isNavPannelVisible;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"nav-pannel"},l.a.createElement("div",{className:a?"nav-opened":"nav-closed"},l.a.createElement("button",{className:"nav-pannel__close-button",onClick:function(){return t()}},l.a.createElement("div",{className:"button-text"},"закрыть"),l.a.createElement("div",{className:"button-icon"},l.a.createElement("div",{className:"one"}),l.a.createElement("div",{className:"two"}),l.a.createElement("div",{className:"three"}))),l.a.createElement("div",{className:"nav-pannel__menu"},S.map(function(e,a){return l.a.createElement("div",{className:"menu__item",key:a},l.a.createElement(u.a,{to:e.to,activeStyle:{color:"#e82a6e"},onClick:function(){return t()},exit:{length:.5},entry:{delay:1}},e.name))}),l.a.createElement("div",{className:"nav-pannel__phone"},l.a.createElement("a",{href:"tel:+79166228889"},"+7 916 622 88 89")),l.a.createElement("div",{className:"nav-pannel__email"},l.a.createElement("a",{href:"mailto:alex.gorbunov@gmail.com"},"alex.gorbunov@gmail.com")),l.a.createElement("div",{className:"nav-pannel__social-links"},l.a.createElement("div",{className:"nav-pannel__social-icon"},l.a.createElement("a",{href:"vk.com",title:"в контакте",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(P.a,null))),l.a.createElement("div",{className:"nav-pannel__social-icon"},l.a.createElement("a",{href:"https://www.facebook.com/alex.gorbunov.969",title:"facebook",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(N.a,null))),l.a.createElement("div",{className:"nav-pannel__social-icon"},l.a.createElement("a",{href:"https://www.instagram.com/",title:"instagram",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.a,null))),l.a.createElement("div",{className:"nav-pannel__social-icon"},l.a.createElement("a",{href:"https://www.youtube.com/watch?v=xkAQ6bhpwYw",title:"youtube",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.a,null))),l.a.createElement("div",{className:"nav-pannel__social-icon"},l.a.createElement("a",{href:"https://vimeo.com/",title:"vimeo",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(C.a,null))))))))});a(253);var L=function(e){return l.a.createElement("footer",{className:"footer",id:"contacts"},l.a.createElement("div",{className:"footer__logo"},l.a.createElement("h2",null,l.a.createElement(o.Link,{to:"/",title:"вернуться на главную"},"Алексей Горбунов"))),l.a.createElement("div",{className:"footer__links"},l.a.createElement("div",{className:"left"},l.a.createElement(o.Link,{to:"/services#wedding"},"свадьбы"),l.a.createElement(o.Link,{to:"/services#corporate"},"корпоративы"),l.a.createElement(o.Link,{to:"/services#kids"},"детские"),l.a.createElement(o.Link,{to:"/services#birthday"},"дни рождения")),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"vk.com",title:"в контакте",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(P.a,null))),l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.facebook.com/alex.gorbunov.969",title:"facebook",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(N.a,null))),l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.instagram.com/",title:"instagram",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(b.a,null))),l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.youtube.com/watch?v=xkAQ6bhpwYw",title:"youtube",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(w.a,null))),l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://vimeo.com/",title:"vimeo",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(C.a,null)))),l.a.createElement("div",{className:"right"},l.a.createElement(o.Link,{to:"/services#private"},"частные"),l.a.createElement(o.Link,{to:"/services#city"},"городские"),l.a.createElement(o.Link,{to:"/services#promo"},"промоакции"),l.a.createElement(o.Link,{to:"/reviews"},"отзывы"))),l.a.createElement("div",{className:"footer__contacts"},l.a.createElement("div",{className:"footer__phone"},l.a.createElement("a",{href:"tel:+79166228889"},"+7 916 622 88 89")),l.a.createElement("div",{className:"footer__email"},l.a.createElement("a",{href:"mailto:alex.gorbunov@gmail.com"},"alex.gorbunov@gmail.com"))),l.a.createElement("div",{className:"footer__copy"},"© ",(new Date).getFullYear()),l.a.createElement("div",{className:"footer__developer"},"Разработан"," ",l.a.createElement("a",{href:"https://marselgabdulov.github.io/personal/",target:"_blank",rel:"noopener noreferrer"},"MG")))};a(254);t.a=function(e){var t=e.children;return Object(n.useEffect)(function(){c.a.init()}),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"turn"},l.a.createElement("span",null,"Пожалуйста переверните")),l.a.createElement(k,null),l.a.createElement(g,null),l.a.createElement(I,null),l.a.createElement("div",{className:"content"},l.a.createElement("main",null,t)),l.a.createElement("div",{className:"layout-footer"},l.a.createElement(L,null)))}},335:function(e,t,a){var n=a(0);function l(e){return n.createElement("svg",e,[n.createElement("line",{style:{fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeMiterlimit:"10"},x1:"30.406",y1:"0.707",x2:"0.707",y2:"30.406",key:0}),n.createElement("line",{style:{fill:"none",stroke:"#ffffff",strokeWidth:"2",strokeMiterlimit:"10"},x1:"30.406",y1:"30.406",x2:"0.707",y2:"0.707",key:1}),n.createElement("g",{key:2}),n.createElement("g",{key:3}),n.createElement("g",{key:4}),n.createElement("g",{key:5}),n.createElement("g",{key:6}),n.createElement("g",{key:7}),n.createElement("g",{key:8}),n.createElement("g",{key:9}),n.createElement("g",{key:10}),n.createElement("g",{key:11}),n.createElement("g",{key:12}),n.createElement("g",{key:13}),n.createElement("g",{key:14}),n.createElement("g",{key:15}),n.createElement("g",{key:16})])}l.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 31.113 31.113",style:{enableBackground:"new 0 0 31.113 31.113"},xmlSpace:"preserve"},e.exports=l,l.default=l}}]);
//# sourceMappingURL=component---src-pages-index-js-ad6897bbd481776c0756.js.map