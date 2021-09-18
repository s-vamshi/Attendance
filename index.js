const result = document.getElementById('result');
const presentList = [];
const btn = document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
        if(item.classList.contains("btn-danger")){
            item.classList.remove("btn-danger");
            item.classList.add("btn-success");
            presentList.push(item.innerHTML);
            
        }
        else{
            presentList.pop(item.innerHTML);
            item.classList.remove("btn-success");
            item.classList.add("btn-danger");
        }
        presentList.sort();
        result.innerText=presentList;
        // location.href='#result';
    })
})
result.addEventListener('click', event =>{
    console.log(this);
    result.select();
    document.execCommand('copy');
    alert("COPIED!");
});
