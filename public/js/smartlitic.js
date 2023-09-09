
import { selectionUI, emojiSectionUI, resultRateUI, primaryText, errorText, toggleBtnOff, toggleBtnOn, loaderUI } from '../view/feedback.js';
import { Api, _result, progress } from '../service/api.js';

let apiKey;
let url;
let userIp;
let absolute_url;
let route;
let browserName;
let browserVersion;
let clientUUID;
let btnValue = false;
let clientComment;
let pointerDom;
let Href = [];
const toggleButton = document.querySelector(".toggle-btn");
const feedbackSec = document.createElement('div');
const commentSec = document.createElement('textarea');
const submitBtn = document.createElement('button');
const selectionBtn = document.createElement('button');
const emojiSection = document.createElement('div');
const closeSelectionBtn = document.createElement('button');
const text = document.createElement('div');
const toggleBtnText = document.createElement('div');
const changeTargetSec = document.createElement('div');
const closeTargetSec = document.createElement('div');
const loaderSec = document.createElement('div');


let generalData = {};
let cmpData = {};

// async function getIp() {
//   return await fetch('https://api.ipify.org/').then(res => res.text()).then(data => {
//     userIp = data;
//     getFingerPrintID();
//   })
// }

// const getFingerPrintID = () => {
//   const fpPromise = FingerprintJS.load();
//   (async () => {
//     const fp = await fpPromise;
//     const result = await fp.get();
//     clientUUID = result.visitorId;
//     setGenerateData();
//     Api(generalData, apiKey);
//   })()
// }

const getFingerPrintID = () => {
  const fpPromise = import('https://openfpcdn.io/fingerprintjs/v3')
    .then(async FingerprintJS => await FingerprintJS.load())

   fpPromise
    .then(async fp => await fp.get())
    .then(result => {
      clientUUID = result.visitorId;
      setGenerateData();
      Api(generalData, apiKey);
    })
}

const reset = () => {
  generalData = {};  
}

const setGenerateData = () => {
  get_browser();
  getRoute();
  setUpData();
}

const toggleBtnValueChange = () => {
    btnValue = !btnValue;
    toggleBtnTextHandler();
    runMouseEvent();
}

const toggleBtnTextHandler = () => {
  if(btnValue){
    disableHref()
    document.querySelector('#main-selector').style = "display:block;"
    document.querySelectorAll('.smartlitic-component').forEach(el =>{
      el.style = 'z-index: 11 !important'
    })
    toggleBtnText.innerHTML = toggleBtnOn;
  } else{
    document.querySelector('#main-selector').style = "display:none;"
    toggleBtnText.innerHTML = toggleBtnOff;
    document.querySelectorAll("[href='javascript:;']").forEach((a, i) =>  a.href = Href[i])
  }
}

const disableHref = () => {
  document.querySelectorAll('a').forEach(a => {
    if(a.getAttribute('href') && detectTargetCmp(a)){
      Href.push(a.getAttribute('href'))
      a.href = 'javascript:;'
    }
  })
}


const closeFeedbackSection = () => {
  if(pointerDom){
    clearTargetCmpAction(pointerDom.target);
    pointerDom = null;
  }
  selectionBtn.disabled = false;
  btnValue = false;
  toggleBtnTextHandler();
  document.body.removeChild(feedbackSec);
  document.body.appendChild(toggleButton);
  commentSec.classList.remove('showSec');
  selectionBtn.classList.remove('showSec');
  submitBtn.classList.remove('showSec')
  commentSec.value = "";
  generalData.client_rate = undefined;
  generalData.component = undefined;
}

const getTextareaValue = (event) => {
  clientComment = event.target.value;
  if(event.target.value.length > 0){
    submitBtn.classList.add('showSec');
  } else {
    submitBtn.classList.remove('showSec')
  }
}

const submitRate = () => {
  if(btnValue) btnValue = false;
  generalData.client_comment = clientComment;
  if(pointerDom){
    getComponentData(pointerDom);
    generalData.component = cmpData;
  } 
    generalData.client_comment = clientComment;
    Api(generalData, apiKey);
    if(progress)toggleAnimation(loaderSec,submitBtn);    
    if(_result?.status == 200){
      feedbackSec.removeChild(emojiSection);
      feedbackSec.removeChild(commentSec);
      feedbackSec.removeChild(selectionBtn);
      feedbackSec.removeChild(loaderSec);
      // feedbackSec.removeChild(submitBtn);
      text.innerHTML = resultRateUI;      
      if(pointerDom) closeTargetCmp();
      runMouseEvent();
    } else {
      text.innerHTML = errorText;
      toggleAnimation(submitBtn,loaderSec);  
      setTimeout(() => {
        text.innerHTML = primaryText;
      }, 3000);

    }    
}

