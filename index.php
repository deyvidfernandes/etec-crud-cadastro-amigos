<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/dcf57934cf.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/style.css">
    <title>Cadastro de Amigos</title>
</head>
<body>
    <header>
        <h1>Cadastro de Amigos</h1>
    </header>
    <main>
        <p><i class="fa-solid fa-lightbulb"></i> Use o menu à esquerda para gerenciar um cadastro</p>
        <div id="table-container">
            <table>
                <tr>
                    <th>Código</th>
                    <th>Nome</th>
                    <th>Apelido</th>
                    <th>Email</th>
                </tr>
                <?php include 'backend/table-generator.php'?>
                <tr><td colspan="6">
                    <button id="add-friend-button"><i class="fa-solid fa-user-plus"></i><button>
                </td></tr>
                </table>
                </div>
    </main>
    <script src="js/context-menu.js"></script>
    <script type="module" src="js/add-friend-modal-menu.js"></script>
    <script type="module" src="js/edit-friend-modal-menu.js"></script>
    <script type="module" src="js/delete-friend-modal-menu.js"></script>
</body>
</html>