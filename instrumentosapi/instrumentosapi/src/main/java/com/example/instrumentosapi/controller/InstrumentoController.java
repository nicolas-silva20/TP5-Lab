package com.example.instrumentosapi.controller;

import com.example.instrumentosapi.model.Instrumento;
import com.example.instrumentosapi.service.InstrumentoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/instrumentos")
@CrossOrigin //Por si el frontend se encuentra en otro puerto
public class InstrumentoController {

    private final InstrumentoService instrumentoService;

    public InstrumentoController(InstrumentoService instrumentoService) {
        this.instrumentoService = instrumentoService;
    }

    // GET /api/instrumentos
    @GetMapping
    public List<Instrumento> getTodos() {
        return instrumentoService.obtenerTodos();
    }

    // GET /api/instrumentos/{id}
    @GetMapping("/{id}")
    public Instrumento getPorId(@PathVariable Long id) {
        return instrumentoService.obtenerPorId(id)
                .orElseThrow(() -> new RuntimeException("Instrumento con id" + id + " no encontrado"));
    }
}
