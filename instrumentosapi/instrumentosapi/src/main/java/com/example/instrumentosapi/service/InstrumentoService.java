package com.example.instrumentosapi.service;

import com.example.instrumentosapi.model.Instrumento;
import com.example.instrumentosapi.repository.InstrumentoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstrumentoService {

    private final InstrumentoRepository instrumentoRepository;

    public InstrumentoService (InstrumentoRepository instrumentoRepository) {
        this.instrumentoRepository = instrumentoRepository;
    }

    public List<Instrumento> obtenerTodos() {
        return instrumentoRepository.findAll();
    }

    public Optional<Instrumento> obtenerPorId(Long id) {
        return instrumentoRepository.findById(id);
    }

}
