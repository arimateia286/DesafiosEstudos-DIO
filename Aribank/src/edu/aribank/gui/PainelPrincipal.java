package edu.aribank.gui;

import edu.aribank.banco.*;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;

public class PainelPrincipal extends JFrame {
    private JPanel paineis;
    private JPanel painelInicial;
    private JButton botaoDepositar;
    private JButton botaoSacar;
    private JButton botaoSaldo;
    private JLabel textoBoasVindas;
    private JPanel painelSaldo;
    private JLabel textoSaldo;
    private JButton botaoVoltar;
    private JPanel painelDeposito;
    private JTextField editorDeposito;
    private JButton botaoDeposito;
    private JPanel painelSaque;
    private JTextField editorSaque;
    private JButton botaoSaque;
    private JLabel textoInfosBancarias;
    private JPanel painelPrincipal;
    private JPanel botoes;
    private JButton botaoTransferir;
    private JPanel barraFixa;
    private JPanel saldoContainer;
    private JPanel depositoContainer;
    private JPanel saqueContainer;
    private JButton botaoTrocarConta;
    private JLabel mensagem;
    private JPanel painelTransferencia;
    private JLabel textoTransferencia;
    private JPanel transferenciaContainer;
    private JButton botaoTransferencia;
    private JTextField editorTransferencia;
    private Conta contaAtual;

    public PainelPrincipal() {
        Cliente cliente1 = new Cliente("Arimateia");
        Conta contaCorrente = new ContaCorrente(cliente1);

        Cliente cliente2 = new Cliente("Deisy");
        Conta contaPoupanca = new ContaPoupanca(cliente2);

        contaAtual = contaCorrente;

        setContentPane(painelPrincipal);
        setTitle("Aribank");
        setSize(480, 640);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setLocationRelativeTo(null);
        setVisible(true);

        paineis.add(painelInicial, "Tela Inicial");
        paineis.add(painelSaldo, "Tela Saldo");
        paineis.add(painelDeposito, "Tela Depósito");
        paineis.add(painelSaque, "Tela Saque");
        paineis.add(painelTransferencia, "Tela Transferência");

        CardLayout paineisCL = (CardLayout) paineis.getLayout();

        textoBoasVindas.setText(String.format("Olá, %s!", contaAtual.getCliente().getNome()));
        textoInfosBancarias.setText(String.format("Tipo: %s - Agência: %d - Conta: %d", contaAtual.getTipo(), contaAtual.getAgencia(), contaAtual.getConta()));

        botaoSaldo.addActionListener((ActionEvent e) -> {
            textoSaldo.setText(String.format("R$%.2f", contaAtual.getSaldo()));
            paineisCL.show(paineis, "Tela Saldo");
        });

        botaoDepositar.addActionListener((ActionEvent e) -> {
            paineisCL.show(paineis, "Tela Depósito");
        });

        botaoDeposito.addActionListener((ActionEvent e) -> {
            double valor = Double.parseDouble(editorDeposito.getText());
            if (valor > 0) {
                mensagem.setForeground(Color.GREEN);
                mensagem.setText(String.format("Seu depósito de R$%.2f foi realizado com sucesso!", valor));
                contaAtual.depositar(valor);
                editorDeposito.setText("0");
            } else {
                mensagem.setForeground(Color.RED);
                mensagem.setText("Por favor, digite um valor igual ou superior a R$2.00!");
            }
        });

        botaoSacar.addActionListener((ActionEvent e) -> {
            paineisCL.show(paineis, "Tela Saque");
        });

        botaoSaque.addActionListener((ActionEvent e) -> {
            double valor = Double.parseDouble(editorSaque.getText());
            if (valor > 0 && contaAtual.validarSaldo(valor)) {
                contaAtual.sacar(valor);
                editorSaque.setText("0");
                mensagem.setForeground(Color.GREEN);
                mensagem.setText(String.format("Seu saque de R$%.2f foi realizado com sucesso!", valor));
            } else {
                mensagem.setForeground(Color.RED);
                mensagem.setText(String.format("Por favor, digite um valor de R$2.00 a R$%.2f!", contaAtual.getSaldo()));
            }
        });

        botaoTransferir.addActionListener((ActionEvent e) -> {
            Conta contaDestino = (contaAtual == contaCorrente) ? contaPoupanca : contaCorrente;
            textoTransferencia.setText(String.format("Transferindo para a conta de %s", contaDestino.getCliente().getNome()));
            paineisCL.show(paineis, "Tela Transferência");
        });

        botaoTransferencia.addActionListener((ActionEvent e) -> {
            Conta contaDestino = (contaAtual == contaCorrente) ? contaPoupanca : contaCorrente;
            textoTransferencia.setText(String.format("Transferindo para a conta de %s", contaDestino.getCliente().getNome()));
            double valor = Double.parseDouble(editorTransferencia.getText());
            if (valor > 0 && contaAtual.validarSaldo(valor)) {
                contaAtual.transferir(valor, contaDestino);
                editorTransferencia.setText("0");
                mensagem.setForeground(Color.GREEN);
                mensagem.setText(String.format("Você transferiu R$%.2f para %s", valor, contaDestino.getCliente().getNome()));
            } else {
                mensagem.setForeground(Color.RED);
                mensagem.setText(String.format("Por favor, digite um valor de R$2.00 a R$%.2f!", contaAtual.getSaldo()));
            }
        });

        botaoVoltar.addActionListener((ActionEvent e) -> {
            mensagem.setText("");
            paineisCL.show(paineis, "Tela Inicial");
        });

        botaoTrocarConta.addActionListener((ActionEvent e) -> {
            if (contaAtual == contaCorrente) contaAtual = contaPoupanca;
            else contaAtual = contaCorrente;
            textoBoasVindas.setText(String.format("Olá, %s!", contaAtual.getCliente().getNome()));
            textoInfosBancarias.setText(String.format("Tipo: %s - Agência: %d - Conta: %d", contaAtual.getTipo(), contaAtual.getAgencia(), contaAtual.getConta()));
            mensagem.setText("");
            paineisCL.show(paineis, "Tela Inicial");
        });
    }
}
