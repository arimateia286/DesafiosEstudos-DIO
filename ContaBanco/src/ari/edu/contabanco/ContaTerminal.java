package ari.edu.contabanco;

import java.util.InputMismatchException;
import java.util.Scanner;

public class ContaTerminal {

    public static void main(String[] args) {
        try {
            iniciar();
        } catch (InputMismatchException e) {
            System.out.print("Número e saldo da conta devem ser numéricos!\n");
            iniciar();
        }
    }

    public static void iniciar() {
        Scanner entrada = new Scanner(System.in);

        System.out.print("# Olá, seja muito bem-vindo ao AriBank!\n" +
                "# Eu me chamo ArIA e vou te ajudar na criação de sua conta.\n" +
                "# Primeiro, me fala aí seu nome.\n");
        String nomeCliente = entrada.nextLine();

        System.out.print("\n# Certo, " + nomeCliente
                + ". Agora me informa o número da sua agência e logo em seguida o número da conta.\n" +
                "- Agência (Ex.: 123-4): ");
        String numeroAgencia = entrada.nextLine();

        System.out.print("- Conta (Ex.: 1234): ");
        int numeroConta = entrada.nextInt();

        System.out.print("\n# Ok, já confirmei aqui no sistema. Sua conta AriBank foi criada com sucesso!\n" +
                "# Para ativar sua conta é necessário que seja feito um primeiro depósito.\n" +
                "# Informe, por favor, quanto deseja depositar.\n" +
                "- Depósito (Ex.: 100.00): ");
        double saldoConta = entrada.nextDouble();

        entrada.close();

        System.out.print("\n# Prontinho, " + nomeCliente + ". Muito obrigado por escolher o AriBank!\n" +
                "# Seus dados estão logo abaixo:\n" +
                "- Agência: " + numeroAgencia +
                "\n- Conta: " + numeroConta +
                "\n- Saldo: R$" + saldoConta +
                "\n# Até mais!");
    }
}