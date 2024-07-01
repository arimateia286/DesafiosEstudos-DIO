package edu.ari.domain.repository;

import edu.ari.domain.model.Compra;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompraRepository extends JpaRepository<Compra, Long> {
    Iterable<Compra> findAllByClienteId(long clienteId);
}
