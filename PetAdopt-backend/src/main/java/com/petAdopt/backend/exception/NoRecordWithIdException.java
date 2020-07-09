package com.petAdopt.backend.exception;

public class NoRecordWithIdException extends Throwable {
   public NoRecordWithIdException(String message){
        super(message+" has no record with given ID");

    }
}
