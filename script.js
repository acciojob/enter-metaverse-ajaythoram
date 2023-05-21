//your JS code here. If required.
const btn = document.getElementById("enterBtn");
const para = document.getElementById("status")
btn.addEventListener('click',()=>{
  const newheading = document.createElement('h1');
	newHeading.id = para.id;
  newheading.textContent = para.textContent;
  para.parentNode.replaceChild(newheading,para);
	 
})
