//Get student data from data.json file
const studentData=require('./data.json');

//Now take input to print report for specific student

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function ask(question) {
    return new Promise(resolve => rl.question(question, resolve));
  }


  

async function main(){
    const search=await ask('Roll Number');
    rl.close();
    for(let student of studentData){
        if(search == student.id) {
        
            const grade=(score)=>{
                if(score>=90){
                    return 'A+';
                }else if(score>=80){
                    return 'A';
                }
                else if(score>=70){
                    return 'B';
                }
                else if(score>=60){
                    return 'B-';
                }
                else if(score>=50 ){
                    return 'C+';
                }
                else if(score>=40 ){
                    return 'C-';
                }
                else{
                    return 'F';
                }
            }
            
            console.log(`--------------------Student Found--------------------------------------------------`);
            console.log(`NAME: ${student.name}        ROLL NO: ${student.roll_no}        ID: ${student.id}`);
            console.log(`-----------------------------------------------------------------------------------`);
            console.log(`SUBJECT               NUMBER                   GRADE`);
            console.log(`-----------------------------------------------------------------------------------`);
            console.log(`📚MATH                   ${student.math}                      ${grade(student.math)}`);
            console.log(`📚ENGLISH                ${student.english}                      ${grade(student.english)}`);
            console.log(`📚SCIENCE                ${student.science}                      ${grade(student.science)}`);
            console.log(`------------------------------------------------------------------------------------`);

            break;
            
        }else{
            console.log('Student Not Found!')
        }
        
    }
}

main();