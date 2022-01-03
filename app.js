var student = {
name : "Marjan",
fatherName : "Abdul Rehman",
age : "17",
subject : "Commerce",
Result : "Pass"
};
// console.log(student)

var student2 = {
    name : "Akbar",
    fatherName : "Asif",
    age : "19",
    subject : "Commerce",
    Result : "Fail"
    };
    // console.log(student2)
    
    var student3 = {
        name : "Ajmal",
        fatherName : "Ali",
        age : "16",
        subject : "Commerce",
        Result : "Pass"
        };
        // console.log(student3)
        
        
    var student4 = {
        name : "Zaid",
        fatherName : "Irfan",
        age : "18",
        subject : "Commerce",
        Result : "Fail"
        };
        // console.log(student4)
        
        
    var student5 = {
        name : "Ali",
        fatherName : "Ashraf",
        age : "15",
        subject : "Commerce",
        Result : "Pass"
        };
        // console.log(student5)
        
        var starray = [student , student2 , student3 , student4 , student5]
console.log(starray);

        for (var i = 0; i < starray.length; i++) {
            starray[i].rollNumber = i + 1;
            console.log(starray[i]);
        }

        for (var i = 0; i < starray.length; i++){
            starray[i].rollNumber +
            starray[i].name
            starray[i].fatherName +
            starray[i].age +
            starray[i].subject +
            starray[i].result +
            "";
   }
    function searchResult() {
       var userRollNumber = document.getElementById("resultvalue").value;
       for (var i = 0; i < starray.length; i++) {
    if(userRollNumber == starray[i].rollNumber) {
        var showName = document.getElementById("namval");
        var showFatherName = document.getElementById("fnamval");
        var showAge = document.getElementById("ageval");
        var showSubject = document.getElementById("subval");
        var showResult = document.getElementById("resval");

var obj = starray[i];
console.log(obj);
showName.innerHTML = obj.name;
showFatherName.innerHTML = obj.fatherName;
showAge.innerHTML = obj.age;
showSubject.innerHTML = obj.subject;
showResult.innerHTML = obj.Result;
    }   
    }
    }