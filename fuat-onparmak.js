const kelimeHazine=['dünya','başka','artık','ama','düşünmek','yol','bir','kullanılmak','taraf','iç','gece','o','istemek','yüzde','kalmak','beklemek','sağlamak','aynı','yaşamak','bulunmak','bütün','ben','durum','bazı','ay','yine','bulunmak','en','iyi','kalmak','yaş','hemen','geçmek','söz','an','üzerine','para','kendi','kadın','açmak','bilgi','onun','çıkmak','diğer','süre','gün','şekil','almak','bakmak','önemli','yeni','önce','sen','onun','alt','nasıl','anne','söylemek','olmak','biri','en','kullanılmak','ad','sevmek','değil','sahip','ilk','ay','demek','ülke','hayat','baş','hep','biri','almak','hayat','üzerinde','baş','yıl','yol','çıkmak','iç','yaşamak','an','saat','düşmek','hal','ürün','geçmek','gelmek','konu','sağlamak','önemli','şimdi','göstermek','dış','iş','getirmek','istemek','durum','yüz','bu','ama','ad','kullanmak','bütün','görmek','bu','genç','sonra','baş','süre','bilgi','su','dünya','yapmak','koymak','kız','ön','orta','göstermek','yok','çıkarmak','şu','taraf','o','yapılmak','az','bırakmak','kapı','öyle','burada','olay','sıra','oturmak','vermek','alınmak','iyi','bile','tutmak','neden','var','kadın','için','sistem','orta','dönem','başlamak','yüz','gelmek','ad','açmak','siz','koymak','ön','ancak','bulmak','şekil','hiç','açmak','son','siz','küçük','anlatmak','dış','çıkarmak','artık','ve','sen','adam','sadece','almak','ve','yaş','ancak','yan','el','çok','baş','olmak','içinde','uzun','sonuç','sağlamak','çekmek','taraf','bütün','ülke','doğru','demek','sevmek','zor','yıl','doğru','çok','kendi','ki','oturmak','gerekmek','biraz','hem','yazmak','yapılmak','onun','yaş','önemli','o','beklemek','kadar','yani','bulmak','yeni','diğer','değil','doğru','sonuç','öyle','konu','sistem','bilmek','konu','ya','öyle','için','etmek','iş','böyle','gitmek','fazla','kitap','var','anlatmak','çünkü','biraz','alan','yan','sonra','çünkü','şey','kendi','sahip','dönem','an','yemek','çalışmak','bırakmak','birlikte','büyük','dış','yapılmak','veya','şu','ürün','ne','ki','bulmak','dönmek','iç','su','düşmek','yeni','içinde','göre','ya','alan','çocuk','devlet','tüm','hal','gitmek','biri','süre','başlamak','girmek','şekil','biraz','genç','ancak','zor','veya','her','adam','böyle','kişi'];
let timerDiv = document.getElementsByClassName("minik")[0];
let yuzdeDiv = document.getElementById("yuzde");
let dks = document.getElementById("dogruluk");
let button = document.getElementById("enter");
let harfler_input = document.getElementById("harfler");
let yazi_div =document.getElementById("yazi");
let input =document.getElementById("input2");
let firstLabel =document.getElementById("firstLabel");
let secondLabel =document.getElementById("secondLabel");
let mod= true
let harfler,text,yazi,x,cevap,girdi,kelime1,dogruSayisi;
let ilkDefa = true
//dur
//bekle
cevap=[]
function testHazırla(){
	if(!mod){//karışık
		if (harfler_input.value.trim().length >1){
			harfler_input.value = harfler_input.value.trim()
			if (harfler_input.value.length > 0){
				harfler = harfler_input.value;
				text="";
				cevap=[];
				girdi=[];
				for (let i = 1 ; i <= 100 ; i++) {
					x="";
					for (let i = 1 ; i <= 5 ; i++) {
						x += harfler[Math.floor(Math.random() * harfler.length)]
					}
					cevap.push(x);
					text+="<span id="+'kelime'+i+">"+x+" "+"</span>";
				}}
				yazi_div.innerHTML=text;
				yazi=[].concat(cevap);
				kelime1=document.getElementById("kelime1");
				dks.innerHTML="0DKS"
				yuzdeDiv.innerHTML="%100"
				timerDiv.innerHTML="60"
				ilkDefa = true
		}
	} else if(mod){//anlamlı
		text="";
		cevap=[];
		girdi=[];
		for (let i = 1 ; i <= 100 ; i++) {
			x= kelimeHazine[Math.floor(Math.random() * kelimeHazine.length)];
			cevap.push(x);
			text+="<span id="+'kelime'+i+">"+x+" "+"</span>";
		}
		yazi_div.innerHTML=text;
		yazi=[].concat(cevap);
		kelime1=document.getElementById("kelime1");
		dks.innerHTML="0DKS"
		yuzdeDiv.innerHTML="%100"
		timerDiv.innerHTML="60"
		ilkDefa = true
	}
}

function resetText(){
	text="";
	i=0;
	for (eleman of yazi){
		i+=1;
		text+="<span id="+'kelime'+i+">"+eleman+" "+"</span>";
	}
	yazi_div.innerHTML=text;
}

function setColor(key){
	if(typeof kelime1!=="undefined"){
		if (key === "Backspace" ){
			if ( yazi[0].substring(0,input.value.trim().slice(0, -1).length) === input.value.trim().slice(0, -1) ){
				kelime1.style.color="#005e80";
			} else {
				kelime1.style.color="red";
			}
		}else{
			// 
			if ( yazi[0].substring(0,(input.value.trim()+key).length)===input.value.trim()+key ){
				kelime1.style.color="#005e80";
			} else {
				kelime1.style.color="red";
			}	
		}	
	}
}

button.addEventListener("click", function(){
	testHazırla();
})

harfler_input.addEventListener("keypress",function(event){
	if (event.which ===13){
		testHazırla();
	}
})

firstLabel.addEventListener("click", ()=>{//karışık
	mod =false;
	harfler_input.setAttribute("placeholder","Alıştıma yapmak istediğiniz harfleri giriniz");

})

secondLabel.addEventListener("click", ()=>{//anlamlı
	mod= true;
	harfler_input.setAttribute("placeholder","test için enter atıklayın");
	harfler_input.value=""//--------------------------------------------------------------
})


function dogrulukCtrl(){
	dogruSayisi = 0;
	girdi.forEach(function(girilen,index){
		if (girilen === cevap[index]){
			dogruSayisi++;
		}
	})
	if(girdi.length>0){
		yuzdeDiv.innerHTML="%"+Math.round(100/girdi.length*dogruSayisi);
		dks.innerHTML=Math.round(100/(60-Number(timerDiv.innerHTML))*dogruSayisi)+"DKS"
	}

}

let timer;
function eksilt(){
	timer--;
	timerDiv.innerHTML=timer;
	dogrulukCtrl()
}

input.addEventListener("keypress", event =>{
	if (cevap.length > 40){
		if (ilkDefa){
			//zamanlayıcıyı başlat
			timer = 60;
			for (let i=0 ; i < 60; i++) {
				setTimeout(eksilt, i*1000);
			}

			ilkDefa = false
		}
		if (event.which ===32 && timerDiv.innerHTML>0){
			girdi.push(input.value.trim());
			input.value = "";
			yazi.shift();
			resetText();
			kelime1=document.getElementById("kelime1");
		}
	}
})

input.addEventListener("keydown", event =>{
		if(input.value[0]===" "){
			input.value=input.value.slice(1)
		}
		setColor(event.key)
})

