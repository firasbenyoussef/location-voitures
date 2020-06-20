package com.location.voiture.serviceIMPL;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.location.voiture.DTO.VoitureDTO;
import com.location.voiture.entities.Voiture;
import com.location.voiture.mappers.VoitureMapper;
import com.location.voiture.repositories.VoitureRepository;
import com.location.voiture.services.VoitureService;
@Service
@Transactional
public class VoitureServiceIMPL implements VoitureService {
	@Autowired
	VoitureRepository voitureRepo;
	@Autowired
	VoitureMapper voitureMapper;
	@Override
	public List<VoitureDTO> getAll() {
		return voitureMapper.toDtos(voitureRepo.findAll());
	}

	@Override
	public VoitureDTO findById(Long id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public VoitureDTO findByMarque(String marque) {
		// TODO Auto-generated method stub
		return voitureMapper.toDto(voitureRepo.findByMarque(marque));
	}

	@Override
	public List<VoitureDTO> findDisponnible() {
		
		return voitureMapper.toDtos(voitureRepo.findByDisponnibilite(true));
	}

	@Override
	public List<VoitureDTO> findOccupe() {
		return voitureMapper.toDtos(voitureRepo.findByDisponnibilite(false));
	}

	@Override
	public Boolean deleteByMatricule(String matricule) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public String addVoiture(VoitureDTO voiture) {
		Voiture t = voitureMapper.toEntity(voiture);
		Voiture temp = voitureRepo.save(t);
		if(temp==null)
		{
			return("Done");
		}
		else
		{
			return ("Not Done");
		}
	}

}
