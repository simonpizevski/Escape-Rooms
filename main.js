// My Javascript code
document.getElementById("btnOpen").addEventListener("click", function()
{
    let containerMobilemenu = document.getElementById("contMM");
    let bgMobilemenu = document.getElementById("bgMM");
    
    containerMobilemenu.style.display = "block";
    bgMobilemenu.style.display = "flex";

    document.querySelector("html").style.overflow = "hidden";
})

document.getElementById("btnClose").addEventListener("click", function()
{
    let containerMobilemenu = document.getElementById("contMM");
    let bgMobilemenu = document.getElementById("bgMM");
    
    containerMobilemenu.style.display = "none";
    bgMobilemenu.style.display = "none";

    document.querySelector("html").style.overflow = "auto";
})
    



