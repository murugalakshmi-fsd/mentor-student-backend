import mongoose from './index.js';

const validateEmail=(email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const  studentSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, "Name is required"],
        },
        email:{
            type:String,
            required:[true, 'Email is required'],
            validate:{
                validator:validateEmail,
                message:(props)=>`${props.value} is not a valid email!`,
            },
        },
        mentor:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"mentor",
        },
        batch:{
            type:String,
            required:[true,"Batch is required"],
        },
        previous_mentor:[
            {
              type:mongoose.Schema.Types.ObjectId,
              ref:"mentor"
            }
          ],
    },
    {
        collection:"student",
        versionKey:false,
    }
);

const StudentModel = mongoose.model("student", studentSchema);

export default StudentModel;