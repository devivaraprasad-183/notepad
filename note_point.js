let btn = document.querySelector('.btn')
let open = document.querySelector('.task_cointainer')
let user = document.querySelector('.user_data')


btn.addEventListener('click',function(){
    let task = document.createElement('div');
    task.classList.add('tasker');

    let li = document.createElement('li');
    li.innerText = user.value;


    task.appendChild(li);


    let cheakbtn = document.createElement('button');
    cheakbtn.innerHTML = '<i class="fa-solid fa-plus"></i>';
    cheakbtn.classList.add('cheaker');
    task.appendChild(cheakbtn);


    let deletebtn = document.createElement('button');
    deletebtn.innerHTML = '<i class = "fa-solid fa-trash-can"></i>';
    deletebtn.classList.add('deleter');
    task.appendChild(deletebtn);

    open.appendChild(task);

    li.style.textDecoration = "line-through";
    cheakbtn.addEventListener('click',function(){
        li.style.textDecoration = "none";
    });

    deletebtn.addEventListener('click',function(e){
        
        let target = e.target;
        target.parentElement.parentElement.remove();
    });
});











































































// btn.addEventListener('click',function(){
//     let task = document.createElement('div');
//     task.classList.add('task'); 


// let li = document.createElement('li')
// li.innerText= '${user.value}';


// task.appendChild(li);

// let cheakbtn = document.createElement("button");
// cheakbtn.innerText = '<i class = "fa-solid fa-plus"></li>'
// // cheakbtn.classList.add('cheak')
// });