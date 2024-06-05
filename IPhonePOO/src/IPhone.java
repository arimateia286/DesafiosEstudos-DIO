import apps.*;

public class IPhone {
    public static void main(String[] args) {
        ReprodutorMusical reprodutorMusical = new ReprodutorMusical();
        reprodutorMusical.tocar();
        reprodutorMusical.pausar();
        reprodutorMusical.selecionarMusica("Na Hora do Almoço - Belchior");

        AparelhoTelefonico aparelhoTelefonico = new AparelhoTelefonico();
        aparelhoTelefonico.ligar("012123456789");
        aparelhoTelefonico.atender();
        aparelhoTelefonico.iniciarCorreioVoz();

        NavegadorInternet navegadorInternet = new NavegadorInternet();
        navegadorInternet.exibirPagina("https://dio.me");
        navegadorInternet.adicionarNovaAba();
        navegadorInternet.atualizarPagina();
    }
}