function getTxtFile(url){
    fetch(url)
    .then(sonuc =>sonuc.text())
    .then(sonuc => console.log(sonuc))
    .catch(hata => console.log(hata));
}


function getJsonFile(url){
    fetch(url)
    .then(sonuc =>sonuc.json())
    .then(sonuc => console.log(sonuc))
    .catch(hata => console.log(hata));
}

// getTxtFile("example.txt");
// getJsonFile("example.json");

function getFromApi(url){
    fetch(url)
    .then(sonuc =>sonuc.json())
    .then(sonuc=>{
        let rate = sonuc.rates.TRY;
        console.log(amount.value);
        tl.value = amount.value * rate;
        console.log(rate)
        
    })
    .catch(err=>console.log(err));
}
 
// getFromApi("https://api.exchangeratesapi.io/latest");

document.getElementById("change").addEventListener("click",function(){
    console.log('vay anam vay');
    getFromApi("https://api.exchangeratesapi.io/latest");
});
const amount=document.getElementById("amount");
const tl=document.getElementById("tl");

// function change(){
    
//         tl.value=amount.value*rates;
    
// }