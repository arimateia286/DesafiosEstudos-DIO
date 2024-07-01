package edu.ari.service.impl;

import edu.ari.domain.model.Compra;
import edu.ari.domain.repository.ClienteRepository;
import edu.ari.domain.repository.CompraRepository;
import edu.ari.service.CompraService;
import org.springframework.stereotype.Service;

@Service
public class CompraServiceImpl implements CompraService {

    private final CompraRepository compraRepository;
    private final ClienteRepository clienteRepository;

    public CompraServiceImpl(CompraRepository compraRepository, ClienteRepository clienteRepository) {
        this.compraRepository = compraRepository;
        this.clienteRepository = clienteRepository;
    }

    @Override
    public void adicionar(Compra compra) {
        if (clienteRepository.existsById(compra.getClienteId())) {
            compra.setStatus("Não pago");
            compraRepository.save(compra);
        } else {
            throw  new IllegalArgumentException();
        }
    }

    @Override
    public void deletarPorId(long compraId) {
        compraRepository.deleteById(compraId);
    }

    @Override
    public Compra alterarStatus(long compraId) {
        var compraParaAlterar = compraRepository.findById(compraId).get();
        compraParaAlterar.setStatus("Pago");
        return compraRepository.save(compraParaAlterar);
    }

    @Override
    public Iterable<Compra> verTodasPorCliente(long clienteId) {
        return compraRepository.findAllByClienteId(clienteId);
    }

    @Override
    public Iterable<Compra> verTodas() {
        return compraRepository.findAll();
    }
}
