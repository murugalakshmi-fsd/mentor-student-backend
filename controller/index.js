const homePage=(req,res)=>{
    res.status(200).send(`<h1> Student Mentor Management</h1>
    <h2>Mentor</h2>

    <ul>
    <li>GET All Mentors = api/mentors</li>
    <li>POST Add New Mentor = api/mentors</li>
    <li>DELETE Delete Mentor = api/mentors/:id</li>
    <li>GET Mentor Student List = api/mentors/students/:mentor_id</li>
    <li>PUT Edit Mentor = api/mentors</li>
    <li> GET Get One Mentor=api/mentors/:id</li>
    </ul>
    
    <h2>Student</h2>
    
    <ul>
    <li>GET All Student = api/student</li>
    <li>POST Add New Student = api/student</li>
    <li>DELETE Delete Student = api/student/:id</li>
    <li>GET Get One Student = api/student/:id</li>
    <li>PUT Edit Student = api/student/:id</li>
    </ul>
    
    <h2>Assign</h2>
    
    <ul>
    <li>POST Assign multy Student = api/assign/student/:batch/mentor/:mentor_id</li>
    </ul>
    `
  )
}

export default {homePage}