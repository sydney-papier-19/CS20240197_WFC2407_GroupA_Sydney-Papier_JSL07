document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage') ;
      const courseNameInput = document.getElementById('courseName') ; 
      
      //'toUpperCase()' converts the input values of studentName and courseName to uppercase  
      const studentName = studentNameInput.value.toUpperCase();
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value.toUpperCase() : "a course"; // Fallback to "a course" if no input
      
      //if the input values for student and course name are empty send an
      // alert message 
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      //
      certificateContent.innerHTML = `
      <h2> Certificate of Achievement </h2>
      <p> This is to certify that</p>
      <h3>${studentName}</h3> 
      <p> has almost completed the course
      <h3>${courseName} </h3>
      <p>with legendary perseverance, tears and world-class bad-assery!🏆🔥</p>
      <img src="./logo.png" alt="Logo" style="width: 300px; height: auto; margin-bottom: 10px; padding: 20px;" >
      <p>${personalMessage}</p>
    `;
    
      //  Display the modal
      //the moadal becomes visible by changing the display style from
      //'none' to 'block'
      modal.style.display = 'block';
  
      // Clears the form inputs once the form is submitted
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      //this hides the modal when clicked on
      modal.style.display = 'none';
    });
  });
  