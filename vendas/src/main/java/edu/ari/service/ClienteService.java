package edu.ari.service;

import edu.ari.domain.model.Cliente;

import java.util.Optional;

public interface ClienteService {
    Cliente criar(Cliente cliente);

    Optional<Cliente> ver(long clienteId);

    void deletarPorId(long clienteId);

    Iterable<Cliente> buscarTodos();
}