const toggleAnimation = (firstSec, secondSec) => {
  feedbackSec.appendChild(firstSec);
  feedbackSec.removeChild(secondSec);
}

const generateFeedbackSection = () => {
  closeSelectionBtn.innerHTML = 'X close';
  submitBtn.innerHTML = 'Submit';
  text.innerHTML = primaryText;
  selectionBtn.innerHTML = selectionUI; 
  emojiSection.innerHTML = emojiSectionUI;
  loaderSec.innerHTML = loaderUI;
  feedbackSec.classList.add('feedback-sec');
  selectionBtn.classList.add('selection-btn');
  submitBtn.classList.add('submit-btn')
  closeSelectionBtn.classList.add('close-selection-btn');
  commentSec.classList.add('comment-sec')
  toggleBtnText.classList.add('inner-text');
  selectionBtn.appendChild(toggleBtnText);
  feedbackSec.appendChild(text);
  feedbackSec.appendChild(closeSelectionBtn);
  feedbackSec.appendChild(emojiSection);
  feedbackSec.appendChild(commentSec);
  feedbackSec.appendChild(selectionBtn);
  feedbackSec.appendChild(submitBtn);
  document.body?.appendChild(feedbackSec);
  document.body.removeChild(toggleButton);
  toggleBtnTextHandler();
  selectionBtn.addEventListener('click', toggleBtnValueChange);
  closeSelectionBtn.addEventListener('click', closeFeedbackSection);
  commentSec.addEventListener('input', getTextareaValue);
  submitBtn.addEventListener('click', submitRate)
  getEmojiValue();
}

const setUpData = () => {
  generalData.absolute_url = absolute_url;
  generalData.route = route;
  generalData.client_uuid = clientUUID;
  generalData.client_device_type = getDeviceType().toUpperCase();
  generalData.client_platform = getPlatform();
  generalData.client_public_ip_address = userIp;
  generalData.client_os = getOs();
  generalData.client_browser = browserName;
  generalData.client_browser_version = browserVersion;
  generalData.client_language = getLang();
  generalData.client_screen_size = scSize();
  generalData.client_document_referrer = docRef();
  generalData.client_timezone = getTimeZone();
  generalData.client_timezone_offset = getTimeZoneOffset();
  generalData.client_timestamp = getTimeStamp();
}

const getEmojiValue = () => {
  let emBtn = document.querySelectorAll('.emoji-btn');
  emBtn.forEach(btn => btn.addEventListener('click', () => {
    getRate(btn.id);
    emBtn.forEach(el => el.classList.remove('active-rate'));
    btn.classList.add('active-rate');
    commentSec.classList.add('showSec');
    selectionBtn.classList.add('showSec');
  }))
}


const get_browser = () => {
  var ua = navigator.userAgent,
    tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
  if (/trident/i.test(M[1])) {
    tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
    return {
      name: 'IE',
      version: (tem[1] || '')
    };
  }
  if (M[1] === 'Chrome') {
    tem = ua.match(/\bOPR|Edge\/(\d+)/)
    if (tem != null) {
      return {
        name: 'Opera',
        version: tem[1]
      };
    }
  }
  M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
  if ((tem = ua.match(/version\/(\d+)/i)) != null) {
    M.splice(1, 1, tem[1]);
  }
  return browserName = M[0], browserVersion = M[1];
}

const getTimeStamp = () => {
  return Date.now();
}

const getPlatform = () => {
  return navigator.platform;
}

const getTimeZoneOffset = () => {
  return new Date().getTimezoneOffset() / -60;
}

const getLang = () => {
  return navigator.language;
}

const getTimeZone = () => {
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

const getOs = () => {
  if (navigator.appVersion.indexOf("Win") != -1) return "Windows OS";
  if (navigator.appVersion.indexOf("Mac") != -1) return "MacOS";
  if (navigator.appVersion.indexOf("X11") != -1) return "UNIX OS";
  if (navigator.appVersion.indexOf("Linux") != -1) return "Linux OS";
}

const getDeviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return "tablet";
  }
  if (
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    )
  ) {
    return "mobile";
  }
  return "desktop";
};


