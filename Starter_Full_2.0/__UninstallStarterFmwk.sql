DROP USER tkt_test CASCADE;
DROP USER tkt_dev CASCADE;
DROP USER tkt CASCADE;
DROP USER sol CASCADE;
DROP USER core CASCADE;
DROP ROLE core_full;
DROP ROLE core_select;
DROP DIRECTORY core_dir;
DROP DIRECTORY core_logs;
DROP CONTEXT app_core_ctx;

PURGE DBA_RECYCLEBIN;

