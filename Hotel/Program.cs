using System.Text;
using DesafioProjetoHospedagem.Models;

Console.OutputEncoding = Encoding.UTF8;

// Cria os modelos de hóspedes e cadastra na lista de hóspedes
List<Pessoa> hospedes = new List<Pessoa>();

Pessoa p1 = new Pessoa(nome: "Cleiton", sobrenome: "Rasta");
Pessoa p2 = new Pessoa(nome: "Bob", sobrenome: "Marley");
Pessoa p3 = new Pessoa(nome: "Jimi", sobrenome: "Hendrix");
Pessoa p4 = new Pessoa(nome: "Raul", sobrenome: "Seixas");
Pessoa p5 = new Pessoa(nome: "Zé", sobrenome: "Ramalho");
Pessoa p6 = new Pessoa(nome: "Kurt", sobrenome: "Cobain");

hospedes.Add(p1);
hospedes.Add(p2);
// hospedes.Add(p3);
// hospedes.Add(p4);
// hospedes.Add(p5);
hospedes.Add(p6);

// Cria a suíte
Suite suite = new Suite(tipoSuite: "Premium", capacidade: 3, valorDiaria: 30);

// Cria uma nova reserva, passando a suíte e os hóspedes
Reserva reserva = new Reserva(diasReservados: 10);
reserva.CadastrarSuite(suite);
reserva.CadastrarHospedes(hospedes);

// Exibe a quantidade de hóspedes e o valor da diária
Console.WriteLine($"Hóspedes: {reserva.ObterQuantidadeHospedes()}");
Console.WriteLine($"Valor diária: {reserva.CalcularValorDiaria()}");