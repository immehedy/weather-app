$(document).ready(function(){

  $('#submitWeather').click(function(){

    var city = $("#city").val();
    var key='4de3768c62b67fe359758977a3efc069';

    if(city!= ''){
      $.ajax({

        url: 'http://api.openweathermap.org/data/2.5/weather?',
        type:'GET',
        dataType:'json',
        data:{q:city, appid:key, units: 'metric'},
        success: function(data){
          $("#city").val('');
          var wf='';
          $.each(data.weather, function(index, val){
            var temp=Math.round(data.main.temp);
            var temp_min=Math.round(data.main.temp_min);
            var temp_max=Math.round(data.main.temp_max);
            wf+='<h1 style="padding-down:30px; padding-right:20px;"> <b>' + data.name +"</b> <img src='http://openweathermap.org/img/wn/"+ data.weather[0].icon +".png'> </h1>"+
            "<b> Temperature: </b>"+ temp + '&deg;C <br>' +
            '<b> Weather: </b>' + val.main + '<br>'+
            '<b> Description: </b>'+ val.description +'<br>'+
            '<b> precipitation: </b>'+ data.main.precipitation +' mm <br>'+
            '<b> Wind Speed: </b>'+ data.wind.Speed +' m/s <br>'+
            "<b> Min Temperature: </b>"+ temp_min + '&deg;C <br>' +
            "<b> Max Temperature: </b>"+ temp_max + '&deg;C'

          });

          $("#show").html(wf);


        }
      });
    }
    else {
      $("#error").html(alert("The field is empty"));
    }
  });

});
