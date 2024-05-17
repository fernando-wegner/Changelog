<script>
    {
        // Coleta os valores do formulário
        var version = document.getElementById("version").value;

        var date = document.getElementById("date").value;
        var changes = document.getElementById("changes").value;

        // Cria um novo changelog HTML
        var changelogHTML = "<div class='changelog'>";
        changelogHTML += "<h2 class='version'>" + version + "</h2>";
        changelogHTML += "<p class='date'>Data de Lançamento: " + date + "</p>";
        changelogHTML += "<ul>";
        changes.split("\n").forEach(function(change) 
        {
            changelogHTML += "<li>" + change + "</li>"
        });
        changelogHTML += "</ul>";
        changelogHTML += "</div>";

        // Insere o changelog na página
        document.getElementById("changelogs").innerHTML += changelogHTML;

        // Limpa os campos do formulário
        document.getElementById("version").value = "";
        document.getElementById("date").value = "";
        document.getElementById("changes").value = "";
    });
</script>
