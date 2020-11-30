
function quater (time) {
    if (time<=15){
        alert ('Первая четверть')
    }
    else if ((time<=30)&(time>15)){
        alert ('Вторая четверть')
    }
    else if ((time<=45)&(time>30)){
        alert ('Третья четверть')
    }
    else if ((time<=59)&(time>45)){
        alert ('Четвертая четверть')
    }
}
quater(47);