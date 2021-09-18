const result = document.getElementById('result');
const presentList = [];
let strength = document.getElementById('strength');
let len = presentList.length;
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
        len=presentList.length;
        result.innerText=presentList;
        strength.innerText='Total no. of students present:  '+len;
        // location.href='#result';
    })
})
result.addEventListener('click', event =>{
    result.select();
    document.execCommand('copy');
    alert("COPIED!");
});
