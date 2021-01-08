(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a.n(r),o=a(4),i=a.n(o);a(27),a(28);var l=function(e){var t=e.title,a=e.children;return Object(n.jsxs)(n.Fragment,{children:[t&&Object(n.jsx)("h1",{children:t}),a]})},s=a(11),u=a(5),d=a(6),h=a(8),m=a(7),j=a(9),p=(a(29),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={pictureName:""},e.handleNameChange=function(t){e.setState({pictureName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.pictureName.trim())return j.b.error("Please, enter picture name");e.props.onSubmit(e.state.pictureName),e.setState({pictureName:""})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("header",{onSubmit:this.handleSubmit,className:"Searchbar",children:Object(n.jsxs)("form",{className:"SearchForm",children:[Object(n.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(n.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(n.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,value:this.state.pictureName,onChange:this.handleNameChange,placeholder:"Search images and photos"})]})})}}]),a}(r.Component)),b=a(20),g=a.n(b),f=a(2),O=a.n(f),y=function(e,t){return g.a.get("".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("19127030-a84951d9aeba130a04f5b1356","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))};y.propTypes={query:O.a.string.isRequired,currentPage:O.a.number.isRequired};var v=y,x=Object(r.createContext)();function S(e){var t=e.gallery;return Object(n.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){return function(e){var t=e.id,a=e.webformatURL,r=e.largeImageURL,c=e.previewURL;return Object(n.jsx)("li",{className:"ImageGalleryItem",children:Object(n.jsx)(x.Consumer,{children:function(e){return Object(n.jsx)("img",{src:a,"data-src":c,alt:"searchedPicture","data-large":r,className:"ImageGalleryItem-image lazyload blur-up",onClick:e})}})},"id-".concat(t))}(e)}))})}var w=function(e){var t=e.onClick;return Object(n.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})},N=a(21),k=a.n(N);var C=function(){return Object(n.jsx)(k.a,{className:"Loader App-logo",type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:3e3})},L=document.querySelector("#modal-root"),P=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handelBackdropClick=function(t){t.target===t.currentTarget&&e.props.onClose()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(n.jsx)("div",{className:"Modal__backdrop",onClick:this.handelBackdropClick,children:Object(n.jsx)("div",{className:"Modal__content",children:this.props.children})}),L)}}]),a}(r.Component);function I(){return Object(n.jsx)("div",{children:Object(n.jsx)("h2",{className:"StartPage-header",children:"Thousands of pictures is waiting for you, just try to type something..."})})}var q=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={query:"",picture:null,currentPage:1,isLoading:!1,error:null,gallery:[],isModalOpen:!1,selectedImgURL:"",scroll:0},e.handleImageClick=function(t){if("IMG"===t.target.nodeName){t.preventDefault();var a=t.target.getAttribute("data-large");e.setState({selectedImgURL:a,isModalOpen:!0})}},e.fetchPictures=function(){var t=e.state,a=t.query,n=t.currentPage;e.setState({isLoading:!0});var r=document.documentElement.scrollHeight;v(a,n).then((function(t){e.setState((function(e){return{gallery:[].concat(Object(s.a)(e.gallery),Object(s.a)(t)),currentPage:e.currentPage+1,scroll:r}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1})}))},e.handleFormSubmit=function(t){e.setState({query:t})},e.handleSubmit=function(t){t!==e.state.query&&e.setState({gallery:[],query:t,currentPage:1,error:null})},e.toggleModal=function(){e.setState({isModalOpen:!e.state.isModalOpen}),e.state.isModalOpen&&(document.body.style.overflowY="hidden")},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this.state,n=a.query,r=a.scroll,c=a.currentPage;t.query!==n&&this.fetchPictures(),t.scroll!==r&&c>2&&window.scrollTo({top:r-200,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.gallery,a=e.query,r=e.isModalOpen,c=e.selectedImgURL,o=e.isLoading;return Object(n.jsxs)("div",{children:[Object(n.jsx)(p,{onSubmit:this.handleFormSubmit}),0===t.length&&Object(n.jsx)(I,{}),Object(n.jsx)(j.a,{}),Object(n.jsx)("div",{className:"Wrapper",children:o&&Object(n.jsx)(C,{})}),Object(n.jsx)(x.Provider,{value:this.handleImageClick,children:a&&Object(n.jsx)(S,{gallery:t})}),r&&Object(n.jsx)(P,{onClose:this.toggleModal,children:Object(n.jsx)("img",{src:c,alt:"fullsizeImage"})}),Object(n.jsx)("div",{className:"BtnWrapper",children:a&&t.length>11&&Object(n.jsx)(w,{onClick:this.fetchPictures})})]})}}]),a}(r.Component);function M(){return Object(n.jsx)(l,{children:Object(n.jsx)(q,{})})}i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(M,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.78465a7b.chunk.js.map