package edu.ari.controller;

import edu.ari.domain.model.Cliente;
import edu.ari.service.ClienteService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@RestController
@RequestMapping("/clientes")
@Tag(name = "Clientes Controller")
public class ClienteController {
    private final ClienteService clienteService;

    public ClienteController(ClienteService clienteService) {
        this.clienteService = clienteService;
    }

    @GetMapping
    @Operation(summary = "Ver clientes", description = "Retorna todos os clientes")
    public ResponseEntity<Iterable<Cliente>> buscarTodos() {
        return ResponseEntity.ok(clienteService.buscarTodos());
    }

    @PostMapping
    @Operation(summary = "Criar cliente", description = "Adiciona um novo cliente")
    public ResponseEntity<Cliente> criar(@RequestBody Cliente clienteParaCriar) {
        var clienteCriado = clienteService.criar(clienteParaCriar);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}")
                .buildAndExpand(clienteCriado.getId())
                .toUri();
        return ResponseEntity.created(location).body(clienteCriado);
    }

    @DeleteMapping("/{clienteId}")
    @Operation(summary = "Deletar cliente", description = "Deleta um cliente pelo seu ID")
    public ResponseEntity<Void> deletarPorId(@PathVariable long clienteId) {
        clienteService.deletarPorId(clienteId);
        return ResponseEntity.noContent().build();
    }
}
