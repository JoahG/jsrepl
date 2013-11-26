// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

console.log = function(m) {
	$("#output").append("<span class='line'>"+m+"</span>")
}

$(document).ready(function() {
	sizeBoxes = function() {
		$("#codebit_code, #output").height($(window).height()-55)
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

	$(document).delegate('#codebit_code', 'keydown', function(e) {
		var keyCode = e.keyCode || e.which;
		if (keyCode == 9) {
			e.preventDefault();
			var start = $(this).get(0).selectionStart;
			var end = $(this).get(0).selectionEnd;
			$(this).val($(this).val().substring(0, start) + "\t" + $(this).val().substring(end));
			$(this).get(0).selectionStart =
			$(this).get(0).selectionEnd = start + 1;
		}
	});

	$(window).resize(sizeBoxes())
});