package com.petAdopt.backend.service;

import com.petAdopt.backend.dao.entity.Pets;
import com.petAdopt.backend.exception.NoRecordWithIdException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PetsService {
    List<Pets> getAllPets();
    Pets getPetById(Integer id) throws NoRecordWithIdException;
    Pets savePet(Pets pets);
    void deletePetById(Integer id) throws NoRecordWithIdException;
    Pets updatePets(Pets pets) throws NoRecordWithIdException;

}
