package com.location.voiture.services;

import java.util.List;

import com.location.voiture.DTO.VoitureDTO;

public interface VoitureService {
	List<VoitureDTO> getAll();
	VoitureDTO findById(Long id);
	VoitureDTO findByMarque(String marque);
	List<VoitureDTO> findDisponnible();
	List<VoitureDTO> findOccupe();
	Boolean deleteByMatricule(String matricule);
	VoitureDTO addVoiture(VoitureDTO voiture);
}
