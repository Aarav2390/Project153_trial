AFRAME.registerComponent("diver-controls",{
    schema:{
        speedOfRotation:{type:"number",defualt:0},
        speedOfAscend:{type:"number",default:0}
    },
    init:function(){
        this.arrowControls()
    },
    arrowControls:function(){
        //pressing Arrow Up
        var isArrowUpDown = "false"
        var diverEl = document.querySelector("#diver")
        var pRotation = this.data.speedOfRotation
        window.addEventListener("keydown",(event)=>{
            if(event.key === "w"){
                console.log("Hello World")
                rotationX += 1
                diverEl.setAttribute("rotation",`${rotationX} 180 0`)
            }
        })
    },
})