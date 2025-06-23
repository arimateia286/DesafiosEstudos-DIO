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
        
        public DateTime DataCriacao { get; set; }
        public DateTime? DataFinalizacao { get; set; }
        
        [Required(ErrorMessage = "O status é obrigatório.")]
        public EnumStatusTarefa Status { get; set; }
    }
}