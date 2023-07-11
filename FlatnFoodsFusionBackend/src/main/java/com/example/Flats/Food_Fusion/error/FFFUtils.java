package com.example.Flats.Food_Fusion.error;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Date;

public class FFFUtils {
    public static ResponseEntity<String>getResponseEntity(String response, HttpStatus httpStatus){
        return new ResponseEntity<String>("{\"message\":\""+response+"\"}",httpStatus);
    }
    public static String getUUID(){
        Date date = new Date();
        return "BILL-" + date.getTime() ;
    }

}
