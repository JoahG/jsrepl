console.log = function(m) {
	$("#output").append("<span class='line'>"+m+"</span>")
}

$(document).ready(function() {
	sizeBoxes = function() {
		$("#codebit_code, #output").height($(window).height()-60)
	}

	sizeBoxes()

	$("#codebit_code").focus();

	$("#run").click(function(){
		if ($("#codebit_code").val().length > 0) {
			$(".removable").remove()
		}
		try {
			eval($("#codebit_code").val())
		} catch(err) {
			console.log(err)
		}
	});

	$("#save").click(function() {
		$("form").submit();
	})

	$("#codebit_code").keydown(function(e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode == 9) {
			e.preventDefault();
			var start = $(this).get(0).selectionStart;
			var end = $(this).get(0).selectionEnd;
			$(this).val($(this).val().substring(0, start) + "\t" + $(this).val().substring(end));
			$(this).get(0).selectionStart =
			$(this).get(0).selectionEnd = start + 1;
		}

		if (e.ctrlKey && keyCode == 13 || e.metaKey && keyCode == 13) {
			$("#run").click();
			e.preventDefault();
		}


		if (e.ctrlKey && keyCode == 83 || e.metaKey && keyCode == 83) {
			$("#save").click();
			e.preventDefault();
		}
	});

	$(window).resize(function(){sizeBoxes()})
});