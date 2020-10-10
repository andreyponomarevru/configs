<?php
  $db = Array (
    Array ("name" => "apples", "value" => 5, "img" => "/content/apple.jpg"),
    Array ("name" => "oranges", "value" => 3, "img" => "/content/apple.jpg"),
    Array ("name" => "pears", "value" => 12, "img" => "/content/apple.jpg")
  );
  header("Content-type:application/json");
  header("HTTP/1.1 200 Success");
  echo json_encode($db);
?>
