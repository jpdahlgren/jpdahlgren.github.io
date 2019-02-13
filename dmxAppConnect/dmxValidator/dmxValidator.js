/*!
 DMXzone Validator
 Version: 1.1.1
 (c) 2018 DMXzone.com
 @build 2018-09-04 10:35:15
 */
!function(){var F={email:"email",url:"url",date:"date",time:"time",week:"week",month:"month",number:"number",color:"color",range:"number"},l=["min","max","accept","pattern","minlength","maxlength"];function o(e,t,u){var a=!0;return dmx.rules[t]?(a=dmx.rules[t].validity(e,u))||function(e,t,u){var a=e.getAttribute("data-msg-"+t)||dmx.rules[t].message;a=Array.isArray(u)?a.replace(/\{(\d)\}/g,function(e,t){return u[t]}):a.replace(/\{0\}/g,u);e.setCustomValidity(a),dmx.bootstrap4forms?dmx.validate.setBootstrap4Message(e,a):dmx.bootstrap3forms?dmx.validate.setBootstrapMessage(e,a):dmx.validate.setErrorMessage(e,a)}(e,t,u):console.warn("Validation rule "+t+" not found!"),a&&(dmx.bootstrap4forms?dmx.validate.setBootstrap4Message(e,""):dmx.bootstrap3forms?dmx.validate.setBootstrapMessage(e,""):dmx.validate.setErrorMessage(e,"")),a}dmx.bootstrap3forms=!1,dmx.bootstrap4forms=!1,document.addEventListener("DOMContentLoaded",function(e){dmx.bootstrap3forms=!!document.querySelector('script[src$="dmxBootstrap3Forms.js"]'),dmx.bootstrap4forms=!!dmx.array(document.querySelectorAll("script[src]")).filter(function(e){return/bootstrap\/4(\.[^\/]*)?\/js\/bootstrap.min.js/.test(e.getAttribute("src"))}).length}),dmx.rules={},dmx.validate=function(t){if("FORM"==t.tagName){for(var e=!0,u=0;u<t.elements.length;u++)dmx.validate(t.elements[u])||(e=!1);return dmx.bootstrap4forms&&t.classList.add("was-validated"),e}if("checkbox"==t.type||"radio"==t.type){var a=document.querySelector('[name="'+t.name+'"]');if(a&&t!=a)return dmx.validate(a)}if(!t.dirty&&(t.dirty=!0,dmx.bootstrap3forms)){var s=t.setCustomValidity;t.setCustomValidity=function(e){s.call(t,e),dmx.validate.setBootstrapMessage(t,e)}}if(dmx.requestUpdate(),!t.willValidate)return t.setCustomValidity(""),!0;if(t.hasAttribute("required")&&!o(t,"required"))return!1;if(t.value&&t.value.length){for(var r in F)if(t.type==r&&!o(t,F[r]))return!1;for(var u in l){var i=l[u];if(t.hasAttribute(i)&&!o(t,i,t.getAttribute(i)))return!1}for(u=0;u<t.attributes.length;u++){var d=t.attributes[u];if(/^data-rule-/.test(d.name)){var n=d.name.substr(10).toLowerCase();if(!o(t,n,d.value))return!1}}}return t.setCustomValidity(""),!0},dmx.validateReset=function(e){if("FORM"!=e.tagName)e.dirty=!1,dmx.bootstrap4forms?(dmx.validate.setBootstrap4Message(e,""),e.classList.remove("is-valid","is-invalid")):dmx.bootstrap3forms?(dmx.validate.setBootstrapMessage(e,""),e.closest(".form-group").remove("has-success","has-success","has-feedback")):(dmx.validate.setErrorMessage(e,""),e.classList.remove("dmxValidator-valid","dmxValidator-invalid"));else{for(var t=0;t<e.elements.length;t++)dmx.validateReset(e[t]);dmx.bootstrap4forms&&e.classList.remove("was-validated")}},dmx.validate.setErrorMessage=function(e,t){if(!e.hasAttribute("data-msg-custom")&&(e.getAttribute("name")||e.getAttribute("id"))){var u=e.type.toLowerCase(),a="dmxValidatorError"+(e.form?e.form.getAttribute("id"):"")+(e.getAttribute("name")||e.getAttribute("id")),s=document.getElementById(a);if(!s)if((s=document.createElement("span")).id=a,s.className="dmxValidator-error","checkbox"==u||"radio"==u){var r=e.closest(".checkbox-group, .radio-group");r?r.insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s)}else e.insertAdjacentElement("afterend",s);(s.textContent=t)?(e.classList.remove("dmxValidator-valid"),e.classList.add("dmxValidator-invalid")):(e.classList.remove("dmxValidator-invalid"),e.classList.add("dmxValidator-valid"))}},dmx.validate.setBootstrapMessage=function(e,t){if(!e.hasAttribute("data-msg-custom")&&(e.getAttribute("name")||e.getAttribute("id"))){var u=e.type.toLowerCase(),a="dmxValidatorError"+(e.form?e.form.getAttribute("id"):"")+(e.getAttribute("name")||e.getAttribute("id")),s=document.getElementById(a);if(!s)if((s=document.createElement("span")).id=a,s.className="help-block","checkbox"==u||"radio"==u){var r=e.closest(".checkbox-group, .radio-group");if(r)r.insertAdjacentElement("beforeend",s);else(d=e.closest(".checkbox, .radio"))&&d.insertAdjacentElement("afterend",s)}else e.classList.contains("filestyle")?e.nextSibling.insertAdjacentElement("afterend",s):e.parentElement.classList.contains("input-group")?e.parentElement.insertAdjacentElement("afterend",s):e.insertAdjacentElement("afterend",s);var i=e.closest(".form-group");if("hidden"!=u&&"g-recaptcha-response"!=e.name&&i){var d,n=i.querySelector(".form-control-feedback");if("checkbox"!=u&&"radio"!=u)if(i.classList.add("has-feedback"),!n)(n=document.createElement("span")).className="glyphicon form-control-feedback",(d=i.querySelector(".input-group, .checkbox-group, input, select, textarea, button")).insertAdjacentElement("afterend",n);t?(i.classList.remove("has-success"),i.classList.add("has-error"),n&&(n.classList.remove("glyphicon-ok"),n.classList.add("glyphicon-remove"))):(i.classList.remove("has-error"),n&&n.classList.remove("glyphicon-remove"),e.form&&e.form.hasAttribute("data-novalid")||(i.classList.add("has-success"),n&&n.classList.add("glyphicon-ok")))}s.textContent=t}},dmx.validate.setBootstrap4Message=function(e,t){if(!e.hasAttribute("data-msg-custom")&&(e.getAttribute("name")||e.getAttribute("id"))){var u=e.type.toLowerCase(),a="dmxValidatorError"+(e.form?e.form.getAttribute("id"):"")+(e.getAttribute("name")||e.getAttribute("id")),s=document.getElementById(a);s||((s=document.createElement("div")).id=a,s.className="invalid-feedback",e.parentElement.appendChild(s)),e.hasAttribute("medium-editor-textarea-id")&&(e=document.getElementById(e.getAttribute("medium-editor-textarea-id"))),"hidden"!=u&&"g-recaptcha-response"!=e.name&&(t?(e.classList.remove("is-valid"),e.classList.add("is-invalid")):(e.classList.remove("is-invalid"),e.classList.add("is-valid"))),s.textContent=t}}}(),function(){function u(u){return"SELECT"==u.nodeName?dmx.array(u.options).reduce(function(e,t){return e+t.selected},0):"checkbox"==u.type.toLowerCase()?dmx.array(u.form.elements).reduce(function(e,t){return e+(t.name==u.name&&t.checked)},0):1}Object.assign(dmx.rules,{required:{message:"This field is required.",validity:function(e){return"checkbox"==e.type.toLowerCase()||"radio"==e.type.toLowerCase()?e.name?!!document.querySelector('[name="'+e.name+'"]:checked'):e.checked:e.hasAttribute("medium-editor-textarea-id")?!(!e.value||/^\s*<p[^>]*>\s*<br[^>]*>\s*<\/p>\s*$/.test(e.value)):!(!e.value||!e.value.length)}},email:{message:"Please enter a valid email address.",validity:function(e){return/^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFFu20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF\-\.\d]+)((\.([a-zA-Z\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u0250-\u02AF\u0300-\u036F\u0370-\u03FF\u0400-\u04FF\u0500-\u052F\u0530-\u058F\u0590-\u05FF\u0600-\u06FF\u0700-\u074F\u0750-\u077F\u0780-\u07BF\u07C0-\u07FF\u0900-\u097F\u0980-\u09FF\u0A00-\u0A7F\u0A80-\u0AFF\u0B00-\u0B7F\u0B80-\u0BFF\u0C00-\u0C7F\u0C80-\u0CFF\u0D00-\u0D7F\u0D80-\u0DFF\u0E00-\u0E7F\u0E80-\u0EFF\u0F00-\u0FFF\u1000-\u109F\u10A0-\u10FF\u1100-\u11FF\u1200-\u137F\u1380-\u139F\u13A0-\u13FF\u1400-\u167F\u1680-\u169F\u16A0-\u16FF\u1700-\u171F\u1720-\u173F\u1740-\u175F\u1760-\u177F\u1780-\u17FF\u1800-\u18AF\u1900-\u194F\u1950-\u197F\u1980-\u19DF\u19E0-\u19FF\u1A00-\u1A1F\u1B00-\u1B7F\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u1E00-\u1EFF\u1F00-\u1FFF\u20D0-\u20FF\u2100-\u214F\u2C00-\u2C5F\u2C60-\u2C7F\u2C80-\u2CFF\u2D00-\u2D2F\u2D30-\u2D7F\u2D80-\u2DDF\u2F00-\u2FDF\u2FF0-\u2FFF\u3040-\u309F\u30A0-\u30FF\u3100-\u312F\u3130-\u318F\u3190-\u319F\u31C0-\u31EF\u31F0-\u31FF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FFF\uA000-\uA48F\uA490-\uA4CF\uA700-\uA71F\uA800-\uA82F\uA840-\uA87F\uAC00-\uD7AF\uF900-\uFAFF]){2,63})+)$/i.test(e.value)}},url:{message:"Please enter a valid URL.",validity:function(e){return/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e.value)}},date:{message:"Please enter a valid date.",validity:function(e){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e.value)}},time:{message:"Please enter a valid time.",validity:function(e){return/^([01][0-9]|2[0-4]):[0-5][0-9](:([0-5][0-9]|60))?$/.test(e.value)}},month:{message:"Please enter a valid month.",validity:function(e){return/^\d{4}-(0[1-9]|1[012])$/.test(e.value)}},week:{message:"Please enter a valid week.",validity:function(e){return/^\d{4}-W(0[1-9]|[1-4][0-9]|5[0-3])$/.test(e.value)}},color:{message:"Please enter a color in the format #xxxxxx.",validity:function(e){return/^#[a-fA-F0-9]{6}$/.test(e.value)}},number:{message:"Please enter a valid number.",validity:function(e){return/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e.value)}},min:{message:"Please enter a value greater than or equal to {0}.",validity:function(e,t){return+e.value>=t}},max:{message:"Please enter a value less than or equal to {0}.",validity:function(e,t){return+e.value<=t}},pattern:{message:"Invalid format.",validity:function(e,t){return!/^text|search|url|tel|email|password$/i.test(e.type)||("string"==typeof t&&(t=new RegExp("^(?:"+t+")$")),t.test(e.value))}},minlength:{message:"Please enter at least {0} characters.",validity:function(e,t){return e.value.length>=t}},maxlength:{message:"Please enter no more than {0} characters.",validity:function(e,t){return e.value.length<=t}},alphanumeric:{message:"Letters, numbers, and underscores only please.",validity:function(e){return/^\w+$/i.test(e.value)}},lettersonly:{message:"Letters only please.",validity:function(e){return/^[a-z]+$/i.test(e.value)}},letterswithbasicpunc:{message:"Letters or punctuation only please.",validity:function(e){return/^[a-z\-.,()'"\s]+$/i.test(e.value)}},nowhitespace:{message:"No white space please.",validity:function(e){return/^\S+$/i.test(e.value)}},digits:{message:"Please enter only digits.",validity:function(e){return/^\d+$/.test(e.value)}},creditcard:{message:"Please enter a valid credit card number.",validity:function(e){var t=e.value;if(/[^0-9 \-]+/.test(t))return!1;var u,a,s=0,r=0,i=!1;if((t=t.replace(/\D/g,"")).length<13||19<t.length)return!1;for(u=t.length-1;0<=u;u--)a=t.charAt(u),r=parseInt(a,10),i&&9<(r*=2)&&(r-=9),s+=r,i=!i;return s%10==0}},bic:{message:"Please specify a valid BIC code.",validity:function(e){return/^([A-Z]{6}[A-Z2-9][A-NP-Z1-2])(X{3}|[A-WY-Z0-9][A-Z0-9]{2})?$/.test(e.value)}},iban:{message:"Please specify a valid IBAN.",validity:function(e){var t,u,a,s,r,i=e.value.replace(/ /g,"").toUpperCase(),d="",n=!0,F="";if(void 0!==(a={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"}[i.substring(0,2)])&&!new RegExp("^[A-Z]{2}\\d{2}"+a+"$","").test(i))return!1;for(t=i.substring(4,i.length)+i.substring(0,4),s=0;s<t.length;s++)"0"!==(u=t.charAt(s))&&(n=!1),n||(d+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(u));for(r=0;r<d.length;r++)F=(""+F+d.charAt(r))%97;return 1===F}},vat:{message:"Please specify a valid VAT Number.",validity:function(e){return/^((AT)?U[0-9]{8}|(BE)?0[0-9]{9}|(BG)?[0-9]{9,10}|(CY)?[0-9]{8}L|(CZ)?[0-9]{8,10}|(DE)?[0-9]{9}|(DK)?[0-9]{8}|(EE)?[0-9]{9}|(EL|GR)?[0-9]{9}|(ES)?[0-9A-Z][0-9]{7}[0-9A-Z]|(FI)?[0-9]{8}|(FR)?[0-9A-Z]{2}[0-9]{9}|(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})|(HU)?[0-9]{8}|(IE)?[0-9]S[0-9]{5}L|(IT)?[0-9]{11}|(LT)?([0-9]{9}|[0-9]{12})|(LU)?[0-9]{8}|(LV)?[0-9]{11}|(MT)?[0-9]{8}|(NL)?[0-9]{9}B[0-9]{2}|(PL)?[0-9]{10}|(PT)?[0-9]{9}|(RO)?[0-9]{2,10}|(SE)?[0-9]{12}|(SI)?[0-9]{8}|(SK)?[0-9]{10})$/.test(e.value)}},integer:{message:"A positive or negative non-decimal number please.",validity:function(e){return/^-?\d+$/.test(e.value)}},ipv4:{message:"Please enter a valid IP v4 address.",validity:function(e){return/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(e.value)}},ipv6:{message:"Please enter a valid IP v6 address.",validity:function(e){return/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(e.value)}},minitems:{message:"Please select at least {0} items.",validity:function(e,t){return u(e)>=t}},maxitems:{message:"Please select no more tham {0} items.",validity:function(e,t){return u(e)<=t}},equalto:{message:"Please enter the same value again.",validity:function(e,t){"#"!=t[0]&&(t='[name="'+t+'"]');var u=document.querySelector(t);return u?e.value==u.value:(console.warn("Target element "+t+" for equalTo rule not found."),!0)}},notequalto:{message:"Please enter a different value, values must not be the same.",validity:function(e,t){"#"!=t[0]&&(t='[name="'+t+'"]');var u=document.querySelector(t);return u?e.value!=u.value:(console.warn("Target element "+t+" for equalTo rule not found."),!0)}}})}(),Object.assign(dmx.rules,{accept:{message:"This file type is not allowed for upload.",validity:function(e,t){if("file"!=e.type.toLowerCase())return!0;var u=t.replace(/\s/g,"").split(",");if(e.files&&e.files.length)for(var a=0;a<e.files.length;a++){for(var s=e.files[a],r=!1,i=0;i<u.length;i++){var d=u[i];if("."==d.charAt(0)){if(s.name.match(new RegExp("\\"+d+"$","i"))){r=!0;break}}else if(/(audio|video|image)\/\*/i.test(d)){if(s.type.match(new RegExp("^"+d.replace(/\*/g,".*")+"$","i"))){r=!0;break}}else if(s.type.toLowerCase()==d.toLowerCase()){r=!0;break}}if(!r)return!1}return!0}},minsize:{message:"Please select a file of at least {0} bytes.",validity:function(e,t){if("file"!=e.type.toLowerCase())return!0;if(e.files&&e.files.length)for(var u=0;u<e.files.length;u++)if(e.files[u].size<t)return!1;return!0}},maxsize:{message:"Please select a file of no more than {0} bytes.",validity:function(e,t){if("file"!=e.type.toLowerCase())return!0;if(e.files&&e.files.length)for(var u=0;u<e.files.length;u++)if(e.files[u].size>t)return!1;return!0}},mintotalsize:{message:"Total size of selected files should be at least {0} bytes.",validity:function(e,t){if("file"!=e.type.toLowerCase())return!0;if(e.files&&e.files.length){for(var u=0,a=0;a<e.files.length;a++)u+=e.files[a].size;if(u<t)return!1}return!0}},maxtotalsize:{message:"Total size of selected files should be no more than {0} bytes.",validity:function(e,t){if("file"!=e.type.toLowerCase())return!0;if(e.files&&e.files.length){for(var u=0,a=0;a<e.files.length;a++)u+=e.files[a].size;if(t<u)return!1}return!0}},minfiles:{message:"Please select at least {0} files.",validity:function(e,t){return"file"!=e.type.toLowerCase()||!(e.files&&e.files.length&&e.files.length<t)}},maxfiles:{message:"Please select no more than {0} files.",validity:function(e,t){return"file"!=e.type.toLowerCase()||!(e.files&&e.files.length&&e.files.length>t)}}});
//# sourceMappingURL=../maps/dmxValidator.js.map
