package edu.ari.service;

import edu.ari.domain.model.Compra;

public interface CompraService {
    void adicionar(Compra compra);

    void deletarPorId(long compraId);

    void alterarStatus(long compraId);

    Iterable<Compra> verTodasPorCliente(long clienteId);

    Iterable<Compra> verTodas();
}
