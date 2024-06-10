import edu.ari.bootcamp.dominio.Bootcamp;
import edu.ari.bootcamp.dominio.Curso;
import edu.ari.bootcamp.dominio.Dev;
import edu.ari.bootcamp.dominio.Mentoria;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.LinkedHashSet;

public class Main {
    public static void main(String[] args) {
        Curso curso1 = new Curso("Conhecendo Collections Java",
                "Conheça tudo sobre as Collections em Java para melhorar seu currículo e aprimorar seu trabalho",
                4
        );

        Curso curso2 = new Curso("Ganhando Produtividade com Stream API",
                "Aprenda a usar a poderosa Stream API para aumentar sua produtividade e reduzir o seu código",
                2
        );

        Mentoria mentoria1 = new Mentoria("Mentoria de Java",
                "Descrição genérica de uma mentoria de Java",
                LocalDate.now()
        );

        Bootcamp bootcamp = new Bootcamp("Santander 2024 - Backend com Java",
                "Boas-vindas à trilha de Back-end Java do Santander Bootcamp 2024! Aprenda desde os primeiros passos com Java partindo da sintaxe básica até a implementação de uma API utilizando Spring para se tornar um profissional atrativo no mercado.",
                new LinkedHashSet<>(Arrays.asList(curso1, curso2, mentoria1))
        );

        Dev dev1 = new Dev("Dev 1");
        dev1.inscreverBootcamp(bootcamp);
        dev1.progredir();
        dev1.progredir();
        dev1.progredir();

        Dev dev2 = new Dev("Dev 2");
        dev2.inscreverBootcamp(bootcamp);
        dev2.progredir();

        bootcamp.imprimirResumo();
    }
}
