const currentTime = document.querySelector("h1"),
content = document.querySelector(".content");
const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
   cursor.style.left = e.pageX + 'px';
   cursor.style.top = e.pageY + 'px';
   cursor.setAttribute('data-fromTop', (cursor.offsetTop - scrollY))
   //console.log(e.pageX, e.pageY)
});
window.addEventListener('scroll', () => {
   const fromTop = parseInt(cursor.getAttribute('data-fromTop'));
   cursor.style.top = scrollY + 'px';
   console.log(screenY);
});

window.addEventListener('click', () => {
   if(cursor.classList.contains('click')){
      cursor.classList.remove('click');
      void cursor.offsetWidth;
      cursor.classList.add('click');
   } else {
      cursor.classList.add('click')
   }
})

setInterval(() => {
   let date = new Date(),
   h = date.getHours(),
   m = date.getMinutes(),
   s = date.getSeconds(),
   ampm = "AM";
   if(h >= 12) {
       h = h - 12;
       ampm = "PM";
   }
   h = h == 0 ? h = 12 : h;
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
   currentTime.innerText = `${h}:${m}:${s} ${ampm}`;

   if (alarmTime === `${h}:${m} ${ampm}`) {
       ringtone.play();
       ringtone.loop = true;
   }
});