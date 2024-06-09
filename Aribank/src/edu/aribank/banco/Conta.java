package edu.aribank.banco;

public abstract class Conta implements IConta{
    protected Cliente cliente;
    protected static int sequencialConta = 1;
    protected int agencia = 1, conta;
    protected double saldo = 0.00d;
    
    public Conta(Cliente cliente) {
        this.cliente = cliente;
        this.conta = sequencialConta++;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public double getSaldo() {
        return this.saldo;
    }
    
    public int getAgencia() {
        return this.agencia;
    }
    
    public int getConta() {
        return this.conta;
    }
    
    public void depositar(double valor) {
        this.saldo += valor;
    }
    
    public void sacar(double valor) {
        this.saldo -= valor;
    }

    public boolean validarSaldo(double valor) {
        return valor <= this.getSaldo();
    }
    
    public void transferir(double valor, Conta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    
    protected void imprimirInfosComuns() {
        System.out.println(String.format("Titular: %s", this.cliente.getNome()));
        System.out.println(String.format("Agência: %d", this.getAgencia()));
        System.out.println(String.format("Conta: %d", this.getConta()));
        System.out.println(String.format("Saldo: R$%.2f", this.getSaldo()));
    }

    public abstract String getTipo();
}