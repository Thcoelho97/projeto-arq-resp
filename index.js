$(document).ready(function () {
    $('.phone-mask').mask('(00) 0 0000-0000');
});

//Requisição do formulário via Ajax

$(document).ready(function () {
    $("#meuForm").on("submit", function (event) {
        event.preventDefault(); // Previne o comportamento padrão de envio do formulário

        //Formulário Ajax

        $.ajax({
            type: "POST", // Tipo da requisição
            url: "https://api.sheetmonkey.io/form/3mrZC1jYM5pbDYr2ECo77g", // URL para onde o formulário será enviado
            data: $(this).serialize(), // Serializa os dados do formulário
            success: function (response) {
                // Manipule a resposta recebida
                Swal.fire({
                    title: "Deu certo!",
                    text: "Logo entraremos em contato!",
                    icon: "success"
                });

                //Reseta os campos

                $("#meuForm").trigger("reset"); // Reseta todos os campos do formulário

            },
            error: function (error) {
                // Manipule o erro
                Swal.fire({
                    icon: "Erro",
                    title: "Oops...",
                    text: "Alguma coisa deu errado!",
                });
            }

        });
    });
});