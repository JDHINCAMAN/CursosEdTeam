using System;
using System.Collections.Generic;

namespace MVCInyeccionDeDependencias.Models;

public partial class Registro
{
    public int Id { get; set; }

    public string Nombre { get; set; } = null!;

    public string Apellido { get; set; } = null!;

    public int Telefono { get; set; }
}
