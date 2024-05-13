import mongoose from "./index.js";

const validateEmail = (email) =>{
    return String(email)
    .toLocaleLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const mentorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is require'],
    },
    email:{
        type:String,
        required:[true,'Email is require'],
        validate:{
            validator:validateEmail,
            message: props => `${props.value} is not a valid email!`
        } 
    },
    students:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'student',
        },
    ],
    batch:[
        {type:String}
    ]
},
{
    collection:"mentor",
    versionKey:false,
}
)

const MentorModel = mongoose.model('mentor', mentorSchema);

export default MentorModel