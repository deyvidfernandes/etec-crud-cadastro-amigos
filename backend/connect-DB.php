<?php
    $host = "localhost:3306";
    $usuario = "root";
    $senha = "2712";
    $bd = "ag8";
    try{
        $conecta = new PDO("mysql:dbname=$bd; host=$host; port=3306; charset=utf8", $usuario, $senha);
        $conecta->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }catch(PDOException $e){
        echo "falha ao conectar: ". $e->getMessage();
    }
?>