package edu.ari.service.impl;

import edu.ari.domain.model.Cliente;
import edu.ari.domain.repository.ClienteRepository;
import edu.ari.service.ClienteService;
import org.springframework.stereotype.Service;

@Service
public class ClienteServiceImpl implements ClienteService {
    private final ClienteRepository clienteRepository;

    public ClienteServiceImpl(ClienteRepository clienteRepository) {
        this.clienteRepository = clienteRepository;
    }

    @Override
    public Cliente criar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public Iterable<Cliente> buscarTodos() {
        return clienteRepository.findAll();
    }

    @Override
    public void deletarPorId(long clienteId) {
        clienteRepository.deleteById(clienteId);
    }
}