<html>
<head>
	<title>Resultate</title>
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
echo '<center><h1 id="results">Deine Resultate</h1></center>';
echo "<h2>Maximalpunktzahl: 24<h2>";
$points = "SELECT punkte FROM scores ORDER BY ID DESC LIMIT 1";
$querily = mysqli_query($verbindung, $points) or die("konnte nicht angezeigt werden");

	while($fetchi = mysqli_fetch_assoc($querily)) {
		echo '<h3 class="eco1">Deine Punktzahl:  &nbsp</h3>';
		echo '<h3 class="eco1">' . $fetchi['punkte'] . '</h3>';
		
	}


$percent = "SELECT prozent FROM scores ORDER BY ID DESC LIMIT 1";
$querilyi = mysqli_query($verbindung, $percent) or die("konnte nicht angezeigt werden");
echo '<div id="proo">';
	while($fetchii = mysqli_fetch_assoc($querilyi)) {
		echo '<h3 class="eco2">Du hattest &nbsp</h3>';
		echo '<h3 class="eco2">' .$fetchii['prozent']. '</h3>';
		echo '<h3 class="eco2">% richtig </h3>';
	}
echo '</div>';

$sqli = "SELECT punkte, COUNT(*) AS times FROM scores GROUP BY punkte";
$query = mysqli_query($verbindung, $sqli) or die("konnte nicht angezeigt werden");
echo '<div id="score">';
echo '<table class="highchart" data-graph-container-before="1" data-graph-type="column" style="display:none" data-graph-legend-disabled="1" data-graph-color-1="#a1f70c" data-graph-height="400" data-graph-xaxis-title-text="Punkte">';
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
	$('table.highchart').highchartTable();	
</script>
<style>

#proo {
	margin-top: 100px;
	margin-right: 200px;
	margin-bottom: 100px;
	width: 240px;
}

.eco1 {
	float: left;
}

.eco2 {
	float: left;

}


#results {
	margin-bottom: 50px;
}

#zur {
	font-size: 20px;
	margin-top: 100px;
	margin-bottom: 50px;
	width: 250px;
	height: 50px;
	color: #c5c5c5; 
	background-color: #fdfdfd; 

	border: solid 3px #c5c5c5;
	border-radius: 40px;

	text-align: center;
	font-family: Arial;
	letter-spacing: 1px;
	transition: ease-in-out all 400ms;
}

#zur:hover {
	color: #fdfdfd;
	background-color: #c5c5c5;

}

</style>
<center><button id="zur" OnClick="location.href='index.html'">zur&uuml;ck an den Start</button></center>'

			<table id="tab" cellpadding=10>
			<tbody>
			<tr><td><img class="finalpic" src="images/nase2fertig.png"></td><td class="ric">richtige Antwort: Riechen</td></tr>
			<tr><td><img class="finalpic" src="images/nase1fertig.png"></td><td class="ric">richtige Antwort: Riechen</td></tr>
			<tr><td><img class="finalpic" src="images/auge1fertig.png"></td><td class="ric">richtige Antwort: Sehen</td></tr>
			<tr><td><img class="finalpic" src="images/ohr1fertig.png"></td><td class="ric">richtige Antwort: H&ouml;ren</td></tr>
			</tbody>
			</table>
			

</body>
</html>
















