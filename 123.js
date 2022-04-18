function signup(){   
    var a=[]
    const login_signup=readline.question("enter your choice login or signup page :")
    if(login_signup==="signup"){
        const name1=readline.question("enter your name:-")
        var j=/[a-z]/g
        if(name1.match(j)){
            a.push(name1)
            const username=readline.question("enter your Email id :")
            var n6=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
            if(username.match(n6)){
                a.push(username)
                var b=readline.question("enter your password more than 5 digit only :")
                var b7=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/g;
                if(b.match(b7)){
                    console.log(b,"password re-check")
                    var Password=readline.question("enter your password in 6 digit only :")
                    if(Password===b){
                        console.log("password is correct")
                        a.push(Password)
                        const description=readline.question("enter the description :")
                        if(description){
                            a.push(description)
                            const date_of_birth=readline.question("enter your date of birth of birth:")
                            var a8=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/g
                            // var v="12/67/2001"
                            if(date_of_birth.match(a8)){
                                a.push(date_of_birth)
                                const hobby=readline.question("enter your hobby:")
                                if (hobby){
                                    a.push(hobby)
                                    const gender=readline.question("enter your gender M/F:")
                                    a.push(gender)
                                    const b1=["name","Email","Password","description","date_of_birth","hobby","gender"]
                                    var i=0
                                    var d1={}
                                    while (i<b1.length){
                                        d1[b1[i]]=a[i]
                                        i+=1
                                    }
                                    dic2=[]
                                    dic2.push(d1)
                                    var jsons = JSON.stringify(dic2,null,3);
                                    console.log(jsons)
                                    // var b = jsons.replace(/\\n/g, "\\n")
                                    fs.writeFileSync('file1.json',b) 
                                }
                            }
                            else{
                                console.log("invalid date of birth")
                            }
                        }
                        else{
                            console.log("your password is not correct please try again")
                        } 
                    }
                    else{
                        console.log(b,"it's not strong number")
                    }
            }            
            else{
                console.log("inavlid email id")
            }
        }
        else{
            console.log("its invalid name")
        }
        }     
    }
}
// function fun(name1){
    // d=fs.readFileSync('file1.json',"utf-8")
    // const data=JSON.parse(d)
    // for (var i in data){
        // for(var j in data[i]){
            // if(data[i][j]===name1){
                // var j8=data[i][j]
                // return true
            // }
        // }
    // }
    // return false
// }
const fs = require('fs');
const readline=require("readline-sync")
const path="file1.json";
var File_Exit=(fs.existsSync(path))
if (File_Exit==false){
    signup()
}
else{
    const login_signup=readline.question("enter your choice login or signup page :")
    if(login_signup==="signup"){
        var a=[]
        const name1=readline.question("enter your name:-")
        var j=/[a-z]/g
        if(name1.match(j)){
            d=fs.readFileSync('file1.json',"utf-8")
            const data=JSON.parse(d)
            for (var i in data){
                for(var j in data[i]){
                    if(data[i][j]===name1){
                        var j8=data[i][j]
                    }
                }
            }
            if (name1===j8){
                console.log("name is already exist you try again")
            }
            else{
                a.push(name1)
                const username=readline.question("enter your Email id :")
                var n6=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g
                if(username.match(n6)){
                    a.push(username)
                    d4=fs.readFileSync("file1.json","utf-8");
                    const d99=JSON.parse(d4)
                    var b=readline.question("enter your password more than 5 digit only :")
                    var b7=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/g;
                    if(b.match(b7)){
                        console.log(b,"password re-check")
                        var Password=readline.question("enter your password in 6 digit only :")
                        if(Password===b){
                            console.log("password is correct")
                            a.push(Password)
                            const description=readline.question("enter the description :")
                            if(description){
                                a.push(description)
                                const date_of_birth=readline.question("enter your date of birth of birth:")
                                var a8=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/g
                                var v="12/67/2001"
                                if(date_of_birth.match(a8)){
                                    a.push(date_of_birth)
                                    const hobby=readline.question("enter your hobby:")
                                    if (hobby){
                                        a.push(hobby)
                                        const gender=readline.question("enter your gender M/F:")
                                        a.push(gender)
                                        const b1=["name","Email","Password","description","date_of_birth","hobby","gender"]
                                        var i=0
                                        var d1={}
                                        while (i<b1.length){
                                            d1[b1[i]]=a[i]
                                            i+=1
                                        }
                                        data.push(d1)
                                        var jsons = JSON.stringify(data,null,3);
                                        var b = jsons.replace(/\\n/g, "\\n")
                                        fs.writeFileSync('file1.json',b) 
                                    }
                                }
                                else{
                                    console.log("invalid date of birth")
                                }
                            }
                            else{
                                console.log("your password is not correct please try again")
                            } 
                        }
                        else{
                            console.log(b,"it's not strong number")
                        }
                    }

                }            
                else{
                    console.log("inavlid email id")
                }
            }
        }
    }
    else{
        name2=readline.question("enter user name")
        password1=readline.question("enter password")
        d=fs.readFileSync('file1.json',"utf-8")
        const data=JSON.parse(d)
        for(var i in data){
            for(var j in data[i]){
                if(data[i][j]===(name2,password1)){
                    console.log(data[i])
                }
            }
        }
    }   
}        
     
                
            
       
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
             

    


    
    
