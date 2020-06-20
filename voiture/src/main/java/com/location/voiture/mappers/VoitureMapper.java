package com.location.voiture.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mappings;
import com.location.voiture.DTO.VoitureDTO;
import com.location.voiture.entities.Voiture;
@Mapper(componentModel = "spring",uses= {})
public interface VoitureMapper extends EntityMapper<VoitureDTO, Voiture>
{
	@Mappings({
	})
	VoitureDTO toDto(Voiture generated);
	@Mappings({ })
	Voiture toEntity(Voiture voitureDTO);

	default Voiture fromId(Long id) {
		if (id == null) {
			return null;
		}
		Voiture generated = new Voiture();
		generated.setIdVoiture(id);
		return generated;
	}
}
