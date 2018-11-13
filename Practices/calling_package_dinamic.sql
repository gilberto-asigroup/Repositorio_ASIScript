DECLARE
  LV_PAQUETE                 MG_CONTROL_PROCESOS.NOMBRE_PROGRAMA%TYPE;
  LN_CID                     NUMBER:=0;
  LN_RES                     NUMBER:=0;
  LV_APLICACION              VARCHAR2(3):='BIT';
  LN_CODIGO_EMPRESA          NUMBER:=1;
	LN_CODIGO_AGENCIA_ORIGEN   NUMBER:=100;
	LN_LOTE                    NUMBER:=1604;
	LV_CODIGO_USUARIO          VARCHAR2(50):=USER;
	LV_CODERROR                VARCHAR2(200);
  ERROR_EJECUCION            EXCEPTION;
BEGIN

  BEGIN
    SELECT NOMBRE_PROGRAMA
      INTO LV_PAQUETE
      FROM MG_CONTROL_PROCESOS
     WHERE CODIGO_APLICACION = 'BIT'
       AND NUMERO_PROCESO = 10;
  EXCEPTION
    WHEN NO_DATA_FOUND THEN
      LV_PAQUETE := NULL;
  END;

   LN_CID:=DBMS_SQL.OPEN_CURSOR;
   DBMS_SQL.PARSE(LN_CID,'begin '||LV_PAQUETE||'(:Empresa,:Agencia,:Aplicacion,:Lote,:Usuario,:Error); end;',DBMS_SQL.V7);
   DBMS_SQL.BIND_VARIABLE(LN_CID,':Empresa',LN_CODIGO_EMPRESA);
   DBMS_SQL.BIND_VARIABLE(LN_CID,':Agencia',LN_CODIGO_AGENCIA_ORIGEN);
   DBMS_SQL.BIND_VARIABLE(LN_CID,':Aplicacion',LV_APLICACION);
   DBMS_SQL.BIND_VARIABLE(LN_CID,':Lote',LN_LOTE);
   DBMS_SQL.BIND_VARIABLE(LN_CID,':Usuario',LV_CODIGO_USUARIO);
   DBMS_SQL.BIND_VARIABLE(LN_CID,':Error',LV_CODERROR);
   LN_RES:=DBMS_SQL.EXECUTE(LN_CID);

  IF LV_CODERROR IS NOT NULL THEN
    RAISE ERROR_EJECUCION;
  END IF;

DBMS_SQL.CLOSE_CURSOR(LN_CID);
EXCEPTION
  WHEN ERROR_EJECUCION THEN
    RAISE_APPLICATION_ERROR(-20000,'ERROR AL INTENTAR EJECUTAR: '||SQLERRM);
END;