const getRoute = () => {
  route = window.location.pathname;
  absolute_url = window.location.origin;
}



const scSize = () => {
  let w = window.screen.width;
  let h = window.screen.height;
  return `${w} * ${h}`;
}

const docRef = () => {
  return document.referrer;
}

const getComponentData = (data) => {
  cmpData.component_id = data.target.id || '',
  cmpData.component_inner_text = data.target.innerText || '',
  cmpData.component_type = data.target.tagName || ''
}

const getRate = (id) => {
  if(id === 'love'){
    generalData.client_rate = 5;
  } else if(id === 'like'){
    generalData.client_rate = 4;
  } else if(id === 'neutral'){
    generalData.client_rate = 3;
  } else if(id === 'dislike'){
    generalData.client_rate = 2;
  } else if(id === 'hate'){
    generalData.client_rate = 1;
  }
}


const detectTargetCmp = (el) => {
  const child = el.parentNode?.classList?.contains('smartlitic-component')
  const parent = el.classList?.contains('smartlitic-component')
  if (child || parent) return true;
}

const mouseOverHandler = (event) => {
  if (btnValue && detectTargetCmp(event.target)){    
    event.target.style = 'border:3px solid #ffd902;transition:border 200ms; border-radius:5px;';
  }
}

const mouseOutHandler = (event) => {
  if (btnValue && detectTargetCmp(event.target)) event.target.style = null;
}

const targetCmpHandler = (event) => {
  if (btnValue && detectTargetCmp(event.target)) {
    pointerDom = event;
    pointerDom.target.style = 'border:3px solid #21CF8E;transition:border 200ms; border-radius:5px;position:relative z-index:10';
    targetCmpAction(pointerDom.target);
    stopMouseEvent();
    selectionBtn.disabled = true;
  }
}

const straightCmpHandler = (event) => {
  if(!generalData.client_rate  && detectTargetCmp(event.target)){
    getComponentData(event);
    generalData.component = cmpData;
    Api(generalData, apiKey);
  }
}

const targetCmpAction = (node) => {
  changeTargetSec.innerHTML = 'change';
  closeTargetSec.innerHTML = 'X';
  changeTargetSec.classList.add('change-target-sec');
  closeTargetSec.classList.add('remove-target-sec');
  node.appendChild(changeTargetSec);
  node.appendChild(closeTargetSec);
  changeTargetSec.addEventListener('click', changeTargetCmp);
  closeTargetSec.addEventListener('click', closeTargetCmp);
}

const changeTargetCmp = () => {
  clearTargetCmpAction(pointerDom.target);
  pointerDom = null;
  toggleBtnValueChange();
  runMouseEvent();
  selectionBtn.disabled = false;
}

const closeTargetCmp = () => {  
  selectionBtn.disabled = false;
  clearTargetCmpAction(pointerDom.target);
  btnValue = false;
  pointerDom = null;
  toggleBtnTextHandler();
}

const clearTargetCmpAction = (parent) => {
  parent.removeChild(closeTargetSec);
  parent.removeChild(changeTargetSec);
  parent.style = null;
}

const runMouseEvent = () => {
  document.addEventListener('mouseover',mouseOverHandler);
  document.addEventListener('mouseout',mouseOutHandler);
  document.addEventListener('click',targetCmpHandler);
}

const stopMouseEvent = () => {
  document.removeEventListener('mouseover',mouseOverHandler);
  document.removeEventListener('mouseout',mouseOutHandler);
  document.removeEventListener('click',targetCmpHandler);
  toggleBtnValueChange();
}

function smartlitic(api_key) {
  apiKey = api_key;
  if (apiKey) {
    url = location.href;
    reset();
    // getIp();
    getFingerPrintID();
    document.addEventListener('click', () => {
      requestAnimationFrame(() => {
        if (url !== location.href) {
          url = location.href;
          reset();
          getFingerPrintID();
          // getIp();
        }
      })
    }, true)
  } else {
    console.log('api_key is not set')
  }
  toggleButton.addEventListener('click', generateFeedbackSection);
  document.addEventListener('mouseover', mouseOverHandler);
  document.addEventListener('mouseout', mouseOutHandler);
  document.addEventListener('click', targetCmpHandler);
  document.addEventListener('click', straightCmpHandler);
}

smartlitic('a1ad16e9cc2113b4fa5cf6d2a118e0ce2b958f3c6caa1c03c249f6d678a4d667');