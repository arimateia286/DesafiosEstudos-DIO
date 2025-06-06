using DesafioPOO.Models;

// TODO: Realizar os testes com as classes Nokia e Iphone
Console.WriteLine("Nokia:");
Smartphone nokia = new Nokia("99912345678", "Nokia 3310", "123456789012345", 64);
nokia.Ligar();
nokia.ReceberLigacao();
nokia.InstalarAplicativo("Bounce Tales");

Console.WriteLine("\niPhone:");
Smartphone iphone = new Iphone("99912345678", "iPhone 12", "987654321098765", 128);
iphone.Numero = "99987654321";
iphone.Ligar();
iphone.ReceberLigacao();
iphone.InstalarAplicativo("iTunes");