import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import { Galactic } from './galactic';

$(document).ready(function() { 
  $('form').submit(function(event) {
    event.preventDefault();
    let birthday = $("#birthday").val();
    let gender = $("input[name='gender']:checked").val();
    let continent = $("#continent option:selected").val();
    let me = new Galactic(birthday, gender, continent);

    $("#result").show();
    $("#earthAge").text(me.age);
    $("#mercuryAge").text(me.mercuryAge());
    $("#venusAge").text(me.venusAge());
    $("#marsAge").text(me.marsAge());
    $("#jupiterAge").text(me.jupiterAge());
    $("#earthTimeLeft").text(Math.ceil(me.timeLeft));
    $("#mercuryTimeLeft").text(me.mercuryTimeLeft());
    $("#venusTimeLeft").text(Math.floor(me.venusTimeLeft()));
    $("#marsTimeLeft").text(Math.floor(me.marsTimeLeft()));
    $("#jupiterTimeLeft").text(Math.floor(me.jupiterTimeLeft()));
    $("#gender").text(me.gender);
    $("#continent").text(me.continent);
    });
});


