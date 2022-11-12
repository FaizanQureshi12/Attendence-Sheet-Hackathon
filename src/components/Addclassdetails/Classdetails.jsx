
function Classdetails(){
    return(
        <div>
            ● Admin can add class details with following details (CRUD): <br />
o Class timings&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <select name="" id="">
    <option value="">9am t0 11am</option>
    <option value="">11am to 1pm</option>
    <option value="">2pm to 4pm</option>
 </select> <br />
o Schedule of classes &nbsp;&nbsp;&nbsp;
<select name="" id="">
    <option value="">TTS</option>
    <option value="">MWF</option>
    <option value="">SS</option>
 </select> <br />
o Teacher’s name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select name="" id="">
    <option value="">Sir Inzimam</option>
    <option value="">Sir Haider</option>
    <option value="">Sir Ghous</option>
    <option value="">Sir Kashif</option>
 </select> <br />
o Section name.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select name="" id="">
    <option value="">Morning</option>
    <option value="">Evening</option>
 </select> <br />
o Course Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select name="" id="">
    <option value="">Web & Mobile</option>
    <option value="">Graphic Designing</option>
    <option value="">Chatbot</option>
 </select> <br />
o Batch Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<select name="" id="">
    <option value="">Batch 06</option>
    <option value="">Batch 07</option>
    <option value="">Batch 08</option>
 </select> <br /><br />

 ● Admin can add the following details of students(CRUD): <br/>
o Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="" id="" /><br />
o Father Name &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
<input type="text" name="" id="" /><br />
o Roll Number&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <input type="text" name="" id="" /><br />
o Contact Number &nbsp;&nbsp; 
<input type="text" name="" id="" /><br />
o CNIC number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
 <input type="text" name="" id="" /><br />
o Picture. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
&nbsp;&nbsp;&nbsp;&nbsp;<input type="file" name="" id="" /><br />
o Course Name &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
<input type="text" name="" id="" /><br />
o Admin will assign a class to every student.
        </div>
    )
}
export default Classdetails;