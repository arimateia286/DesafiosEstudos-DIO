package edu.aribank.banco;

public interface IConta {
    void depositar(double valor);
    void sacar(double valor);
    void transferir(double valor, Conta contaDestino);
}