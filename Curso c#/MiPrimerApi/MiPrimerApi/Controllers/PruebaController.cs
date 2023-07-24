using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MiPrimerApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PruebaController : ControllerBase
    {
        [HttpGet]
        public IEnumerable<Models.Registro> GetRegistros()
        {
            using (var db = new Models.PruebaDbContext())
            {
                IEnumerable<Models.Registro> registros = db.Registros.ToList();
                return registros;
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetRegistroById(int id)
        {
            using (var db = new Models.PruebaDbContext())
            {
                var registro = db.Registros.FirstOrDefault(r => r.Id == id);
                if (registro == null)
                {
                    return NotFound();
                }

                return Ok(registro);
            }
        }

        [HttpPost("insertar")]
        public IActionResult InsertarRegistro([FromBody] Models.Registro registro)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            using (var db = new Models.PruebaDbContext())
            {
                db.Registros.Add(registro);
                db.SaveChanges();
                return Ok(registro);
            }
        }

        [HttpDelete("eliminar/{id}")]
        public IActionResult EliminarRegistro(int id)
        {
            using (var db = new Models.PruebaDbContext())
            {
                var registro = db.Registros.FirstOrDefault(r => r.Id == id);
                if (registro == null)
                {
                    return NotFound();
                }

                db.Registros.Remove(registro);
                db.SaveChanges();
                return NoContent();
            }
        }
    }
}
