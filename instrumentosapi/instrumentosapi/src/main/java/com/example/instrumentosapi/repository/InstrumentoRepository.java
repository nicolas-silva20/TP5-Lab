package com.example.instrumentosapi.repository;

import com.example.instrumentosapi.model.Instrumento;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstrumentoRepository extends JpaRepository<Instrumento, Long> {

}
