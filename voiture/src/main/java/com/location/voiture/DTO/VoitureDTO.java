package com.location.voiture.DTO;

import lombok.Data;

@Data
public class VoitureDTO 
{
	private Long idVoiture;
	private String matricule;
	private String marque;
	private String couleur;
	private Boolean disponibilite;

}
