# Data_Aggregation_System

To run the projec use below instruction:

Step 1 : Run create_table.sql script using below command

mysql -u root -p -h localhost school_system < scripts/create_tables.sql

Step 2 : Insert data into the table by running insert_data.sql script using below command

mysql -u root -p -h localhost school_system < scripts/insert_data.sql


Step 3: Clone the project and run below command:

node app.js