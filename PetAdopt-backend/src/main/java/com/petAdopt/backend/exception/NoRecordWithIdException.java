package com.petAdopt.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class NoRecordWithIdException extends Throwable {
   public NoRecordWithIdException(String message){
        super(message+" has no record with given ID");
        httpStatus(message);

    }
//    ResponseEntity coś zwraca ;)
    public ResponseEntity httpStatus(String message){
        return new ResponseEntity<>(message+" has no record with given ID", HttpStatus.BAD_REQUEST);
    }
}
