<?php
// require 'php/connect.php';
// $pdo = Database::letsconnect();
// $mydatabase= Database::$dbName;
// //BackUp_Files($mydatabase, $pdo);
?>



<html lang="en">
<title>Hello World</title>
<script src="js/popper.min.js"></script>
<link rel="stylesheet" href="css/lesson.css">
<link rel="stylesheet" href="css/bootstrap.min.css">

<body>
    <div>
        <div class="row">
            <div id="first" class="col-md-3 myheight">
                <p> We, the pedagogues of Camarines Sue National High School, for the purpose of supporting one another in practicing the best instructions, upgrading professional growth, being globally competitive, being agents of moral resurgence, being
                    the institution of truth, justice and knowledge do hereby enact and promulgate this by-laws and constitution, with the aid of our Almighty God, for all the educators of this academe.

                </p>

            </div>
            <div class="col-md-7 myheight" id="second">
                <div class="row">
                    
                    <button id="btnadd">Add</button>
                
               

                    <div id="mytable"> </div> 
            </div>
            </div>
            <div class="col-md-2 myheight" id="third">
            </div>
        </div>
    </div>
</body>


<!-- ###########################  MODAL DELETE OFFICE ####################### -->
<div class="modal fade" id="mymodal" tabindex="-1" 
   role="dialog" class="modal hide" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
<!-- ###########################  ####################### -->
<div class="modal-header">
            <h5 id="lblrecord" class="modal-title">Hi</h5>
                <button type="button" class="close" id="btnclose_delete" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                </button>
            </div> <!--modal header -->
            
<!-- ============================================================== -->

<!-- #######################  ################-->
            <div class="modal-body" id="modalbody">
            <input type="text" placeholder="Student Number" class="form-control"  id="txtstudentno" />
            <input type="text" placeholder="First Name" class="form-control"  id="txtfirstname" />
            <input type="text" placeholder="Last Name" class="form-control"  id="txtlastname" />
          
            <select  id="cbosection" class="form-control"  title="Select gender" > 
            </select>
                  
                  
                     <input type="button" class="btn btn-default" value="Save"  id="btnsave_button" />
            </div>
   ``         </div> <!-- modal body -->
            
<!-- ================================================================== -->
</div>
</div>
</div>


<?php $ModalConfirmDelete?>
<!-- ########################### MODAL IMPORT ####################### -->
<div class="modal fade" id="modal_confirm_delete" tabindex="-1" 
   role="dialog" class="modal hide" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
<!-- ########################### MODAL HEADING IMPORT ####################### -->
<div class="modal-header">
            <h5 id="delete_data" class="modal-title">Hi</h5>
                <button type="button" class="close" id="btnclose_enrolle" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                </button>
            </div> <!--modal header -->
            
<!-- ============================================================== -->

<!-- ####################### MODAL BODY START IMPORT ################-->
            <div class="modal-body" id="modalbody">
                     <input type="button" style="margin-left:350px"class="btn btn-default" value="Yes"  id="btnYes" />
                    <input type="button" class="btn btn-default" value="No"  id="btnNo" />
            </div>
            </div> <!-- modal body -->
            </form>
<!-- ================================================================== -->
</div>
</div>
</div>

<?php $ModalViewSubject?>
<!-- ########################### MODAL IMPORT ####################### -->
<div class="modal fade" id="modal_view_subject" tabindex="-1" 
   role="dialog" class="modal hide" data-backdrop="static" data-keyboard="false">
            <div class="modal-dialog modal-xl" role="document">
                <div class="modal-content">
<!-- ########################### MODAL HEADING IMPORT ####################### -->
<div class="modal-header">
            <h5 id="delete_data" class="modal-title"> Individual Subject</h5>
                <button type="button" class="close" id="btnclose_enrolle" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                </button>
            </div> <!--modal header -->
            
<!-- ============================================================== -->

<!-- ####################### MODAL BODY START IMPORT ################-->
            <div class="modal-body" id="modalbody">
                <div id="divindividual"> </div>
            </div>
            </div> <!-- modal body -->
            </form>
<!-- ================================================================== -->
</div>
</div>
</div>



</html>

<script type="text/javascript" src="jquery/jquery-min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="js/lesson.js"></script>