document.getElementById("main1").addEventListener("mouseout",function(){
    // alert("hello")
    document.getElementsByClassName("design")[0].style.height="0px"
    document.getElementsByClassName("design")[1].style.height="0px"
    document.getElementsByClassName("design")[2].style.height="0px"
})
// document.getElementsByClassName("content")[0].addEventListener("mouseover",()=>{
//     document.getElementsByClassName("design")[0].style.height="600px"
//     document.getElementsByClassName("design")[1].style.height="600px"
//     document.getElementsByClassName("design")[2].style.height="600px"
// })
document.getElementById("main1").addEventListener("mouseover",function(){
    document.getElementsByClassName("design")[0].style.height="600px"
    document.getElementsByClassName("design")[1].style.height="600px"
    document.getElementsByClassName("design")[2].style.height="600px"
})

