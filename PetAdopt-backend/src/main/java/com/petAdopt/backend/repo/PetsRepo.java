package com.petAdopt.backend.repo;

import com.petAdopt.backend.dao.entity.Pets;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PetsRepo extends JpaRepository<Pets, Integer> {
}
