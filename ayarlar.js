let ayarlarAttr;
const ayarlarDiv = document.getElementById("ayarlar");
const blankSpaceDiv = document.getElementById("blankSpace");

const setAyarlar = ()=>{
	ayarlarDiv.setAttribute("id","ayarlarTıklanınca");
	blankSpaceDiv.style.opacity=0;
	setTimeout(( )=>{blankSpaceDiv.style.display="none";},1001)
	
}	

const ilkHal = ()=>{
	ayarlarDiv.setAttribute("id","ayarlar");
	blankSpaceDiv.style.display="initial";
	blankSpaceDiv.style.opacity=1;

}

ayarlarDiv.addEventListener("click", function(){
	ayarlarAttr = ayarlarDiv.getAttribute("id");
	ayarlarAttr === "ayarlar" ? setAyarlar() : ilkHal() ;
})
