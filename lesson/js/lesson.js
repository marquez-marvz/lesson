$(document).ready(function() {
    Table_Student();
    LoadSection()

    var txtstudentno, txtfirstname, txtlastname, cbosection

    function LoadSection() {
        $('#cbosection option').remove();
        var sql = "select  * from tbsection"
        var section_list = GeneralCallAjax(sql, "GET_ALL_RECORD")
        $('#cbosection').append("<option selected='selected'>" + "Select Section" + "</option>")
        for (var x = 0; x < section_list.length; x++) {
            $('#cbosection').append("<option value=" + section_list[x]['SectionCode'] + ">" + section_list[x]['SectionName'] + "</option>")

        }
    }

    function Table_Individual(i) {



    }

    function Table_Student() {

        var sql = "select  * from tbmyquery"
        var student_list = GeneralCallAjax(sql, "GET_ALL_RECORD")


        var s = '<table class="table-hover"  id="table_student"  ">'
        $("#mytable").empty();
        for (var x = 0; x < student_list.length; x++) {
            var edit = '<button class="btnedit">Edit</button>'
            var del = '<button class="btndelete">Delete</button>'
            var view = '<button class="btnview">View</button>'
            s = s + '<tr>'
            s = s + '<td class="tabletd">' + student_list[x]['StudentID'] + '</td>'
            s = s + '<td class="tabletd">' + student_list[x]['FirstName']
            '</td>'
            s = s + '<td style="width:25%;text-align:center">' + student_list[x]['LastName'] + '</td>'
            s = s + '<td style="width:25%;text-align:center">' + student_list[x]['SectionName'] + '</td>'
            s = s + '<td style="width:25%;text-align:center">' + edit + '</td>'
            s = s + '<td style="width:25%;text-align:center">' + del + '</td>'
            s = s + '<td style="width:25%;text-align:center">' + view + '</td>'
            s = s + '</tr>'

        }
        $("#mytable").append(s);
    }



    function GeneralCallAjax(sql, operation) {
        var mymsg;
        console.log(sql)
        $.ajax({
            type: "POST",
            url: "php/operation.php",
            async: false,
            data: {
                sql: sql,
                operation: operation,
            },
            success: function(msg) {
                mymsg = msg;

            },
            dataType: 'json',
            error: function(xhr, ajaxOptions, thrownError) {
                alert(sql + "  " + xhr.responseText);
                alert(thrownError);
            }

        });
        return mymsg;
    }

    $(document).on("click", ".btnview", function() {

        $('#modal_view_subject').modal('show');
        var i = $(this).closest('tr').index();
        var table = document.getElementById('table_student');
        var studentno = table.rows[i].cells[0].innerHTML;
        $("#divindividual").empty();

        var sql = "select  * from tbgrade_query"
        sql = sql + " where studentid='" + studentno + "'"
        var student_grade = GeneralCallAjax(sql, "GET_ALL_RECORD")


        var s = '<table class="table table-hover"  id="table_grade">'


        for (var x = 0; x < student_grade.length; x++) {

            var edit = '<button class="btnedit">Edit</button>'
            var del = '<button class="btndelete">Delete</button>'
            var view = '<button class="btndelete">View</button>'
            s = s + '<tr>'
            s = s + '<td class="tabletd">' + student_grade[x]['SubjectCode'] + '</td>'
            s = s + '<td class="tabletd">' + student_grade[x]['Description'] + '</td>'
            s = s + '<td class="tabletd">' + student_grade[x]['FirstQuarter'] + '</td>'
            s = s + '<td class="tabletd">' + student_grade[x]['SecondQuarter'] + '</td>'
            s = s + '</tr>'
        }

        alert(s);
        $("#divindividual").append(s);

    })

    $(document).on("click", ".btnedit", function() {
        var i = $(this).closest('tr').index();
        var table = document.getElementById('table_student');
        var studentno = table.rows[i].cells[0].innerHTML;
        var firstname = table.rows[i].cells[1].innerHTML;
        var lastname = table.rows[i].cells[2].innerHTML;
        var section = table.rows[i].cells[3].innerHTML;
        $('#lblrecord').text("Editing Record");


        $('#txtstudentno').val(studentno)
        $('#txtfirstname').val(firstname)
        $('#txtlastname').val(lastname)
        $("#cbosection option:contains(" + section + ")").attr("selected", true);
        $('#txtstudentno').attr('disabled', true);
        $('#btnsave_button').attr('name', "EDIT");
        $('#btnsave_button').val('SAVE CHANGES');

        $('#mymodal').modal('show');
    })


    $(document).on("click", ".btndelete", function() {

        var i = $(this).closest('tr').index();
        $('#modal_confirm_delete').modal('show')
        var table = document.getElementById('table_student');
        var studentno = table.rows[i].cells[0].innerHTML;
        $('#delete_data').text("Do you want to delete  " + studentno);
        $('#delete_data').attr('name', studentno);
    })




    $(document).on("click", "#btnYes", function() {
        var studentno = $('#delete_data').attr('name');
        sql = "delete from tbstudent "
        sql = sql + "where studentid='" + studentno + "'"
        console.log(sql)
        GeneralCallAjax(sql, "DELETE_RECORD")
        Table_Student();
        $('#modal_confirm_delete').modal('hide')

    })

    $(document).on("click", "#btnNo", function() {
        $('#modal_confirm_delete').modal('hide')
    })

    $(document).on("click", "#btnsave_button", function() {

        var mode = $('#btnsave_button').attr('name');
        if (mode == "ADD") {
            sql = "insert into tbstudent values ("
            sql = sql + "'" + $('#txtstudentno').val() + "',"
            sql = sql + "'" + $('#txtfirstname').val() + "',"
            sql = sql + "'" + $('#txtlastname').val() + "',"
            sql = sql + "'" + $('#cbosection').val() + "')"
            GeneralCallAjax(sql, "ADD_RECORD")
            SaveAttenndance();
            studentno = $('#txtstudentno').val()
            sectioncode = $('#cbosection').val()
            SaveSubject(studentno, sectioncode)
        } else {
            sql = "update tbstudent set  "
            sql = sql + " firstname='" + $('#txtfirstname').val() + "',"
            sql = sql + " lastname='" + $('#txtlastname').val() + "',"
            sql = sql + " sectioncode='" + $('#cbosection').val() + "'"
            sql = sql + " where studentid='" + $('#txtstudentno').val() + "'"
            GeneralCallAjax(sql, "EDIT_RECORD")
        }
        console.log(sql)
        $('#mymodal').modal('hide')
        Table_Student();


    })

    function SaveAttenndance() {
        var mymonth = ["JUN", "JULY", "AUG"]
        for (x = 0; x < mymonth.length; x++) {
            sql = "insert into tbattendance values ("
            sql = sql + "'" + $('#txtstudentno').val() + "',"
            sql = sql + "'" + mymonth[x] + "',"
            sql = sql + "'" + "-" + "')"
            GeneralCallAjax(sql, "ADD_RECORD")
        }
    }

    function SaveSubject(studentno, sectioncode) {


        sql = "INSERT INTO tbgrade (StudentId, SubjectCode, FirstQuarter,SecondQuarter	)"
        sql = sql + " SELECT '" + studentno + "',subjectcode,'-', '-'"
        sql = sql + " FROM    tbsubject"
        sql = sql + " WHERE  sectioncode='" + sectioncode + "'"
        alert(sql)
        GeneralCallAjax(sql, "ADD_RECORD")

    }



    $(document).on("click", "#btnadd", function() {
        $('#txtstudentno').val('')
        $('#txtfirstname').val('')
        $('#txtlastname').val('')
        $("#cbosection option:contains(" + "Select Section" + ")").attr("selected", true);
        $('#txtfirstname').val('');
        $('#mymodal').modal('show');
        $('#btnsave_button').attr('name', "ADD");
        $('#btnsave_button').val("SAVE NEW RECORD");
        $('#txtstudentno').attr('disabled', false);
        $('#lblrecord').text("Adding  Record");


    })

    $(document).on("keyup", "#txtfirstname", function(e) {
        if (e.key == "Enter")
            $('#txtlastname').focus();
    })

    $(document).on("click", "#btnno", function() {
        $('#mymodal').modal('hide');
    })

    $(document).on("click", "#btndisabled", function() {
        $('#txtfirstname').attr('disabled', true)
    })






})