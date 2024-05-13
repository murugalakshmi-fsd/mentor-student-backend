import StudentModel from "../modules/student.js";
import dotenv from 'dotenv';
dotenv.config();

const getAllStudent = async(req,res)=>{
    try{
    const student = await StudentModel.find();
    res.status(200).send({
        message:"Students Data Fetched Successfully",
        student,
    })
    }catch(error){
      res.status(500).send({
        message:"Internal Servor Error",
      });
    }
};

const getOneStudent=async(req,res)=>{
    try{
       const student = await StudentModel.findOne({_id:req.params.id});
       if(student){
        res.status(200).send({
            message:"Fetched Successfully",
            student
        });
       }
    }catch(error){
        res.status(500).send({
            message:"Internal Servor Error",
          });
    }
};

//Add a New Student

const addStudent = async (req,res)=>{
    try{
       const student = await StudentModel.findOne({email:req.body.email});
       if(!student){
        let newstudent = await StudentModel.create(req.body);
        res.status(200).send({
            message:"Student Added Successfully",
        });
       }else{
        res.status(400).send({
            message:`student with '${req.body.email}' already exists`
        })
       }
    }catch(error){
        res.status(500).send({
            message:"Internal Servor Error",
          });
    }
};

//Delete a student
const deleteStudent = async(req,res) => {
    try{
      const student = await StudentModel.findById({_id:req.params.id});
      if(student){
        await StudentModel.deleteOne({_id:req.params.id})
        res.status(200).send({
            message:"User Deleted Successfully"
        });
      }else{
        res.status(400).send({
            message:"Invalid User Id"
        });
      }
    }catch(error){
        res.status(500).send({
            message:"Internal Servor Error",
          });
    }
}

//Update a student
const editStudent = async(req,res) => {
    try{
      const student = await StudentModel.findById({_id:req.params.id});
      if(student){
        const updateStudent = await StudentModel.updateOne({_id:req.params.id},{$set:req.body});
        res.status(200).send({
            message:"User Edit Successfully",
        });
      }else{
        res.status(400).send({
            message:"Invalid User Id"
        });
      }
    }catch(error){
        res.status(500).send({
            message:"Internal Servor Error",
          });
    }
}

export default {
    getAllStudent,
    getOneStudent,
    addStudent,
    deleteStudent,
    editStudent
};

