document.querySelectorAll('.remove-button').forEach((el)=>{
    el.addEventListener('click',(e)=>{
        e.target.closest('div').hidden = true
    })
})