document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let subject = document.getElementById("subject").value;
    let teacher = document.getElementById("teacher").value;

    let syllabus = document.getElementById("syllabus").value;
    let doubt = document.getElementById("doubt").value;
    let audible = document.getElementById("audible").value;
    let english = document.getElementById("english").value;

    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <h3>Feedback Submitted</h3>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Teacher:</b> ${teacher}</p>
        <p><b>Syllabus:</b> ${syllabus}</p>
        <p><b>Doubt Solving:</b> ${doubt}</p>
        <p><b>Audible:</b> ${audible}</p>
        <p><b>English:</b> ${english}</p>
    `;
});
document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let subject = document.getElementById("subject").value;
    let teacher = document.getElementById("teacher").value;

    let syllabus = document.getElementById("syllabus").value;
    let doubt = document.getElementById("doubt").value;
    let audible = document.getElementById("audible").value;
    let english = document.getElementById("english").value;

    let resultDiv = document.getElementById("result");

    resultDiv.innerHTML = `
        <h3>Feedback Submitted</h3>
        <p><b>Subject:</b> ${subject}</p>
        <p><b>Teacher:</b> ${teacher}</p>
        <p><b>Syllabus:</b> ${syllabus}</p>
        <p><b>Doubt Solving:</b> ${doubt}</p>
        <p><b>Audible:</b> ${audible}</p>
        <p><b>English:</b> ${english}</p>
    `;
});
