const accountId = 14453
let accountEmail = "devaraj@gamil.com"
var accuntPassword = 12345
accountCity = "Ron"

// accountId = 2   //Modifying the value of const variable not allowed
console.log(accountId);

accountEmail = "hello@gmain.com"   //allowed
accuntPassword = 3473645
accountCity = "Hubballi"

/*
prefer not to use var because of issue in block scope and functional scope

*/
let accountState;

console.table([accountId, accountEmail, accuntPassword, accountCity, accountState])
