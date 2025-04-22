package com.example.instrumentosapi.model;

import jakarta.persistence.*;

import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@ToString
@AllArgsConstructor

@Builder

public class Instrumento {
    @Id
    private long id;

    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private Double precio;
    private String costoEnvio;
    private Integer cantidadVendida;


    @Column(length = 1000) // para que no se corte la descripción si es larga
    private String descripcion;
}
