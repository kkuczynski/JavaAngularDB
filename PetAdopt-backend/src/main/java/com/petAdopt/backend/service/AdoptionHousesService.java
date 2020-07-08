package com.petAdopt.backend.service;

import com.petAdopt.backend.repo.AdoptionHousesRepo;
import com.petAdopt.backend.dao.entity.AdoptionHouses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

/*
* Serwis jako interface, logika dopiero w jego implementacji (Nie musi byc tylko jedna implementacja ;)
*/
@Service
public class AdoptionHousesService {

//   pole jako final
    private AdoptionHousesRepo adoptionHousesRepo;

//    Nie musi być autowired, contruktor domyślnie jest wstrzykiwany
    public AdoptionHousesService(AdoptionHousesRepo adoptionHousesRepo){
        this.adoptionHousesRepo = adoptionHousesRepo;
    }
// Np. getHouseById/ GetAdoptionHouseById
    public AdoptionHouses findById(Integer id) throws Exception{
        return adoptionHousesRepo.findById(id).orElseThrow(Exception::new);
    }
// find/getHouses
    public List<AdoptionHouses> findAll(){
        return (List<AdoptionHouses>) adoptionHousesRepo.findAll();
    }
// to co w/w
    public AdoptionHouses save (AdoptionHouses adoptionHouses){
        return adoptionHousesRepo.save(adoptionHouses);
    }
    // to co w/w
    public void deleteById (Integer id){
        adoptionHousesRepo.deleteById(id);
    }
}
