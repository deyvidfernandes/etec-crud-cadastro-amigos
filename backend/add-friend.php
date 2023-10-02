<?php
    include 'connect-DB.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // 3. Recupere os dados do formulário
        $nome = $_POST["nome"];
        $apelido = $_POST["apelido"];
        $email = $_POST["email"];

        $sql = 'INSERT INTO amigo (nome, apelido, email) VALUES (?, ?, ?)';

        $query = $conecta->prepare($sql);
        $query->bindParam(1, $nome);
        $query->bindParam(2, $apelido);
        $query->bindParam(3, $email);
        $query->execute();
        $conecta = null;
        $query = null;
        
        
        http_response_code(201);
        exit; // Certifique-se de sair após o redirecionamento
    }
?>