// getting the element...
const image = document.getElementById("image")

// getting api to img data in  fetch ...
const result = fetch("https://api.thecatapi.com/v1/images/search")
result
  .then((data)=> data.json())
  .then((ele)=>{
    for(let i=0;i<ele.length;i++){
        image.src = ele[i].url
    }
  })
  .catch((error)=>console.log(error));

