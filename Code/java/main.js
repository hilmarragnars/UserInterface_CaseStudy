
$(document).ready(function() {
	// Initialize calender (Jquery plug-in)
	$('#datepicker').datepicker();
	$('#datepicker').on("changeDate", function() {
		$('#my_hidden_input').val(
			$('#datepicker').datepicker('getFormattedDate')
		);
	});
	// When pushing the search button you are redirected to your result
	$("#searchBotton").click(function() {
		location.href = "./Search.html";
	});
});

/* Contact info */
function Contact() {
	document.getElementById("info").style.visibility="visible";
}