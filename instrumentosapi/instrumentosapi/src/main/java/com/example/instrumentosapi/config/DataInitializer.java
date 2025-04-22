package com.example.instrumentosapi.config;

import com.example.instrumentosapi.model.Instrumento;
import com.example.instrumentosapi.repository.InstrumentoRepository;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.core.io.ClassPathResource;

import java.io.InputStream;


@Component
public class DataInitializer implements CommandLineRunner {

    @Autowired
    private InstrumentoRepository instrumentoRepository;

    @Override
    public void run(String... args) throws Exception {

        // Comprobar si hay datos ya cargados
        if(instrumentoRepository.count() == 0) {
            ObjectMapper mapper = new ObjectMapper();
            mapper.registerModule(new JavaTimeModule());

            //Cargar el archivo JSON usando ClassPathResource
            try {
                ClassPathResource resource = new ClassPathResource("data/instrumentos.json");
                InputStream is = resource.getInputStream();

                if (is == null) {
                    System.err.println("No se pudo encontrar el archivo JSON en la ruta especificada");
                    return;
                }

                JsonNode rootNode = mapper.readTree(is);

                // Verificar si el JSON tiene la estructura esperada
                if (!rootNode.has("instrumentos")) {
                    System.err.println("El archivo JSON no tiene la estructura esperada de instrumentos");
                    return;
                }

                for (JsonNode instrumentoNode: rootNode.get("instrumentos")) {
                    Instrumento instrumento = Instrumento.builder()
                            .id(instrumentoNode.get("id").asLong())
                            .instrumento(instrumentoNode.get("instrumento").asText())
                            .marca(instrumentoNode.get("marca").asText())
                            .modelo(instrumentoNode.get("modelo").asText())
                            .imagen(instrumentoNode.get("imagen").asText())
                            .precio(instrumentoNode.get("precio").asDouble())
                            .costoEnvio(instrumentoNode.get("costoEnvio").asText())
                            .cantidadVendida(instrumentoNode.get("cantidadVendida").asInt())
                            .descripcion(instrumentoNode.get("descripcion").asText())
                            .build();

                    Instrumento savedInstrumento = instrumentoRepository.save(instrumento);
                }


            } catch (Exception e) {
                System.err.println("Error al cargar los datos: " + e.getMessage());
                e.printStackTrace();
            }
        } else {
            System.out.println("Los datos ya estaban cargados previamente.");
        }

    }
}
