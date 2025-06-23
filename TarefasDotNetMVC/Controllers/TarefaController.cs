using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using TarefasDotNetMVC.Context;
using TarefasDotNetMVC.Models;

namespace TarefasDotNetMVC.Controllers
{
    public class TarefaController : Controller
    {
        private readonly OrganizadorContext _context;

        public TarefaController(OrganizadorContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var tarefas = _context.Tarefas.ToList();
            return View(tarefas);
        }

        public IActionResult Criar()
        {
            ViewBag.TipoClienteList = new SelectList(Enum.GetValues(typeof(EnumStatusTarefa)));
            return View();
        }

        [HttpPost]
        public IActionResult Criar(Tarefa tarefa)
        {
            if (ModelState.IsValid)
            {
                tarefa.DataCriacao = DateTime.Now;

                if (tarefa.Status == EnumStatusTarefa.Finalizado)
                {
                    tarefa.DataFinalizacao = DateTime.Now;
                }

                _context.Tarefas.Add(tarefa);
                _context.SaveChanges();

                TempData["MensagemSucesso"] = "Tarefa criada com sucesso!";

                return RedirectToAction(nameof(Index));
            }

            ViewBag.StatusList = new SelectList(Enum.GetValues(typeof(EnumStatusTarefa)));
            return View(tarefa);
        }

        public IActionResult Editar(int id)
        {
            var tarefa = _context.Tarefas.Find(id);

            if (tarefa == null) return NotFound();

            ViewBag.StatusList = new SelectList(Enum.GetValues(typeof(EnumStatusTarefa)));
            return View(tarefa);
        }

        [HttpPost]
        public IActionResult Editar(Tarefa tarefa)
        {
            if (!ModelState.IsValid)
            {
                ViewBag.StatusList = new SelectList(Enum.GetValues(typeof(EnumStatusTarefa)));
                return View(tarefa);
            }

            var tarefaDb = _context.Tarefas.Find(tarefa.Id);
            if (tarefaDb == null)
                return NotFound();

            tarefaDb.Titulo = tarefa.Titulo;
            tarefaDb.Descricao = tarefa.Descricao;
            tarefaDb.Status = tarefa.Status;

            if (tarefa.Status == EnumStatusTarefa.Finalizado && tarefaDb.DataFinalizacao == null)
            {
                tarefaDb.DataFinalizacao = DateTime.Now;
            }

            _context.Tarefas.Update(tarefaDb);
            _context.SaveChanges();

            TempData["MensagemSucesso"] = "Tarefa editada com sucesso!";

            return RedirectToAction(nameof(Index));
        }

        public IActionResult Detalhes(int id)
        {
            var tarefa = _context.Tarefas.Find(id);

            if (tarefa == null)
                return NotFound();

            return View(tarefa);
        }

        public IActionResult Deletar(int id)
        {
            var tarefa = _context.Tarefas.Find(id);

            if (tarefa == null) return RedirectToAction(nameof(Index));

            return View(tarefa);
        }

        [HttpPost]
        public IActionResult Deletar(Tarefa tarefa)
        {
            var tarefaDb = _context.Tarefas.Find(tarefa.Id);

            _context.Tarefas.Remove(tarefaDb);
            _context.SaveChanges();

            TempData["MensagemSucesso"] = "Tarefa deletada com sucesso!";

            return RedirectToAction(nameof(Index));
        }
    }
}