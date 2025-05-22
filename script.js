
let users = ["olma", "nok","uzum","gilos"];

alert(users)


let tasdiq = confirm("Array qoshmoqchimisz");


if (tasdiq) {
   
    users.push('kiwi');
    console.log(users);
    alert( users);
} else {
    users.pop(); 
    console.log(users);
    alert(users);
    
}