function taskCalendar(){
    let day = prompt("Enter a Day of the Week");
    switch(day.toLocaleLowerCase()){
        case 'monday':
            alert("finish your assignment.");
            break;
        case 'tuesday':
            alert("attend the team meeting.");
            break;
        case 'wednesday':
            alert("Work on the project presentation. ");
            break;
        case 'thursday':
            alert("Review the weekly progress."); 
            break;
        case 'friday':
            alert("Submit the project report.");  
            break;
        case 'saturday':
            alert("Prepare for the upcoming week.");
            break;
        case 'sunday':
            alert("spend time with family.") ;
            break;   
    }
}
