let image = document.getElementById('image');
let content = document.getElementById('content');
let btncreate = document.getElementById('btncreate');

btncreate.onclick = () =>{
   if(content.value=='') return;
   let linkQR = 'https://api.qrserver.com/v1/create-qr-code/';
   image.src = linkQR + '?size=500*500&data=' + content.value; 
}