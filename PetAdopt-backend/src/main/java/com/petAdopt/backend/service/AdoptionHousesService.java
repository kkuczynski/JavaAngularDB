package com.petAdopt.backend.service;

import com.petAdopt.backend.dao.entity.AdoptionHouses;
import com.petAdopt.backend.exception.NoRecordWithIdException;

import java.util.List;

public interface AdoptionHousesService {

    AdoptionHouses getAdoptionHouseById(Integer id) throws NoRecordWithIdException;

    List<AdoptionHouses> getAllAdoptionHouses();

    AdoptionHouses saveAdoptionHouse (AdoptionHouses adoptionHouses);

    void deleteAdoptionHouseById (Integer id) throws NoRecordWithIdException;

    AdoptionHouses updateAdoptionHouse(AdoptionHouses adoptionHouses) throws NoRecordWithIdException;
}
