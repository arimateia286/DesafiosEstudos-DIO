package edu.ari.gof;

import edu.ari.gof.service.ClienteService;
import edu.ari.gof.service.impl.ClienteServiceImpl;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Beans {
    @Bean
    public ClienteService clienteService() {
        return new ClienteServiceImpl();
    }
}
