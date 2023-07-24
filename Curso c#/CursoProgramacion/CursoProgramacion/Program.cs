namespace CursoProgramacion
{
    internal static class Program
    {
        /// <summary>
        ///  The main entry point for the application.
        /// </summary>

        [STAThread]
        static void Main()
        {
            //Variables y tipos de datos
            string Nombre = "Juan David";

            MessageBox.Show(Nombre);

            int num = 37;
            uint num2 = 487; //NUmero entero pero nunca negativo

            float num3 = 57.2f;
            double num4 = 45.87;
            decimal num5 = 4578.65875m;

            byte num6 = 255;

            MessageBox.Show(num4.ToString()); // Convertir un valor a String
            

            // To customize application configuration such as set high DPI settings or default font,
            // see https://aka.ms/applicationconfiguration.
            //ApplicationConfiguration.Initialize();
            //Application.Run(new Form1());
        }
    }
}