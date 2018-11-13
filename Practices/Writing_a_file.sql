CREATE DIRECTORY TEST_DIR AS 'D:\';
/
DECLARE
  fileHandler UTL_FILE.FILE_TYPE;
BEGIN
  fileHandler := UTL_FILE.FOPEN('TEST_DIR', 'test_file.txt', 'W');
  UTL_FILE.PUTF(fileHandler, 'Look ma, I''m writing to a file!!!\n');
  UTL_FILE.FCLOSE(fileHandler);
EXCEPTION
  WHEN UTL_FILE.INVALID_PATH THEN
     RAISE_APPLICATION_ERROR(-20000, 'ERROR: Invalid path for file.'||SQLERRM);
  WHEN OTHERS THEN
     RAISE_APPLICATION_ERROR(-20001, 'ERROR DESCONOCIDO.'||SQLERRM);
END;
/