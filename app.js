
function toast(msg){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;
  t.classList.add('show');
  clearTimeout(window.__t);
  window.__t=setTimeout(()=>t.classList.remove('show'),2200);
}
function ask(){
  const input=document.getElementById('question');
  const feed=document.getElementById('feed');
  if(!input||!feed||!input.value.trim())return;
  const u=document.createElement('div');u.className='msg user';u.textContent=input.value.trim();feed.appendChild(u);
  input.value='';
  setTimeout(()=>{
    const a=document.createElement('div');a.className='msg';
    a.innerHTML='<strong>That looks assessable.</strong><br>I would first check the property context, likely consent path, and which professional should review it. <a href="onboarding.html" style="color:#fff;text-decoration:underline">Start a guided project →</a>';
    feed.appendChild(a);
  },350);
}
document.addEventListener('keydown',e=>{
  if(e.key==='Enter' && document.activeElement?.id==='question'){e.preventDefault();ask();}
});
