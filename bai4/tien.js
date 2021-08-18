function MO(){
    let a = document.getElementById('Nhap').value;
    a=parseFloat(a);
   let tg1=0;
   let tg2=0;
   tg1=parseFloat(tg1)
   tg2=parseFloat(tg2);
       let truoc =document.getElementById('truoc').value;
        let sau = document.getElementById('sau').value;
        if (truoc=='ViệtNam'){
        tg1=a/23000
        }
        if (truoc=='Mỹ'){
        tg1=a
        }
        if (sau=='Đồng'){
        tg2=tg1*23000
        }
        if (sau=='USD'){
        tg2=tg1*1
        }
    document.getElementById('tiente').innerText=tg2
}




