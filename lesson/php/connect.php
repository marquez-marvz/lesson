<?php


class Database
{
 static $dbName ='lesson';
 static $dbHost = 'localhost';
 static $dbUsername = 'root';
 static $dbPassword = '';


   private static $cont = null;

    public static function letsconnect()
   {
        if (null == self::$cont)
        {
            try{

               self::$cont = new PDO("mysql:host=".self::$dbHost.";"."dbname=".self::$dbName, self::$dbUsername, self::$dbPassword);
                
            

            }
           catch(PDOException $e) {
                die($e->getMessage());
           }

        return self::$cont;

           function disconnect()            {
                self::$cont = null;
                echo "Disconnected";
           }
       }
    }
}
   

  
