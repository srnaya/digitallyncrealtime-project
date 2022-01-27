function captureData(){
    var data={
        q1:{
            answer:""
        },
        q2:{
            answer:""
        },
        q3:{
            answer:""
        }
    }
    var q1=document.getElementsByName("q1");
    console.log(q1);
    for(var i=0;i<q1.length;i++){
        var q1Option=q1[i];
        if(q1Option.checked){
            console.log(q1Option.value);
            data.q1.answer=q1Option.value;
        }
    }
    console.log(data);
}
