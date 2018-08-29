console.log("JavaScript is loaded");

// Code here:

$('#formSubmit').on('click', () => {
    console.log("Button clicked!");

    $('#formSubmit').toggleClass('btn-primary');
});

$('#form').on('blur', () => {
    console.log("ON BLUR");
});