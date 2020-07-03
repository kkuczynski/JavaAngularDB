package com.petAdopt.backend.manager;

import com.petAdopt.backend.dao.PetsRepo;
import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

import java.time.LocalDate;
import java.util.Optional;


public class PetsManager {

    private PetsRepo petsRepo;

    @Autowired
    public PetsManager(PetsRepo petsRepo){
        this.petsRepo = petsRepo;
    }

//  Nie zwracaj z servicu optionala, jeśli już chcesz go używać to sprawdź czy jest jeśli go nie ma zwróc błąd
    public Optional<Pets> findById(Integer id){
        return petsRepo.findById(id);
    }

//  Czemu tu jest Iterable? LIST majster list :D
    public Iterable<Pets> findAll(){
        return petsRepo.findAll();
    }

    public Pets save (Pets pets){
        return petsRepo.save(pets);
    }

    public void deleteById (Integer id){
        petsRepo.deleteById(id);
    }

    /*
    * Chcesz zapisać nowy obiekt stwórz sobie go i zaincializuj wartości za pomocą konstruktora
    */
    @EventListener(ApplicationReadyEvent.class)
    public void testFillDB(){
        save(new Pets(1,"Jasper","dog","mixed",13,"healthy","male", true, false, LocalDate.of(2019,6,8), true, 180));
        save(new Pets(2,"Lena", "cat", "russian gray", 28, "healthy", "female", true, true, LocalDate.of(2017,12,10), false, -1));
    }

}