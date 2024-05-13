import MentorModel from "../modules/mentor.js";
import StudentModel from "../modules/student.js";

//Each student is assigned with Mentor

const assignMultyStudent = async (req, res) => {
  try {
    const mentor_id = await MentorModel.findOne({ _id: req.params.id });
    console.log(mentor_id);
    const students = await StudentModel.find({ batch: req.params.batch });
    console.log(students);
    if (!mentor_id) {
      res.send({
        message: "Mentor id is not valid",
      });
    } else if (mentor_id) {
      const student_ids = students.map((e) => e._id.valueOf());
      console.log(student_ids);
      await StudentModel.updateMany(
        { batch: req.params.batch },
         { mentor: mentor_id }
      );
      // let filter={_id:req.params.mentor_id};
      // let update={students:student_id};
      await MentorModel.updateOne(
        { _id: mentor_id.id },{ students:student_ids } 
      );
      res.status(200).send({ message: "Students add Successfully" });
    }
  } catch (error) {
    res.status(500).send({
      message: "Internal Servor Error",
      error,
    });
  }
};

export default { assignMultyStudent };
