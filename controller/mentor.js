import MentorModel from '../modules/mentor.js';
import StudentModel from '../modules/student.js';
import dotenv from 'dotenv';
dotenv.config();

const allMentor=async (req,res)=>{
    try{
       const mentor=await MentorModel.find();
       res.status(200).send({
        message:"Mentors Data Fetched Successfully",
        mentor,
       });
    } catch (error) {
       res.status(500).send({
        message:"Internal Servor Error",
        error
       });
    }
};

//Add a New Mentor
const addMentor = async (req,res) =>{
    try{
       const user = await MentorModel.findOne({email:req.body.email});

       if(!user){
        let newMentor = await MentorModel.create(req.body);
        res.status(200).send({
            message:"Mentor Added Successfully",
        });
    } else {
        res.status(400).send({
            message:`Mentor with '${req.body.email}' already is exists`,
        });
    }
    } catch (error) {
       res.status(500).send({
        message:"Internal Servor Error",
        error:error.message,
       })
    }
};

//Delete a Mentor
const deleteMentor = async (req,res)=>{
    try{
       const user=await MentorModel.findOne({_id:req.params.id});
       if(user){
        await MentorModel.deleteOne({_id:req.params.id});
        res.status(200).send({
            message:"Mentor Deleted Successfully",
        });
    } else {
        res.status(400).send({
            message:"Invalid Mentor Id",
        });
    }
    }catch(error){
      res.status(500).send({
        message:"Internal Servor Error",
        error:error.message,
      });
    }
};

//Write API to show all students for a particular mentor

const mentorStudentList=async(req,res)=>{
    try{
      const mentor= await MentorModel.findOne({_id:req.params.id} );
      const students= await StudentModel.find({mentor:{$all:[mentor._id]}});
    if (mentor) {
        // console.log(students);
        res.status(200).send({
            message:"Fetched Students List Successfully",
            mentor,
            students,

        });
    }else{
        res.status(400).send({
            message:"Mentor Id Not Valid",
        });
    }
    }catch(error){
        res.status(500).send({
            message:"Internal Servor Error",
            error:error.message,
          });
    }
};

const addBatch = async (req,res) =>{
    try{
      const id = req.params.id;
      const batch=req.params.batch;
      const findBatch = await MentorModel.find({batch:{$all:[batch]}})
      console.log(findBatch);
      if(findBatch.length<0){
        res.status(400).send({
            message:`Batch with ${batch} already exists`
        })
    } else {
        await MentorModel.updateOne({_id:id}, {$push: {batch:batch}})
        res.status(200).send({
            message:"Updated",
        });
    }
    
    }catch(error){
       res.status(500).send({
        message:'Internal Servor Error',
        error
       });
    }
};

const editMentor= async (req,res)=>{
    try{
        let mentor = await MentorModel.find({_id:req.params.id});
        if(mentor){
            await MentorModel.updateOne({_id:req.params.id},{$set:req.body})
            res.status(200).send({
                message:"update mentor"
            })
        }else{
            res.status(400).send({
                message:"Invalid mento id"
            })
        }
    }catch(error){
        res.status(500).send({
            message:"Internal servor Error",
        });

    }
}

const getOneMentor = async (req,res)=>{
    try{
      const mentors = MentorModel.findOne({_id:req.params.id});
      if(mentors){
        const mentor = await MentorModel.findOne({_id:req.params.id});
        res.status(200).send({
            message:"Mentor data fetched Successfully",
            mentor
        });
      }else{
        res.status(400).send({
            message:"Invalid Mentor Id",
        });
      }
    }catch(error){
        res.status(500).send({
            message:"Internal servor Error",
            error
        });
    }
};

export default {
    allMentor,
    addMentor,
    deleteMentor,
    mentorStudentList,
    addBatch,
    editMentor,
    getOneMentor
};