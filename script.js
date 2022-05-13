$("button").click(function(){
    let box1 = $(".box1").val();
     let box2 = $(".box2").val();
     let box3 = $(".box3").val();
    console.log(box1,box2,box3);
    let totalshoes =12*box3;
    $(".fortune-display").append("you will spend " +totalshoes);
});