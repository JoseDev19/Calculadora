(function(){var c=document.getElementById('ck');if(!c)return;var v=null;try{v=localStorage.getItem('ck')}catch(e){}
function ads(){/* Tras aceptar cookies, carga AdSense: sustituye ca-pub-XXXXXXXXXXXXXXXX por tu ID */
var s=document.createElement('script');s.async=true;s.src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX';s.crossOrigin='anonymous';document.head.appendChild(s)}
if(v==='1'){ads()}else if(v===null){c.style.display='flex'}
document.getElementById('ok').onclick=function(){try{localStorage.setItem('ck','1')}catch(e){}c.style.display='none';ads()};
document.getElementById('no').onclick=function(){try{localStorage.setItem('ck','0')}catch(e){}c.style.display='none'}})();
