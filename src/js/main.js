var currentstation=1;
var currentstationtext="";
var currentvolume=50;

function handleclick(id){





        currentstation = id;
        // $("#"+id).css({"background-color": "#CBCAE4", "opacity":".5"});

    $.getJSON("../cgi-bin/radio/mpcconnector.pl?button=" + currentstation  ,function(json){

            currentstationtext = json['station'];

            });
    currentstationtext="Hi There";
    $("#titlebox").html(currentstationtext);
}

function poll(){

    //
    //setTimeout(function(){
    //
    //    $.getJSON("../cgi-bin/radio/mpcconnector.pl?button=" + currentstation  ,function(json){
    //
    //    currentstationtext = json['station'];
    //        currentstationtext="testtest";
    //        $("#titlebox").html(currentstationtext);
    //
    //    });
    //},1000);
}
