package edu.ari.controller;

import edu.ari.domain.model.Compra;
import edu.ari.service.CompraService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/compras")
@Tag(name = "Compras Controller")
public class CompraController {
    private final CompraService compraService;

    public CompraController(CompraService compraService) {
        this.compraService = compraService;
    }

    @GetMapping("/{clienteId}")
    @Operation(summary = "Ver compras por cliente", description = "Retorna as compras de um cliente especificado pelo seu ID")
    public ResponseEntity<Iterable<Compra>> verTodasPorId(@PathVariable long clienteId) {
        return ResponseEntity.ok(compraService.verTodasPorCliente(clienteId));
    }

    @GetMapping
    @Operation(summary = "Ver compras", description = "Retorna todas as compras de todos os clientes")
    public ResponseEntity<Iterable<Compra>> verTodas() {
        return ResponseEntity.ok(compraService.verTodas());
    }

    @PutMapping("/{compraId}")
    @Operation(summary = "Alterar status", description = "Altera o status de uma compra para 'Pago' pelo seu ID")
    public ResponseEntity<Compra> alterarStatus(@PathVariable long compraId) {
        return ResponseEntity.ok(compraService.alterarStatus(compraId));
    }

    @DeleteMapping("/{compraId}")
    @Operation(summary = "Deletar compra", description = "Deleta uma compra pelo seu ID")
    public ResponseEntity<Void> deletarPorId(@PathVariable long compraId) {
        compraService.deletarPorId(compraId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping
    @Operation(summary = "Adicionar compra", description = "Adiciona uma nova compra pelo ID de um cliente")
    public ResponseEntity<Void> adicionar(@RequestBody Compra compra) {
        compraService.adicionar(compra);
        return ResponseEntity.noContent().build();
    }
}
