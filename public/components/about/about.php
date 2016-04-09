<?php
if($_POST["message"]) {
    mail("daverevere@gmail.com", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>
<div class="row">
<br>
<br>
<br>
<br>
	<div class="col-lg-8 col-md-8 col-sm-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">
	<img src="img/about.jpg" ALIGN="right" style="width:400px; height: 250px; margin: 20px 0px 5px 9px">
		<h3>Charity-Joy Acchiardo</h3><p>is a Lecturer of Economics at the University of Arizona. She understands that many students perceive the study of economics as uninteresting and disconnected to the realities of their everyday lives. But she also knows that isn’t true. She gets her students actively engaged in observing their own worlds and solving the puzzles they find there.</p>
		<p> 
		 Acchiardo is a frequent speaker at teaching workshops across the US and Canada where she shares tips for making economics come alive for students. She has an MBA from Middlebury Institute of International Studies and a PhD from George Mason University where she was the Olofsson Weaver fellow in political economy.</p> 
		
		<p>Ideas and resource contributions for this website are very much welcome! Use the secure form below to submit suggestions or comments, or to request more information about Acchiardo's other projects.</p>
		

	</div>

</div>

<div class="row">
	<div class="col-lg-8 col-md-8 col-sm-8 col-lg-offset-2 col-md-offset-2 col-sm-offset-2">

		<form action="contact.php" enctype="text/plain" method="post">
<!-- 		<p>Name: <input type="text" id="Name" size="20"></p>
		<p>E-mail address: <input type="text" id="E-mail" size="20"></p> -->
		<p>Message:</p>
		<p><textarea name="Message" cols="55" rows="5"
		></textarea></p>
		<p><input class="btn btn-pink" type="submit" value="Submit"></p>
</form>
	</div>

</div>



