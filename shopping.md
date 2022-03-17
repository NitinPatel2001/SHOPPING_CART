# Preparing the DataBase

Command this on the root

```sql
create database shopdb;
create user shopper identified by 'shoppass';
use shopdb;
grant all privilages on shopdb to shopper;
grant all privilages on shopdb.* to shopper;
``` 