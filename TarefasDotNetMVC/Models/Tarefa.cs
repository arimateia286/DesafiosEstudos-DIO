using System.ComponentModel.DataAnnotations;

namespace TarefasDotNetMVC.Models
{
    public class Tarefa
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "O título é obrigatório.")]
        [Display(Name = "Título")]
        public string Titulo { get; set; }

        [Required(ErrorMessage = "A descrição é obrigatória.")]
        [Display(Name = "Descrição")]
        public string Descricao { get; set; }
        
        [Display(Name = "Data de Criação")]
        public DateTime DataCriacao { get; set; }

        [Display(Name = "Data de Finalização")]
        public DateTime? DataFinalizacao { get; set; }
        
        [Required(ErrorMessage = "O status é obrigatório.")]
        public EnumStatusTarefa Status { get; set; }
    }
}