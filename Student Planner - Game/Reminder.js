class Reminder {
    constructor(){
        this.reminderButton = createButton('Reminder');
        this.greeting = createElement('h4');
        this.reminder1 = createInput("Reminder 1");

    }

    display(){
        this.reminderButton.position(displayWidth/2 - 76, displayHeight/2 + 200);
        
        this.reminderButton.mousePressed(()=>{
            image(reminderImage, 0,-displayHeight*4,displayWidth, displayHeight*5);
            this.reminderButton.hide();

            toDoPage.show();
            toDoPage.hide();
            syllabusPage.show();
            breakPage.show();
            syllabusPage.hide();

            
            this.greeting.html("Enter any important dates below!");
            this.greeting.position(displayWidth/2 - 73, displayHeight/2 - 390);
            console.log("reminder class");

            this.reminder1.position(displayWidth/2 - 20, displayHeight/2 - 340);
            //this.reminderButton1.hide();
            reminderState = 1;
        });
        
    }

    hide(){
        //this.greeting.hide();
        //this.reminder1.hide();
        console.log("reminder page hide is working");

        this.greeting.hide();
        this.reminder1.hide();
    }

    show(){
        this.reminderButton.show();
        
    }

 

}