$(document).ready(function(){
  $('form#userAnswers').submit(function(event){
    var law = $("input:radio[name=law]:checked").val();
    var drugs = $("input:radio[name=drugs]:checked").val();
    var media = $("input:radio[name=media]:checked").val();
    var id = $("input:radio[name=id]:checked").val();

    if(law === "lawYes" && drugs === "drugsYes" && media === "mediaYes" && id === "idYes"){
      $('.answer').text("you're a liberal");
    }else{
      $('.answer').text("you're a conservative");
    }
    event.preventDefault();
  })
})
