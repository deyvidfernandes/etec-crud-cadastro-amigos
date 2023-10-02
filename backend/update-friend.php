<?php
    include 'connect-DB.php';
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'])) {
        
        $method = $_SERVER['HTTP_X_HTTP_METHOD_OVERRIDE'];

        if ($method === 'PUT') {
            // 3. Recupere os dados do formulário
            $nome = $_POST["nome"];
            $apelido = $_POST["apelido"];
            $email = $_POST["email"];
            $friendID = $_POST["friendID"];

            $sql = 'UPDATE amigo SET nome = :nome, apelido = :apelido, email = :email WHERE id_amigo = :friendID';

            $query = $conecta->prepare($sql);
            $query->bindValue(":nome", $nome);
            $query->bindValue(":apelido", $apelido);
            $query->bindValue(":email", $email);
            $query->bindValue(":friendID", $friendID);
            $query->execute();
            $conecta = null;
            $query = null;
            http_response_code(204);
            exit; // Certifique-se de sair após o redirecionamento
        }
    }
?>