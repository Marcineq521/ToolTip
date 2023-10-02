const boxes=document.querySelectorAll('.boxes div');

const createToolTip=(e)=>{

    const ToolTipParent=e.target;
    const ToolTipText=e.target.dataset.tooltip;
    const ToolTipPosition=e.target.dataset.tooltipPosition;
    
    const newToolTip=document.createElement('span');
    newToolTip.innerHTML=ToolTipText;
    newToolTip.className=`tooltip ${ToolTipPosition || "top"}`; 

    ToolTipParent.appendChild(newToolTip);
 
};

const removeToolTip=(e)=>{
    const tooltip=e.target.querySelector(".tooltip");
    console.log(tooltip);

    if(tooltip){
        tooltip.remove();
    }
}


boxes.forEach(box=>box.addEventListener('mouseover',createToolTip));
boxes.forEach(box=>box.addEventListener('mouseleave',removeToolTip));