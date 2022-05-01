
class Teacher {
    constructor(name, subject) { 
            this.name = name;
            this.subject = subject;
    }
    
    describe() {
        return `${this.name} will teach ${this.subject} .`;
        }
    }
     
   
    class Schedule {
        constructor(shift) {
            this.shift = shift;
            this.teachers = [];
        }
     
        
        addTeacher(teacher){
            if(teacher instanceof Teacher) { 
                this.teachers.push(teacher);
            } else { 
                throw new Error(` You can only add an instance of teacher. This is not an teacher: ${teacher}`);
            }
        }
        
        describe() {
            return `${this.shift} has a ${this.teachers.length} of teachers.`;
        }
    }
     
  
    class Menu {
        constructor() {
            this.shifts = []; 
            this.selectedShift = null; 
                                        
        }
     
        start(){
            let selection = this.showMainMenuOptions(); 
           
            while (selection != 0) { 
              switch(selection){ 
                case '1':
                    this.displayShifts(); 
                    break;
                case '2':
                    this.createShift(); 
                    break;
                case '3':
                    this.viewShift(); 
                    break;
                case '4':
                    this.deleteShift(); 
                    break;
                default:                
                    selection = 0
              }          
              selection = this.showMainMenuOptions();
            }
     
            alert('Goodbye'); 
        }
       
        showMainMenuOptions() {
            return prompt(`
            0) Exit
            1) Display All Shifts
            2) Create Shift
            3) View Shift
            4) Delete Shift
            `);
        }
     
        
        showShiftMenuOptions(shiftInfo) {
            return prompt(`
            0) Back
            1) Add Teacher
            2) Delete Teacher
            ---------------------------
            ${shiftInfo}
            `);
        }
     
        
        displayShifts() {
            let shiftString = '';
     
            for (let i = 0; i < this.shifts.length; i++) { 
               shiftString += i + ') ' + this.shifts[i].shift + '\n';  
            }
            alert(shiftString); 
        }
     

        createShift() {
            let shift = prompt('Make a new shift for today'); 
            this.shifts.push(new Schedule(shift)); 
        }
     
    
        viewShift() {
            let index = prompt('Enter the index of the shift you want to view:') 
            if (index > -1 && index < this.shifts.length) { 
                this.selectedShift = this.shifts[index]; 
                let description = 'Shift assignment: ' + this.selectedShift.shift + '\n';
                
             
                for (let i = 0; i < this.selectedShift.teachers.length; i++) { 
                  description += i + ') ' + this.selectedShift.teacherss[i].name 
                   + ' - ' + this.selectedShift.teachers[i].subject + '\n';           
                   
                }
     

                let selection = this.showShiftMenuOptions(description);
                switch (selection) {
                    case '1':
                        this.createTeacher();
                        break;
                    case '2':
                        this.deleteTeacher();
                      
                }
            }
        }
        
    
        deleteShift() {
            let index = prompt('Enter the index of the shift you wish to delete: ');
            if (index > -1 && index < this.shifts.length) {
                this.shifts.splice(index, 1);
            }
        }

        
        createTeacher() {
            let name = prompt('Enter name of Teacher: ');
            let subject = prompt('Enter the subject the teacher will be teaching: ')
            this.selectedShift.teachers.push(new Teacher(name, subject));
        }

        
        deleteTeacher() {
            let index = prompt('Enter the index of the teacher you wish to delete: ');
            if (index > -1 && index < this.selectedShift.employees.length) { 
                this.selectedShift.teachers.splice(index, 1);
            }
        }
    }
     
     
    
    let menu = new Menu();
    menu.start();