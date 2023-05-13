const toggleBtn = document.querySelector('.toggle_section')
const settingbtn = document.getElementById('toggle-btn')
const darkBtn= document.querySelector('.darkBtn')
const insidebtn= document.querySelector('.insidebtn')
 
 
settingbtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active');
    
})

const icontoggle=()=>{
    insidebtn.classList.toggle('on')
}
