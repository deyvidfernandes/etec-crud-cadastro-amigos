<?php
    include 'connect-DB.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'])) {
        
        $method = $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'];

        if ($method === 'DELETE') {
            $friendID = $_POST["friendID"];

            $sql = 'DELETE FROM amigo WHERE id_amigo = :friendID';

            $query = $conecta->prepare($sql);
            $query->bindValue(":friendID", $friendID);
            $query->execute();
            $conecta = null;
            $query = null;
            http_response_code(204);
            exit; // Certifique-se de sair após o redirecionamento
        }
    }
?>