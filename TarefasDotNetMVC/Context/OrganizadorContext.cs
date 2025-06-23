using Microsoft.EntityFrameworkCore;
using TarefasDotNetMVC.Models;

namespace TarefasDotNetMVC.Context
{
    public class OrganizadorContext : DbContext
    {
        public OrganizadorContext(DbContextOptions<OrganizadorContext> options) : base(options)
        {

        }

        public DbSet<Tarefa> Tarefas { get; set; }
    }
}