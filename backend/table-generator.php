<?php
    include 'connect-DB.php';

    $query = $conecta->prepare("SELECT * FROM amigo;");
    $query->execute();

    if($query->rowCount() == 0) {
        echo
        '<tr">'.
        '<td colspan="4" id="solitary-message">'.'Aqui está tão solitário... Vamos adicionar alguns amigos :-)'.'</td>'.
        '</tr>';
    } else {
        while ($linha = $query->fetch(PDO::FETCH_ASSOC)) {
            echo
            '<tr id="friend-'.$linha['id_amigo'].'" class="friendsList__row">'.
            '<td>'.$linha['id_amigo'].'</td>'.
            '<td>'.$linha['nome'].'</td>'.
            '<td>'.$linha['apelido'].'</td>'.
            '<td>'.$linha['email'].'</td>';
        }
    }
    $sth = null;
    $dbh = null;
?>