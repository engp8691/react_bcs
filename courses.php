<?php
	$username = "root";
	$password = "sqliscool";
	$server = "localhost";
	$port = "3306";
	$databasename = "test";
	$tablename = "classes";

	$connection = mysqli_connect($server,  $username,  $password, $databasename, $port); 

	$sql = "SELECT classid AS id, name, teacher, classroom AS room, time, cost AS fallprice, semicost AS springprice FROM classes";
	if (!$result = $connection->query($sql)) {
		echo "Sorry, the website is experiencing problems.";
		exit;
	}

	$courses = array();
	while ($class = $result->fetch_assoc()) {
		$filename = $class["teacher"];
		$filename = strtolower($filename);
		$filename = preg_replace('/\s+/', '', $filename);
		$class["biofile_en"] = $filename . "_en.html";
		$class["biofile_cn"] = $filename . "_cn.html";
		$class["selected"] = true;
		$selectionArray = array();
		$selectionArray["fallselected"] = false;
		$selectionArray["springselected"] = false;
		$class["termregistered"] = $selectionArray;

		$courses[] = $class;
	}

	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	print json_encode($courses);

	$result->free();
	$connection->close();
?>
