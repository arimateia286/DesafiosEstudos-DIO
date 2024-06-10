package edu.ari.bootcamp.dominio;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.HashSet;
import java.util.LinkedHashSet;
import java.util.Objects;
import java.util.Set;

public class Bootcamp {
    private String nome, descricao;
    private final LocalDate dataInicial = LocalDate.now(),
            dataFinal = dataInicial.plusDays(45);
    private Set<Dev> devsInscritos = new HashSet<>();
    private Set<Conteudo> conteudos = new LinkedHashSet<>();

    public Bootcamp(String nome, String descricao, Set<Conteudo> conteudos) {
        this.nome = nome;
        this.descricao = descricao;
        this.conteudos = conteudos;
    }

    public void imprimirResumo() {
        DateTimeFormatter formato = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        System.out.printf(
                "# Bootcamp: %s\n" +
                "- Descrição: %s\n" +
                "- Data inicial: %s - Data final: %s\n" +
                        "- Devs participando: \n%n",
                getNome(),
                getDescricao(),
                getDataInicial().format(formato), getDataFinal().format(formato)
);
        this.getDevsInscritos().stream().forEach(Dev::imprimirResumo);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Bootcamp bootcamp = (Bootcamp) o;
        return Objects.equals(nome, bootcamp.nome) && Objects.equals(descricao, bootcamp.descricao) && Objects.equals(dataInicial, bootcamp.dataInicial) && Objects.equals(dataFinal, bootcamp.dataFinal) && Objects.equals(devsInscritos, bootcamp.devsInscritos) && Objects.equals(conteudos, bootcamp.conteudos);
    }

    @Override
    public int hashCode() {
        return Objects.hash(nome, descricao, dataInicial, dataFinal, devsInscritos, conteudos);
    }

    public Set<Conteudo> getConteudos() {
        return conteudos;
    }

    public void adicionarConteudo(Conteudo conteudo) {
        this.getConteudos().add(conteudo);
    }

    public LocalDate getDataFinal() {
        return dataFinal;
    }

    public LocalDate getDataInicial() {
        return dataInicial;
    }

    public String getDescricao() {
        return descricao;
    }

    public Set<Dev> getDevsInscritos() {
        return devsInscritos;
    }

    public void setDevsInscritos(Set<Dev> devsInscritos) {
        this.devsInscritos = devsInscritos;
    }

    public String getNome() {
        return nome;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setConteudos(Set<Conteudo> conteudos) {
        this.conteudos = conteudos;
    }
}
