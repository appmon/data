function updateSetMenu(setMenuNo, loginId){
    $('input:checkbox[name="setMenuId"]').each(function() {
         this.checked = false;
    });

    if(setMenuNo == '-1'){
        $('input:checkbox[name="setMenuId"]').each(function() {
            this.checked = true;
        });
    }else{
        var setMenuSplit = setMenuNo.split(",");
        $('input:checkbox[name="setMenuId"]').each(function() {
            for(var i=0; i<setMenuSplit.length; i++){
                if($(this).val() == setMenuSplit[i]){
                    this.checked = true;
                }
            }
        });
    }

    $('#logiId').text(loginId);
}

function cancelSetMenu(){
    $('input:checkbox[name="setMenuId"]').each(function() {
         this.checked = false;
    });

    $('#logiId').text("사용중인 메뉴");
}

function updateUserSetMenu(){
    var setNewMenuNo = '';
    $('input:checkbox[name="setMenuId"]:checked').each(function() {
        setNewMenuNo += $(this).val() + ',';
    });

    var url = "/settings/updateUserSetMenu";
    var param = {
        loginId : $('#logiId').text(),
        setNewMenuNo : setNewMenuNo.substring(0, setNewMenuNo.lastIndexOf(","))
    };

    $.ajax({
        url : url,
        data : param,
        type : 'POST',
        success : function(data) {
            alert("수정이 완료되었습니다.");

            $('#datatable-user').empty().html(data);
        },
        error : function(x, e) {
            alert(e);
        }
    });
}


function cancelMenu(){
    $('input:checkbox[name="addMenuId"]').each(function() {
         this.checked = false;
    });

    $('#sort').val('');
    $('#menuNm').val('');
    $('#menuComment').val('');
    $('#menuGrp').val('');
    $('#menuUrl').val('');
    $('#menuId').val('');
}

function updateMenu(){
    var activeYn;
    if($('input:checkbox[name="addMenuId"]').is(":checked") ==  true){
        activeYn = 'Y';
    }else{
        activeYn = 'N';
    }

    var menuId = $('#menuId').val();
    if(typeof menuId == "undefined" ){
        menuId = "0";
    }

    var url = "/settings/updateMenu";
    var param = {
        sort : $('#sort').val(),
        menuNm : $('#menuNm').val(),
        menuComment : $('#menuComment').val(),
        menuGrp : $('#menuGrp').val(),
        menuUrl : $('#menuUrl').val(),
        activeYn : activeYn,
        id : menuId
    };

    $.ajax({
        url : url,
        data : param,
        type : 'POST',
        success : function(data) {
            alert("입력/수정이 완료되었습니다.");
            cancelMenu();

            $('#datatable-menu').empty().html(data);
        },
        error : function(x, e) {
            alert(e);
        }
    });
}

function selectMenu(id, sort, menuNm, menuComment, menuGrp, url, activeYn){
	cancelMenu();

    $('#menuId').val(id);
	$('#sort').val(sort);
	$('#menuNm').val(menuNm);
	$('#menuComment').val(menuComment);
	$('#menuGrp').val(menuGrp);
	$('#menuUrl').val(url);

	if(activeYn == 'true'){
		$('input:checkbox[name="addMenuId"]').each(function() {
			 this.checked = true;
		});
	}else{
		$('input:checkbox[name="addMenuId"]').each(function() {
			 this.checked = false;
		});
	}
}

function deleteMenu(id){

    var result = confirm("삭제하시겠습니까?");

    if(result){
        var url = "/settings/deleteMenu";
        var param = {
            id : id
        };

        $.ajax({
            url : url,
            data : param,
            type : 'POST',
            dataType : 'json',
            success : function(data) {
                if(data.code == 'fail'){
                    alert("사용중인 메뉴라 삭제할수 없습니다.");
                }else{
                    alert("삭제가 완료되었습니다.");

                    selectMenuList();
                }
            },
            error : function(x, e) {
                alert(e);
            }
        });
    }else{
        return;
    }
}

function selectMenuList(){
    var url = "/settings/selectMenu";

    $.ajax({
        url : url,
        type : 'POST',
        success : function(data) {
            $('#datatable-menu').empty().html(data);
        },
        error : function(x, e) {
            alert(e);
        }
    });
}