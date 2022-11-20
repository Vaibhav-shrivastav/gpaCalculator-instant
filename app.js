
// document.getElementById('gpa').addEventListener('click', (e)=>{
    console.log('hello');
    // document.getElementById('info-head').innerHTML = 'GPA Calculator'
    // document.getElementById('gpa').style.backgroundColor= 'black';
    // document.getElementById('gpa').style.color= 'white';
    // document.getElementById('cgpa').style.backgroundColor= 'white';
    // document.getElementById('cgpa').style.color= 'black';
    
    // document.getElementById('display-gpa').style.display='block';
    // document.getElementById('display-cgpa').style.display='none';
    document.getElementById('val').addEventListener('keyup',function(){
        console.log('hi');
        var str = ``;
        var val = document.getElementById('val').value ;
    
    for(var i = 1;i<=val;i++){
        str+=`
        <span>Course `+i+`</span>
        <select class="p-1 rounded" name="" id="Grade`+i+`">
        <option value="Grade">Grade</option>
        <option value="10">S</option>
        <option value="9">A</option>
        <option value="8">B</option>
        <option value="7">C</option>
        <option value="6">D</option>
        <option value="5">E</option>
        <option value="0">F</option>
        <option value="0">N</option>
        </select>
        <select class="p-1 rounded" name="" id="Credit`+i+`">
                <option value="">Credits</option>
                <option value="1">1</option>
                <option value="1.5">1.5</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select><br><br>
        `;
    }
    str+= `    
    <button id="button" class="btn btn-primary">Calculate</button>
    <p id="alert" class="btn btn-danger">Please enter all values correctly</p>
    <hr id="scro">
    <h5>RESULT</h5><br>
    <span class="p-4 rounded-circle bg-success bg-gradient text-white" id="res"></span>
    `;
    
    
    document.getElementById('first').innerHTML = str;
    
    document.getElementById('button').addEventListener('click', calculateResult);
    
    
    function calculateResult(e){
        document.getElementById('first').scrollIntoView({behavior: 'smooth'});
        console.log('hi');
        var sum = 0;
        var cre = 1;
    
        for(var i = 1;i<=val;i++){
    
            var val1 =parseInt(document.getElementById('Grade'+i).value) ;
            var val2 =parseInt(document.getElementById('Credit'+i).value) ;
            sum+= parseFloat(val1*val2);
            cre+= parseFloat(val2);
    
        }
        let result = sum/cre;
        
        
        
        
        // let suc = document.getElementById('res').value;
    
        // let result = ((val1*val3) +(val2*val4))/(val3 +val4);
    
        if(isNaN(result)){
            document.getElementById('alert').style.display = 'block';
            setTimeout(()=>{
                document.getElementById('alert').style.display = 'none';
            },2000);
            

        }else{
            
            document.getElementById('alert').style.display = 'none';

            document.getElementById('res').innerHTML = result.toFixed(1) ;
        }
        
        
        e.preventDefault();
    
    }
    });
    e.preventDefault();
// })

// document.getElementById('cgpa').addEventListener('click', (e)=>{
//     document.getElementById('display-gpa').style.display = 'none';
//     document.getElementById('gpa').style.backgroundColor = 'white';
//     document.getElementById('gpa').style.color= 'black';
//     document.getElementById('info-head').innerHTML = 'CGPA Calculator'
//     document.getElementById('cgpa').style.backgroundColor= 'black';
//     document.getElementById('cgpa').style.color= 'white';
//     // document.getElementById('cgpa').style.backgroundImage = 'linear-gradient(to right, greenyellow , yellow)';
//     // document.getElementById('gpa').style.backgroundImage = 'linear-gradient(to right, white, white)';
//     console.log('hi');
//     document.getElementById('display-cgpa').style.display='block';
//     // document.getElementById('valc').addEventListener('keyup',function(){
//     //     var str = ``;
//     //     var val = document.getElementById('valc').value ;
    
//     // for(var i = 1;i<=val;i++){
//     //     str+=`
//     //     <span>Semester `+i+`</span>
//     //     <select name="" id="Grade`+i+`">
//     //     <option value="Grade">Grade</option>
//     //     <option value="10">S</option>
//     //     <option value="9">A</option>
//     //     <option value="8">B</option>
//     //     <option value="7">C</option>
//     //     <option value="6">D</option>
//     //     <option value="5">E</option>
//     //     <option value="0">F</option>
//     //     <option value="0">N</option>
//     //     </select>
//     //     <select name="" id="Credit`+i+`">
//     //             <option value="">Credits</option>
//     //             <option value="1">1</option>
//     //             <option value="1.5">1.5</option>
//     //             <option value="2">2</option>
//     //             <option value="3">3</option>
//     //             <option value="4">4</option>
//     //             <option value="5">5</option>
//     //         </select><br>
//     //     `;
//     // }
//     // str+= `    
//     // <button id="button">Calculate</button>
//     // <p id="alert" class="btn btn-danger">Please enter all values correctly</p>
//     // <hr>
//     // <h5>RESULT</h5>
//     // <span id="res"></span>`;
//     // })
    
//     // document.getElementById('firstc').innerHTML = str;

//     document.getElementById('valc').addEventListener('keyup',function(){
//         var str = ``;
//         var val = document.getElementById('valc').value ;
    
//     for(var i = 1;i<=val;i++){
//         str+=`
//         <span>Semester `+i+`</span>
//         <input class="w-25 rounded p-1" id="val-gpa" placeholder="GPA" type="number">
//         <input class="w-25 rounded p-1" id="val-cred" placeholder="Credits" type="number">
//         <br><br>
//         `;
//     }
//     str+= `    
//     <button id="button" class="btn btn-primary">Calculate</button>
//     <p id="alert" class="btn btn-danger">Please enter all values correctly</p>
//     <hr>
//     <h5>RESULT</h5><br>
//     <span class="p-4 rounded-circle bg-success bg-gradient text-white" id="res"></span>
//     `;
    
    
//     document.getElementById('firstc').innerHTML = str;
    
//     document.getElementById('button').addEventListener('click', calculateResult);
    
//     function calculateResult(e){
//         console.log('hi');
//         var sum = 0;
//         var cre = 1;
    
//         for(var i = 1;i<=val;i++){
    
//             var val1 =parseInt(document.getElementById('val-gpa'+i).value) ;
//             var val2 =parseInt(document.getElementById('val-cred'+i).value) ;
//             sum+= parseFloat(val1*val2);
//             cre+= parseFloat(val2);
    
//         }
//         let result = sum/cre;
        
        
        
        
//         // let suc = document.getElementById('res').value;
    
//         // let result = ((val1*val3) +(val2*val4))/(val3 +val4);
    
//         if(isNaN(result)){
//             document.getElementById('alert').style.display = 'block';
//             setTimeout(()=>{
//                 document.getElementById('alert').style.display = 'none';
//             },2000);
            

//         }else{
            
//             document.getElementById('alert').style.display = 'none';

//             document.getElementById('res').innerHTML = result.toFixed(1) ;
//         }
        
        
//         e.preventDefault();
    
//     }
//     });

//     e.preventDefault();
// })
