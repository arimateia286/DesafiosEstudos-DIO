package edu.ari.service;

import edu.ari.domain.model.Cliente;

public interface ClienteService {
    Cliente criar(Cliente cliente);

    void deletarPorId(long clienteId);

    Iterable<Cliente> buscarTodos();

}
