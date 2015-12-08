
$(document).ready(function() {
	$('#datepicker').datepicker();
	$('#datepicker').on("changeDate", function() {
		$('#my_hidden_input').val(
			$('#datepicker').datepicker('getFormattedDate')
		);
	});
	$("#searchBotton").click(function() {
		location.href = "./Search.html";
	});
});



/* Contact info */
function Contact(){
	document.getElementById("info").style.visibility="visible";
}