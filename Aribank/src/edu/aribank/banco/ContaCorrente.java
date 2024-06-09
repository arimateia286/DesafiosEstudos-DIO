package edu.aribank.banco;

public class ContaCorrente extends Conta {
    private String tipo = "Corrente";

    public ContaCorrente(Cliente cliente) {
        super(cliente);
    }

    public String getTipo() {
        return this.tipo;
    }
}