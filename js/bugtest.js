$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});

		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});

$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});

$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});

$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});

$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});

$(document).ready(function() {
	dir = [4, 4];
	function HabboImager() {
		var hotel = $("#hotel").val();
		if ($("#usuario").val().length === 0) {
			var habbo = $("#usuario").attr("placeholder");
		} else {
			var habbo = $("#usuario").val();
		}
		if ($("#objeto").val().length === 0) {
			$("#bb").hide('slow');
			var action = $("#acao").val();
		} else if ($("input[name=bbcc]:checked").length === 1) {
			$("#bb").show();
			var action = $("#acao").val()+",drk="+$("#objeto").val();
		} else {
			$("#bb").show('slow');
			var action = $("#acao").val()+",crr="+$("#objeto").val();
		}
		if ($("input[name=cabeca]:checked").length === 0) {
			var head = 0;
		} else {
			var head = 1;
		}
		var gesture = $("#rosto").val();
    var formato = $("#formato").val();
		var size = $("input[name=tamanho]:checked").val();
		var url = "http://www.habbo."+hotel+"/habbo-imaging/avatarimage?&user="+habbo+"&action="+action+"&direction="+dir[0]+"&head_direction="+dir[1]+"&img_format="+formato+"&gesture="+gesture+"&headonly="+head+"&size="+size;
		$("#img").attr("src", url);
		$("#url_img").attr("value", url);
		$("#img_link").attr("href", url);
	}
	$("#usuario").keyup(HabboImager);
	$("#h_l").click(function() {
		if (dir[1] < 7) dir[1] = dir[1] + 1;
	});
	$("#h_r").click(function() {
		if (dir[1] > 0) dir[1] = dir[1] - 1;
	});
	$("#b_l").click(function() {
		if (dir[0] < 7) dir[0] = dir[0] + 1;
	});
	$("#b_r").click(function() {
		if (dir[0] > 0) dir[0] = dir[0] - 1;
	});
	$("#acao, #rosto, #objeto, #formato, #hotel").change(HabboImager);
	$("input[name=tamanho], #bbcc, #cabeca, #h_l, #h_r, #b_l, #b_r").click(HabboImager);
	$("#bb").hide();
	$("#url_img").mouseenter(function() {
	    this.focus();
	    this.select(); 
	}).mouseleave(function() {
		this.blur();
	});
});
