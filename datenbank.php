<html>
<head>
	<title>datenbank</title>
	<link href="style.css" rel="stylesheet" type="text/css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="https://code.highcharts.com/highcharts.src.js"></script>
	<script src="jquery.highchartTable.js" type="text/javascript"></script>
</head>

<body>

<?php



$verbindung = mysqli_connect("localhost", "DP", "gfjkdhgj")
or die("Tut uns leid, es gab einen Fehler im System, Fehler1");

mysqli_select_db($verbindung, "abschlussprojekt")
or die("Tut uns leid, es gab einen Fehler im System, Fehler2");



$prozent = $_POST["prozent"];
$punkte = $_POST["punkte"];

if($prozent == "" or $punkte == "") {
	echo "Tut uns leid, es gab einen Fehler im System, Fehler3";
} else {
	$eintrag = "INSERT INTO scores
	(prozent, punkte)
	
	VALUES
	('$prozent', '$punkte')";	

	$eintragen = mysqli_query($verbindung, $eintrag);

	

	
}


$sqli = "SELECT punkte, COUNT(*) AS times FROM scores GROUP BY punkte";
$query = mysqli_query($verbindung, $sqli) or die("konnte nicht angezeigt werden");
echo '<div id="score">';
echo '<table class="highchart" data-graph-container-before="1" data-graph-type="column" style="display:none" data-graph-legend-disabled="1" data-graph-color-1="#a1f70c">';
echo '<thead>
<tr>
          <th>Punkte</th>
          <th>Anzahl Spieler</th>
</tr>
</thead>';
	while($fetch = mysqli_fetch_assoc($query)) {
		
		echo '<tr>';

		echo '<td>' . $fetch['punkte'] . '</td>';
		echo '<td>' . $fetch['times'] . '</td>';

		echo '</tr>';
		
	}

echo '</div>';







mysqli_close($verbindung);

?>
<script>
	$(document).ready(function() {
  		$('table.highchart').highchartTable();
	});
</script>
<style>

#zur {
	margin-bottom: 50px;
}


</style>
<center><button class="reflesh" id="zur" OnClick="location.href='index.html'">zur&uuml;ck an den Start</button></center>



</body>
</html>
















