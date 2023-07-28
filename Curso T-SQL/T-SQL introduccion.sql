--Declarar e inicializar variables
declare @numrows int = 3, @catid int = 2;
--Usar las variables para pasar parametros a un SP
exec Production.ProdsByCategory @numrows = @numrows, @catid = @catid;
go
/*todas las variables T-SQL son locales en el ámbito del lote, tanto en visibilidad como en duración. Solo otras instrucciones del mismo lote pueden ver una 
variable declarada en el lote. Una variable se destruye automáticamente cuando finaliza el lote.*/

--Maneras de declarar una variable
DECLARE @var1 AS INT = 99;
DECLARE @var2 AS NVARCHAR(255);
SET @var2 = N'string';
DECLARE @var3 AS NVARCHAR(20);
SELECT @var3 = lastname FROM HR.Employees WHERE empid=1;
SELECT @var1 AS var1, @var2 AS var2, @var3 AS var3;
GO

-- creacion de sinonimos: vinculo hacia otro objeto
CREATE SYNONYM dbo.ProdsByCategory FOR TSQL.Production.ProdsByCategory;
GO
EXEC dbo.ProdsByCategory @numrows = 3, @catid = 2;

-- IF
IF OBJECT_ID('dbo.tl') IS NOT NULL
    DROP TABLE dbo.tl
GO

-- IF ELSE
IF OBJECT_ID('HR.Employees') IS NULL --this object does exist in the sample database
BEGIN
    PRINT 'The specified object does not exist';
END
ELSE
BEGIN
    PRINT 'The specified object exists';
END;

-- Uso de exists
IF EXISTS (SELECT * FROM Sales.EmpOrders WHERE empid =5)
BEGIN
    PRINT 'Employee has associated orders';
END;

-- WHILE
DECLARE @empid AS INT = 1, @lname AS NVARCHAR(20);
WHILE @empid <=5
   BEGIN
	SELECT @lname = lastname FROM HR.Employees
		WHERE empid = @empid;
	PRINT @lname;
	SET @empid += 1;
   END;

-- Ejercicio Laboratorio Microsoft
DECLARE @num int = 5;
SELECT @num as mynumber;
DECLARE @i int = 8,
@result nvarchar(20);

DECLARE
@num1 int,
@num2 int;
SET @num1 = 4;
SET @num2 = 6;
SELECT @num1 + @num2 as totalnum;

DECLARE
@empname NVARCHAR(30),
@empidej int;
SET @empidej = 5;
SET @empname = (SELECT FirstName + N' ' + LastName from SalesLT.Customer where CustomerID = @empidej)
GO
--SELECT @empname as employee; -- no funciona porque esta por fuera del lote (go)

DECLARE 
@i int = 8,
@result nvarchar(20);
IF @i < 5    
SET @result = N'Less than 5'
ELSE IF @i <= 10    
SET @result = N'Between 5 and 10'
ELSE if @i > 10    
SET @result = N'More than 10'
ELSE    
SET @result = N'Unknown';
SELECT @result AS result;

DECLARE 
@j int = 8,
@resultj nvarchar(20);
SET @resultj = 
CASE 
WHEN @j < 5 THEN   
N'Less than 5'
WHEN @j <= 10 THEN    
N'Between 5 and 10'
WHEN @j > 10 THEN    
N'More than 10'
ELSE    N'Unknown'
END;
SELECT @resultj AS result;

DECLARE @k int = 1;
WHILE @k <= 10
BEGIN    
	PRINT @k;    
	SET @k = @k + 1;
END;