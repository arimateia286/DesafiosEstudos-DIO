package edu.aribank.banco;

public class ContaPoupanca extends Conta {
    private String tipo = "Poupança";

    public ContaPoupanca(Cliente cliente) {
        super(cliente);
    }

    public String getTipo() {
        return this.tipo;
    }
}