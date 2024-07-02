package edu.ari.service.impl;

import edu.ari.domain.model.Cliente;
import edu.ari.domain.repository.ClienteRepository;
import edu.ari.domain.repository.CompraRepository;
import edu.ari.service.ClienteService;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ClienteServiceImpl implements ClienteService {
    private final ClienteRepository clienteRepository;
    private final CompraRepository compraRepository;

    public ClienteServiceImpl(ClienteRepository clienteRepository, CompraRepository compraRepository) {
        this.clienteRepository = clienteRepository;
        this.compraRepository = compraRepository;
    }

    @Override
    public Cliente criar(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    @Override
    public Optional<Cliente> ver(long clienteId) {
        return Optional.ofNullable(clienteRepository.findById(clienteId).orElseThrow(NoSuchElementException::new));
    }

    @Override
    public Iterable<Cliente> buscarTodos() {
        return clienteRepository.findAll();
    }

    @Override
    public void deletarPorId(long clienteId) {
        clienteRepository.deleteById(clienteId);
        compraRepository.findAllByClienteId(clienteId).forEach(compraRepository::delete);
    }
}