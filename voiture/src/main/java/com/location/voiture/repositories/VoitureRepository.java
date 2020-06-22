package com.location.voiture.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.location.voiture.entities.Voiture;
@SuppressWarnings("unuManysed")
@Repository
public interface VoitureRepository extends JpaRepository<Voiture, Long> 
{
	Voiture findByMarque(String marque);
	List<Voiture> findByDisponibilite(Boolean dispo);
}
