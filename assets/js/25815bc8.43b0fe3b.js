(self["webpackChunkes_eoscostarica_io"] = self["webpackChunkes_eoscostarica_io"] || []).push([[5818],{

/***/ 91160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74165);
/* harmony import */ var _home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15861);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(80343);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93162);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30252);
var styles=_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .StyleSheet.create */ .mM.create({page:{backgroundColor:'white',padding:50},header:{height:'80px',marginBottom:'30px',flexDirection:'row'},headerLeft:{flexDirection:'column',width:"30%"},headerRight:{width:"70%",flexDirection:'column'},headerText:{width:'100%',fontFamily:'Helvetica',fontWeight:'normal',textAlign:'right',fontSize:13},headerTextBold:{width:'100%',fontFamily:'Helvetica-Bold',fontWeight:'bold',textAlign:'right',fontSize:13},image:{width:'100%'},subHeader:{marginBottom:'30px'},pointBox:{borderWidth:2,borderColor:'black',padding:10,marginBottom:'30px'},textPointsBold:{fontFamily:'Helvetica-Bold',fontWeight:'bold',textAlign:'left',fontSize:13},h1:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:25,marginBottom:'10px'},p:{fontFamily:'Helvetica',fontWeight:'normal',textAlign:'justify',fontSize:12,lineHeight:1.5},linkText:{color:'#0091FF',textDecoration:'none'},paragraphSection:{marginBottom:'10px'},actionButtons:{display:'flex',flexDirection:'row',alignItems:'flex-start',marginBottom:'30px'},mainButton:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:15,backgroundColor:'#5484b3',width:'150px',color:'white',textDecoration:'none',padding:'20px'},socialButtonsBox:{marginTop:'10px',marginBottom:'25px',width:'100%',flexDirection:'row',justifyContent:'center',alignItems:'center'},socialButton:{flexDirection:'column',width:'25px',height:'25px',marginRight:'20px'},h2:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:18,marginBottom:'15px'},h3:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:12,marginBottom:'10px'},section:{marginBottom:' 20px'},titleSection:{fontFamily:'Helvetica-Bold',fontWeight:'bold',fontSize:13,marginBottom:'10px'},spacingBox:{marginBottom:'15px'},footer:{position:'absolute',bottom:50,left:50}});var FormPDF=function FormPDF(_ref){var isMobile=_ref.isMobile,formQuestions=_ref.formQuestions,blockchainPoints=_ref.blockchainPoints,companyName=_ref.companyName,companyIndustry=_ref.companyIndustry,companyEmail=_ref.companyEmail,twitterImage=_ref.twitterImage,linkedinImage=_ref.linkedinImage,MediumImage=_ref.MediumImage,GitHubImage=_ref.GitHubImage,InstramImage=_ref.InstramImage,YoutubeImage=_ref.YoutubeImage;var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),between81and100=_useState[0],setBetween81and100=_useState[1];var _useState2=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),between51and80=_useState2[0],setBetween50and80=_useState2[1];var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),lessThan50=_useState3[0],setLessThan50=_useState3[1];var _useState4=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),date=_useState4[0],setDate=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(blockchainPoints<50)setLessThan50(true);else if(blockchainPoints>=50&&blockchainPoints<=80)setBetween50and80(true);else setBetween81and100(true);},[blockchainPoints]);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(!date){var _date=new Date();var options={year:'numeric',month:'long',day:'numeric'};setDate(_date.toLocaleDateString('en-US',options));}},[date]);var interpretPunctuation=function interpretPunctuation(points){if(points===1)return"Not an issue at all";else if(points===2)return"Not a priority";else if(points===3)return"Neutral";else if(points===4)return"It may be a priority";else if(points===5)return"Definitely a priority";else return"Undefined";};var MyDoc=function MyDoc(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Document */ .BB,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Page */ .T3,{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.header},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.headerLeft},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:"https://eoscostarica.io/img/logos/eoscr-logo.png",style:styles.image})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.headerRight},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.headerTextBold},companyName),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.headerText},date),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.headerText},companyEmail))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.subHeader},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.h1},"Do you Need Blockchain?"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:[styles.p,{marginBottom:"10px"}]},"Thank you for completing the form. We designed this tool to help innovation leaders or IT professionals to analyze if their organizations will benefit from implementing blockchain technology."),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"The tool is a reference and the responses provided do not mean any kind of representation of any warranty regarding the accuracy or validity of the information and your decision's completeness. Our team built this template in good faith, and we expect you to make good use of it. If you have any questions, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," directly or join our ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://t.me/eoscr",style:styles.linkText},"Telegram channel")," ")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.h2},"Final Results"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"You completed the form and obtained ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.textPointsBold}," ",blockchainPoints," /120 points"),".")),between81and100&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain is for you!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"Your organization must consider implementing blockchain technology. Your team should benefit from having an efficient, secure, and trustworthy registry of data. The stakeholders and users will probably notice the improvements, which will benefit the organization in the long term. If you\u2019re considering this, contact us, and we can help you get started.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.textPointsBold},"Drop us a line!"))),between51and80&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain might be on the horizon for you!"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"It seems like your organization is very close to benefiting from blockchain technology, but there are still some minor details to take into consideration. We advise you to continue doing your research and weigh pain points vs. possible solutions for deploying blockchain. If you have questions about this, we would happily answer your inquires \u2013 no strings attached!")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.textPointsBold},"Let\u2019s schedule a call"))),lessThan50&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.pointBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:[styles.h3,{marginBottom:"10px"}]},"Blockchain is not the right fit for you at the moment but we can make it work. "),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"Don\u2019t lose hope! Your organization can probably stick to centralized databases in the meantime, but you should consider switching to a decentralized blockchain later. We suggest you keep an eye on new advancements regarding blockchain technology, and hopefully, soon, you can benefit from implementing a BaaS (blockchain-as-a-service) platform. Follow us to keep up to date on news about blockchain and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," if you have any questions.."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"Follow us on social media for more updates and resources about blockchain. Also, ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/blog/"},"read our blog")," and find more content about blockchain and EOSIO, use cases, and success stories.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.socialButtonsBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://github.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:GitHubImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://twitter.com/EOSCostaRica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:twitterImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://www.linkedin.com/company/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:linkedinImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://medium.com/@eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:MediumImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:YoutubeImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://www.instagram.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:InstramImage})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Page */ .T3,{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:[styles.paragraphSection,{marginBottom:"20px"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.h2},"Your answers"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"To find the questions corresponding to your answers, visit the ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"http://eoscostarica.io/do-you-need-blockchain"},"form page"),".")),formQuestions.map(function(section){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{key:section.title,style:styles.section},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.titleSection},section.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:[styles.p,{marginBottom:10}]},section.description),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,null,section.questions.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},section.index+1,".",i+1," - ",interpretPunctuation(item.value)));})));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Page */ .T3,{style:styles.page},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:[styles.paragraphSection,{marginBottom:"20px"}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.h2},"Final Words"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"Thank you for using our tool! We hope it will come in handy when analyzing whether your organization can benefit from implementing blockchain technology. We\u2019re continuously looking for feedback. So, if you wish to share it with us, please ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/contact-us/"},"contact us")," directly or join our ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://t.me/eoscr"},"Telegram channel"),".")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"Please, visit these links for additional resources or information about our company:")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.paragraphSection},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/blog/what-is-blockchain"},"- What is blockchain?")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/the-company/"},"- Read more about EOS Costa Rica.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://eoscostarica.io/press/"},"- What the media says about us.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://guide.eoscostarica.io/"},"- Developers guides.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{style:styles.linkText,src:"https://github.com/eoscostarica"},"- Our GitHub profile.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"- Social media channels:")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.socialButtonsBox},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://github.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:GitHubImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://twitter.com/EOSCostaRica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:twitterImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://www.linkedin.com/company/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:linkedinImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://medium.com/@eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:MediumImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://www.youtube.com/channel/UCvYinCH3O1iKpi-_dNfQAGQ",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:YoutubeImage})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{src:"https://www.instagram.com/eoscostarica/",style:styles.socialButton},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .Ee,{src:InstramImage}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .View */ .G7,{style:styles.footer},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .xv,{style:styles.p},"Made by EOS Costa Rica, v.1, 2021"))));};var generatePdfDocument=/*#__PURE__*/function(){var _ref2=(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(/*#__PURE__*/(0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().mark(function _callee(documentData){var blob;return (0,_home_runner_work_es_eoscostarica_io_es_eoscostarica_io_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:_context.next=2;return (0,_react_pdf_renderer__WEBPACK_IMPORTED_MODULE_2__/* .pdf */ .eA)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MyDoc,null)).toBlob();case 2:blob=_context.sent;(0,file_saver__WEBPACK_IMPORTED_MODULE_1__.saveAs)(blob,companyName+"_do_you_need_blockchain?");case 4:case"end":return _context.stop();}}},_callee);}));return function generatePdfDocument(_x){return _ref2.apply(this,arguments);};}();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Box__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{className:isMobile?"centerBox":""},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{className:"buttonPrimary",onClick:generatePdfDocument},"Download file"));};FormPDF.propTypes={formQuestions:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().array),blockchainPoints:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().number),companyName:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),companyIndustry:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),companyEmail:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),twitterImage:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string),linkedinImage:(prop_types__WEBPACK_IMPORTED_MODULE_6___default().string)};FormPDF.defaultProps={formQuestions:[]};/* harmony default export */ __webpack_exports__["default"] = (FormPDF);

/***/ }),

/***/ 42480:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 19527:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 69331:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 52361:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 94616:
/***/ (function() {

/* (ignored) */

/***/ }),

/***/ 64836:
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 18698:
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 15861:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ 74165:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ _regeneratorRuntime; }
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71002);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

/***/ })

}]);