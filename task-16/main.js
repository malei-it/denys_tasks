function userSalary() {
    var salary = {
        andy: 3500,
        tom: 2700,
        ban: 2000,
    };
 
    return salary;
}
function raise (a) {
    a.andy +=200;
    a.ban+=700;    
    
    console.log(a);
}
raise(userSalary());