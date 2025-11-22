-- 1. Simple List of ALL Tables in 'public' schema
SELECT 
    table_name 
FROM 
    information_schema.tables 
WHERE 
    table_schema = 'public' 
ORDER BY 
    table_name;

-- 2. Detailed View: Table + Column + Type
SELECT 
    table_name, 
    column_name, 
    data_type, 
    is_nullable
FROM 
    information_schema.columns 
WHERE 
    table_schema = 'public' 
ORDER BY 
    table_name, ordinal_position;

-- 3. Row Counts (Approximate) for each table
SELECT
  relname as table_name,
  n_live_tup as row_count
FROM pg_stat_user_tables
ORDER BY n_live_tup DESC;
