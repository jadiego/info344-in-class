"use strict";

//TODO: implement a Task class
//for the task model, and export
//it from this module

class Task {
    constructor(props) {
        //copies every key and value in props
        //and copies it into 'this'
        Object.assign(this, props)
    }

    //Since we use object.assign we need to validate since we 
    // do not define any structs 
    validate() {
        if (!this.title) {
            return new Error("You must supply a title")
        }
    }
}

module.exports = Task;